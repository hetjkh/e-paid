"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import Header from "@/app/components/Header";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import EpaidButton from "@/app/components/EpaidButton";
import { formatPrice, type Product, type ProductSpecification } from "@/lib/products-api";

function SpecIcon({ label }: { label: string }) {
  const key = label.toLowerCase();

  if (key.includes("android") || key.includes("os") || key.includes("security")) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M8.5 4.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1l.4 2.2a5.5 5.5 0 0 0-7.8 0L8.5 4.5zM7 10.5a4.5 4.5 0 0 0-4.5 4.5V18a1 1 0 0 0 1 1h1v2.5a1 1 0 0 0 2 0V19h8v2.5a1 1 0 0 0 2 0V19h1a1 1 0 0 0 1-1v-3a4.5 4.5 0 0 0-4.5-4.5H7z" />
      </svg>
    );
  }

  if (key.includes("memory") || key.includes("ram") || key.includes("rom") || key.includes("storage")) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (key.includes("wifi") || key.includes("wi-fi") || key.includes("connect")) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path
          d="M2 8.5a14 14 0 0 1 20 0M5.5 12a9.5 9.5 0 0 1 13 0M9 15.5a5 5 0 0 1 6 0M12 19h.01"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("physical") || key.includes("dimension") || key.includes("size") || key.includes("display")) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (key.includes("processor") || key.includes("cpu") || key.includes("core")) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 4v2M12 4v2M15 4v2M9 18v2M12 18v2M15 18v2M4 9h2M4 12h2M4 15h2M18 9h2M18 12h2M18 15h2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (key.includes("bluetooth")) {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
        <path
          d="M7 7l10 5-5 2.5L7 17V7zm0 0l5 2.5L7 12m10-5v10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SpecItem({ spec }: { spec: ProductSpecification }) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/80 text-foreground shadow-sm dark:bg-white/10">
        <SpecIcon label={spec.label} />
      </span>
      <div className="min-w-0 pt-1">
        <p className="text-sm font-bold uppercase tracking-wide text-foreground">
          {spec.label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{spec.value}</p>
      </div>
    </div>
  );
}

export default function ProductDetail({ product }: { product: Product }) {
  const images = useMemo(() => {
    const all = [
      product.mainImage.url,
      ...product.galleryImages.map((img) => img.url),
    ];
    return [...new Set(all)];
  }, [product]);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex] ?? product.mainImage.url;
  const isCloudinary = activeImage.includes("cloudinary.com");

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Header variant="page" />

      <section className="mx-auto max-w-[1400px] px-6 py-8 lg:px-10 lg:py-12">
        <Link
          href="/products/hardware"
          className="mb-8 inline-flex text-sm font-semibold text-epaid transition-colors hover:underline"
        >
          ← Back to hardware
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-[24px] border border-border-soft bg-card-muted">
              <Image
                src={activeImage}
                alt={product.title}
                width={720}
                height={720}
                className="aspect-square w-full object-cover"
                priority
                unoptimized={isCloudinary}
              />
            </div>

            {images.length > 1 ? (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((url, index) => (
                  <button
                    key={`${url}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`overflow-hidden rounded-xl border-2 transition-all ${
                      activeIndex === index
                        ? "border-epaid shadow-[0_0_0_1px_rgba(4,113,173,0.2)]"
                        : "border-border-soft opacity-80 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={url}
                      alt={`${product.title} view ${index + 1}`}
                      width={160}
                      height={160}
                      className="aspect-square w-full object-cover"
                      unoptimized={url.includes("cloudinary.com")}
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          {/* Info */}
          <div className="lg:pt-4">
            <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem]">
              {product.title}
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {product.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="text-3xl font-bold text-foreground sm:text-4xl">
                {formatPrice(product.price)}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <EpaidButton
                href="/contact#contact-form"
                className="flex-1"
              >
                Contact Sales
              </EpaidButton>
              <EpaidButton
                href="/contact#contact-form"
                className="flex-1"
              >
                Buy Now
              </EpaidButton>
            </div>

            {product.specifications.length > 0 ? (
              <div className="relative mt-10 overflow-hidden rounded-[28px] border border-border-soft bg-gradient-to-br from-[#e8f4fc] via-[#f5f8fa] to-[#fef8eb] p-6 dark:from-[#131e32] dark:via-[#111d32] dark:to-[#0f1a2e] lg:p-8">
                <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-epaid/10 blur-3xl" />
                <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-epaid-yellow/20 blur-3xl" />

                <h2 className="relative text-lg font-bold uppercase tracking-wide text-foreground lg:text-xl">
                  Product Specifications
                </h2>

                <div className="relative mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
                  {product.specifications.map((spec) => (
                    <SpecItem key={`${spec.label}-${spec.value}`} spec={spec} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}
