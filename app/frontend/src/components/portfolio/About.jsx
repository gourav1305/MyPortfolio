import { profile } from "@/data/portfolio";

export const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#eab308] mb-6">
            § 01 — About
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95]">
            Half engineer, half designer, full nerd.
          </h2>
          <div className="mt-8 hidden md:block border border-white/10 p-4 text-xs text-gray-400 leading-relaxed">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">
              Currently
            </div>
            Freelancing from Bhilai · reading &quot;A Philosophy of Software
            Design&quot; · rebuilding my Figma library.
          </div>
        </div>

        <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-white/10">
          <div className="space-y-6 max-w-2xl text-base leading-relaxed text-gray-200">
            {profile.bio.map((p, i) => (
              <p key={i} data-testid={`about-paragraph-${i}`}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { k: "Years shipping", v: "2+" },
              { k: "Projects", v: "20" },
              { k: "Coffees / week", v: "≈ 18" },
              { k: "Time zone", v: "IST" },
            ].map((s) => (
              <div
                key={s.k}
                data-testid={`about-stat-${s.k.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-[#0a0a0a] p-5"
              >
                <div className="font-display text-2xl md:text-3xl text-[#eab308]">
                  {s.v}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.25em] text-gray-500">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};