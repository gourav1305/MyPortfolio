import { Download, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors ${
        scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-xl border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          data-testid="nav-logo"
          href="#top"
          className="font-display text-lg font-semibold tracking-tight hover:text-[#eab308] transition-colors"
        >
          GS<span className="text-[#eab308]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              href={`#${l.id}`}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#eab308] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="nav-resume"
            href="/resume.txt"
            download
            className="hidden sm:inline-flex items-center gap-2 border border-[#eab308] text-[#eab308] px-4 py-2 text-xs uppercase tracking-[0.18em] hover:bg-[#eab308] hover:text-black transition-colors"
          >
            <Download size={14} /> Resume
          </a>
          <a
            data-testid="nav-cta"
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 bg-[#eab308] text-black px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium hover:bg-[#ca8a04] transition-colors"
          >
            Hire me <ArrowUpRight size={14} />
          </a>
          <button
            data-testid="nav-menu-toggle"
            className="md:hidden text-xs uppercase tracking-[0.2em] text-gray-300 border border-white/10 px-3 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div data-testid="mobile-menu" className="md:hidden border-t border-white/10 bg-[#0a0a0a]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.id}
                data-testid={`mobile-nav-link-${l.id}`}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#eab308]"
              >
                {l.label}
              </a>
            ))}
            <a
              data-testid="mobile-nav-cta"
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1 bg-[#eab308] text-black px-4 py-2 text-xs uppercase tracking-[0.18em] font-medium"
            >
              Hire me <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
