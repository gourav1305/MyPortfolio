import { experience, education } from "@/data/portfolio";

export const Experience = () => {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#eab308] mb-6">
            § 04 — Track record
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95]">
            Where I&apos;ve been shipping.
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8">
          <ol className="relative border-l border-white/10 pl-8 space-y-14">
            {experience.map((e, i) => (
              <li
                key={i}
                data-testid={`experience-item-${i}`}
                className="relative"
              >
                <span className="absolute -left-[41px] top-1.5 h-3 w-3 bg-[#eab308]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl sm:text-2xl">
                    {e.role}{" "}
                    <span className="text-gray-500">— {e.company}</span>
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    {e.period}
                  </span>
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-gray-600 mt-1">
                  {e.location}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-300 leading-relaxed">
                  {e.points.map((pt, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-[#eab308] mt-0.5">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="mt-16 border-t border-white/10 pt-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#eab308] mb-6">
              Education & Certifications
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {education.map((ed, i) => (
                <div
                  key={i}
                  data-testid={`education-item-${i}`}
                  className="bg-[#0a0a0a] p-5"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">
                    {ed.period}
                  </div>
                  <div className="font-display text-lg">{ed.degree}</div>
                  <div className="text-sm text-gray-400 mt-1">{ed.school}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
