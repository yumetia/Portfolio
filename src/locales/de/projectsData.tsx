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
      "Ein Dating-Plattform-Klon, entwickelt mit PHP und JavaScript. Benutzer können Profile erstellen, potenzielle Matches durchsuchen und in Echtzeit interagieren.",
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
      "Eine Plattform für Anime-Fans, um ihre Lieblingsserien zu verfolgen und zu teilen. Derzeit in Entwicklung.",
    technologies: ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "(In Entwicklung..)"],
    rncp: [],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description:
      "Ein Tool, das aus einem Bilderordner ein Sprite erstellt und automatisch das entsprechende CSS-Stylesheet generiert. Unterstützt Standard-CLI-Optionen (Sprite-Name, CSS-Name, Rekursion…) sowie Zusatzoptionen (Padding, Größenanpassung, Spalten).",
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
      "Ein leichtgewichtiger PHP-MVC-Framework-Generator, der die Projektstruktur vereinfacht und die Backend-Entwicklung durch automatische Routen und Controller beschleunigt.",
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
      "Ein Arcade-Spiel im Retro-Stil, entwickelt mit Pyxel und Python. Spieler müssen fallenden Steinen ausweichen und so lange wie möglich überleben.",
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
      "Eine vollständig responsive Webseiten-Integration basierend auf einem vorgegebenen Design-Mockup. Das Projekt folgt W3C-Standards, berücksichtigt SEO-Optimierung und implementiert adaptive Bilder je nach Bildschirmgröße unter Verwendung von HTML5 und CSS3 mit der BEM-Methodik.",
    technologies: ["HTML5", "CSS3"],
    rncp: ["mockup", "presentation", "architecture"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/mockup-css-responsive",
  },
];

export default projectsData;