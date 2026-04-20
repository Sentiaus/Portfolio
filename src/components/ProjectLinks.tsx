"use client";

import { ProjectLink } from "@/types";

const icons: Record<string, (size: number) => React.ReactNode> = {
  youtube: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.54 3.6 12 3.6 12 3.6s-7.54 0-9.38.47A3.01 3.01 0 0 0 .5 6.2C0 8.05 0 12 0 12s0 3.95.5 5.8a3.01 3.01 0 0 0 2.12 2.13C4.46 20.4 12 20.4 12 20.4s7.54 0 9.38-.47a3.01 3.01 0 0 0 2.12-2.13C24 15.95 24 12 24 12s0-3.95-.5-5.8zM9.75 15.52V8.48L15.84 12l-6.09 3.52z" />
    </svg>
  ),
  github: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.03-.01-2.03-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  linkedin: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  medium: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.54 12a6.77 6.77 0 0 1-6.77 6.82A6.77 6.77 0 0 1 0 12a6.77 6.77 0 0 1 6.77-6.82A6.77 6.77 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42S14.2 15.54 14.2 12s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12z" />
    </svg>
  ),
  gdrive: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.433 22.396 1.131 16.598l3.302-5.797h10.023l-3.302 5.797zm3.302-5.798H2.262l2.171 3.799h5.474zm5.013 0-2.17 3.799h8.956l-2.17-3.799zm-2.64-1H20.9l-3.302-5.797H9.107zm1.5-1H16.1l-2.492-4.38zm-1.5-9.197L7.736 12.3H1.13L7.608 1.2zm1.5 0 6.477 11.1h-6.6L8.607 5.4zM19.47 12.3h-6.604L9.364 5.798l-.748-1.3 6.476-3.3 4.378 11.102z" />
    </svg>
  ),
};

function getFavicon(url: string) {
  try {
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
  } catch {
    return null;
  }
}

interface ProjectLinksProps {
  links: ProjectLink[];
  size: "sm" | "lg";
}

export default function ProjectLinks({ links, size }: ProjectLinksProps) {
  const box = size === "lg" ? 36 : 26;
  const icon = size === "lg" ? 17 : 12;

  return (
    <div className="flex gap-1.5">
      {links.map((link) => {
        const favicon = link.type === "website" ? getFavicon(link.url) : null;
        return (
          <a
            key={link.type + link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            title={link.type === "website" ? new URL(link.url).hostname : link.type.charAt(0).toUpperCase() + link.type.slice(1)}
            className="flex items-center justify-center bg-paper text-ink hover:bg-ink hover:text-paper transition-colors duration-150 shrink-0"
            style={{ width: box, height: box }}
          >
            {favicon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={favicon}
                alt={new URL(link.url).hostname}
                width={icon}
                height={icon}
                style={{ objectFit: "contain" }}
              />
            ) : (
              icons[link.type]?.(icon)
            )}
          </a>
        );
      })}
    </div>
  );
}
