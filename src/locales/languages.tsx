// locales/languages.tsx
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

// Institutions
import amu from "@assets/institutions/amu.jpg";
import epitech from "@assets/institutions/epitech.png";
import lyceePerier from "@assets/institutions/lyceePerier.png";


import cssGeneratorScreenshots from "@assets/projects/cssGenerator/cssGeneratorScreenshots";
import mockupResponsiveScreenshots from "@assets/projects/mockupResponsive/mockupResponsiveScreenshots";
import generateMVCScreenshots from "@assets/projects/generateMVC/generateMVCScreenshots";
import myMeeticScreenshots from "@assets/projects/myMeetic/myMeeticScreenshots";
import nakamanetScreenshots from "@assets/projects/nakamanet/nakamanetScreenshots";
import stoneRainScreenshots from "@assets/projects/stoneRain/stoneRainScreenshots";

export type Locale = "en" | "fr";

/**
 * Helper: read `field_en` / `field_fr` from an object.
 * Fallback order: field_<locale> -> field_en -> field (if you ever keep a non-localized field)
 */
export function getLocalized<T = string>(
  obj: Record<string, any>,
  field: string,
  locale: Locale
): T {
  const key = `${field}_${locale}`;
  if (key in obj) return obj[key] as T;

  const fallbackEn = `${field}_en`;
  if (fallbackEn in obj) return obj[fallbackEn] as T;

  return obj[field] as T;
}



/* ----------------------------- Shared data ----------------------------- */

const aboutSections = [
  {
    id: 1,
    title_en: "Frontend Developer",
    title_fr: "Développeur Frontend",
    description_en:
      "I am a frontend developer with solid experience in building interactive and responsive web applications.",
    description_fr:
      "Je suis développeur frontend avec une solide expérience dans la création d'applications web interactives et réactives.",
    icon: LetterText,
  },
  {
    id: 2,
    title_en: "Backend Developer",
    title_fr: "Développeur Backend",
    description_en:
      "I have a strong foundation in backend development, designing robust APIs and handling database management.",
    description_fr:
      "J'ai une base solide en développement backend, en concevant des API robustes et en gérant des bases de données.",
    icon: CalendarSync,
  },  
  {
    id: 3,
    title_en: "UI/UX Enthusiast",
    title_fr: "Passionné par l'UI/UX",
    description_en:
      "Crafting visually appealing and user-friendly interfaces is one of my top priorities.",
    description_fr:
      "Créer des interfaces visuellement attrayantes et faciles à utiliser est l'une de mes priorités.",
    icon: Paintbrush,
  },
] as const;

const experiencesData = [
  {
    id: 1,
    role_en: "Fullstack Developer",
    role_fr: "Développeur Fullstack",
    at_en: "Web@cademie by Epitech",
    at_fr: "Web@cademie by Epitech",
    period: "Nov 2024 - Nov 2026",
    description_en: [
      "Designed and built an internal collaboration platform to improve team workflows.",
      "Implemented a scalable and optimized software architecture, ensuring high performance and maintainability.",
      "Developed backend and frontend features using modern web technologies.",
    ],
    description_fr: [
      "Conception et développement d'une plateforme interne de collaboration pour améliorer les flux de travail d'équipe.",
      "Mise en place d'une architecture logicielle évolutive et optimisée, garantissant des performances élevées et une maintenance aisée.",
      "Développement des fonctionnalités backend et frontend avec des technologies web modernes.",
    ],
    name_en: "Epitech",
    name_fr: "Epitech",
    image: epitech,
  },
  {
    id: 2,
    role_en: "Software, DevOps",
    role_fr: "Software, DevOps",
    at_en: "Aix-Marseille University",
    at_fr: "Université Aix-Marseille",
    period: "Sep 2022 - Jan 2024",
    description_en: [
      "Porting and customizing Kodi on Linux.",
      "Gaining expertise in Bash scripting for automation and system management.",
    ],
    description_fr: [
      "Portage et personnalisation de Kodi sur Linux.",
      "Acquisition d'une expertise en script Bash pour l'automatisation et la gestion des systèmes.",
    ],
    name_en: "Aix-Marseille University",
    name_fr: "Université Aix-Marseille",
    image: amu,
  },
  {
    id: 3,
    role_en: "Computer Science Student",
    role_fr: "Étudiant en Informatique",
    at_en: "Lycée Périer",
    at_fr: "Lycée Périer",
    period: "Sep 2019 - Jul 2022",
    description_en: [
      "Built a strong foundation in algorithm design and problem-solving using Python.",
      "Explored essential data structures and algorithms through hands-on programming.",
      "Applied logical reasoning and computational thinking to develop optimized solutions.",
    ],
    description_fr: [
      "Construction d'une base solide en conception d'algorithmes et résolution de problèmes avec Python.",
      "Exploration des structures de données et des algorithmes essentiels à travers des projets pratiques.",
      "Application de la pensée logique et computationnelle pour développer des solutions optimisées.",
    ],
    name_en: "Lycée Périer",
    name_fr: "Lycée Périer",
    image: lyceePerier,
  },
] as const;

const projectsData = [
  {
    id: 1,
    title: "My Meetic",
    description_en:
      "A dating platform clone built with PHP and JavaScript, allowing users to create profiles, browse potential matches, and interact in real-time.",
    description_fr:
      "Un clone de plateforme de rencontres développé avec PHP et JavaScript, permettant aux utilisateurs de créer des profils, parcourir des correspondances potentielles et interagir en temps réel.",
    technologies: ["PHP", "JS"],
    images: myMeeticScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/my_meetic",
  },
  {
    id: 2,
    title: "Nakamanet",
    description_en:
      "A platform for anime fans to track and share their favorite shows. Currently in development.",
    description_fr:
      "Une plateforme pour les fans d'anime permettant de suivre et partager leurs émissions préférées. En développement.",
    technologies_en: ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "(In development..)"],
    technologies_fr: ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "(En développement..)"],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description_en:
      "A tool that creates a sprite from a folder of images and automatically generates the corresponding CSS stylesheet. It supports standard command-line options (sprite name, CSS name, recursion…) as well as bonus options (padding, resizing, columns).",
    description_fr:
      "Un outil permettant de créer un sprite à partir d’un dossier d’images, et de générer automatiquement la feuille de style CSS correspondante. Cela gère les options classiques en ligne de commande (nom du sprite, nom du CSS, récursivité…) ainsi que des options bonus (padding, redimensionnement, colonnes).",
    technologies_en: ["PHP", "GD library"],
    technologies_fr: ["PHP", "Librairie GD"],
    images: cssGeneratorScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 4,
    title: "Generate MVC",
    description_en:
      "A lightweight PHP MVC framework generator that simplifies project structure and speeds up backend development with automatic routing and controllers.",
    description_fr:
      "Un générateur de framework PHP MVC léger qui simplifie la structure du projet et accélère le développement backend grâce à un routage et des contrôleurs automatiques.",
    technologies: ["PHP"],
    images: generateMVCScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 5,
    title: "Stone Rain",
    description_en:
      "A retro-style arcade game developed with Pyxel and Python, where players must dodge falling stones while trying to survive as long as possible.",
    description_fr:
      "Un jeu d'arcade rétro développé avec Pyxel et Python, où les joueurs doivent esquiver des pierres tombantes tout en essayant de survivre le plus longtemps possible.",
    technologies: ["Python", "Pyxel"],
    images: stoneRainScreenshots(),
    demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
    repoLink: "https://github.com/yumetia/IshiNoAme",
  },
  {
    id: 6,
    title: "Maquette Responsive",
    description_en:
      "A fully responsive website integration based on a provided design mockup. The project follows W3C standards, ensures SEO optimization, and implements adaptive images depending on screen size using HTML5, CSS3, and JavaScript with the BEM methodology.",
    description_fr:
      "Une intégration complète d’une maquette responsive conforme au visuel fourni. Le projet respecte les normes W3C, optimise le référencement et implémente des images adaptatives selon la taille d’écran en utilisant HTML5, CSS3 et JavaScript avec la méthodologie BEM.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/responsive",
  },
] as const;

/* ----------------------------- Language dict ---------------------------- */


const languages = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experiences: "Experiences",
      contact: "Contact",
      themeBtn: "Theme",
      toggleBtn: "English",
    },
    home: {
      title: "Hey, I'm Yumetia",
      paragraph1: "Passionate 21-year-old developer !",
      paragraph2: "I build web experiences with performance and security in mind.",
      paragraph3: "Each part of code is written for impact.",
      contactBtn: "Contact me !",
    },
    about: {
      title: "About",
      sections: aboutSections, // shared
    },
    experiences: {
      title: "Experiences",
      data: experiencesData, // shared
    },
    skillsSection: {
      software: "Software Development",
      web: "Web Development",
      database: "Databases & Auth",
      game: "Game Development",
    },
    projects: {
      title: "Projects",
      data: projectsData, // shared
    },
    contact: {
      title: "Contact",
      placeholders: {
        subject: "Subject",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
      },
      button: "Send Message",
      success: "✅ Message sent successfully!",
      error: "❌ Failed to send message. Please try again.",
    }
  },

  fr: {
    navbar: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experiences: "Expériences",
      contact: "Contact",
      themeBtn: "Thème",
      toggleBtn: "Français",
    },
    home: {
      title: "Salut, je suis Yumetia",
      paragraph1: "Développeur passionné de 21 ans !",
      paragraph2:
        "Je conçois des expériences web en mettant l’accent sur la performance et la sécurité.",
      paragraph3: "Chaque morceau de code est écrite avec un objectif clair.",
      contactBtn: "Me contacter !",
    },
    about: {
      title: "À propos",
      sections: aboutSections, // shared
    },
    skillsSection: {
      software: "Développement Logiciel",
      web: "Développement Web",
      database: "Bases de données & Auth",
      game: "Développement de Jeux",
    },
    experiences: {
      title: "Expériences",
      data: experiencesData, // shared
    },
    projects: {
      title: "Projets",
      data: projectsData, // shared
    },
    contact: {
      title: "Contact",
      placeholders: {
        subject: "Objet",
        name: "Votre nom",
        email: "Votre email",
        message: "Votre message",
      },
      button: "Envoyer le message",
      success: "✅ Message envoyé avec succès !",
      error: "❌ Échec de l'envoi du message. Veuillez réessayer.",
    },
  },
} as const;

export default languages;
