import { profile } from "@/data/portfolio";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-white/10 px-6 md:px-12 py-10"
    >
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-[11px] uppercase tracking-[0.25em] text-gray-500">
        <div>
          © {year} {profile.name}. Built with{" "}
          <span className="text-[#eab308]">React</span> and stubbornness.
        </div>
        <div className="flex gap-6">
          <a
            data-testid="footer-back-to-top"
            href="#top"
            className="hover:text-[#eab308] transition-colors"
          >
            ↑ Back to top
          </a>
          <a
            data-testid="footer-email"
            href={`mailto:${profile.email}`}
            className="hover:text-[#eab308] transition-colors"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
};
