import Link from "next/link";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
      <p className="mt-3 text-muted-foreground">
        This product may have been removed or the link is incorrect.
      </p>
      <Link
        href="/products"
        className="mt-8 rounded-full bg-epaid px-8 py-3 text-sm font-semibold text-white"
      >
        Browse products
      </Link>
    </main>
  );
}
