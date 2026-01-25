import React from "react";
import { ArrowDown, Mail, Download } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useT } from "../i18n/useT";

export const Hero: React.FC<{ onScrollTo: (id: string) => void }> = ({ onScrollTo }) => {
  const t = useT();

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-beige overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-nude/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sage/20 rounded-full blur-3xl" />

      <div className="max-w-4xl w-full text-center z-10 space-y-8">
        <FadeIn delay={150}>
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/55 backdrop-blur-sm border border-white/60 text-taupe text-xs font-semibold tracking-wide shadow-sm">
              {t.hero.badge}
            </span>
          </div>

          <h2 className="text-taupe font-medium tracking-wide uppercase text-sm mb-4">Portfolio</h2>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-gray-800 mb-6 tracking-tight leading-tight">
            {t.hero.title}
          </h1>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle1}
            <br />
            <span className="text-taupe font-normal">{t.hero.subtitle2}</span>
          </p>
        </FadeIn>

        <FadeIn delay={450}>
          <div className="p-6 bg-white/40 backdrop-blur-sm rounded-3xl inline-block max-w-2xl border border-white/50 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed">{t.hero.quote}</p>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            {/* LEFT — Download CV (NE PAS TOUCHER) */}
            <a
              href="/CV-2025-CR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-8 py-4 rounded-full font-semibold
                bg-white text-taupe
                border border-taupe/40
                shadow-sm
                transition-all duration-300 ease-out
                hover:bg-[#8B6F63] hover:text-white hover:border-[#8B6F63]
                hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                active:scale-[0.98]
                flex items-center justify-center gap-2
              "
            >
              {t.hero.ctaCV}
              <Download size={18} className="text-current" />
            </a>

            {/* MIDDLE — Contact (fluidité alignée avec CV) */}
            <button
              onClick={() => onScrollTo("contact")}
              className="
                px-8 py-4 rounded-full font-medium
                bg-white text-taupe
                border border-taupe/30
                shadow-sm
                transition-all duration-300 ease-out
                hover:bg-beige hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                active:scale-[0.98]
                flex items-center justify-center gap-2
              "
            >
              {t.hero.ctaContact}
              <Mail size={18} className="text-current" />
            </button>

            {/* RIGHT — Discover (même fluidité mais style secondaire conservé) */}
            <button
              onClick={() => onScrollTo("about")}
              className="
                px-8 py-4 rounded-full font-medium
                bg-white/35 text-gray-700
                border border-white/60
                shadow-sm
                transition-all duration-300 ease-out
                hover:bg-white/60 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]
                active:scale-[0.98]
                flex items-center justify-center gap-2 group
              "
            >
              {t.hero.ctaDiscover}
              <ArrowDown size={18} className="text-current group-hover:translate-y-1 transition-transform duration-300" />
            </button>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};
