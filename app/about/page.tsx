import type { Metadata } from "next";
import { aboutFeatures } from "../../src/data/aboutFeatures";

export const metadata: Metadata = {
  title: "About — DCT Technology",
  description:
    "DCT Technology Pvt. Ltd. — an industry-driven learning and real work experience company. Mentorship-first, growth-focused.",
  openGraph: {
    title: "About — DCT Technology",
    description: "Why DCT exists, what we believe, and how we work with interns.",
  },
};

export default function AboutPage() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">About DCT</p>
        <h1 className="text-5xl font-extrabold tracking-tight mb-8">
          We're an IT company that genuinely cares about interns.
        </h1>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            DCT Technology Pvt. Ltd. started because we saw two broken patterns. Coaching institutes
            were charging heavy fees and delivering only theory. IT companies were dumping work on
            interns without teaching them anything.
          </p>
          <p>
            We built DCT as the middle path — a place where students get strong fundamentals, then
            immediately apply them on real company projects with mentors sitting next to them.
          </p>
          <p>
            Our philosophy is simple:{" "}
            <span className="text-foreground font-medium">growth over duration</span>. If an intern
            needs more time to reach confidence, we extend their internship. We'd rather you leave
            us as a real developer than rush you to a certificate.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {aboutFeatures.map((feat) => (
            <div key={feat.title} className="p-6 rounded-2xl border border-border bg-surface">
              <h3 className="font-bold mb-2">{feat.title}</h3>
              <p className="text-sm text-muted-foreground">{feat.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Director Message */}
      <div className="max-w-6xl mx-auto mt-32">
        <div className="grid md:grid-cols-5 gap-10 items-start p-8 md:p-12 rounded-3xl border border-border bg-surface">
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_60%)]" />
              <span className="font-mono text-6xl font-bold text-primary/60 relative">DCT</span>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur border border-border">
                <p className="font-bold text-sm">Director</p>
                <p className="text-xs text-muted-foreground font-mono">DCT Technology Pvt. Ltd.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-3 space-y-5">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              A message from our director
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Building practical learning experiences for real growth
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At DCT Technology Pvt. Ltd., we believe students learn best when they build,
                practice, and work inside real practical environments.
              </p>
              <p>
                Our goal is not just to teach concepts, but to help students gain confidence through
                implementation, mentorship, and real workflow exposure.
              </p>
              <p>
                We understand that many students invest their time, energy, and money hoping to
                build a better future. That responsibility matters deeply to us.
              </p>
              <p>
                That is why we focus on practical learning, guided mentorship, project-based growth,
                and continuous improvement instead of rushed teaching or theory-only learning.
              </p>
              <p className="text-foreground">
                We want students to leave with confidence, experience, and the ability to work in
                real environments — not just certificates.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <p className="font-mono text-sm text-primary">— Director, DCT Technology Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
