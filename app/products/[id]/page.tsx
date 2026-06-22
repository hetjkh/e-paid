import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { loadProduct } from "@/lib/products-api";
import { getFallbackProductIds } from "@/lib/fallback-products";
import ProductDetail from "./ProductDetail";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getFallbackProductIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await loadProduct(id);

  if (!product) {
    return { title: "Product not found — ePAiD" };
  }

  return {
    title: `${product.title} — ePAiD`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = await loadProduct(id);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
