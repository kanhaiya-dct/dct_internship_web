export interface Mentor {
  initials: string;
  name: string;
  role: string;
  teaches: string[];
  tools: string[];
  desc: string;
}

export const mentors: Mentor[] = [
  {
    initials: "AY",
    name: "Amit Yadav",
    role: "Backend Developer",
    teaches: ["Node.js", "APIs", "MongoDB", "Authentication", "Backend Architecture"],
    tools: ["Node.js", "Express", "MongoDB", "GitHub", "Postman"],
    desc: "Focuses on practical backend workflows, API integration, and helping students understand real development environments.",
  },
  {
    initials: "UX",
    name: "UI/UX Mentor",
    role: "Product & UI/UX Designer",
    teaches: ["Figma", "UX Research", "Design Systems", "Responsive Design", "Product Thinking"],
    tools: ["Figma", "Framer", "Adobe XD", "Notion"],
    desc: "Helps students understand how modern digital products are designed through practical UI/UX workflows and real project execution.",
  },
  {
    initials: "FE",
    name: "Frontend Mentor",
    role: "Frontend Developer",
    teaches: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Development",
      "Component Architecture",
    ],
    tools: ["React", "Next.js", "Tailwind", "GitHub", "Firebase"],
    desc: "Guides students in building responsive modern interfaces with practical frontend development practices.",
  },
];
