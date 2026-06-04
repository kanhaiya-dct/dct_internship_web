import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Student Success — DCT Technology",
  description:
    "Real intern stories from DCT Technology — transformation, projects shipped, and confidence built.",
  openGraph: {
    title: "Student Success — DCT Technology",
    description: "Why our interns keep extending their internships.",
  },
};

const stories = [
  {
    name: "Frontend Intern",
    track: "React + Tailwind",
    quote:
      "Pehle main sirf tutorials dekhta tha. Yahan first hi week mein mujhe production code mein PR raise karna pada — wahi se confidence build hua.",
    outcome: "Extended internship by 3 months. Now leads UI for an internal tool.",
  },
  {
    name: "UI/UX Intern",
    track: "Product Design",
    quote:
      "Maine pehli baar dekha ki real design system kaise banta hai. Mentor ne har design pe detail feedback diya — ye coaching mein kabhi nahi milta.",
    outcome: "Built the DCT internal design system. Portfolio + 2 client case studies.",
  },
  {
    name: "Full Stack Intern",
    track: "Node + React",
    quote:
      "Sirf certificate ke liye nahi aaya tha — actual engineer banna tha. DCT mein database design se UI tak sab kuch khud handle kiya.",
    outcome: "Shipped a feature live for an active client. Extended by 2 months.",
  },
];

function Success() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Student success
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Why interns extend their stay.
          </h1>
          <p className="text-lg text-muted-foreground">
            Real stories from interns who chose growth over a quick certificate. No fake polish —
            just honest transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s) => (
            <article
              key={s.quote}
              className="p-8 rounded-2xl border border-border bg-surface flex flex-col gap-6"
            >
              <blockquote className="text-base leading-relaxed">"{s.quote}"</blockquote>
              <div className="mt-auto pt-6 border-t border-border">
                <p className="font-bold">{s.name}</p>
                <p className="text-xs font-mono text-muted-foreground mb-3">{s.track}</p>
                <p className="text-sm text-primary">{s.outcome}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/contact"
            className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:brightness-110 transition shadow-lg shadow-primary/20"
          >
            Start your own story
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Success;
