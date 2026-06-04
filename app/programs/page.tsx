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
import { programs } from "../../src/data/programs";

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
