import EpaidButton from "@/app/components/EpaidButton";

export default function ProductNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
      <p className="mt-3 text-muted-foreground">
        This product may have been removed or the link is incorrect.
      </p>
      <EpaidButton
        href="/products/hardware"
        className="mt-8 px-8 py-3 text-sm normal-case"
      >
        Browse products
      </EpaidButton>
    </main>
  );
}
