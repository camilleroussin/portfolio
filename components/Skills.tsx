import React from "react";
import { SKILLS_DATA } from "../constants";
import { FadeIn } from "./FadeIn";
import { useLanguage } from "../i18n/LanguageContext";

export const Skills: React.FC = () => {
  const { lang } = useLanguage();

  const hardSkills = SKILLS_DATA.find((s) => s.title === "Hard Skills");
  const softSkills = SKILLS_DATA.find((s) => s.title === "Soft Skills");

  const hardSkillsList = Array.isArray(hardSkills?.skills)
    ? hardSkills.skills
    : hardSkills?.skills?.[lang] ?? [];

  const softSkillsList = Array.isArray(softSkills?.skills)
    ? softSkills.skills
    : softSkills?.skills?.[lang] ?? [];

  const t = {
    pill: lang === "fr" ? "Compétences clés" : "My Toolkit",
    title: lang === "fr" ? "Expertise & qualités" : "Expertise & Values",
    hard: lang === "fr" ? "Compétences techniques" : "Hard Skills",
    soft: lang === "fr" ? "Qualités professionnelles" : "Soft Skills",
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium mb-4 tracking-wide uppercase">
              {t.pill}
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-800 font-bold tracking-tight">
              {t.title}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn delay={100}>
            <div className="bg-[#F6F8F7] p-8 md:p-12 rounded-[2.5rem]">
              <h3 className="font-display text-3xl font-bold text-gray-800 mb-8">
                {t.hard}
              </h3>

              <div className="flex flex-col gap-3">
                {hardSkillsList.map((skill, idx) => (
                  <div key={idx} className="bg-white px-6 py-4 rounded-xl">
                    <span className="text-gray-600 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-[#FDF8F6] p-8 md:p-12 rounded-[2.5rem]">
              <h3 className="font-display text-3xl font-bold text-gray-800 mb-8">
                {t.soft}
              </h3>

              <div className="flex flex-col gap-3">
                {softSkillsList.map((skill, idx) => (
                  <div key={idx} className="bg-white px-6 py-4 rounded-xl">
                    <span className="text-gray-600 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};