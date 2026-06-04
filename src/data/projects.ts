export interface Project {
  name: string;
  role: string;
  stack: string[];
  blurb: string;
}

export const projects: Project[] = [
  {
    name: "Internal HR Portal",
    role: "Frontend + API",
    stack: ["React", "Node.js", "PostgreSQL"],
    blurb: "Employee management suite with role-based access used inside DCT.",
  },
  {
    name: "Client CMS Dashboard",
    role: "Full Stack",
    stack: ["Next.js", "Prisma", "Tailwind"],
    blurb: "Content workflow tool shipped for an active retail client.",
  },
  {
    name: "DCT Design System",
    role: "UI/UX",
    stack: ["Figma", "Tokens", "Storybook"],
    blurb: "Scalable component library powering multiple internal products.",
  },
  {
    name: "Learner Progress App",
    role: "Mobile",
    stack: ["React Native", "Firebase"],
    blurb: "Tracks intern progress, reviews, and project milestones.",
  },
  {
    name: "Lead Capture Funnel",
    role: "Frontend",
    stack: ["React", "Forms", "Analytics"],
    blurb: "Marketing funnel + CRM sync for a B2B SaaS client.",
  },
  {
    name: "Inventory API",
    role: "Backend",
    stack: ["Node.js", "PostgreSQL", "REST"],
    blurb: "Production-grade API powering a multi-warehouse inventory product.",
  },
];
