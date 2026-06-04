import Link from "next/link";
export function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to build something real?</h2>
          <p className="text-muted-foreground mb-8">
            Our interns often extend their stay because the value is real. Join the ecosystem today.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918569862853"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-whatsapp text-black px-5 py-3 rounded-lg font-bold hover:brightness-110 transition"
            >
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-lg font-bold hover:bg-foreground/90 transition"
            >
              Apply to Batch
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-12 text-sm">
          <div className="space-y-4">
            <p className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">
              Programs
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors">
                  Frontend Dev
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors">
                  Full Stack
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-primary transition-colors">
                  All Programs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="font-bold uppercase tracking-widest text-[10px] text-muted-foreground">
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/success" className="hover:text-primary transition-colors">
                  Student Success
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} DCT TECHNOLOGY PVT. LTD. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6 uppercase tracking-widest">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Verification</a>
        </div>
      </div>
    </footer>
  );
}
