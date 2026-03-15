// de.js
import age from "@utils/data"
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";
const de = {
  navbar: {
    home: "Startseite",
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    experiences: "Erfahrungen",
    contact: "Kontakt",
    themeBtn: "Theme",
    langBtn: "Sprache",
    toggleBtn: "Deutsch",
    modalClose: "Schließen",
  },
  home: {
    title: "Hey, hier ist Yumetia!",
    paragraph1: `Ein leidenschaftlicher Entwickler, ${age} Jahre alt!`,
    paragraph2: "Ich gestalte Web-Erlebnisse mit Fokus auf Performance, Sicherheit und Liebe zum Detail.",
    paragraph3: "Jede Zeile Code wird mit klarer Absicht geschrieben.",
    contactBtn: "Kontakt aufnehmen!",
  },
  about: {
    title: "Über mich",
    sections: [
      {
        id: 1,
        title: "Frontend-Entwickler",
        description:
          "Ich entwickle moderne, interaktive Oberflächen, die schnell, durchdacht und angenehm zu bedienen sind.",
        icon: LetterText,
      },
      {
        id: 2,
        title: "Backend-Entwickler",
        description:
          "Ich entwerfe zuverlässige Backend-Architekturen und saubere APIs — gebaut für Performance und Wartbarkeit.",
        icon: CalendarSync,
      },
      {
        id: 3,
        title: "UI/UX-Begeisterter",
        description:
          "Design und Benutzerfreundlichkeit liegen mir am Herzen — jede Oberfläche soll klar, intuitiv und angenehm sein.",
        icon: Paintbrush,
      },
    ],
  },
  skillsSection: {
    software: "Softwareentwicklung",
    web: "Webentwicklung",
    database: "Datenbanken & Auth",
    game: "Spieleentwicklung",
  },
  experiences: {
    title: "Erfahrungen",
  },
  projects: {
    title: "Projekte",
    modalTitle: "Erworbene Fähigkeiten (RNCP)",
    modalClose: "Schließen",
    play: "Spielen",
  },
  contact: {
    title: "Kontakt",
    placeholders: {
      subject: "Betreff",
      name: "Ihr Name",
      email: "Ihre E-Mail",
      message: "Ihre Nachricht",
    },
    button: "Nachricht senden",
    success: "✅ Nachricht erfolgreich gesendet!",
    error: "❌ Senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
  },
  isBetaLang: false,
};
export default de;
