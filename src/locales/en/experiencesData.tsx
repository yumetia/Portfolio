

// Institutions
import amu from "@assets/institutions/amu.jpg";
import epitech from "@assets/institutions/epitech.png";
import lyceePerier from "@assets/institutions/lyceePerier.png";


const experiencesData = [
  {
    id: 1,
    role: "Fullstack Developer",
    at: "Web@cademie by Epitech",
    period: "Nov 2024 - Nov 2026",
    description: [
      "Designed and built an internal collaboration platform to improve team workflows.",
      "Implemented a scalable and optimized software architecture, ensuring high performance and maintainability.",
      "Developed backend and frontend features using modern web technologies.",
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
      "Porting and customizing Kodi on Linux.",
      "Gaining expertise in Bash scripting for automation and system management.",
    ],
    name: "Aix-Marseille University",
    image: amu,
  },
  {
    id: 3,
    role: "Computer Science Student",
    at: "Lycée Périer",
    period: "Sep 2019 - Jul 2022",
    description: [
      "Built a strong foundation in algorithm design and problem-solving using Python.",
      "Explored essential data structures and algorithms through hands-on programming.",
      "Applied logical reasoning and computational thinking to develop optimized solutions.",
    ],
    name: "Lycée Périer",
    image: lyceePerier,
  },
] as const;

export default experiencesData;