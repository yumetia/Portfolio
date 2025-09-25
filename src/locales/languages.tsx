// locales/languages.tsx
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

// Institutions
import amu from "../assets/institutions/amu.jpg";
import epitech from "../assets/institutions/epitech.png";
import lyceePerier from "../assets/institutions/lyceePerier.png";

// Technos logos
import imgCSS from "../assets/technos/css.png";
import imgJS from "../assets/technos/js.png";
import imgREACT from "../assets/technos/react.png";
import imgHTML from "../assets/technos/html.png";
import imgFIGMA from "../assets/technos/figma.svg";
import imgNEXT from "../assets/technos/next-js.webp";
import imgNODE from "../assets/technos/node-js.png";
import imgTYPE from "../assets/technos/typescript.svg";
import imgTAILWIND from "../assets/technos/tailwind.png";
import imgPRISMA from "../assets/technos/prisma.webp";
import imgPHP from "../assets/technos/php.png";
import imgPYTHON from "../assets/technos/python.png";
import imgSYMFONY from "../assets/technos/symfony.png";
import imgLARAVEL from "../assets/technos/laravel.png";
import imgMYSQL from "../assets/technos/mysql.png";
import imgMONGODB from "../assets/technos/mongodb.png";
import imgWORDPRESS from "../assets/technos/wordpress.png";

// Projets
import myMeetic from "../assets/projects/my_meetic.png";
import myMeetic2 from "../assets/projects/my_meetic2.png";
import myMeetic3 from "../assets/projects/my_meetic3.png";

import myTweeter from "../assets/projects/my_twitter.png";
import myTweeter2 from "../assets/projects/my_twitter2.png";
import myTweeter3 from "../assets/projects/my_twitter3.png";
import myTweeter4 from "../assets/projects/my_twitter4.png";
import myTweeter5 from "../assets/projects/my_twitter5.png";
import myTweeter6 from "../assets/projects/my_twitter6.png";

import Partely from "../assets/projects/Partely.png";
import Partely2 from "../assets/projects/Partely2.png";
import Partely3 from "../assets/projects/Partely3.png";


import stoneRain from "../assets/projects/stoneRain.png";
import generateMVC from "../assets/projects/generateMVC.png";
import connect4 from "../assets/projects/connect4.png";
import anilink from "../assets/projects/aniLink.png";

const languages = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      experiences: "Experiences",
      projects: "Projects",
      contact: "Contact",
      toggleBtn: "English",
    },
    home: {
      title: "Hey, I'm Remi Bouyeda",
      paragraph1: "I'm a passionate 21-year-old developer !",
      paragraph2:
        "I bring ideas to life through interactive and engaging web experiences.",
      paragraph3:
        "Welcome to my world, where every line of code has a story to tell !",
      contactBtn: "Contact me !",
    },
    about: {
      title: "About",
      sections: [
        {
          id: 1,
          title: "Frontend Developer",
          description:
            "I am a frontend developer with solid experience in building interactive and responsive web applications.",
          icon: <LetterText className="text-accent scale-150" />,
        },
        {
          id: 2,
          title: "Backend Developer",
          description:
            "I have a strong foundation in backend development, designing robust APIs and handling database management.",
          icon: <CalendarSync className="text-accent scale-150" />,
        },
        {
          id: 3,
          title: "Passionate about UI/UX",
          description:
            "Crafting visually appealing and user-friendly interfaces is one of my top priorities.",
          icon: <Paintbrush className="text-accent scale-150" />,
        },
      ],
    },
    experiences: {
      title: "Experiences",
      skills: [
        { id: 1, name: "HTML", image: imgHTML },
        { id: 2, name: "CSS", image: imgCSS },
        { id: 3, name: "JavaScript", image: imgJS },
        { id: 4, name: "TypeScript", image: imgTYPE },
        { id: 5, name: "React", image: imgREACT },
        { id: 6, name: "Node.js", image: imgNODE },
        { id: 7, name: "PHP", image: imgPHP },
        { id: 8, name: "Symfony", image: imgSYMFONY },
        { id: 9, name: "Laravel", image: imgLARAVEL },
        { id: 10, name: "Tailwind CSS", image: imgTAILWIND },
        { id: 11, name: "Next.js", image: imgNEXT },
        { id: 12, name: "Prisma", image: imgPRISMA },
        { id: 13, name: "MySQL", image: imgMYSQL },
        { id: 14, name: "MongoDB", image: imgMONGODB },
        { id: 15, name: "Python", image: imgPYTHON },
        { id: 16, name: "Wordpress", image: imgWORDPRESS },
        { id: 17, name: "Figma", image: imgFIGMA },
      ],
      data: [
        {
          id: 1,
          role: "Fullstack Developer",
          at: "Web@cademie by Epitech",
          period: "Nov 2024 - Nov 2027",
          description: [
            "Designed and built an internal collaboration platform to improve team workflows.",
            "Implemented a scalable and optimized software architecture, ensuring high performance and maintainability.",
            "Developed backend and frontend features using modern web technologies.",
          ],
          name: "Epitech",
          image: epitech,
        },
        {
          id: 2,
          role: "Software, DevOps",
          at: "Aix-Marseille University",
          period: "Sep 2022 - Jan 2024",
          description: [
            "Porting and customizing Kodi on Linux.",
            "Optimizing the application's performance.",
            "Gaining expertise in Bash scripting for automation and system management.",
          ],
          name: "Aix-Marseille University",
          image: amu,
        },
        {
          id: 3,
          role: "Computer Science Student",
          at: "Lycée Périer",
          period: "Sep 2019 - Jul 2022",
          description: [
            "Built a strong foundation in algorithm design and problem-solving using Python.",
            "Explored essential data structures and algorithms through hands-on programming.",
            "Applied logical reasoning and computational thinking to develop optimized solutions.",
          ],
          name: "Lycée Périer",
          image: lyceePerier,
        },
      ],
    },
    projects: {
      title: "Projects",
      data: [
        {
          id: 1,
          title: "Partely",
          description:
            "Partely is an e-commerce platform designed to provide users with a smooth, intuitive, and user-friendly shopping experience. It allows visitors to browse a product catalog, add items to their cart, choose shipping methods, and complete their orders with ease",
          technologies: ["React.js", "Symfony"],
          images: [Partely,Partely2,Partely3],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/my_meetic",
        },
        {
          id: 2,
          title: "My Meetic",
          description:
            "A dating platform clone built with PHP and JavaScript, allowing users to create profiles, browse potential matches, and interact in real-time.",
          technologies: ["PHP", "JS"],
          images: [myMeetic,myMeetic2,myMeetic3],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/my_meetic",
        },
        {
          id: 3,
          title: "My Twitter",
          description:
            "A Twitter-like social media platform built using PHP, JavaScript, and Skeleton CSS, featuring user authentication, tweet creation, and basic interactions.",
          technologies: ["PHP", "JS", "Skeleton CSS"],
          images: [myTweeter,myTweeter2,myTweeter3,myTweeter4,myTweeter5,myTweeter6],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/my_twitter",
        },
         {
          id: 4,
          title: "AniLink",
          description:
            "A platform for anime fans to track and share their favorite shows, built with React, Node.js, and Tailwind CSS. Currently in development.",
          technologies: ["React.js", "Node.js", "Tailwind CSS", "(In development..)"],
          images: [anilink],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/AniLink",
        },
        {
          id: 5,
          title: "Generate MVC",
          description:
            "A lightweight PHP MVC framework generator that simplifies project structure and speeds up backend development with automatic routing and controllers.",
          technologies: ["PHP"],
          images: [generateMVC],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/GenerateMVC",
        },
        {
          id: 6,
          title: "Stone Rain",
          description:
            "A retro-style arcade game developed with Pyxel and Python, where players must dodge falling stones while trying to survive as long as possible.",
          technologies: ["Python", "Pyxel"],
          images: [stoneRain],
          demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
          repoLink: "https://github.com/yumetia/IshiNoAme",
        },
        {
          id: 7,
          title: "Connect 4",
          description:
            "A classic Connect 4 game built in JavaScript, where two players compete to align four pieces in a row, column, or diagonal.",
          technologies: ["JS"],
          images: [connect4],
          demoLink: "https://yumetia.github.io/connect4-js/",
          repoLink: "https://github.com/yumetia/connect4-js",
        },
      ],
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
    footer: {
      title: "Remi",
      subtitle: "BOUYEDA",
      copyright: "Copyright © {year} - All rights reserved",
      cvLink: "/CV/RemiBOUYEDA_CV_Web_Developer_ApprenticeShip.pdf",
    },
  },

  fr: {
    navbar: {
      home: "Accueil",
      about: "À propos",
      experiences: "Expériences",
      projects: "Projets",
      contact: "Contact",
      toggleBtn: "Français",
    },
    home: {
      title: "Salut, je suis Remi Bouyeda",
      paragraph1: "Je suis un développeur passionné de 21 ans !",
      paragraph2:
        "Je donne vie à des idées grâce à des expériences web interactives et immersives.",
      paragraph3:
        "Bienvenue dans mon univers, où chaque ligne de code raconte une histoire !",
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
          icon: <LetterText className="text-accent scale-150" />,
        },
        {
          id: 2,
          title: "Développeur Backend",
          description:
            "J'ai une base solide en développement backend, en concevant des API robustes et en gérant des bases de données.",
          icon: <CalendarSync className="text-accent scale-150" />,
        },
        {
          id: 3,
          title: "Passionné par l'UI/UX",
          description:
            "Créer des interfaces visuellement attrayantes et faciles à utiliser est l'une de mes priorités.",
          icon: <Paintbrush className="text-accent scale-150" />,
        },
      ],
    },
    experiences: {
      title: "Expériences",
      skills: [
        { id: 1, name: "HTML", image: imgHTML },
        { id: 2, name: "CSS", image: imgCSS },
        { id: 3, name: "JavaScript", image: imgJS },
        { id: 4, name: "TypeScript", image: imgTYPE },
        { id: 5, name: "React", image: imgREACT },
        { id: 6, name: "Node.js", image: imgNODE },
        { id: 7, name: "PHP", image: imgPHP },
        { id: 8, name: "Symfony", image: imgSYMFONY },
        { id: 9, name: "Laravel", image: imgLARAVEL },
        { id: 10, name: "Tailwind CSS", image: imgTAILWIND },
        { id: 11, name: "Next.js", image: imgNEXT },
        { id: 12, name: "Prisma", image: imgPRISMA },
        { id: 13, name: "MySQL", image: imgMYSQL },
        { id: 14, name: "MongoDB", image: imgMONGODB },
        { id: 15, name: "Python", image: imgPYTHON },
        { id: 16, name: "Wordpress", image: imgWORDPRESS },
        { id: 17, name: "Figma", image: imgFIGMA },
      ],
      data: [
        {
          id: 1,
          role: "Développeur Fullstack",
          at: "Web@cademie by Epitech",
          period: "Nov 2024 - Nov 2027",
          description: [
            "Conception et développement d'une plateforme interne de collaboration pour améliorer les flux de travail d'équipe.",
            "Mise en place d'une architecture logicielle évolutive et optimisée, garantissant des performances élevées et une maintenance aisée.",
            "Développement des fonctionnalités backend et frontend avec des technologies web modernes.",
          ],
          name: "Epitech",
          image: epitech,
        },
        {
          id: 2,
          role: "Software, DevOps",
          at: "Université Aix-Marseille",
          period: "Sep 2022 - Jan 2024",
          description: [
            "Portage et personnalisation de Kodi sur Linux.",
            "Optimisation des performances de l'application.",
            "Acquisition d'une expertise en script Bash pour l'automatisation et la gestion des systèmes.",
          ],
          name: "Université Aix-Marseille",
          image: amu,
        },
        {
          id: 3,
          role: "Étudiant en Informatique",
          at: "Lycée Périer",
          period: "Sep 2019 - Jul 2022",
          description: [
            "Construction d'une base solide en conception d'algorithmes et résolution de problèmes avec Python.",
            "Exploration des structures de données et des algorithmes essentiels à travers des projets pratiques.",
            "Application de la pensée logique et computationnelle pour développer des solutions optimisées.",
          ],
          name: "Lycée Périer",
          image: lyceePerier,
        },
      ],
    },
    projects: {
      title: "Projets",
      data: [
        
        {
          id: 1,
          title: "Partely",
          description:
            "Partely est une plateforme de e-commerce pensée pour offrir une expérience d’achat fluide, intuitive et agréable aux utilisateurs. Le projet permet aux visiteurs de parcourir un catalogue de produits, d’ajouter des articles à leur panier, de choisir un mode de livraison et de finaliser leur commande sans effort.",
          technologies: ["React.js", "Symfony"],
          images: [Partely,Partely2,Partely3],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/my_meetic",
        },
        {
          id: 2,
          title: "My Meetic",
          description:
            "Un clone de plateforme de rencontres développé avec PHP et JavaScript, permettant aux utilisateurs de créer des profils, parcourir des correspondances potentielles et interagir en temps réel.",
          technologies: ["PHP", "JS"],
          images: [myMeetic,myMeetic2,myMeetic3],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/my_meetic",
        },
        {
          id: 3,
          title: "My Twitter",
          description:
            "Une plateforme sociale ressemblant à Twitter, construite avec PHP, JavaScript et Skeleton CSS, offrant une authentification, la création de tweets et des interactions basiques.",
          technologies: ["PHP", "JS", "Skeleton CSS"],
          images: [myTwitter],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/my_twitter",
        },
         {
          id: 4,
          title: "AniLink",
          description:
            "Une plateforme pour les fans d'anime permettant de suivre et partager leurs émissions préférées, développée avec React, Node.js et Tailwind CSS. En développement.",
          technologies: ["React.js", "Node.js", "Tailwind CSS", "(En développement..)"],
          images: [anilink],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/AniLink",
        },
        {
          id: 5,
          title: "Generate MVC",
          description:
            "Un générateur de framework PHP MVC léger qui simplifie la structure du projet et accélère le développement backend grâce à un routage et des contrôleurs automatiques.",
          technologies: ["PHP"],
          images: [generateMVC],
          demoLink: "#",
          repoLink: "https://github.com/yumetia/GenerateMVC",
        },
        {
          id: 6,
          title: "Stone Rain",
          description:
            "Un jeu d'arcade rétro développé avec Pyxel et Python, où les joueurs doivent esquiver des pierres tombantes tout en essayant de survivre le plus longtemps possible.",
          technologies: ["Python", "Pyxel"],
          images: [stoneRain],
          demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
          repoLink: "https://github.com/yumetia/IshiNoAme",
        },
        {
          id: 7,
          title: "Connect 4",
          description:
            "Un jeu classique de Connect 4 développé en JavaScript, où deux joueurs s'affrontent pour aligner quatre pièces en ligne, colonne ou diagonale.",
          technologies: ["JS"],
          images: [connect4],
          demoLink: "https://yumetia.github.io/connect4-js/",
          repoLink: "https://github.com/yumetia/connect4-js",
        },
      ],
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
    footer: {
      title: "Remi",
      subtitle: "BOUYEDA",
      copyright: "Copyright © {year} - Tous droits réservés",
      cvLink: "/CV/RemiBOUYEDA_CV_Developpeur_web_Alternance.pdf",
    },
  },
};

export default languages;
