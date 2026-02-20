import experiencesData from "./experiencesData";
import aboutSections from "./aboutSections";
import projectsData from "./projectsData";

const de = {
  navbar: {
    home: "Startseite",
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    experiences: "Erfahrungen",
    contact: "Kontakt",
    themeBtn: "Design",  
    langBtn: "Sprache",
    toggleBtn: "Deutsch",
  },
  home: {
    title: "Hey, ich bin Yumetia",
    paragraph1: "Leidenschaftliche*r 21-jährige*r Entwickler*in!",
    paragraph2:
      "Ich entwickle Web-Erlebnisse mit Fokus auf Performance und Sicherheit.",
    paragraph3: "Jede Codezeile wird mit Wirkung geschrieben.",
    contactBtn: "Kontaktiere mich!",
  },
  about: {
    title: "Über mich",
    sections: aboutSections,
  },
  experiences: {
    title: "Erfahrungen",
    data: experiencesData,
  },
  skillsSection: {
    software: "Softwareentwicklung",
    web: "Webentwicklung",
    database: "Datenbanken & Authentifizierung",
    game: "Spieleentwicklung",
  },
  projects: {
    title: "Projekte",
    data: projectsData,
  },
  contact: {
    title: "Kontakt",
    placeholders: {
      subject: "Betreff",
      name: "Dein Name",
      email: "Deine E-Mail",
      message: "Deine Nachricht",
    },
    button: "Nachricht senden",
    success: "✅ Nachricht erfolgreich gesendet!",
    error: "❌ Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.",
  },
};

export default de;