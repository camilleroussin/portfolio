import React from "react";
import { EXPERIENCE_DATA } from "../constants";
import { FadeIn } from "./FadeIn";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export const Experiences: React.FC = () => {
  const { lang } = useLanguage();

  const t = {
    pill: lang === "fr" ? "Expériences" : "Career",
    title: lang === "fr" ? "Expériences professionnelles" : "Professional Experiences",
  };

  return (
    <section id="experiences" className="py-24 px-6 bg-beige/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-taupe/10 text-taupe text-sm font-medium mb-4">
              {t.pill}
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-800 font-bold">
              {t.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {EXPERIENCE_DATA.map((exp, index) => {
            const tasks = Array.isArray(exp.tasks) ? exp.tasks : exp.tasks?.[lang] ?? [];

            return (
              <FadeIn key={index} delay={index * 150} className="h-full">
                <div className="group h-full bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(139,111,99,0.15)] hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-nude/50 relative overflow-hidden flex flex-col">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-nude/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex items-start justify-between mb-6 relative z-10">
                    {/* ✅ FIX: icon NEVER turns white on hover */}
                    <div
                      className={[
                        "w-14 h-14 rounded-2xl flex items-center justify-center",
                        "bg-beige border border-black/5",
                        "transition-all duration-300",
                        // hover effect without changing icon color
                        "group-hover:bg-beige group-hover:scale-110 group-hover:-rotate-6",
                        "shadow-sm",
                      ].join(" ")}
                      aria-hidden="true"
                    >
                      <Briefcase
                        size={24}
                        className={[
                          // force lucide stroke to follow currentColor
                          "stroke-current",
                          "shrink-0",
                          // IMPORTANT: lock color (even if a parent/global style tries to set white)
                          "!text-taupe",
                          "group-hover:!text-taupe",
                        ].join(" ")}
                      />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-500 group-hover:border-nude/30 transition-colors">
                        <Calendar size={12} className="stroke-current text-gray-500" />
                        <span>{exp.period}</span>
                      </div>

                      {exp.location && (
                        <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                          <MapPin size={12} className="stroke-current text-taupe/70" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6 relative z-10">
                    <h3 className="font-display text-2xl font-bold text-gray-800 mb-2 group-hover:text-taupe transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <div className="text-base font-medium text-nude uppercase tracking-wide text-sm">
                      {typeof exp.role === "string" ? exp.role : exp.role?.[lang]}
                    </div>
                  </div>

                  <hr className="border-gray-100 mb-6 group-hover:border-nude/20 transition-colors duration-300" />

                  <div className="flex-grow relative z-10">
                    <ul className="space-y-3">
                      {tasks.map((task: string, tIdx: number) => (
                        <li
                          key={tIdx}
                          className="text-sm text-gray-600 flex items-start gap-3 group-hover:text-gray-700 transition-colors"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 transition-all duration-300 group-hover:bg-taupe group-hover:scale-125" />
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};