import OurProducts from "../components/OurProducts";
import WhatsAppButton from "../components/WhatsAppButton";
import ProductsHero from "./ProductsHero";

export const metadata = {
  title: "Products — ePAiD",
  description:
    "Browse our POS devices and payment solutions designed to simplify digital payments and enhance business efficiency.",
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <ProductsHero />
      <OurProducts showAll />
      <WhatsAppButton />
    </main>
  );
}
