import BlogPosts from "./BlogPosts";
import BlogsHero from "./BlogsHero";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Blogs — ePAiD",
  description:
    "Insights and updates on POS technology, secure payments, and digital solutions from ePaid.",
};

export default function BlogsPage() {
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <BlogsHero />
      <BlogPosts />
      <WhatsAppButton />
    </main>
  );
}
