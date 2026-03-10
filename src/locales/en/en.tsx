

import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

import age from "@utils/data";


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
    modalClose:"Close",
  },
  home: {
    title: "Hey, I'm Yumetia",
    paragraph1: `Passionate ${age}-year-old developer !`,
    paragraph2: "I build web experiences with performance and security in mind.",
    paragraph3: "Each part of code is written for impact.",
    contactBtn: "Contact me !",
  },
  about: {
    title: "About",
      sections: [{
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
    },],
  },
  experiences: {
    title: "Experiences",
  },
  skillsSection: {
    software: "Software Development",
    web: "Web Development",
    database: "Databases & Auth",
    game: "Game Development",
  },
  projects: {
    title: "Projects",
    modalTitle: "Skills acquired (RNCP)",
    modalClose: "Close",
    play: "Play"
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
  },
  isBetaLang:false
};

export default en;