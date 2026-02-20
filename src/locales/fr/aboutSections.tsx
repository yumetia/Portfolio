import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Frontend",
    description:
      "Je suis développeur frontend avec une solide expérience dans la création d'applications web interactives et réactives.",
    icon: LetterText,
  },
  {
    id: 2,
    title: "Développeur Backend",
    description:
      "J'ai une base solide en développement backend, en concevant des API robustes et en gérant des bases de données.",
    icon: CalendarSync,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description:
      "Créer des interfaces visuellement attrayantes et faciles à utiliser est l'une de mes priorités.",
    icon: Paintbrush,
  },
] as const;

export default aboutSections;