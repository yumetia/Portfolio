import age from "@utils/data"
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";


const fr =  
{
    navbar: {
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experiences: "Expériences",
      contact: "Contact",
      themeBtn: "Thème",
      langBtn: "Langue",
      toggleBtn: "Français",
      modalClose:"Fermer",
    },
    home: {
      title: "Salut, je suis Yumetia",
      paragraph1: `Développeur passionné de ${age} ans !`,
      paragraph2:
        "Je conçois des expériences web en mettant l’accent sur la performance et la sécurité.",
      paragraph3: "Chaque morceau de code est écrite avec un objectif clair.",
      contactBtn: "Me contacter !",
    },
    about: {
      title: "À propos",
      sections: [
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
    ], // shared
    },
    skillsSection: {
      software: "Développement Logiciel",
      web: "Développement Web",
      database: "Bases de données & Auth",
      game: "Développement de Jeux",
    },
    experiences: {
      title: "Expériences",
    },
    projects: {
      title: "Projets",
      modalTitle: "Compétences acquises (RNCP)",
      modalClose: "Fermer",
      play:"Jouer"
    },
    contact: {
      title: "Contact",
      placeholders: {
        subject: "Objet",
        name: "Votre nom",
        email: "Votre email",
        message: "Votre message",
      },
      button: "Envoyer le message",
      success: "✅ Message envoyé avec succès !",
      error: "❌ Échec de l'envoi du message. Veuillez réessayer.",
    },
    isBetaLang:false
}

export default fr