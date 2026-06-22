"use client";

import Image from "next/image";
import { useState } from "react";

const posts = [
  {
    title: "EPAID & SATOCCI TEAM UP TO BOOST DIGITAL RETAIL POS",
    excerpt:
      "The partnership brings seamless in-store payments, smarter checkout flows, and scalable POS solutions for modern retailers.",
    date: "JUL 19, 2025",
    readTime: "2 min read",
    image: "/image1.png",
  },
  {
    title: "HOW SMART POS TERMINALS ARE CHANGING SAUDI RETAIL",
    excerpt:
      "From contactless payments to real-time reporting, businesses are adopting faster and more secure checkout experiences.",
    date: "JUN 28, 2025",
    readTime: "3 min read",
    image: "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.png",
  },
  {
    title: "5 WAYS TO IMPROVE PAYMENT SECURITY IN YOUR STORE",
    excerpt:
      "Simple practices that protect customer data, reduce fraud risk, and keep every transaction safe and compliant.",
    date: "JUN 12, 2025",
    readTime: "4 min read",
    image: "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201%20(1).png",
  },
  {
    title: "WHY DIGITAL RECEIPTS ARE THE FUTURE OF RETAIL",
    excerpt:
      "Paperless proof of purchase helps merchants save time, reduce waste, and offer customers a cleaner shopping journey.",
    date: "MAY 30, 2025",
    readTime: "2 min read",
    image: "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.jpg",
  },
  {
    title: "FIELD ENGINEERING SUPPORT THAT KEEPS POS RUNNING",
    excerpt:
      "Nationwide on-ground support ensures devices stay online, operations stay smooth, and downtime stays minimal.",
    date: "MAY 14, 2025",
    readTime: "3 min read",
    image: "/image1.png",
  },
  {
    title: "CHOOSING THE RIGHT PAYMENT DEVICE FOR YOUR BUSINESS",
    excerpt:
      "Handheld, countertop, or portable — here is how to match POS hardware to your store size and daily workflow.",
    date: "APR 22, 2025",
    readTime: "5 min read",
    image: "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.png",
  },
  {
    title: "FINTECH INTEGRATION FOR GROWING MERCHANT NETWORKS",
    excerpt:
      "Connected payment systems simplify loyalty, reporting, and multi-branch management for ambitious retailers.",
    date: "APR 8, 2025",
    readTime: "3 min read",
    image: "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201%20(1).png",
  },
  {
    title: "EPAID EXPANDS ITS MSP POS SERVICE ACROSS REGIONS",
    excerpt:
      "The growing network delivers reliable payment infrastructure, advisory services, and long-term merchant support.",
    date: "MAR 25, 2025",
    readTime: "2 min read",
    image: "/prodcut-images/Gemini_Generated_Image_1rorcz1rorcz1ror%201.jpg",
  },
];

function ReadMoreButton() {
  return (
    <a
      href="#" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border-soft py-1.5 pl-4 pr-1.5 text-[10px] font-semibold uppercase leading-none tracking-wide text-foreground transition-colors hover:bg-epaid/10 sm:text-[11px]">
      Read More
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-epaid">
        <svg
          viewBox="0 0 24 24" className="h-3.5 w-3.5 text-white" fill="none" aria-hidden="true">
          <path
            d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  );
}

export default function BlogPosts() {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const search = query.trim().toLowerCase();
    if (!search) return true;
    return (
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search)
    );
  });

  return (
    <section id="blog-posts" className="section-tone relative bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="text-4xl font-bold uppercase leading-none text-foreground sm:text-5xl lg:text-[3.5rem]">
            Newsroom
          </h2>

          <p className="max-w-md text-base leading-relaxed text-muted-foreground lg:pt-2 lg:text-lg">
            Explore Satocci blogs and news for the latest stories, product
            updates, and industry insights that redefine smarter and seamless
            shopping.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl lg:mt-14">
          <label htmlFor="blog-search" className="sr-only">
            Search blog posts
          </label>
          <input
            id="blog-search" type="search" value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH HERE" className="w-full rounded-full border border-border-soft bg-card py-4 pl-6 pr-16 text-sm uppercase tracking-wide text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-epaid/30 sm:py-5 sm:pl-8 sm:pr-20 sm:text-base"/>
          <button
            type="button" aria-label="Search" className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-epaid sm:right-3 sm:h-11 sm:w-11">
            <svg
              viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2"/>
              <path
                d="M16 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {filteredPosts.map((post) => (
            <article
              key={post.title}
              className="flex flex-col overflow-hidden rounded-[20px] border border-border-soft bg-card p-4">
              <div className="overflow-hidden rounded-[16px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={320}
                  height={200}
                  className="aspect-[16/10] h-auto w-full object-cover"/>
              </div>

              <h3 className="mt-4 text-sm font-bold uppercase leading-snug text-foreground lg:text-[15px]">
                {post.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>

              <div className="mt-5 flex items-end justify-between gap-3 border-t border-border-soft pt-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-[11px]">
                    {post.date}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {post.readTime}
                  </p>
                </div>
                <ReadMoreButton />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
