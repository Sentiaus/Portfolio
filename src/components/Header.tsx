import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "rgba(240, 237, 229, 0.97)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-ink hover:text-muted transition-colors duration-200"
        >
          Victor Fawole
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-200"
          >
            Work
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-200"
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
