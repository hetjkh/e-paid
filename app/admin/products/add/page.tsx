"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getStoredToken } from "@/lib/admin-api";
import { createProduct, normalizePriceInput } from "@/lib/products-api";
import AdminCmsShell from "@/app/admin/content/AdminCmsShell";
import EpaidButton from "@/app/components/EpaidButton";

type SpecRow = { label: string; value: string };

function ImagePreview({
  file,
  label,
  onClear,
}: {
  file: File | null;
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

  if (!preview) {
    return (
      <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-border-soft bg-card-muted text-xs text-muted-foreground">
        {label}
      </div>
    );
  }

  return (
    <div className="relative h-36 overflow-hidden rounded-xl border border-border-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={preview} alt={label} className="h-full w-full object-cover" />
      <button
        type="button"
        onClick={onClear}
        className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white"
      >
        Remove
      </button>
    </div>
  );
}

export default function AddProductPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [galleryImages, setGalleryImages] = useState<(File | null)[]>([
    null,
    null,
    null,
    null,
  ]);
  const [specs, setSpecs] = useState<SpecRow[]>([{ label: "", value: "" }]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!getStoredToken()) {
      router.replace("/admin/login");
    }
  }, [router]);

  function handleGalleryChange(index: number, e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setGalleryImages((prev) => {
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    if (!mainImage) {
      setError("Main image is required");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("price", normalizePriceInput(price));
      formData.append("mainImage", mainImage);

      galleryImages.forEach((file) => {
        if (file) formData.append("galleryImages", file);
      });

      const specifications = specs.filter((s) => s.label.trim() && s.value.trim());
      formData.append("specifications", JSON.stringify(specifications));

      await createProduct(token, formData);
      router.push("/admin/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to add product");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AdminCmsShell
      title="Add product"
      description="Upload images and save product details to your catalog."
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
                  placeholder="F20 POS Terminal"
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
                  placeholder="Product description…"
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
                    placeholder="199.00"
                    className="w-full rounded-xl border border-border-soft bg-card-muted py-3 pl-14 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-solid border-[#00000040] bg-card p-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] sm:p-8">
            <h2 className="text-lg font-bold text-foreground">Images</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              1 main image + up to 4 gallery views
            </p>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">Main image *</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setMainImage(e.target.files?.[0] ?? null)}
                className="mb-3 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-epaid file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
              />
              <ImagePreview
                file={mainImage}
                label="Main image preview"
                onClear={() => setMainImage(null)}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {galleryImages.map((file, index) => (
                <div key={index}>
                  <label className="mb-2 block text-sm font-medium">
                    View {index + 1}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleGalleryChange(index, e)}
                    className="mb-3 block w-full text-sm text-muted-foreground file:mr-4 file:rounded-full file:border-0 file:bg-epaid/90 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white"
                  />
                  <ImagePreview
                    file={file}
                    label={`View ${index + 1} preview`}
                    onClear={() =>
                      setGalleryImages((prev) => {
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
                    placeholder="Label (e.g. Android)"
                    className="rounded-xl border border-border-soft bg-card-muted px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-epaid/30"
                  />
                  <input
                    value={row.value}
                    onChange={(e) => updateSpec(index, "value", e.target.value)}
                    placeholder="Value (e.g. Android 14)"
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

          <EpaidButton
            type="submit"
            disabled={loading}
            className="w-full py-3.5 text-sm disabled:opacity-60 sm:w-auto sm:px-12"
          >
            {loading ? "Uploading…" : "Save product"}
          </EpaidButton>
        </form>
    </AdminCmsShell>
  );
}
