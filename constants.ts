import { ExperienceItem, SkillCategory, TimelineItem } from "./types";

export const TIMELINE_DATA: TimelineItem[] = [
  {
    years: "2023–2027",
    title: "KEDGE Business School",
    subtitle: "Master in Management",
    description: "Specialization: Purchasing, Supply Chain, HR, Management, Marketing.",
    location: "Bordeaux, France"
  },
  {
    years: "Mar 2026 – July 2026",
    title: "UBA — University of Buenos Aires",
    subtitle: "Faculty of Economic Sciences",
    description: "International Semester. Immersion in South American culture, advanced Spanish practice, and courses in International Business & Logistics.",
    location: "Buenos Aires, Argentina"
  },
  {
    years: "2021–2023",
    title: "CPGE ECG",
    subtitle: "Preparatory Classes",
    description: "Majors: Applied Math, Economics, Sociology, History.",
    location: "Bordeaux, France"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Hard Skills",
    skills: [
      "Purchasing & Supplier Management",
      "Supply Chain Fundamentals",
      "Data structuring & analysis",
      "Python (basics)",
      "Excel & reporting",
      "Catalog & documentation management"
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Rigor",
      "Team spirit",
      "Adaptability",
      "Punctuality",
      "Communication",
      "Organization"
    ]
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "Little Worker",
    role: {
      en: "Procurement Intern",
      fr: "Stagiaire Achats",
    },
    period: "Aug 2025 – Jan 2026",
    tasks: {
      en: [
        "Managed procurement before construction phases",
        "Collaborated with architects & customer needs",
        "Negotiated with suppliers (pricing, delivery, terms)",
        "Oversaw planning for material deliveries",
        "Updated the materials catalog",
        "Organized end-of-year supplier meetings",
      ],
      fr: [
        "Pilotage des achats en amont des phases de chantier",
        "Coordination avec les architectes et prise en compte des besoins clients",
        "Négociation avec les fournisseurs (prix, délais, conditions)",
        "Suivi de la planification et des livraisons de matériaux",
        "Mise à jour du catalogue matières et de la documentation associée",
        "Organisation des réunions fournisseurs de fin d’année",
      ],
    },
    location: "Bordeaux, France",
  },
  {
    company: "Airbus",
    role: {
      en: "Procurement / Aftermarket Intern",
      fr: "Stagiaire Achats / Après-vente",
    },
    period: "Jan 2025 – Aug 2025",
    tasks: {
      en: [
        "Consolidated aftermarket data to build an information map",
        "Identified commonalities & discrepancies across datasets",
        "Supported teams in understanding market figures",
        "Helped update procurement strategy",
        "Contributed to supplier performance evaluation",
      ],
      fr: [
        "Consolidation de données après-vente pour construire une cartographie d’information",
        "Identification des points communs et des écarts entre jeux de données",
        "Appui aux équipes dans l’analyse et la compréhension des données marché",
        "Contribution à la mise à jour de la stratégie achats",
        "Participation à l’évaluation de la performance fournisseurs",
      ],
    },
    location: "Toulouse, France",
  },
  {
    company: "Courir",
    role: {
      en: "Sales Assistant",
      fr: "Vendeur / Conseiller de vente",
    },
    period: "2024",
    tasks: {
      en: [
        "Customer support & in-store guidance",
        "Stock & shipment handling",
        "Merchandising & product display",
      ],
      fr: [
        "Accueil, conseil client et accompagnement en magasin",
        "Réception, gestion des stocks et traitement des livraisons",
        "Merchandising et mise en avant des produits",
      ],
    },
    location: "Bordeaux, France",
  },
];
