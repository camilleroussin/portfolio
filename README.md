# Camille Roussin — Portfolio

Personal portfolio website for **Camille Roussin** (Purchasing & Supply Chain Management student at KEDGE Business School).  
The goal: present her profile, experiences, academic journey, skills, and provide easy access to contact details + CV.

## ✨ Features

- **Hero section** with key positioning + CTAs (CV / Contact / Discover)
- **About** section with profile & narrative
- **Professional experiences** (cards, hover effects, bilingual content)
- **Academic & professional timeline**
- **Skills** section
- **Contact** section (Email / LinkedIn / Location / CV)
- **Bilingual switch (EN / FR)**
- Smooth UI animations (FadeIn / hover transitions)
- Responsive layout (desktop + mobile)

## 🧱 Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS (v4)**
- **lucide-react** (icons)
- Simple i18n setup via `LanguageContext` + `useT`

## 📁 Project Structure (main)

- `components/` — UI sections (Hero, About, Experiences, Timeline, Skills, Contact, Header…)
- `i18n/` — language context + translations
- `constants.ts` — timeline / skills / experience data
- `public/` — static assets (CV PDF, etc.)
- `styles.css` — global styles (scrollbar, background…)

## 🚀 Run Locally

Install dependencies:
```bash
npm install

