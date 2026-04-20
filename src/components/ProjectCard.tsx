import { Project } from "@/types";
import Image from "next/image";
import ProjectLinks from "@/components/ProjectLinks";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div className="group cursor-default transition-transform duration-300 hover:-translate-y-2">
      {/* Visual block */}
      <div
        className="relative w-full overflow-hidden mb-3"
        style={{ aspectRatio: "4/3" }}
      >
        {/* Dark backdrop — always present */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: project.accent ?? "#2C2A28" }}
        />

        {/* Image on top (supports transparency) */}
        {project.image && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Index */}
        <span
          className="absolute top-3 left-3 font-mono text-[10px] tracking-widest z-10"
          style={{ color: "rgba(255,255,255,0.25)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Watermark — no image only */}
        {!project.image && (
          <div
            className="absolute inset-0 flex items-center justify-center select-none px-5"
            aria-hidden="true"
          >
            <span
              className="font-condensed font-bold uppercase text-center leading-none"
              style={{
                fontSize: "clamp(18px, 4vw, 52px)",
                color: "rgba(255,255,255,0.04)",
                letterSpacing: "-0.01em",
              }}
            >
              {project.title}
            </span>
          </div>
        )}

        {/* Darkening overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10" />

        {/* Link icons — bottom right, fade in on hover */}
        {project.links && project.links.length > 0 && (
          <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ProjectLinks links={project.links} size="sm" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-0.5">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted truncate">
            {project.category}
          </span>
          <span className="font-mono text-[9px] text-smoke shrink-0">
            {project.year}
          </span>
        </div>

        <h3 className="font-condensed font-bold uppercase text-ink text-xl leading-tight tracking-wide mb-1.5">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] uppercase tracking-wider text-smoke border border-ruled px-1.5 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
