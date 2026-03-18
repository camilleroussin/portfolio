export type LocalizedText = {
  en: string;
  fr: string;
};

export interface TimelineItem {
  years: string;
  title: string;
  subtitle: string | LocalizedText;
  description?: string | LocalizedText;
  location?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[] | { en: string[]; fr: string[] };
}

export interface ExperienceItem {
  company: string;
  role: string | LocalizedText;
  period: string;
  tasks: string[] | { en: string[]; fr: string[] };
  location?: string;
}