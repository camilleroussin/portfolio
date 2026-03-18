import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useT } from "../i18n/useT";

interface HeaderProps {
  onNavigate: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { lang, toggleLang } = useLanguage();
  const t = useT();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  const navLinks = [
    { name: t.nav.about, id: "about" },
    { name: t.nav.career, id: "experiences" },
    { name: t.nav.journey, id: "timeline" },
    { name: t.nav.skills, id: "skills" },
    { name: t.nav.contact, id: "contact" },
  ];

  const LangSwitch = ({ className = "" }: { className?: string }) => {
    const isEN = lang === "en";

    return (
      <button
        type="button"
        onClick={toggleLang}
        className={[
          "relative inline-flex items-center",
          "h-10 w-[92px] rounded-full p-1",
          "border border-taupe/30 bg-white/80 backdrop-blur",
          "shadow-sm hover:shadow-md transition-all duration-300",
          "hover:-translate-y-[1px] active:translate-y-0",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-taupe/30",
          className,
        ].join(" ")}
        aria-label="Toggle language"
        title={isEN ? "Passer en français" : "Switch to English"}
      >
        <span
          className={[
            "absolute top-1 bottom-1 w-[42px] rounded-full",
            "bg-white shadow-[0_10px_25px_-15px_rgba(0,0,0,0.35)]",
            "border border-black/5",
            "transition-transform duration-300 ease-out",
            isEN ? "translate-x-0" : "translate-x-[42px]",
          ].join(" ")}
          aria-hidden="true"
        />

        <span className="relative z-10 w-[42px] text-center text-xs font-semibold text-gray-800">
          EN
        </span>
        <span className="relative z-10 w-[42px] text-center text-xs font-semibold text-gray-800">
          FR
        </span>
      </button>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-bold text-xl text-gray-800 cursor-pointer hover:text-taupe transition-colors tracking-tight"
        >
          Camille Roussin
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={[
                "text-sm font-medium text-gray-600 relative group py-2",
                "transition-all duration-300 hover:text-taupe hover:-translate-y-[1px]",
              ].join(" ")}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-taupe transition-all duration-300 group-hover:w-full opacity-70" />
            </button>
          ))}

          {/* CV button */}
          <a
            href="/CV-2026-CR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "ml-2 px-4 py-2 rounded-full",
              "bg-white border border-taupe/25 text-taupe text-sm font-medium",
              "shadow-sm hover:shadow-md hover:bg-beige",
              "transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0",
              "flex items-center gap-2",
            ].join(" ")}
          >
            <Download size={16} className="text-current" />
            {t.nav.cv}
          </a>

          <LangSwitch className="ml-2" />
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LangSwitch />

          <a
            href="/CV-2026-CR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "px-3 py-2 rounded-full",
              "bg-white/80 border border-white/30 text-taupe",
              "backdrop-blur shadow-sm hover:shadow-md hover:bg-white",
              "transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0",
            ].join(" ")}
            aria-label="Download CV"
          >
            <Download size={18} className="text-current" />
          </a>

          <button
            className="text-gray-600 hover:text-taupe transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg transition-all duration-300 origin-top overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col py-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="text-left px-8 py-3 text-gray-600 hover:text-taupe hover:bg-gray-50 font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
          <a
            href="/CV-2026-CR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left px-8 py-3 text-taupe hover:bg-gray-50 font-semibold transition-colors flex items-center gap-2"
          >
            <Download size={18} className="text-current" />
            {t.nav.cv}
          </a>
        </div>
      </div>
    </header>
  );
};