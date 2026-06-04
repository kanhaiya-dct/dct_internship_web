export interface Program {
  slug: string;
  name: string;
  duration: string;
  stack: string[];
  blurb: string;
}

export const programs: Program[] = [
  {
    slug: "frontend",
    name: "Frontend Development",
    duration: "3–6 months",
    stack: ["React", "TypeScript", "Tailwind", "Next.js"],
    blurb: "Build production interfaces with modern tooling, design systems, and accessibility in mind.",
  },
  {
    slug: "uiux",
    name: "UI/UX Product Design",
    duration: "3–6 months",
    stack: ["Figma", "Tokens", "Research", "Prototyping"],
    blurb: "Design real products end-to-end — from user research and wireframes to a shipped interface.",
  },
  {
    slug: "fullstack",
    name: "Full Stack Engineering",
    duration: "4–6 months",
    stack: ["Node.js", "PostgreSQL", "React", "REST"],
    blurb: "Own a feature from database to UI inside a real codebase. Learn how product teams actually work.",
  },
  {
    slug: "backend",
    name: "Backend Development",
    duration: "3–6 months",
    stack: ["Node.js", "APIs", "DB Design", "Auth"],
    blurb: "Design APIs, model data, and ship reliable services with logging, error handling, and tests.",
  },
  {
    slug: "react",
    name: "React Specialist",
    duration: "3 months",
    stack: ["React", "State", "Hooks", "Testing"],
    blurb: "Go deep on React patterns — state, performance, testing, and real-world architecture.",
  },
  {
    slug: "graphic",
    name: "Graphic Design",
    duration: "2–4 months",
    stack: ["Illustrator", "Photoshop", "Brand"],
    blurb: "Brand systems, marketing assets, and social design for product and content teams.",
  },
];

// Simplified version for the homepage cards to match the original design
export const featuredPrograms = [
  {
    slug: "frontend",
    name: "Frontend Development",
    stack: ["React", "TypeScript", "Tailwind"],
    blurb: "Build production interfaces with modern tooling and real design systems.",
  },
  {
    slug: "uiux",
    name: "UI/UX Product Design",
    stack: ["Figma", "Tokens", "Research"],
    blurb: "Design real products end-to-end — from research to a shipped interface.",
  },
  {
    slug: "fullstack",
    name: "Full Stack Engineering",
    stack: ["Node.js", "PostgreSQL", "React"],
    blurb: "Own a feature from database to UI inside a real codebase.",
  },
  {
    slug: "backend",
    name: "Backend Development",
    stack: ["Node.js", "APIs", "DB Design"],
    blurb: "Design APIs, model data, and ship reliable services.",
  },
];
