"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AdminCmsShell from "../AdminCmsShell";
import { getAllFallbackProducts } from "@/lib/fallback-products";
import { getCmsBlock, seedCmsDefaults } from "@/lib/cms";
import EpaidButton from "@/app/components/EpaidButton";
import type { Product } from "@/lib/products-api";

export default function AdminProductsCatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [seeded, setSeeded] = useState(false);

  useEffect(() => {
    setProducts(getAllFallbackProducts());
    setSeeded(Boolean(getCmsBlock("contentSeeded")));
  }, []);

  function handleSeed() {
    seedCmsDefaults();
    setSeeded(true);
    setProducts(getAllFallbackProducts());
  }

  return (
    <AdminCmsShell
      title="Products catalog"
      description="Preview the hardware catalog shown on the public products pages."
      actions={
        <EpaidButton
          type="button"
          onClick={handleSeed}
          className="px-4 py-2 text-xs normal-case sm:text-sm"
        >
          {seeded ? "Refresh defaults" : "Load defaults"}
        </EpaidButton>
      }
    >
      <div className="mb-6 flex items-center justify-between gap-3 rounded-2xl border border-solid border-[#00000040] bg-card px-5 py-4">
        <div>
          <p className="font-semibold text-foreground">
            {products.length} products
          </p>
          <p className="text-sm text-muted-foreground">
            Fallback catalog used when the API has no products.
            {seeded ? " Content defaults loaded." : ""}
          </p>
        </div>
        <EpaidButton
          href="/admin/products/add"
          className="px-4 py-2 text-sm normal-case"
        >
          Add product
        </EpaidButton>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product._id}
            className="overflow-hidden rounded-2xl border border-solid border-[#00000040] bg-card shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
          >
            <div className="relative aspect-[4/3] bg-card-muted">
              <Image
                src={product.mainImage.url}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 360px"
              />
            </div>
            <div className="p-5">
              <h2 className="text-base font-bold text-foreground">
                {product.title}
              </h2>
              <p className="mt-1 text-sm font-semibold text-epaid">
                {product.price}
              </p>
              <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </AdminCmsShell>
  );
}
