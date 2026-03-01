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
      "Un clone de plateforme de rencontre développé en PHP et JavaScript, permettant aux utilisateurs de créer des profils, parcourir des correspondances potentielles et interagir en temps réel.",
    technologies: ["PHP", "JavaScript"],
    rncp: [],
    images: myMeeticScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/my_meetic",
  },
  {
    id: 2,
    title: "Nakamanet",
    description:
      "Une plateforme pour les fans d’anime permettant de suivre et partager leurs séries préférées. Actuellement en développement.",
    technologies: ["Next.js", "Laravel", "AdonisJS"],
    rncp: [],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description:
      "Un outil qui crée un sprite à partir d’un dossier d’images et génère automatiquement la feuille de style CSS correspondante. Il prend en charge les options standard en ligne de commande (nom du sprite, nom du CSS, récursivité…) ainsi que des options bonus (padding, redimensionnement, colonnes).",
    technologies: ["PHP", "GD library"],
    rncp: [],
    images: cssGeneratorScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 4,
    title: "Generate MVC",
    description:
      "Un générateur léger de framework MVC en PHP qui simplifie la structure des projets et accélère le développement backend grâce au routage et aux contrôleurs automatiques.",
    technologies: ["PHP"],
    rncp: [],
    images: generateMVCScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 5,
    title: "Stone Rain",
    description:
      "Un jeu d’arcade rétro développé avec Pyxel et Python, où le joueur doit éviter des pierres qui tombent et survivre le plus longtemps possible.",
    technologies: ["Python", "Pyxel"],
    rncp: [],
    images: stoneRainScreenshots(),
    demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
    repoLink: "https://github.com/yumetia/IshiNoAme",
  },
  {
    id: 6,
    title: "Mockup Responsive",
    description:
      "Une intégration de site web entièrement responsive basée sur une maquette fournie. Le projet respecte les standards W3C, assure l’optimisation SEO et implémente des images adaptatives selon la taille d’écran en utilisant HTML5 et CSS3 avec la méthodologie BEM.",
    technologies: ["HTML5", "CSS3"],
    rncp: ["mockup", "presentation", "architecture"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/mockup-css-responsive",
  },
];

export default projectsData;