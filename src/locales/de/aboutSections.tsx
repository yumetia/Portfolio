import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Frontend-Entwickler",
    description:
      "Ich bin ein Frontend-Entwickler mit solider Erfahrung in der Entwicklung interaktiver und responsiver Webanwendungen.",
    icon: LetterText,
  },
  {
    id: 2,
    title: "Backend-Entwickler",
    description:
      "Ich verfüge über eine starke Grundlage in der Backend-Entwicklung, entwerfe robuste APIs und verwalte Datenbanken.",
    icon: CalendarSync,
  },
  {
    id: 3,
    title: "UI/UX-Enthusiast",
    description:
      "Die Gestaltung visuell ansprechender und benutzerfreundlicher Oberflächen hat für mich oberste Priorität.",
    icon: Paintbrush,
  },
] as const;

export default aboutSections;