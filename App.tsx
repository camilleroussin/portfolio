import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Skills } from './components/Skills';
import { Experiences } from './components/Experiences';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main className="font-sans antialiased text-gray-800 bg-beige selection:bg-nude selection:text-taupe">
      <Header onNavigate={scrollToSection} />
      <Hero onScrollTo={scrollToSection} />
      <About />
      <Experiences />
      <Timeline />
      <Skills />
      <Contact />
    </main>
  );
};

export default App;