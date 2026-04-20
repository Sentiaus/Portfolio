import Header from "@/components/Header";
import { blogPosts } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <main className="max-w-2xl mx-auto px-6 py-14">
        {/* Back link */}
        <Link
          href="/blog"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted hover:text-ink transition-colors duration-200 mb-12 block"
        >
          &larr; Blog
        </Link>

        {/* Post header */}
        <div className="pb-8 mb-10">
          <div className="flex flex-wrap gap-2.5 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[9px] uppercase tracking-[0.18em] text-smoke"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="font-condensed font-bold uppercase text-ink leading-tight tracking-wide mb-5"
            style={{ fontSize: "clamp(28px, 5vw, 52px)" }}
          >
            {post.title}
          </h1>

          <div className="flex items-center gap-5">
            <span className="font-mono text-[10px] text-smoke">{date}</span>
            <span className="font-mono text-[10px] text-ruled">/</span>
            <span className="font-mono text-[10px] text-smoke">{post.readTime} read</span>
          </div>
        </div>

        {/* Post body — sample content */}
        <div className="space-y-6 text-muted leading-relaxed text-base" style={{ fontFamily: "var(--font-sans)" }}>
          <p className="text-ink">{post.excerpt}</p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>

          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>

          <p>
            Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
          </p>
        </div>
      </main>

      <footer className="mt-16">
        <div className="max-w-2xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] text-smoke uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Victor Fawole
          </span>
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-200"
          >
            &larr; All Posts
          </Link>
        </div>
      </footer>
    </div>
  );
}
