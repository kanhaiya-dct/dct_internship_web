import type { Metadata } from "next";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../src/components/ui/accordion";
import { workflow } from "../src/data/workflow";
import { mentors } from "../src/data/mentors";
import { faqs } from "../src/data/faqs";
import { featuredPrograms as programs } from "../src/data/programs";

export const metadata: Metadata = {
  title: "DCT Technology — Real IT Internships, Not Just Courses",
  description:
    "Stop watching tutorials. Start shipping features. DCT Technology trains interns inside real engineering teams with daily mentorship and production projects.",
  openGraph: {
    title: "DCT Technology — Real IT Internships, Not Just Courses",
    description:
      "Theory plus real client projects. Daily mentorship. Grow until you're industry-ready.",
  },
};

function Index() {
  return (
    <div className="font-display selection:bg-primary/30">
      {/* Hero — asymmetric editorial */}
      <section className="pt-24 pb-20 px-6 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse at top left, black 30%, transparent 75%)",
          }}
        />
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-y-12 gap-x-6 items-end">
          {/* Left: oversized headline */}
          <div className="col-span-12 md:col-span-8 animate-reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              INTERNSHIP APPLICATIONS OPEN
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-balance leading-[0.9]">
              {"Stop watching tutorials.".split(" ").map((w, i) => (
                <span
                  key={`a-${i}`}
                  className="inline-block opacity-0 animate-word-in mr-[0.25em]"
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  {w}
                </span>
              ))}
              <br />
              {"Start shipping features.".split(" ").map((w, i) => (
                <span
                  key={`b-${i}`}
                  className="inline-block opacity-0 animate-word-in text-muted-foreground mr-[0.25em]"
                  style={{ animationDelay: `${(i + 3) * 140}ms` }}
                >
                  {w}
                </span>
              ))}
            </h1>
          </div>

          {/* Right: offset subtitle + CTAs */}
          <div className="col-span-12 md:col-span-4 md:pl-6 md:border-l border-border space-y-8">
            <div className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="h-px flex-1 bg-border" />
              <span>01 / Intro</span>
            </div>
            <p
              className="text-base md:text-lg text-muted-foreground text-pretty opacity-0 animate-word-in"
              style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
            >
              A real IT internship at{" "}
              <span className="text-foreground font-medium">DCT Technology Pvt. Ltd.</span> We don't
              just teach theory — we build production-grade software together through actual company
              projects.
            </p>
            <div
              className="flex flex-col sm:flex-row md:flex-col gap-3 opacity-0 animate-word-in"
              style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
            >
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-6 py-4 rounded-xl font-bold text-center hover:brightness-110 transition shadow-lg shadow-primary/20"
              >
                Start Internship →
              </Link>
               <Link
                href="/projects"
                className="border border-border bg-white/5 px-6 py-4 rounded-xl font-bold text-center hover:bg-white/10 transition"
              >
                Explore Projects
              </Link>
            </div>
            <div
              className="grid grid-cols-2 gap-4 pt-6 border-t border-border opacity-0 animate-word-in"
              style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
            >
              <div>
                <p className="text-2xl font-extrabold text-primary">1:1</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  Daily Mentorship
                </p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-primary">Real</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mt-1">
                  Client Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 border-y border-border bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-xl mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
              Why DCT is different
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Most institutes sell certificates. We give you an engineering team.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            <div className="p-10 bg-background space-y-6">
              <h3 className="text-lg font-semibold text-muted-foreground">
                Other institutes / IT companies
              </h3>
              <ul className="space-y-4 text-sm">
                {[
                  "Only theory and recorded videos",
                  "Fake capstone projects no one ships",
                  "Limited or no real mentorship",
                  "Rigid duration, rushed completion",
                  "Heavy fees, low actual outcome",
                ].map((t) => (
                  <li key={t} className="flex gap-3 opacity-70">
                    <span className="text-destructive mt-0.5">✕</span>
                    <span className="text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 bg-surface space-y-6 relative">
              <span className="absolute top-4 right-4 bg-primary/15 text-primary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-primary/30">
                DCT Way
              </span>
              <h3 className="text-lg font-semibold">DCT Technology Pvt. Ltd.</h3>
              <ul className="space-y-4 text-sm">
                {[
                  ["Theory + practical", "Concepts you immediately apply on real code."],
                  ["Real company projects", "Internal tools and live client work, not toy apps."],
                  ["Daily mentorship", "1-on-1 code reviews and architectural guidance."],
                  ["Growth-first duration", "Extend until you're confident — no rushing."],
                  ["Honest outcomes", "Real skill, real portfolio, real workflow exposure."],
                ].map(([title, body]) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>
                      <span className="text-foreground font-medium">{title}: </span>
                      <span className="text-muted-foreground">{body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight">What you actually get</h3>
            <ul className="space-y-5">
              {[
                [
                  "Daily Mentorship",
                  "Not just a group chat — real 1-on-1 code reviews and strategic guidance.",
                ],
                [
                  "Production Workflows",
                  "Git, PR reviews, Jira, Slack, CI/CD — the tools real teams use to ship.",
                ],
                [
                  "Real Project Portfolio",
                  "Links to live features you helped build, not dead GitHub repos.",
                ],
                [
                  "Industry Exposure",
                  "Sit inside our team rituals — standups, design reviews, retros.",
                ],
              ].map(([t, b]) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="size-5 rounded-full bg-primary/20 border border-primary/40 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="text-sm text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight opacity-60">What we don't promise</h3>
            <ul className="space-y-5">
              {[
                [
                  "Fake 100% placement banners",
                  "We build skills that make placements inevitable, not marketing fluff.",
                ],
                [
                  "Shortcuts or quick certificates",
                  "Real engineering takes time. We prioritise depth.",
                ],
                [
                  "Overnight transformation",
                  "You'll grow steadily. We just make sure the growth is real.",
                ],
                [
                  "Empty promises to your parents",
                  "We show real work, real mentors, real projects — and stand by them.",
                ],
              ].map(([t, b]) => (
                <li key={t} className="flex items-start gap-3 opacity-70">
                  <span className="size-5 rounded-full border border-white/20 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">{t}</p>
                    <p className="text-sm text-muted-foreground">{b}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                How it works
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight mb-4">The Workflow</h2>
              <p className="text-muted-foreground">
                We care about your growth more than the internship duration. Our 5-step journey
                transforms learners into engineers.
              </p>
            </div>
            <div className="font-mono text-sm text-primary">01 / FUNDAMENTALS → 05 / PORTFOLIO</div>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {workflow.map((w) => (
              <div
                key={w.step}
                className={`p-6 rounded-2xl border transition-colors ${
                  w.highlight
                    ? "border-primary/30 bg-primary/10"
                    : "border-border bg-white/[0.03] hover:border-primary/50"
                }`}
              >
                <div
                  className={`text-xs font-mono mb-4 ${w.highlight ? "text-primary" : "text-muted-foreground"}`}
                >
                  STEP {w.step}
                </div>
                <h4 className="font-bold mb-2">{w.title}</h4>
                <p className="text-xs text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs preview */}
      <section className="py-24 px-6 border-t border-border bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-12">
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
                Programs
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight">Pick a track. Join a team.</h2>
            </div>
            <Link href="/programs" className="text-primary font-medium hover:underline">
              View all programs →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <Link
                key={p.slug}
                href="/programs"
                className="p-6 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-colors flex flex-col gap-4"
              >
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  /{p.slug}
                </p>
                <h4 className="font-bold text-lg">{p.name}</h4>
                <p className="text-sm text-muted-foreground flex-1">{p.blurb}</p>
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">Mentors</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Meet the mentors behind student growth
            </h2>
            <p className="text-muted-foreground">
              Our mentors focus on practical learning, implementation, and helping students gain
              confidence through real workflows and project-based guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((m) => (
              <div
                key={m.name}
                className="p-6 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-colors flex flex-col gap-5"
              >
                <div className="flex items-center gap-4">
                  <div className="size-14 rounded-xl bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/30 flex items-center justify-center font-mono font-bold text-primary">
                    {m.initials}
                  </div>
                  <div>
                    <h4 className="font-bold leading-tight">{m.name}</h4>
                    <p className="text-xs text-muted-foreground font-mono mt-1">{m.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{m.desc}</p>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Teaches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.teaches.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-mono rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Tools
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">{m.tools.join(" • ")}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-border bg-white/[0.02]">
            <h3 className="font-bold mb-2">What students learn from our mentors</h3>
            <p className="text-sm text-muted-foreground">
              Students don't just attend sessions — they learn how real workflows, collaboration,
              implementation, and project execution happen inside practical development
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial strip */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
            Why interns extend
          </p>
          <blockquote className="text-2xl md:text-3xl font-medium tracking-tight text-balance leading-snug">
            "Mujhe pehli baar laga ki main sirf course nahi kar raha — main ek real team ka hissa
            hoon. Yahi reason hai ki maine apni internship extend karwayi."
          </blockquote>
          <p className="mt-6 text-sm text-muted-foreground font-mono">
            — Intern · Frontend Track · Extended 3 months
          </p>
          <Link
            href="/success"
            className="inline-block mt-8 text-primary font-medium hover:underline"
          >
            Read more student stories →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 border-t border-border bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">FAQ</p>
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">
              Questions students usually ask
            </h2>
            <p className="text-muted-foreground">
              We believe students should clearly understand how learning works at DCT Technology
              before starting their journey.
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-xl bg-surface px-5"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:brightness-110 transition shadow-lg shadow-primary/20"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
