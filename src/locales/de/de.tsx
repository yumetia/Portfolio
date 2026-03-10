
import age from "@utils/data";
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

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
    sections: [
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
    ],
  },
  experiences: {
    title: "Erfahrungen",
  },
  skillsSection: {
    software: "Softwareentwicklung",
    web: "Webentwicklung",
    database: "Datenbanken & Authentifizierung",
    game: "Spieleentwicklung",
  },
  projects: {
    title: "Projekte",
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