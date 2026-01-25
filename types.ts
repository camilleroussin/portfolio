export interface TimelineItem {
  years: string;
  title: string;
  subtitle: string;
  description?: string;
  location?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  tasks: string[];
  location?: string;
}