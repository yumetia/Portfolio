// en.js
import age from "@utils/data"
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";
const en = {
  navbar: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experiences: "Experiences",
    contact: "Contact",
    themeBtn: "Theme",
    langBtn: "Language",
    toggleBtn: "English",
    modalClose: "Close",
  },
  home: {
    title: "Hey, it's Yumetia!",
    paragraph1: `A passionate ${age}-year-old developer!`,
    paragraph2: "I craft web experiences that balance performance, security, and attention to detail.",
    paragraph3: "Every line of code is written with intention.",
    contactBtn: "Get in touch!",
  },
  about: {
    title: "About",
    sections: [
      {
        id: 1,
        title: "Frontend Developer",
        description:
          "I love building modern, interactive web interfaces that are fast, polished, and a pleasure to use.",
        icon: LetterText,
      },
      {
        id: 2,
        title: "Backend Developer",
        description:
          "I design reliable backend architectures and clean APIs built for performance and long-term maintainability.",
        icon: CalendarSync,
      },
      {
        id: 3,
        title: "UI/UX Enthusiast",
        description:
          "I care deeply about design and usability, every interface I build aims to be clear, intuitive, and enjoyable.",
        icon: Paintbrush,
      },
    ],
  },
  skillsSection: {
    software: "Software Development",
    web: "Web Development",
    database: "Databases & Auth",
    game: "Game Development",
  },
  experiences: {
    title: "Experiences",
  },
  projects: {
    title: "Projects",
    modalTitle: "Skills gained (RNCP)",
    modalClose: "Close",
    play: "Play",
  },
  contact: {
    title: "Contact",
    placeholders: {
      subject: "Subject",
      name: "Your name",
      email: "Your email",
      message: "Your message",
    },
    button: "Send message",
    success: "✅ Message sent successfully!",
    error: "❌ Failed to send message. Please try again.",
  },
  isBetaLang: false,
};
export default en;
