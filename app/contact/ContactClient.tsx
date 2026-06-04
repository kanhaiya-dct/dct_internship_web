"use client";
import { useState } from "react";
import { programs } from "../../src/data/programs";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Apply / ContactClient
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Talk to a real human.</h1>
          <p className="text-lg text-muted-foreground mb-10">
            No bots. No call-center scripts. Fill the form or message us directly on WhatsApp — a
            mentor will reply.
          </p>

          <div className="space-y-4">
            <a
              href="https://wa.me/918569862853"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 rounded-xl border border-border bg-surface hover:border-primary/50 transition"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                  WhatsApp
                </p>
                <p className="font-bold">Chat with a mentor</p>
              </div>
              <span className="text-primary">→</span>
            </a>
            <a
              href="mailto:hr@dctinfotech.com"
              className="flex items-center justify-between p-5 rounded-xl border border-border bg-surface hover:border-primary/50 transition"
            >
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                  Email
                </p>
                <p className="font-bold">hr@dctinfotech.com</p>
              </div>
              <span className="text-primary">→</span>
            </a>
            <div className="p-5 rounded-xl border border-border bg-surface">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                Office
              </p>
              <p className="font-bold">DCT Technology Pvt. Ltd.</p>
              <p className="text-sm text-muted-foreground mt-1">
                India · Hybrid + Remote internships
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="p-8 rounded-3xl border border-border bg-surface space-y-5"
        >
          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="size-12 mx-auto rounded-full bg-primary/20 border border-primary/40 grid place-items-center text-primary text-2xl">
                ✓
              </div>
              <h3 className="text-xl font-bold">Application received</h3>
              <p className="text-muted-foreground text-sm">
                A mentor will reach out within 1–2 working days.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              </div>
              <Field label="Phone Number" name="number" type="tel" placeholder="8569862853" />
              <Field label="College / Institution" name="college" placeholder="Optional" />
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Program of interest
                </label>
                <select
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary outline-none transition"
                >
                  {programs.map((p) => (
                    <option key={p.slug} value={p.slug}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary outline-none transition resize-none"
                  placeholder="Tell us about your current skill level and goals."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-base hover:brightness-110 transition shadow-lg shadow-primary/20"
              >
                Submit application
              </button>
              <p className="text-[10px] text-center text-muted-foreground">
                No placement guarantees. No shortcuts. Only real skill, real mentorship, real
                projects.
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-xs font-mono uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary outline-none transition"
      />
    </div>
  );
}
