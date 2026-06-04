import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — DCT Technology",
  description:
    "Internship programs across Frontend, Backend, Full Stack, UI/UX Design and more. Real projects, real mentorship.",
  openGraph: {
    title: "Programs — DCT Technology",
    description: "Pick a track. Learn theory + practical, then ship real company projects.",
  },
};

const programs = [
  {
    slug: "frontend",
    name: "Frontend Development",
    duration: "3–6 months",
    stack: ["React", "TypeScript", "Tailwind", "Next.js"],
    blurb:
      "Build production interfaces with modern tooling, design systems, and accessibility in mind.",
  },
  {
    slug: "uiux",
    name: "UI/UX Product Design",
    duration: "3–6 months",
    stack: ["Figma", "Tokens", "Research", "Prototyping"],
    blurb:
      "Design real products end-to-end — from user research and wireframes to a shipped interface.",
  },
  {
    slug: "fullstack",
    name: "Full Stack Engineering",
    duration: "4–6 months",
    stack: ["Node.js", "PostgreSQL", "React", "REST"],
    blurb:
      "Own a feature from database to UI inside a real codebase. Learn how product teams actually work.",
  },
  {
    slug: "backend",
    name: "Backend Development",
    duration: "3–6 months",
    stack: ["Node.js", "APIs", "DB Design", "Auth"],
    blurb:
      "Design APIs, model data, and ship reliable services with logging, error handling, and tests.",
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

function Programs() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Programs</p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Real internship tracks. No filler.
          </h1>
          <p className="text-lg text-muted-foreground">
            Every track combines focused fundamentals with real project work. You'll sit inside an
            active team, not a classroom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div
              key={p.slug}
              className="p-6 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-colors flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  /{p.slug}
                </p>
                <p className="text-[10px] font-mono text-primary">{p.duration}</p>
              </div>
              <h2 className="font-bold text-xl">{p.name}</h2>
              <p className="text-sm text-muted-foreground flex-1">{p.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-1 bg-white/5 border border-border text-muted-foreground text-[10px] font-mono rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit text-sm font-semibold text-primary hover:underline"
              >
                Apply for this track →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Programs;
