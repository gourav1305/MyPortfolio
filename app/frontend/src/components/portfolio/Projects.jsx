import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section
      id="work"
      data-testid="projects-section"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 md:gap-12 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[#eab308] mb-6">
              § 03 — Selected work
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95]">
              Things I&apos;ve built that didn&apos;t embarrass me.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-white/10 flex items-end">
            <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
              Three projects, each led with the problem — not the tech. If you
              want the boring stuff (case studies, decisions, dead ends), I&apos;ll
              send them on request.
            </p>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              data-testid={`project-${p.id}`}
              className="grid grid-cols-12 gap-6 md:gap-10 group"
            >
              {/* Image */}
              <div
                className={`col-span-12 md:col-span-7 ${
                  idx % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden border border-white/10 bg-[#121212]">
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    loading="lazy"
                    className="w-full h-[280px] sm:h-[420px] object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-[#eab308]">
                    {p.id} · {p.year}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`col-span-12 md:col-span-5 flex flex-col justify-center ${
                  idx % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight">
                  {p.name}
                </h3>

                <div className="mt-6 space-y-4 text-sm text-gray-300 leading-relaxed">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                      Problem
                    </div>
                    {p.problem}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                      Role
                    </div>
                    {p.role}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-1">
                      Outcome
                    </div>
                    {p.outcome}
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="text-[11px] px-2.5 py-1 border border-white/10 text-gray-300"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex gap-3">
                  <a
                    data-testid={`project-${p.id}-demo`}
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#eab308] text-black px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#ca8a04] transition-colors"
                  >
                    Live <ArrowUpRight size={14} />
                  </a>
                  <a
                    data-testid={`project-${p.id}-code`}
                    href={p.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

