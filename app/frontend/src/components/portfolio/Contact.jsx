import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { profile } from "@/data/portfolio";

const socials = [
  { key: "github", label: "GitHub", icon: Github, url: profile.socials.github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, url: profile.socials.linkedin },
  { key: "twitter", label: "Twitter / X", icon: Twitter, url: profile.socials.twitter },
];

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="px-6 md:px-12 py-24 md:py-32 border-t border-white/10"
    >
      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-5">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#eab308] mb-6">
            § 05 — Say hi
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl tracking-tight leading-[0.9]">
            Got a project?
            <br />
            <span className="text-[#eab308]">Let&apos;s make it good.</span>
          </h2>
          <p className="mt-8 text-sm text-gray-400 max-w-md leading-relaxed">
            I take on a small number of freelance and contract projects at a
            time. Fastest way to reach me is email — I usually reply within a
            day.
          </p>
        </div>

        <div className="col-span-12 md:col-span-7 md:pl-8 md:border-l border-white/10 flex flex-col gap-8">
          <a
            data-testid="contact-email"
            href={`mailto:${profile.email}?subject=Project%20inquiry`}
            className="group border border-white/10 p-8 hover:border-[#eab308] transition-colors"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-3 flex items-center gap-2">
              <Mail size={12} /> Email — primary
            </div>
            <div className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight break-all group-hover:text-[#eab308] transition-colors">
              {profile.email}
              <ArrowUpRight
                className="inline-block ml-2 -translate-y-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                size={22}
              />
            </div>
          </a>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {socials.map(({ key, label, icon: Icon, url }) => (
              <a
                key={key}
                data-testid={`contact-social-${key}`}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="bg-[#0a0a0a] p-6 flex flex-col justify-between h-full hover:bg-[#121212] transition-colors group"
              >
                <Icon size={20} className="text-[#eab308]" />
                <div className="mt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                    /{key}
                  </div>
                  <div className="text-sm mt-1 flex items-center gap-1 group-hover:text-[#eab308] transition-colors">
                    {label}{" "}
                    <ArrowUpRight
                      size={14}
                      className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <a
            data-testid="contact-resume-download"
            href="/resume.txt"
            download
            className="inline-flex items-center justify-center gap-2 bg-[#eab308] text-black px-6 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#ca8a04] transition-colors w-full sm:w-auto self-start"
          >
            <Download size={14} /> Download resume
          </a>
        </div>
      </div>
    </section>
  );
};

