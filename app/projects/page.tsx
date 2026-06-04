import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Projects — DCT Technology",
  description:
    "Internal tools, client products, and design systems built by DCT Technology interns inside real engineering teams.",
  openGraph: {
    title: "Real Projects — DCT Technology",
    description: "Proof of work — actual production projects shipped by our interns.",
  },
};

const projects = [
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

function Projects() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Proof of work
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Real projects, not capstone toys.
          </h1>
          <p className="text-lg text-muted-foreground">
            We don't hide behind testimonials. Here is the kind of work our interns ship inside DCT
            — internal tools, client products, and design systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl border border-border bg-surface overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-primary/5 border-b border-border grid place-items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground px-4 text-center">
                  {p.name}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{p.name}</h3>
                  <span className="text-[10px] font-mono text-primary">{p.role}</span>
                </div>
                <p className="text-sm text-muted-foreground">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 bg-white/5 border border-border text-muted-foreground text-[10px] font-mono rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:brightness-110 transition shadow-lg shadow-primary/20"
          >
            Become part of the next project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
