export interface NavItem {
  id: string;
  title: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface Skill {
  name: string;
  category: 'software' | 'technical' | 'soft';
  level?: number;
}

export interface Language {
  name: string;
  level: number;
  proficiency: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  photo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  beforeImage?: string;
  afterImage?: string;
  improvements?: string[];
}