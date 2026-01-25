import React from "react";
import { TIMELINE_DATA } from "../constants";
import { FadeIn } from "./FadeIn";
import { MapPin } from "lucide-react";

export const Timeline: React.FC = () => {
  return (
    <section
      id="timeline"
      className="py-24 px-6 bg-gradient-to-b from-beige/50 to-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative isolate">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-nude/40 text-taupe text-sm font-medium mb-4">
              My Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 font-bold">
              Academic &amp; Professional Path
            </h2>
          </div>
        </FadeIn>

        {/* ✅ Ligne centrale FIXÉE */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-8 md:left-1/2 top-24 bottom-10 md:-translate-x-1/2 z-10"
          style={{
            width: "3px",
            background:
              "linear-gradient(to bottom, rgba(139,111,99,0.35), rgba(139,111,99,0.55), rgba(139,111,99,0))",
            borderRadius: "999px",
          }}
        />

        <div className="relative z-20 space-y-12">
          {TIMELINE_DATA.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-12 items-center"
              >
                {/* Dot */}
                <div
                  className="absolute left-8 md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-sage shadow-[0_0_0_4px_rgba(247,239,232,1)] z-30 -translate-x-1/2 transition-all duration-300 hover:scale-125 hover:border-taupe"
                  aria-hidden="true"
                />

                {/* Colonne gauche */}
                <div className="pl-20 md:pl-0">
                  {isEven && (
                    <FadeIn delay={index * 120}>
                      <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-nude/30 md:text-right md:mr-12">
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-taupe/20 w-12 -right-12" />

                        <div className="flex items-center gap-2 mb-3 md:justify-end">
                          <span className="inline-block px-3 py-1 rounded-full bg-beige text-xs font-bold text-taupe tracking-wide">
                            {item.years}
                          </span>
                          {item.location && (
                            <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                              <MapPin size={12} className="text-taupe/70" />
                              {item.location}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-xl font-bold text-gray-800 mb-1 hover:text-taupe transition-colors">
                          {item.title}
                        </h3>

                        <div className="text-nude font-semibold text-sm uppercase tracking-wider mb-3">
                          {item.subtitle}
                        </div>

                        {item.description && (
                          <p className="text-gray-500 text-sm leading-relaxed opacity-90">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </FadeIn>
                  )}
                </div>

                {/* Colonne droite */}
                <div className="pl-20 md:pl-0">
                  {!isEven && (
                    <FadeIn delay={index * 120}>
                      <div className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-white/60 hover:border-nude/30 md:ml-12">
                        <div className="hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-taupe/20 w-12 -left-12" />

                        <div className="flex items-center gap-2 mb-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-beige text-xs font-bold text-taupe tracking-wide">
                            {item.years}
                          </span>
                          {item.location && (
                            <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                              <MapPin size={12} className="text-taupe/70" />
                              {item.location}
                            </span>
                          )}
                        </div>

                        <h3 className="font-display text-xl font-bold text-gray-800 mb-1 hover:text-taupe transition-colors">
                          {item.title}
                        </h3>

                        <div className="text-nude font-semibold text-sm uppercase tracking-wider mb-3">
                          {item.subtitle}
                        </div>

                        {item.description && (
                          <p className="text-gray-500 text-sm leading-relaxed opacity-90">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </FadeIn>
                  )}
                </div>

                {/* Mobile fallback */}
                <div className="md:hidden pl-20">
                  <FadeIn delay={index * 120}>
                    <div className="relative bg-white p-8 rounded-3xl shadow-sm border border-white/60">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-beige text-xs font-bold text-taupe tracking-wide">
                          {item.years}
                        </span>
                        {item.location && (
                          <span className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                            <MapPin size={12} className="text-taupe/70" />
                            {item.location}
                          </span>
                        )}
                      </div>

                      <h3 className="font-display text-xl font-bold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <div className="text-nude font-semibold text-sm uppercase tracking-wider mb-3">
                        {item.subtitle}
                      </div>
                      {item.description && (
                        <p className="text-gray-500 text-sm leading-relaxed opacity-90">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
