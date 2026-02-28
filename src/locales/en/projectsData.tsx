
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
      "A dating platform clone built with PHP and JavaScript, allowing users to create profiles, browse potential matches, and interact in real-time.",
    technologies: ["PHP", "JavaScript"],
    rncp:[],
    images: myMeeticScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/my_meetic",
  },
  {
    id: 2,
    title: "Nakamanet",
    description:
      "A platform for anime fans to track and share their favorite shows. Currently in development.",
    technologies: ["Next.js", "Laravel", "AdonisJS"],
    rncp:[],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description:
      "A tool that creates a sprite from a folder of images and automatically generates the corresponding CSS stylesheet. It supports standard command-line options (sprite name, CSS name, recursion…) as well as bonus options (padding, resizing, columns).",
    technologies: ["PHP", "GD library"],
    rncp:[],
    images: cssGeneratorScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 4,
    title: "Generate MVC",
    description:
      "A lightweight PHP MVC framework generator that simplifies project structure and speeds up backend development with automatic routing and controllers.",
    technologies: ["PHP"],
    rncp:[],
    images: generateMVCScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 5,
    title: "Stone Rain",
    description:
      "A retro-style arcade game developed with Pyxel and Python, where players must dodge falling stones while trying to survive as long as possible.",
    technologies: ["Python", "Pyxel"],
    rncp:[],
    images: stoneRainScreenshots(),
    demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
    repoLink: "https://github.com/yumetia/IshiNoAme",
  },
  {
    id: 6,
    title: "Mockup Responsive",
    description:
      "A fully responsive website integration based on a provided design mockup. The project follows W3C standards, ensures SEO optimization, and implements adaptive images depending on screen size using HTML5, CSS3, and JavaScript with the BEM methodology.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    rncp: ["mockup","presentation","architecture","spec-tech","prototype","env-work","cdc"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/mockup-css-responsive",
  },
] as const;


export default projectsData