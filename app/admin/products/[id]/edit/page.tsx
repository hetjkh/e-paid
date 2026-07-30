"use client";

import { useParams, useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getStoredToken } from "@/lib/admin-api";
import {
  fetchProductByIdClient,
  normalizePriceInput,
  priceInputValue,
  updateProduct,
  type ProductImage,
} from "@/lib/products-api";
import AdminCmsShell from "@/app/admin/content/AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";

type SpecRow = { label: string; value: string };

function FilePreview({
  file,
  existingUrl,
  label,
  onClear,
}: {
  file: File | null;
  existingUrl?: string;
  label: string;
  onClear: () => void;
}) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const src = preview ?? existingUrl;

  if (!src) {
    return (
      <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-border-soft bg-card-muted text-xs text-muted-foreground">
        {label}
      </div>
    );
  }

  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-border-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={label} className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={onClear}
        className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white"
      >
        {file ? "Remove new" : "Remove"}
      </button>
    </div>
  );
}

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;

  const [loadingProduct, setLoadingProduct] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [existingMain, setExistingMain] = useState<ProductImage | null>(null);
  const [newMainImage, setNewMainImage] = useState<File | null>(null);
  const [keptGallery, setKeptGallery] = useState<ProductImage[]>([]);
  const [newGalleryFiles, setNewGalleryFiles] = useState<(File | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [specs, setSpecs] = useState<SpecRow[]>([{ label: "", value: "" }]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    fetchProductByIdClient(productId)
      .then((product) => {
        if (!product) {
          router.replace("/admin/products");
          return;
        }
        setTitle(product.title);
        setDescription(product.description);
        setPrice(priceInputValue(product.price));
        setExistingMain(product.mainImage);
        setKeptGallery(product.galleryImages);
        setSpecs(
          product.specifications.length > 0
            ? product.specifications
            : [{ label: "", value: "" }]
        );
      })
      .catch(() => router.replace("/admin/products"))
      .finally(() => setLoadingProduct(false));
  }, [productId, router]);

  function handleNewGalleryChange(index: number, e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setNewGalleryFiles((prev) => {
      const next = [...prev];
      next[index] = file;
      return next;
    });
  }

  function updateSpec(index: number, field: keyof SpecRow, value: string) {
    setSpecs((prev) =>
      prev.map((row, i) => (i === index ? { ...row, [field]: value } : row))
    );
  }

  function addSpecRow() {
    setSpecs((prev) => [...prev, { label: "", value: "" }]);
  }

  function removeSpecRow(index: number) {
    setSpecs((prev) => prev.filter((_, i) => i !== index));
  }

  function removeKeptGallery(index: number) {
    setKeptGallery((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    if (!existingMain && !newMainImage) {
      setError("Main image is required");
      return;
    }

    const newFiles = newGalleryFiles.filter(Boolean) as File[];
    if (keptGallery.length + newFiles.length > 4) {
      setError("Maximum 4 gallery images allowed");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("price", normalizePriceInput(price));
      formData.append("keptGallery", JSON.stringify(keptGallery));

      if (newMainImage) {
        formData.append("mainImage", newMainImage);
      }

      newFiles.forEach((file) => formData.append("galleryImages", file));

      const specifications = specs.filter((s) => s.label.trim() && s.value.trim());
      formData.append("specifications", JSON.stringify(specifications));

      await updateProduct(token, productId, formData);
      router.push("/admin/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update product");
    } finally {
      setLoading(false);
    }
  }

  if (loadingProduct) {
    return (
      <AdminCmsShell title="Edit product" description="Loading product…">
        <p className="text-muted-foreground">Loading product…</p>
      </AdminCmsShell>
    );
  }

  return (
    <AdminCmsShell
      title="Edit product"
      description="Update details and images. Leave images unchanged or upload replacements."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
          <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
            <h2 className="text-lg font-bold text-foreground">Basic info</h2>
            <div className="mt-5 space-y-4">
              <div>
                <label htmlFor="title" className="mb-2 block text-sm font-medium">
                  Title
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full rounded-xl border border-border-soft bg-card-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                />
              </div>
              <div>
                <label htmlFor="description" className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-border-soft bg-card-muted px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                />
              </div>
              <div>
                <label htmlFor="price" className="mb-2 block text-sm font-medium">
                  Price (SAR)
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
                    SAR
                  </span>
                  <input
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    inputMode="decimal"
                    className="w-full rounded-xl border border-border-soft bg-card-muted py-3 pl-14 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
            <h2 className="text-lg font-bold text-foreground">Images</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Upload a new file to replace an image, or remove existing gallery images
            </p>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">Main image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewMainImage(e.target.files?.[0] ?? null)}
                className="mb-3 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-epaid file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              />
              <FilePreview
                file={newMainImage}
                existingUrl={existingMain?.url}
                label="Main image"
                onClear={() => {
                  if (newMainImage) {
                    setNewMainImage(null);
                  } else {
                    setExistingMain(null);
                  }
                }}
              />
            </div>

            {keptGallery.length > 0 ? (
              <div className="mt-6">
                <p className="mb-3 text-sm font-medium">Current gallery</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {keptGallery.map((img, index) => (
                    <div key={img.publicId} className="relative h-28 overflow-hidden rounded-xl border border-border-soft">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.url} alt={`Gallery ${index + 1}`} className="h-full w-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeKeptGallery(index)}
                        className="absolute right-1 top-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {newGalleryFiles.map((file, index) => (
                <div key={index}>
                  <label className="mb-2 block text-sm font-medium">
                    Add view {index + 1}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleNewGalleryChange(index, e)}
                    className="mb-3 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-epaid/90 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                  />
                  <FilePreview
                    file={file}
                    label={`New view ${index + 1}`}
                    onClear={() =>
                      setNewGalleryFiles((prev) => {
                        const next = [...prev];
                        next[index] = null;
                        return next;
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-foreground">Specifications</h2>
              <button
                type="button"
                onClick={addSpecRow}
                className="rounded-full border border-border-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-epaid hover:border-epaid/40"
              >
                + Add row
              </button>
            </div>

            <div className="mt-5 space-y-3">
              {specs.map((row, index) => (
                <div key={index} className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr_auto]">
                  <input
                    value={row.label}
                    onChange={(e) => updateSpec(index, "label", e.target.value)}
                    placeholder="Label"
                    className="rounded-xl border border-border-soft bg-card-muted px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                  <input
                    value={row.value}
                    onChange={(e) => updateSpec(index, "value", e.target.value)}
                    placeholder="Value"
                    className="rounded-xl border border-border-soft bg-card-muted px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                  {specs.length > 1 ? (
                    <button
                      type="button"
                      onClick={() => removeSpecRow(index)}
                      className="rounded-xl border border-border-soft px-4 py-2.5 text-sm text-muted-foreground hover:text-red-600"
                    >
                      Remove
                    </button>
                  ) : (
                    <span />
                  )}
                </div>
              ))}
            </div>
          </section>

          {error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
              {error}
            </p>
          ) : null}

          <div className="flex flex-wrap gap-3">
            <EpaidButton
              type="submit"
              disabled={loading}
              className="px-12 py-3.5 text-sm disabled:opacity-60"
            >
              {loading ? "Saving…" : "Save changes"}
            </EpaidButton>
            <EpaidButton
              href="/admin/products"
              className="px-8 py-3.5 text-sm normal-case"
            >
              Cancel
            </EpaidButton>
          </div>
        </form>
    </AdminCmsShell>
  );
}
