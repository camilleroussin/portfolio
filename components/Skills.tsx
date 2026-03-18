import React from "react";
import { SKILLS_DATA } from "../constants";
import { FadeIn } from "./FadeIn";

export const Skills: React.FC = () => {
  const hardSkills = SKILLS_DATA.find((s) => s.title === "Hard Skills");
  const softSkills = SKILLS_DATA.find((s) => s.title === "Soft Skills");

  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-white relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sage/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-nude/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-sm font-medium mb-4 tracking-wide uppercase">
              My Toolkit
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-gray-800 font-bold tracking-tight">
              Expertise & Values
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Hard Skills */}
          <FadeIn triggerEarly delay={100} className="h-full">
            <div className="bg-[#F6F8F7] p-8 md:p-12 rounded-[2.5rem] h-full relative overflow-hidden group hover:shadow-lg transition-all duration-500 border border-transparent hover:border-sage/20">
              <div className="relative z-10">
                <div className="mb-8 pb-4 border-b border-sage/20">
                  <h3 className="font-display text-3xl font-bold text-gray-800">Hard Skills</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {hardSkills?.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white px-6 py-4 rounded-xl shadow-sm border border-transparent hover:border-sage/30 hover:shadow-md transition-all duration-300 flex items-center gap-3 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sage group-hover/item:scale-150 transition-transform" />
                      <span className="text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Soft Skills */}
          <FadeIn triggerEarly delay={200} className="h-full">
            <div className="bg-[#FDF8F6] p-8 md:p-12 rounded-[2.5rem] h-full relative overflow-hidden group hover:shadow-lg transition-all duration-500 border border-transparent hover:border-nude/20">
              <div className="relative z-10">
                <div className="mb-8 pb-4 border-b border-nude/20">
                  <h3 className="font-display text-3xl font-bold text-gray-800">Soft Skills</h3>
                </div>

                <div className="flex flex-col gap-3">
                  {softSkills?.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-white px-6 py-4 rounded-xl shadow-sm border border-transparent hover:border-nude/30 hover:shadow-md transition-all duration-300 flex items-center gap-3 group/item"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-nude group-hover/item:scale-150 transition-transform" />
                      <span className="text-gray-600 font-medium group-hover/item:text-gray-900 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
