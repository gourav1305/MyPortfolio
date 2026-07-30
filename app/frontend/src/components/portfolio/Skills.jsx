import { skills, marqueeTags } from "@/data/portfolio";

const groups = [
  { key: "frontend", label: "Frontend" },
  { key: "design", label: "Design" },
  { key: "tools", label: "Tools" },
  { key: "craft", label: "Craft" },
];

export const Skills = () => {
  const tags = [...marqueeTags, ...marqueeTags];
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="border-t border-white/10 overflow-hidden"
    >
      {/* Kinetic marquee */}
      <div className="py-10 border-b border-white/10 bg-[#0a0a0a]" data-testid="skills-marquee">
        <div className="marquee-track">
          {tags.map((t, i) => (
            <span
              key={i}
              className="font-display text-4xl sm:text-6xl md:text-7xl px-6 md:px-10 whitespace-nowrap text-stroke"
            >
              {t} <span className="text-[#eab308]">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#eab308] mb-6">
              § 02 — Toolbelt
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95]">
              The kit I ship with.
            </h2>
            <p className="mt-6 text-sm text-gray-400 max-w-md leading-relaxed">
              Opinions, not religion. I pick tools by fit — same reason I don&apos;t
              use a scalpel to open a package.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {groups.map((g) => (
              <div
                key={g.key}
                data-testid={`skill-group-${g.key}`}
                className="bg-[#0a0a0a] p-6"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4">
                  / {g.label}
                </div>
                <ul className="flex flex-wrap gap-2">
                  {skills[g.key].map((s) => (
                    <li
                      key={s}
                      className="text-xs px-3 py-1.5 border border-white/10 text-gray-200 hover:border-[#eab308] hover:text-[#eab308] transition-colors"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
