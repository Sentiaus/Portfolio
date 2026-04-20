import Header from "@/components/Header";
import BlogPostPreview from "@/components/BlogPostPreview";
import { blogPosts } from "@/data/blog";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-14">
        {/* Page header */}
        <div className="pb-8 mb-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted block mb-2">
            Writing
          </span>
          <h1
            className="font-condensed font-bold uppercase text-ink leading-none tracking-wide mb-4"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            Blog
          </h1>
          <p className="text-muted text-sm max-w-md leading-relaxed">
            Notes on engineering, research, and whatever else is worth writing down.
          </p>
        </div>

        {/* Post list */}
        <div>
          {blogPosts.map((post, i) => (
            <BlogPostPreview key={post.slug} post={post} index={i} />
          ))}
        </div>
      </main>

      <footer className="mt-8">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] text-smoke uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Victor Fawole
          </span>
          <Link
            href="/"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-200"
          >
            &larr; Work
          </Link>
        </div>
      </footer>
    </div>
  );
}
