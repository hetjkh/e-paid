import CustomerTestimonials from "./components/CustomerTestimonials";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import HowItBegan from "./components/HowItBegan";
import HowWeDoIt from "./components/HowWeDoIt";
import OurProducts from "./components/OurProducts";
import WhatWeDo from "./components/WhatWeDo";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <Hero />
      <WhatWeDo />
      <HowWeDoIt />
      <HowItBegan />
      <OurProducts />
      <CustomerTestimonials />
      <FAQ />
      <WhatsAppButton />
    </main>
  );
}
