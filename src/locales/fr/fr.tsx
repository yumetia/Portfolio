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
      title: "Salut, c'est Yumetia !",
      paragraph1: `Un développeur passionné de ${age} ans !`,
      paragraph2: "Je conçois des expériences web en alliant performance, sécurité et souci du détail.",
      paragraph3: "Chaque morceau de code est écrit avec un objectif clair.",
      contactBtn: "Me contacter !",
    },
    about: {
      title: "À propos",
      sections: [
    {
      id: 1,
      title: "Développeur Frontend",
      description:
        "Je crée des interfaces web modernes, interactives et performantes, avec un fort accent sur la fluidité et l'expérience utilisateur.",
      icon: LetterText,
    },
    {
      id: 2,
      title: "Développeur Backend",
      description:
        "Je développe des architectures backend solides et des API bien structurées, optimisées pour la performance et la maintenabilité.",
      icon: CalendarSync,
    },
    {
      id: 3,
      title: "Passionné par l'UI/UX",
      description:
        "Je conçois des interfaces claires et intuitives, où design et ergonomie améliorent l'expérience utilisateur.",
      icon: Paintbrush,
    },
  ],
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