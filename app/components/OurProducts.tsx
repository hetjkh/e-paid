"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  AnimatedText,
  easeOut,
  fadeUp,
  scaleIn,
  StaggerReveal,
} from "./motion/scroll-motion";
import SectionTitleGlow from "./SectionTitleGlow";
import {
  fetchProductsClient,
  formatPrice,
  specToTag,
  type Product,
} from "@/lib/products-api";
import { getAllFallbackProducts } from "@/lib/fallback-products";

type DisplayProduct = {
  id: string;
  name: string;
  price: string;
  description: string;
  tags: string[];
  image: string;
};

function mapApiProduct(product: Product): DisplayProduct {
  return {
    id: product._id,
    name: product.title,
    price: formatPrice(product.price),
    description: product.description,
    image: product.mainImage.url,
    tags: product.specifications.map(specToTag),
  };
}

function getFallbackDisplayProducts(): DisplayProduct[] {
  return getAllFallbackProducts().map(mapApiProduct);
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="white"
      className="h-5 w-5 drop-shadow-sm"
      aria-hidden="true"
    >
      <path d="M12 2l1.4 5.2L18 8.6l-4.6 1.4L12 15.2 10.6 10 6 8.6l4.6-1.4L12 2z" />
      <path
        d="M19 14l.8 2.8L22.6 17l-2.8.8L19 20.6l-.8-2.8L15.4 17l2.8-.8L19 14z"
        opacity="0.9"
      />
    </svg>
  );
}

export default function OurProducts({ showAll = false }: { showAll?: boolean }) {
  const [apiProducts, setApiProducts] = useState<DisplayProduct[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchProductsClient()
      .then((items) => setApiProducts(items.map(mapApiProduct)))
      .catch(() => setApiProducts([]))
      .finally(() => setLoaded(true));
  }, []);

  const products = useMemo(() => {
    const source =
      apiProducts.length > 0 ? apiProducts : getFallbackDisplayProducts();
    return showAll ? source : source.slice(0, 3);
  }, [apiProducts, showAll]);

  return (
    <section
      id="products"
      className="relative overflow-x-clip bg-background pt-24 pb-20 lg:pt-32 lg:pb-28"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerReveal className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <SectionTitleGlow>
            <AnimatedText
              text="OUR PRODUCTS"
              as="h2"
              className="sf-pro-display-semibold text-[2.125rem] font-semibold uppercase leading-none tracking-normal text-epaid sm:text-4xl lg:text-[2.75rem]"
            />
          </SectionTitleGlow>

          <motion.p
            className="relative z-10 max-w-sm text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg"
            variants={fadeUp}
            transition={{ duration: 0.65, ease: easeOut }}
          >
            Our products are designed to simplify digital payments, enhance
            business efficiency, and deliver reliable, secure, and scalable
            solutions tailored to modern enterprises.
          </motion.p>
        </StaggerReveal>

        {!loaded ? (
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: showAll ? 6 : 3 }).map((_, i) => (
              <div
                key={i}
                className="h-[520px] animate-pulse rounded-[24px] border border-border-soft bg-card-muted"
              />
            ))}
          </div>
        ) : (
          <StaggerReveal
            className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6"
            stagger={0.1}
          >
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group block h-full">
              <motion.article
                variants={scaleIn}
                transition={{ duration: 0.6, ease: easeOut }}
                className="flex h-full flex-col overflow-hidden rounded-[24px] border border-border-soft bg-card shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-shadow duration-300 group-hover:border-epaid/25 group-hover:shadow-[0_12px_36px_rgba(4,113,173,0.12)] dark:dark-card-shadow"
              >
                <div className="relative m-4 mb-0 overflow-hidden rounded-[20px] border border-border-soft">
                  <Image
                    src={product.image}
                    alt={`${product.name} POS device`}
                    width={420}
                    height={360}
                    className="h-[280px] w-full object-cover sm:h-[320px]"
                    unoptimized={product.image.includes("cloudinary.com")}
                  />
                  <div className="absolute bottom-3 right-3">
                    <SparkleIcon />
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                  <div className="flex items-start justify-between gap-3">
                    <AnimatedText
                      text={product.name}
                      as="h3"
                      className="text-2xl font-bold text-foreground"
                    />
                    <AnimatedText
                      text={product.price}
                      as="span"
                      className="text-2xl font-bold text-epaid"
                      delay={0.08}
                    />
                  </div>

                  <motion.p
                    className="mt-2 text-sm leading-snug text-muted-foreground"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
                  >
                    {product.description}
                  </motion.p>

                  {product.tags.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-epaid px-3 py-1 text-[11px] leading-tight text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-auto pt-6">
                    <span className="block w-full rounded-xl border border-border-soft bg-epaid-yellow px-3 py-2 text-center text-xs font-semibold text-black transition-colors group-hover:bg-[#e8c840] sm:px-4 sm:py-3 sm:text-sm">
                      View details
                    </span>
                  </div>
                </div>
              </motion.article>
              </Link>
            ))}
          </StaggerReveal>
        )}
      </div>
    </section>
  );
}
