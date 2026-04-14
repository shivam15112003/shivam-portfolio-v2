export interface SocialLink {
  label: string;
  href: string;
  note?: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  degree: string;
  school: string;
  shortBio: string;
  resumeUrl: string;
  socialLinks: SocialLink[];
}

export interface Project {
  title: string;
  summary: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  paperUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface Publication {
  title: string;
  summary: string;
  venueYear: string;
  url: string;
}

export interface EducationEntry {
  degree: string;
  school: string;
  timeline: string;
  detail: string;
}

export interface HighlightCard {
  title: string;
  description: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface QuickFact {
  label: string;
  value: string;
}
