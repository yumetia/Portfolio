
import experiencesData from "./experiencesData";
import aboutSections from "./aboutSections";
import projectsData from "./projectsData"


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
    sections: aboutSections,
  },
  experiences: {
    title: "Experiences",
    data: experiencesData,
  },
  skillsSection: {
    software: "Software Development",
    web: "Web Development",
    database: "Databases & Auth",
    game: "Game Development",
  },
  projects: {
    title: "Projects",
    data: projectsData,
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
};

export default en;