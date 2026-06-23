"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getStoredToken } from "@/lib/admin-api";
import { deleteProduct, fetchProductsClient, formatPrice, type Product } from "@/lib/products-api";
import EpaidButton from "@/app/components/EpaidButton";

export default function AdminProductsPage() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const token = getStoredToken();
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    fetchProductsClient()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [router]);

  async function handleDelete(id: string) {
    const token = getStoredToken();
    if (!token) return;

    if (!window.confirm("Delete this product?")) return;

    setDeletingId(id);
    try {
      await deleteProduct(token, id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch {
      alert("Failed to delete product");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border-soft bg-card">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          <Link href="/admin/dashboard" className="text-sm font-medium text-epaid hover:underline">
            ← Dashboard
          </Link>
          <EpaidButton href="/admin/products/add" className="px-5 py-2 text-sm normal-case">
            + Add product
          </EpaidButton>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-6 py-10">
        <h1 className="text-3xl font-bold text-foreground">Products</h1>
        <p className="mt-2 text-muted-foreground">Manage your product catalog.</p>

        {loading ? (
          <p className="mt-10 text-muted-foreground">Loading products…</p>
        ) : products.length === 0 ? (
          <div className="mt-10 rounded-[24px] border border-dashed border-border-soft p-12 text-center">
            <p className="text-muted-foreground">No products yet.</p>
            <Link
              href="/admin/products/add"
              className="mt-4 inline-block text-epaid hover:underline"
            >
              Add your first product
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product._id}
                className="overflow-hidden rounded-[20px] border border-border-soft bg-card"
              >
                <div className="relative h-44">
                  <Image
                    src={product.mainImage.url}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-bold text-foreground">{product.title}</h2>
                    <span className="shrink-0 font-bold text-epaid">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {product.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {product.galleryImages.length} gallery image
                    {product.galleryImages.length !== 1 ? "s" : ""} ·{" "}
                    {product.specifications.length} specs
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/admin/products/${product._id}/edit`}
                      className="text-sm font-semibold text-epaid hover:underline"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/products/${product._id}`}
                      className="text-sm text-muted-foreground hover:text-epaid"
                    >
                      View
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(product._id)}
                      disabled={deletingId === product._id}
                      className="text-sm text-red-600 hover:underline disabled:opacity-50"
                    >
                      {deletingId === product._id ? "Deleting…" : "Delete"}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
