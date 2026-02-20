import cssGeneratorScreenshots from "@assets/projects/cssGenerator/cssGeneratorScreenshots";
import mockupResponsiveScreenshots from "@assets/projects/mockupResponsive/mockupResponsiveScreenshots";
import generateMVCScreenshots from "@assets/projects/generateMVC/generateMVCScreenshots";
import myMeeticScreenshots from "@assets/projects/myMeetic/myMeeticScreenshots";
import nakamanetScreenshots from "@assets/projects/nakamanet/nakamanetScreenshots";
import stoneRainScreenshots from "@assets/projects/stoneRain/stoneRainScreenshots";


const projectsData = [
  {
    id: 1,
    title: "My Meetic",
    description:
      "Un clone de plateforme de rencontres développé avec PHP et JavaScript, permettant aux utilisateurs de créer des profils, parcourir des correspondances potentielles et interagir en temps réel.",
    technologies: ["PHP", "JavaScript"],
    images: myMeeticScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/my_meetic",
  },
  {
    id: 2,
    title: "Nakamanet",
    description:
      "Une plateforme pour les fans d'anime permettant de suivre et partager leurs émissions préférées. En développement.",
    technologies: ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "(En développement..)"],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description:
      "Un outil permettant de créer un sprite à partir d’un dossier d’images et de générer automatiquement la feuille de style CSS correspondante. Il gère les options classiques en ligne de commande (nom du sprite, nom du CSS, récursivité…) ainsi que des options bonus (padding, redimensionnement, colonnes).",
    technologies: ["PHP", "Librairie GD"],
    images: cssGeneratorScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 4,
    title: "Generate MVC",
    description:
      "Un générateur de framework PHP MVC léger qui simplifie la structure du projet et accélère le développement backend grâce à un routage et des contrôleurs automatiques.",
    technologies: ["PHP"],
    images: generateMVCScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 5,
    title: "Stone Rain",
    description:
      "Un jeu d'arcade rétro développé avec Pyxel et Python, où les joueurs doivent esquiver des pierres tombantes tout en essayant de survivre le plus longtemps possible.",
    technologies: ["Python", "Pyxel"],
    images: stoneRainScreenshots(),
    demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
    repoLink: "https://github.com/yumetia/IshiNoAme",
  },
  {
    id: 6,
    title: "Maquette Responsive",
    description:
      "Une intégration complète d’une maquette responsive conforme au visuel fourni. Le projet respecte les normes W3C, optimise le référencement et implémente des images adaptatives selon la taille d’écran en utilisant HTML5, CSS3 et JavaScript avec la méthodologie BEM.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    rncp: ["Maquette", "Architecture de la Solution Web", "Présentation Technique"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/mockup-css-responsive",
  },
] as const;

export default projectsData;