import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "I am a frontend developer with solid experience in building interactive and responsive web applications.",
    icon: LetterText,
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "I have a strong foundation in backend development, designing robust APIs and handling database management.",
    icon: CalendarSync,
  },
  {
    id: 3,
    title: "UI/UX Enthusiast",
    description:
      "Crafting visually appealing and user-friendly interfaces is one of my top priorities.",
    icon: Paintbrush,
  },
] as const;


export default aboutSections