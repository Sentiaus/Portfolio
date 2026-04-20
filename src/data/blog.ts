import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "building-agentic-systems-production",
    title: "On Building Agentic Systems in Production",
    date: "2024-12-15",
    tags: ["AI", "Engineering", "Internship"],
    excerpt:
      "This past summer I built an agentic debugging platform at Intuit. Here's what I learned about the gap between demo-worthy LLM agents and systems that actually hold up when things go sideways at 2am.",
    readTime: "8 min",
  },
  {
    slug: "suas-2025-retrospective",
    title: "SUAS 2025: What Flying Drones Taught Me About ML",
    date: "2025-06-10",
    tags: ["ML", "Computer Vision", "Competition"],
    excerpt:
      "We placed 4th at the Student Unmanned Aerial Systems competition. The model that got us there was not the one we started with. The gap between version one and the final version was more about process than architecture.",
    readTime: "12 min",
  },
  {
    slug: "distributed-systems-reading-notes",
    title: "Reading Notes: Designing Data-Intensive Applications",
    date: "2025-02-20",
    tags: ["Distributed Systems", "Notes", "Books"],
    excerpt:
      "A running collection of observations from working through Kleppmann's book. These are the concepts that rewired how I think about building systems that fail gracefully.",
    readTime: "6 min",
  },
  {
    slug: "why-statistics-matters-for-ml",
    title: "Why Statistics Makes You a Better ML Engineer",
    date: "2025-01-08",
    tags: ["Statistics", "ML", "Perspective"],
    excerpt:
      "Most engineers treat statistics as a utility — something to reach for when the math demands it. Picking it up as a minor changed how I debug models, interpret results, and think about uncertainty.",
    readTime: "7 min",
  },
];
