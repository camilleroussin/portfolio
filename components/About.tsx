import React from "react";
import { FadeIn } from "./FadeIn";
import { useT } from "../i18n/useT";

export const About: React.FC = () => {
  const t = useT();

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white relative">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-beige rounded-full blur-3xl opacity-60 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nude/10 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          {/* Left Side (sticky like before) */}
          <div className="md:w-5/12 md:sticky md:top-32">
            {/* IMPORTANT: FadeIn without translate to keep sticky smooth */}
            <FadeIn direction="none">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-taupe" />
                <span className="text-taupe uppercase tracking-widest text-xs font-semibold">
                  {t.about.eyebrow}
                </span>
              </div>

              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 leading-[1.15] mb-8">
                {t.about.headlineA}
                <br />
                {t.about.headlineB}
                <br />
                <span className="text-nude">{t.about.headlineC}</span>
              </h2>

              <p className="text-gray-500 text-base leading-relaxed max-w-sm">
                {t.about.left}
              </p>
            </FadeIn>
          </div>

          {/* Right Side */}
          <div className="md:w-7/12 mt-4 md:mt-0">
            <FadeIn delay={200}>
              <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-8">
                {t.about.lead}
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="space-y-8 text-gray-600 text-lg leading-loose">
                <p>{t.about.p1}</p>

                <div className="pt-6 border-t border-gray-100 space-y-6">
                  <p>{t.about.p2}</p>
                  <p className="font-medium text-gray-800">{t.about.p3}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
