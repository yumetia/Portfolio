import age from "@utils/data"
import aboutSections from "./aboutSections"
import experiencesData from "./experiencesData"
import projectsData from "./projectsData"


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
      sections: aboutSections, // shared
    },
    skillsSection: {
      software: "Développement Logiciel",
      web: "Développement Web",
      database: "Bases de données & Auth",
      game: "Développement de Jeux",
    },
    experiences: {
      title: "Expériences",
      data: experiencesData, // shared
    },
    projects: {
      title: "Projets",
      data: projectsData,
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