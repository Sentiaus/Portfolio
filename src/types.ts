export type LinkType = "youtube" | "github" | "linkedin" | "medium" | "gdrive" | "website";

export interface ProjectLink {
  type: LinkType;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  links?: ProjectLink[];
  accent?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: string;
}
