"use client";
import { useState } from "react";
import { programs } from "../../src/data/programs";
import { toast } from "sonner";

export function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formElement = e.currentTarget;

    try {
      const formData = new FormData(formElement);
      const name = formData.get("name")?.toString().trim();
      const email = formData.get("email")?.toString().trim();
      const number = formData.get("number")?.toString().trim();
      const college = formData.get("college")?.toString().trim();
      const program = formData.get("program")?.toString().trim();
      const message = formData.get("message")?.toString().trim();

      // Client-side validation
      if (!name) {
        toast.error("Please enter your full name.");
        setIsSubmitting(false);
        return;
      }
      if (!email) {
        toast.error("Please enter your email address.");
        setIsSubmitting(false);
        return;
      }
      if (!number) {
        toast.error("Please enter your phone number.");
        setIsSubmitting(false);
        return;
      }
      if (!program) {
        toast.error("Please select a program of interest.");
        setIsSubmitting(false);
        return;
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, number, college, program, message }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit application");
      }

      toast.success("Application submitted successfully!");
      formElement.reset();
      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.message || "Something went wrong while sending your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            Apply Here
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
          onSubmit={handleSubmit}
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
                <Field
                  label="Full name"
                  name="name"
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  disabled={isSubmitting}
                />
              </div>
              <Field
                label="Phone Number"
                name="number"
                type="tel"
                placeholder="8569862853"
                disabled={isSubmitting}
              />
              <Field
                label="College / Institution"
                name="college"
                placeholder="Optional"
                required={false}
                disabled={isSubmitting}
              />
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Program of interest
                </label>
                <select
                  required
                  name="program"
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary outline-none transition disabled:opacity-50"
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
                  name="message"
                  disabled={isSubmitting}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary outline-none transition resize-none disabled:opacity-50"
                  placeholder="Tell us about your current skill level and goals."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-base hover:brightness-110 transition shadow-lg shadow-primary/20 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit application"}
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
  required = true,
  disabled = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
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
        required={required}
        disabled={disabled}
        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:border-primary outline-none transition disabled:opacity-50"
      />
    </div>
  );
}
