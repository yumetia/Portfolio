import amu from "@assets/institutions/amu.jpg";
import epitech from "@assets/institutions/epitech.png";
import lyceePerier from "@assets/institutions/lyceePerier.png";

const experiencesData = [
  {
    id: 1,
    role: "Développeur Fullstack",
    at: "Web@cademie by Epitech",
    period: "Nov 2024 - Nov 2026",
    description: [
      "Conception et développement d'une plateforme interne de collaboration pour améliorer les flux de travail d'équipe.",
      "Mise en place d'une architecture logicielle évolutive et optimisée, garantissant des performances élevées et une maintenance aisée.",
      "Développement des fonctionnalités backend et frontend avec des technologies web modernes.",
    ],
    name: "Epitech",
    image: epitech,
  },
  {
    id: 2,
    role: "Software, DevOps",
    at: "Université Aix-Marseille",
    period: "Sep 2022 - Jan 2024",
    description: [
      "Portage et personnalisation de Kodi sur Linux.",
      "Acquisition d'une expertise en script Bash pour l'automatisation et la gestion des systèmes.",
    ],
    name: "Université Aix-Marseille",
    image: amu,
  },
  {
    id: 3,
    role: "Étudiant en Informatique",
    at: "Lycée Périer",
    period: "Sep 2019 - Jul 2022",
    description: [
      "Construction d'une base solide en conception d'algorithmes et résolution de problèmes avec Python.",
      "Exploration des structures de données et des algorithmes essentiels à travers des projets pratiques.",
      "Application de la pensée logique et computationnelle pour développer des solutions optimisées.",
    ],
    name: "Lycée Périer",
    image: lyceePerier,
  },
] as const;

export default experiencesData;