import Header from "@/components/Header";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import ProjectCard from "@/components/ProjectCard";
import { featuredProjects, allProjects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />

      {/* Featured carousel */}
      <FeaturedCarousel projects={featuredProjects} />

      {/* Catalog */}
      <main className="max-w-6xl mx-auto px-6 py-14">
        {/* Section header */}
        <div className="pb-4 mb-12 flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted block mb-1.5">
              Catalog
            </span>
            <h1 className="font-condensed font-bold uppercase text-ink leading-none tracking-wide"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              All Work
            </h1>
          </div>
          <span className="font-mono text-[10px] text-smoke pb-1">
            {String(allProjects.length).padStart(2, "0")} projects
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {allProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <span className="font-mono text-[10px] text-smoke uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Victor Fawole
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sentiaus"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/victor-fawole"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:victorafawole@gmail.com"
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
