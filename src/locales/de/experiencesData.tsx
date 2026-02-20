import amu from "@assets/institutions/amu.jpg";
import epitech from "@assets/institutions/epitech.png";
import lyceePerier from "@assets/institutions/lyceePerier.png";

const experiencesData = [
  {
    id: 1,
    role: "Fullstack-Entwickler",
    at: "Web@cademie by Epitech",
    period: "Nov 2024 - Nov 2026",
    description: [
      "Konzeption und Entwicklung einer internen Kollaborationsplattform zur Optimierung von Team-Workflows.",
      "Implementierung einer skalierbaren und optimierten Softwarearchitektur zur Sicherstellung von Performance und Wartbarkeit.",
      "Entwicklung von Backend- und Frontend-Funktionalitäten mit modernen Webtechnologien.",
    ],
    name: "Epitech",
    image: epitech,
  },
  {
    id: 2,
    role: "Software, DevOps",
    at: "Aix-Marseille University",
    period: "Sep 2022 - Jan 2024",
    description: [
      "Portierung und Anpassung von Kodi unter Linux.",
      "Vertiefung der Kenntnisse in Bash-Scripting für Automatisierung und Systemverwaltung.",
    ],
    name: "Aix-Marseille University",
    image: amu,
  },
  {
    id: 3,
    role: "Informatikstudent",
    at: "Lycée Périer",
    period: "Sep 2019 - Jul 2022",
    description: [
      "Aufbau einer soliden Grundlage in Algorithmendesign und Problemlösung mit Python.",
      "Erforschung grundlegender Datenstrukturen und Algorithmen durch praktische Programmierung.",
      "Anwendung von logischem Denken und rechnergestützter Problemlösung zur Entwicklung optimierter Lösungen.",
    ],
    name: "Lycée Périer",
    image: lyceePerier,
  },
] as const;

export default experiencesData;