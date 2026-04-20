import { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
    id: "pan",
    title: "Palo Alto Networks",
    year: "2025",
    category: "Software Engineering",
    description:
      "Built a Certificate Management Service in Go automating lifecycles for 50k+ certificates. Developed an Agentic RCA Playbook using Jira MCP + Gcloud CLI, cutting production MTTR by 87%.",
    tags: ["Go", "GCP Pub/Sub", "MySQL", "React", "Node.js", "MCP"],
    image: "/pan_logo_white.svg",
    accent: "#1A1A1A",
    links: [
      { type: "website", url: "https://www.paloaltonetworks.com" },
    ],
  },
  {
    id: "intuit-debugger",
    title: "Intuit",
    year: "2025",
    category: "Software Engineering Internship",
    description:
      "Built MCP servers for Slack and GitHub adopted by 70+ engineers company-wide. Implemented a multi-channel MCP in Cursor for issue triaging, cutting debugging time by 20%.",
    tags: ["TypeScript", "MCP", "Cursor", "Slack API", "GitHub API"],
    image: "/intuit_logo_white.svg",
    accent: "#1C2A4A",
    links: [
      { type: "website", url: "https://www.intuit.com" },
    ],
  },
  {
    id: "buckeye-vertical",
    title: "Aerial Intelligence",
    year: "2025",
    category: "Machine Learning / Robotics",
    description:
      "Led model training and data collection for Ohio State's drone competition team, Buckeye Vertical. 4th place at SUAS 2025.",
    tags: ["PyTorch", "YOLO", "C++", "ROS", "SLURM", "Python"],
    image: "/bv_logo_white.png",
    accent: "#252220",
    links: [
      { type: "github", url: "https://github.com/BuckeyeVertical" },
      { type: "website", url: "https://www.buckeyevertical.org/" },
    ],
  },
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: "lbl-hpc",
    title: "HPC Research @ LBL",
    year: "2024",
    category: "Research / Security",
    description:
      "Led a team of 2 interns to find 2 buffer overflow vulnerabilities in the HDF5(C) library using LLVM. Containerized testing scripts with Docker, speeding up library assessment by 20%.",
    tags: ["LLVM", "Docker", "C", "Fuzzing", "HDF5", "Linux"],
    image: "/hdf5_img.png",
    accent: "#2A2725",
  },
  {
    id: "nsf-reu",
    title: "NSF AI Institute REU",
    year: "2023",
    category: "Research / AI Security",
    description:
      "Led 3 interns assessing LLMs on application security. Built a Python script using the GPT-3.5 API to generate and test 100+ fuzzing corpora. Presented findings to 5 professors and 20 postgrad students.",
    tags: ["Python", "GPT-3.5", "LLMs", "Fuzzing", "Security"],
    image: "/AI_EDGE.jpeg",
    accent: "#302E2C",
  },
  {
    id: "playground",
    title: "Playground",
    year: "2025",
    category: "Full Stack",
    description:
      "Led a team of 4 to build a game recommendation service. Flask + Elasticsearch backend, JWT + Redis auth, and a collaborative filtering model trained on Kaggle datasets — improved rec accuracy by 35%.",
    tags: ["React", "Flask", "PostgreSQL", "Redis", "Elasticsearch"],
    accent: "#1E2A1E",
    links: [
      { type: "github", url: "https://github.com/The-Sandboxers/Playground" },
    ],
  },
];
