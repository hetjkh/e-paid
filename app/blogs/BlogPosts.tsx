"use client";

import Image from "next/image";
import { useState } from "react";
import EpaidButton from "../components/EpaidButton";
import { ctaBadgeClassName } from "../components/button-styles";
import { formFieldBorderClassName, formFieldTextClassName } from "../components/form-styles";
import { blogPosts } from "@/lib/blog-posts";
import { cn } from "@/lib/utils";

function ReadMoreButton({ href }: { href: string }) {
  return (
    <EpaidButton
      href={href}
      className="shrink-0"
      icon={
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 17L17 7M17 7H9M17 7v8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      }
    >
      Read More
    </EpaidButton>
  );
}

export default function BlogPosts() {
  const [query, setQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const search = query.trim().toLowerCase();
    if (!search) return true;
    return (
      post.title.toLowerCase().includes(search) ||
      post.excerpt.toLowerCase().includes(search)
    );
  });

  return (
    <section id="blog-posts" className="section-tone relative overflow-hidden bg-background py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="text-balance text-3xl font-bold uppercase leading-none text-foreground sm:text-4xl lg:text-[3.5rem]">
            Newsroom
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base lg:pt-2 lg:text-lg">
            Explore Satocci blogs and news for the latest stories, product
            updates, and industry insights that redefine smarter and seamless
            shopping.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl sm:mt-10 lg:mt-14">
          <label htmlFor="blog-search" className="sr-only">
            Search blog posts
          </label>
          <div
            className={cn(
              "flex w-full items-center gap-2 rounded-full bg-card py-1.5 pl-5 pr-1.5 sm:gap-3 sm:py-2 sm:pl-8 sm:pr-1.5",
              formFieldBorderClassName
            )}
          >
            <input
              id="blog-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH HERE"
              className={cn(
                "min-w-0 flex-1 border-0 bg-transparent py-1.5 text-base uppercase tracking-wide outline-none focus:ring-0 sm:text-sm",
                formFieldTextClassName
              )}
            />
            <button
              type="button"
              aria-label="Search"
              className={cn(ctaBadgeClassName, "h-9 w-9 sm:h-10 sm:w-10")}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-current sm:h-5 sm:w-5"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M16 16l4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted-foreground sm:mt-12 sm:text-base">
            No articles match your search. Try a different keyword.
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 min-[480px]:gap-5 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="flex min-w-0 flex-col overflow-hidden rounded-[16px] border border-solid border-[#00000040] bg-card p-3 sm:rounded-[20px] sm:p-4"
              >
                <div className="overflow-hidden rounded-[12px] sm:rounded-[16px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={320}
                    height={200}
                    className="aspect-[16/10] h-auto w-full object-cover"
                    sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                <h3 className="mt-3 text-sm font-bold uppercase leading-snug text-foreground sm:mt-4 lg:text-[15px]">
                  {post.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-end justify-between gap-2 border-t border-border-soft pt-3 sm:mt-5 sm:gap-3 sm:pt-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-[11px]">
                      {post.date}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {post.readTime}
                    </p>
                  </div>
                  <ReadMoreButton href={`/blogs/${post.id}`} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
