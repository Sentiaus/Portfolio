import { BlogPost } from "@/types";
import Link from "next/link";

interface BlogPostPreviewProps {
  post: BlogPost;
  index: number;
}

export default function BlogPostPreview({ post, index }: BlogPostPreviewProps) {
  const date = new Date(post.date);
  const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="py-8 grid grid-cols-[72px_1fr] sm:grid-cols-[100px_1fr] md:grid-cols-[130px_1fr] gap-5 md:gap-10">
        {/* Left: date column */}
        <div className="pt-0.5 flex flex-col gap-1">
          <span className="font-mono text-[10px] text-ink block">{month} {day}</span>
          <span className="font-mono text-[10px] text-smoke block">{year}</span>
          <span className="font-mono text-[10px] text-ruled block mt-1">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Right: content */}
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2 mb-2.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-[0.18em] text-smoke"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="font-condensed font-bold uppercase text-ink leading-tight tracking-wide mb-3 transition-colors duration-200 group-hover:text-graphite"
            style={{ fontSize: "clamp(20px, 3vw, 32px)" }}
          >
            {post.title}
          </h2>

          <p className="text-sm md:text-base text-muted leading-relaxed max-w-2xl mb-4">
            {post.excerpt}
          </p>

          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-smoke transition-colors duration-200 group-hover:text-muted">
            {post.readTime} read &rarr;
          </span>
        </div>
      </article>
    </Link>
  );
}
