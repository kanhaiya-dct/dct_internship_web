"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  { to: "/programs", label: "Programs" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/success", label: "Success" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link
          href="/"
          className="font-mono font-bold tracking-tighter text-lg text-foreground justify-self-start"
        >
          DCT<span className="text-primary">.</span>TECH
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground justify-self-center">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className="hover:text-foreground transition-colors"
              style={{ textDecoration: "none" }}
            >
              {n.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden" />
        <div className="flex items-center gap-3 justify-self-end">
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Apply Now
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center size-9 rounded-md border border-border"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="w-4 h-px bg-foreground" />
              <span className="w-4 h-px bg-foreground" />
              <span className="w-4 h-px bg-foreground" />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold"
          >
            Apply Now
          </Link>
        </div>
      )}
    </nav>
  );
}
