import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/app/components/Header";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) return { title: "Blog not found — ePAiD" };

  return {
    title: `${post.title} — ePAiD`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <main className="overflow-x-clip bg-background text-foreground transition-colors duration-200">
      <Header variant="page" />

      <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-10 sm:px-6 lg:px-10 lg:pb-24 lg:pt-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/blogs"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-epaid"
          >
            ← Back to Blogs
          </Link>
          <div className="text-right text-xs text-muted-foreground">
            <p className="font-semibold uppercase tracking-wide">{post.date}</p>
            <p className="mt-1">{post.readTime}</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div className="min-w-0">
            <h1 className="text-balance text-3xl font-bold uppercase leading-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>
          </div>

          <aside className="rounded-[20px] border border-solid border-[#00000040] bg-card p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-epaid">
              Highlights
            </p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {post.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-epaid" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="mt-8 overflow-hidden rounded-[20px] border border-solid border-[#00000040] bg-card">
          <Image
            src={post.image}
            alt={post.title}
            width={1100}
            height={520}
            className="aspect-[16/9] h-auto w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 1100px"
            priority
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 60)}>{paragraph}</p>
            ))}
          </article>

          <aside className="rounded-[20px] border border-solid border-[#00000040] bg-card p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-epaid">
              Key takeaways
            </p>
            <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
              {post.takeaways.map((item, index) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-bold text-epaid">
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>

        <section className="mt-14 border-t border-border-soft pt-10">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-xl font-bold uppercase text-foreground sm:text-2xl">
              More articles
            </h2>
            <Link
              href="/blogs"
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-epaid"
            >
              View all
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 min-[520px]:grid-cols-2 lg:grid-cols-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blogs/${related.id}`}
                className="group overflow-hidden rounded-[18px] border border-solid border-[#00000040] bg-card p-3 transition-colors hover:border-epaid/30"
              >
                <div className="overflow-hidden rounded-[14px]">
                  <Image
                    src={related.image}
                    alt={related.title}
                    width={320}
                    height={200}
                    className="aspect-[16/10] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {related.date} • {related.readTime}
                </p>
                <p className="mt-2 line-clamp-2 text-sm font-bold uppercase leading-snug text-foreground">
                  {related.title}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

