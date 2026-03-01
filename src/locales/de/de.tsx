import experiencesData from "./experiencesData";
import aboutSections from "./aboutSections";
import projectsData from "./projectsData";
import age from "@utils/data";

const de = {
  navbar: {
    home: "Start",
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    experiences: "Erfahrungen",
    contact: "Kontakt",
    themeBtn: "Design",
    langBtn: "Sprache",
    toggleBtn: "Deutsch",
    modalClose: "Schließen",
    isBetaLang:false
  },
  home: {
    title: "Hey, ich bin Yumetia",
    paragraph1: `Leidenschaftliche*r ${age}-jährige*r Entwickler*in!`,
    paragraph2: "Ich entwickle Web-Erlebnisse mit Fokus auf Performance und Sicherheit.",
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
    modalTitle: "Erworbene Kompetenzen (RNCP)",
    modalClose: "Schließen",
    play: "Spielen"
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
    error: "❌ Senden fehlgeschlagen. Bitte versuche es erneut.",
  },
  isBetaLang:false
};

export default de;