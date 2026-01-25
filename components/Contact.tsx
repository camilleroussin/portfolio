import React from "react";
import { Mail, MapPin, Linkedin, Download } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useT } from "../i18n/useT";
import { useLanguage } from "../i18n/LanguageContext"; // ajuste si besoin

export const Contact: React.FC = () => {
  const t = useT();
  const { lang } = useLanguage();

  const mobilityText = lang === "fr" ? "Mobile — France" : "Mobile — France";

  return (
    <section id="contact" className="py-24 px-6 bg-beige">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <h2 className="font-display text-3xl md:text-4xl text-gray-800 font-bold mb-8">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">{t.contact.subtitle}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {/* EMAIL */}
            <a
              href="mailto:camille.roussin@kedgebs.com"
              className="w-full group bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              {/* ✅ on garde l’icône taupe même au hover */}
              <div className="w-12 h-12 bg-nude/30 rounded-full flex items-center justify-center text-taupe mb-4 group-hover:bg-nude/40 transition-colors">
                <Mail size={24} className="text-current" />
              </div>
              <span className="text-sm text-gray-500 mb-1">{t.contact.email}</span>
              <span className="font-medium text-gray-800 text-sm break-all">camille.roussin@kedgebs.com</span>
            </a>

            {/* LOCATION */}
            <div className="w-full bg-white p-6 rounded-3xl shadow-sm flex flex-col items-center">
              <div className="w-12 h-12 bg-sage/30 rounded-full flex items-center justify-center text-taupe mb-4">
                <MapPin size={24} className="text-current" />
              </div>
              <span className="text-sm text-gray-500 mb-1">{t.contact.location}</span>
              <span className="font-medium text-gray-800">{mobilityText}</span>
            </div>

            {/* LINKEDIN (inchangé) */}
            <a
              href="https://fr.linkedin.com/in/camille-roussin-a12866277"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-taupe mb-4 group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                <Linkedin size={24} className="text-current" />
              </div>
              <span className="text-sm text-gray-500 mb-1">{t.contact.linkedin}</span>
              <span className="font-medium text-gray-800">{t.contact.connect}</span>
            </a>

            {/* CV */}
            <a
              href="/CV-2025-CR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group bg-white p-6 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              {/* ✅ icône reste taupe au hover */}
              <div className="w-12 h-12 bg-taupe/10 rounded-full flex items-center justify-center text-taupe mb-4 group-hover:bg-taupe/15 transition-colors">
                <Download size={24} className="text-current" />
              </div>
              <span className="text-sm text-gray-500 mb-1">PDF</span>
              <span className="font-medium text-gray-800">{t.contact.cv}</span>
            </a>
          </div>

          <footer className="mt-20 text-gray-400 text-sm">
            © {new Date().getFullYear()} Camille Roussin. All rights reserved.
          </footer>
        </FadeIn>
      </div>
    </section>
  );
};
