import { Experience, Education, Skill, Language, Certification } from '../types';
import { profileImages } from './imagesData';

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "IT-Techniker",
    company: "(Dienstleister bei der Regionaldirektion des Zolls in Agadir) über ODIF MAROC / INNOVA STAR / KASLAM SARL",
    period: "Mai 2025 - Présent",
    responsibilities: [
      "Diagnostiquer et résoudre les pannes matérielles et logicielles",
      "Assister les utilisateurs à distance ou sur site",
      "Surveiller les performances du réseau et résoudre les problèmes de connectivité",
      "Configurer les outils collaboratifs"
    ]
  },
  {
    id: "exp2",
    title: "IT-Techniker",
    company: "Groupe FIKRI CASH (Partner: Wafacash)",
    period: "Janvier 2024 - Janvier 2025",
    responsibilities: [
      "Gestion et résolution des incidents",
      "Assister les utilisateurs à distance ou sur site",
      "Administration système",
      "Maintenance, administration et sécurisation des équipements IT",
      "Former les utilisateurs sur les bonnes pratiques informatiques",
      "Management de la sécurité informatique"
    ]
  },
  {
    id: "exp3",
    title: "Stage - Service Réseau Informatique",
    company: "AYOUR CONCEPT",
    period: "2023 (7 mois)",
    responsibilities: [
      "Installation, essai et mise à jour des équipements informatiques",
      "Diagnostic et nettoyage des imprimantes",
      "Maintenance, administration et sécurisation des équipements IT",
      "Résolution des incidents",
      "Installation et configuration des pointeuses, contrôleurs d'accès et standards téléphoniques",
      "Récupération des données et installation des logiciels"
    ]
  },
  {
    id: "exp4",
    title: "Opérateur de Saisie",
    company: "HARMONY TECHNOLOGY",
    period: "2023 (4 mois)",
    responsibilities: [
      "Saisie de données dans la base de données",
      "Classement et organisation des données",
      "Étiquette antivol"
    ]
  },
  {
    id: "exp5",
    title: "Stage - Service Informatique",
    company: "AGANET INFO",
    period: "2020 (1 mois)",
    responsibilities: [
      "Installation et mise à jour des équipements informatiques (ordinateurs et logiciels)",
      "Résoudre les problèmes matériels et logiciels",
      "Configuration des routeurs, points d'accès",
      "Sauvegarde des données"
    ]
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: "Linux", category: "technical", level: 65 },
  { name: "Windows Server", category: "technical", level: 80 },
  { name: "Cisco", category: "technical", level: 65 },
  { name: "JavaScript (JS)", category: "technical", level: 35 },
  { name: "React Js", category: "technical", level: 37 },
  { name: "Python", category: "technical", level: 32 },
  { name: "HTML", category: "technical", level: 70 },
  { name: "CSS", category: "technical", level: 70 },
  
  // Software Skills
  { name: "Microsoft Office (Excel, Word, Outlook)", category: "software", level: 90 },
  { name: "Ticketing Systems", category: "software", level: 85 },
  
  // Soft Skills
  { name: "Travail en équipe", category: "soft", level: 90 },
  { name: "Résolution de problèmes", category: "soft", level: 85 },
  { name: "Management", category: "soft", level: 80 },
  { name: "Travail sous pression", category: "soft", level: 85 }
];

export const languages: Language[] = [
  { name: "Arabic", level: 95, proficiency: "native" },
  { name: "Deutsch", level: 85, proficiency: "proficient" },
  { name: "English", level: 75, proficiency: "intermediate" },
  { name: "Français", level: 75, proficiency: "intermediate" }
];

export const education: Education[] = [
  {
    id: "edu4",
    degree: "Teilweise Anerkennung als Fachinformatiker für Systemintegration (IHK FOSA)",
    institution: "Staatlich anerkannter Techniker für IT-Wartung und Netzwerk-Support (OFPPT), Agadir – Marokko",
    year: "2026"
  },

  {
    id: "edu2",
    degree: "Diplôme Technicien en Maintenance et Support Informatique et Réseaux",
    institution: "Institut Spécialisé de Technologie Appliquée ISTA Taddart Agadir",
    year: "2021"
  },
  {
    id: "edu3",
    degree: "Baccalauréat en Sciences de la Vie et de la Terre",
    institution: "Lycée Qualifiant Anoual Agadir",
    year: "2019"
  }
];

export const certifications: Certification[] = [
  {
    title: "telc deutsch b2",
    issuer: "TELC",
    date: "2026",
    photo: "telc.jpeg"
  },
  {
    title: "Certifications Name",
    issuer: "Certifications Issuer",
    date: "2026",
    photo: "upskilling4germany.png"
  },
  {
    title: "Microsoft Office Excel, Word et Word Expert 2016",
    issuer: "MICROSOFT",
    date: "2021"
  },
  {
    title: "Career Essentials in System Administration",
    issuer: "LINKEDIN",
    date: "Déc 2024"
  },
  {
    title: "Windows Server 2022: Installation and Configuration",
    issuer: "LINKEDIN",
    date: "Déc 2024"
  },
  {
    title: "IT Help Desk For Beginners",
    issuer: "LINKEDIN",
    date: "Jan 2025"
  },
  {
    title: "Learning Python",
    issuer: "LINKEDIN",
    date: "Jan 2025"
  },
  {
    title: "React Js: Create a Web Application",
    issuer: "ODC AGADIR",
    date: "Mar 2025"
  },
  {
    title: "Boost web development workflows with AI",
    issuer: "ODC AGADIR",
    date: "Avr 2025"
  },
  {
    title: "E-commerce Design A to Z",
    issuer: "ODC AGADIR",
    date: "Avr 2025"
  },
  {
    title: "HTML CSS",
    issuer: "ODC AGADIR",
    date: "Avr 2025"
  },
  {
    title: "Flash et Découdage des Smartphone",
    issuer: "ODC AGADIR",
    date: "Mar 2025"
  }
];

export const navItems = [
  { id: "hero", title: "Accueil" },
  { id: "about", title: "À Propos" },
  { id: "experience", title: "Expérience" },
  { id: "education", title: "Formation" },
  { id: "skills", title: "Compétences" },
  { id: "projects", title: "Projets" },
  { id: "contact", title: "Contact" }
];