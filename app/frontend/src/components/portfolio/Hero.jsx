import { ArrowDownRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[100svh] pt-28 pb-16 px-6 md:px-12 grid-bg overflow-hidden"
    >
      {/* Corner labels */}
      <div className="absolute top-24 right-6 md:right-12 text-[10px] uppercase tracking-[0.3em] text-gray-500 hidden sm:block" data-testid="hero-corner-label">
        [ 01 / Portfolio ] · v.2025
      </div>

      <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-6 md:gap-10 items-end min-h-[80vh]">
        {/* Left column: labels + meta */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
          <div className="fade-up" style={{ animationDelay: "0.05s" }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">01 — Name</div>
            <div className="text-sm text-gray-200">{profile.name}</div>
          </div>
          <div className="fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">02 — Role</div>
            <div className="text-sm text-gray-200">Frontend Dev / UX Designer</div>
          </div>
          <div className="fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">03 — Location</div>
            <div className="text-sm text-gray-200 flex items-center gap-2">
              <MapPin size={12} className="text-[#eab308]" /> {profile.location}
            </div>
          </div>
          <div className="fade-up hidden md:block" style={{ animationDelay: "0.35s" }}>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-2">04 — Status</div>
            <div className="text-sm text-gray-200 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Open to freelance & full-time
            </div>
          </div>
        </div>

        {/* Right column: big headline */}
        <div className="col-span-12 md:col-span-9">
          <h1
            data-testid="hero-headline"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[112px] leading-[0.95] tracking-tight fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Frontend that
            <br />
            <span className="text-[#eab308]">feels</span> intentional.
            <span className="caret text-[#eab308] ml-2">_</span>
          </h1>

          <p
            data-testid="hero-tagline"
            className="mt-8 max-w-2xl text-base sm:text-lg text-gray-300 leading-relaxed fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            {profile.tagline} I'm {profile.name.split(" ")[0]} — a frontend developer & UX
            designer building interfaces where the pixels behave and the users don&apos;t
            have to think twice.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              data-testid="hero-cta-work"
              href="#work"
              className="inline-flex items-center gap-2 bg-[#eab308] text-black px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#ca8a04] transition-colors"
            >
              View selected work <ArrowDownRight size={14} />
            </a>
            <a
              data-testid="hero-cta-contact"
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-xs uppercase tracking-[0.2em] hover:border-[#eab308] hover:text-[#eab308] transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-6 md:left-12 text-[10px] uppercase tracking-[0.3em] text-gray-500 flex items-center gap-3" data-testid="hero-scroll-indicator">
        <span className="inline-block w-8 h-px bg-[#eab308]" /> Scroll to explore
      </div>
    </section>
  );
};