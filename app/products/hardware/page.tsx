import OurProducts from "@/app/components/OurProducts";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import ProductsHero from "../ProductsHero";
import ProductCategoryTabs from "../ProductCategoryTabs";

export const metadata = {
  title: "Hardware Products — ePAiD",
  description:
    "Browse our POS devices and payment hardware designed to simplify digital payments and enhance business efficiency.",
};

export default function HardwareProductsPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <ProductsHero />
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-2 lg:px-10">
        <ProductCategoryTabs active="hardware" />
      </div>
      <OurProducts showAll />
      <WhatsAppButton />
    </main>
  );
}
