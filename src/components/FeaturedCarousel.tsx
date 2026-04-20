"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Project } from "@/types";
import ProjectLinks from "@/components/ProjectLinks";

interface FeaturedCarouselProps {
  projects: Project[];
}

export default function FeaturedCarousel({ projects }: FeaturedCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [current, setCurrent] = useState(0);

  // Measure container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.offsetWidth));
    ro.observe(el);
    setWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const isMobile = width < 640;
  const slideW = width * (isMobile ? 0.82 : 0.68);
  const gap = width * 0.024;
  const originX = (width - slideW) / 2;
  const trackX = width > 0 ? originX - current * (slideW + gap) : 0;

  const next = useCallback(() => setCurrent(c => (c + 1) % projects.length), [projects.length]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + projects.length) % projects.length), [projects.length]);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section>
      {/* Label row */}
      <div>
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted">
            Featured
          </span>
          <span className="font-mono text-[10px] text-smoke tabular-nums">
            {String(current + 1).padStart(2, "0")} &mdash;{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Slide track */}
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none"
        style={{ paddingTop: "20px", paddingBottom: "0px" }}
      >
        {/* Slides */}
        <div
          className="flex"
          style={{
            gap: `${gap}px`,
            transform: `translateX(${trackX}px)`,
            transition: "transform 0.58s cubic-bezier(0.4, 0, 0.2, 1)",
            visibility: width > 0 ? "visible" : "hidden",
          }}
        >
          {projects.map((project, i) => {
            const isActive = i === current;
            return (
              <button
                key={project.id}
                onClick={() => !isActive && setCurrent(i)}
                className="group/slide flex-shrink-0 text-left focus:outline-none"
                style={{
                  width: `${slideW}px`,
                  cursor: isActive ? "default" : "pointer",
                }}
                tabIndex={isActive ? -1 : 0}
                aria-label={isActive ? undefined : `View ${project.title}`}
              >
                {/* Photo block */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{
                    aspectRatio: "16 / 9",
                    backgroundColor: project.accent ?? "#1C1A18",
                    opacity: isActive ? 1 : 0.32,
                    transform: `scale(${isActive ? 1 : 0.96})`,
                    transition: "opacity 0.58s, transform 0.58s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  {/* Image (object-contain so transparent logos aren't cropped) */}
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="80vw"
                      priority={i === 0}
                    />
                  )}

                  {/* Film grain overlay */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-20"
                    style={{ opacity: 0.04, mixBlendMode: "overlay" }}
                  >
                    <filter id={`grain-${i}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#grain-${i})`} />
                  </svg>

                  {/* Giant watermark — hidden when image is present */}
                  <div
                    className="absolute inset-0 flex items-center justify-center px-8"
                    aria-hidden="true"
                    style={{ display: project.image ? "none" : undefined }}
                  >
                    <span
                      className="font-condensed font-bold uppercase text-center leading-none"
                      style={{
                        fontSize: `${slideW * 0.155}px`,
                        color: "rgba(255,255,255,0.038)",
                        letterSpacing: "-0.025em",
                        lineHeight: 0.86,
                        userSelect: "none",
                      }}
                    >
                      {project.title}
                    </span>
                  </div>

                  {/* Year badge */}
                  <span
                    className="absolute top-4 left-5 font-mono text-[10px] z-10"
                    style={{ color: "rgba(255,255,255,0.22)", letterSpacing: "0.15em" }}
                  >
                    {project.year}
                  </span>

                  {/* Index */}
                  <span
                    className="absolute top-4 right-5 font-mono text-[10px] z-10"
                    style={{ color: "rgba(255,255,255,0.18)", letterSpacing: "0.1em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Link icons — bottom left, show on hover */}
                  {project.links && project.links.length > 0 && (
                    <div className="absolute bottom-4 right-5 z-20 opacity-0 group-hover/slide:opacity-100 transition-opacity duration-300">
                      <ProjectLinks links={project.links} size="lg" />
                    </div>
                  )}

                  {/* Bottom overlay — fades out on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 transition-opacity duration-500 group-hover/slide:opacity-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                      padding: "48px 24px 20px",
                    }}
                  >
                    <p
                      className="font-mono text-[9px] uppercase mb-2"
                      style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "0.22em" }}
                    >
                      {project.category}
                    </p>
                    <h2
                      className="font-condensed font-bold uppercase text-white leading-none mb-3"
                      style={{
                        fontSize: `clamp(18px, ${slideW * 0.048}px, 44px)`,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-2.5" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5"
                          style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.15)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Edge fade — left */}
        <div
          className="absolute inset-y-0 left-0 w-20 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to right, #F0EDE5 0%, transparent 100%)",
          }}
        />
        {/* Edge fade — right */}
        <div
          className="absolute inset-y-0 right-0 w-20 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to left, #F0EDE5 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Nav row */}
      <div className="flex items-center justify-center gap-5 py-3">
        <button
          onClick={prev}
          aria-label="Previous"
          className="font-mono text-[11px] text-smoke hover:text-ink transition-colors duration-200"
          style={{ letterSpacing: "0.05em" }}
        >
          &#8592;
        </button>

        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                display: "block",
                height: "1.5px",
                width: i === current ? "22px" : "6px",
                backgroundColor: i === current ? "#1C1A18" : "#C8C4BC",
                transition: "width 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.35s",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next"
          className="font-mono text-[11px] text-smoke hover:text-ink transition-colors duration-200"
          style={{ letterSpacing: "0.05em" }}
        >
          &#8594;
        </button>
      </div>
    </section>
  );
}
