import type { Metadata, Viewport } from "next";
import { SiteHeader } from "../src/components/SiteHeader";
import { SiteFooter } from "../src/components/SiteFooter";
import { Toaster } from "sonner";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "DCT Technology — Real IT Internships, Not Just Courses",
  description:
    "DCT Technology Pvt. Ltd. trains interns inside real engineering teams. Theory plus production-grade projects, daily mentorship, and a growth-first internship.",
  authors: [{ name: "DCT Technology Pvt. Ltd." }],
  openGraph: {
    title: "DCT Technology — Real IT Internships, Not Just Courses",
    description:
      "Theory plus real client projects. Daily mentorship. Grow until you're industry-ready.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/image.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
