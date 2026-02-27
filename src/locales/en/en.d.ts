declare const en: {
    navbar: {
        home: string;
        about: string;
        skills: string;
        projects: string;
        experiences: string;
        contact: string;
        themeBtn: string;
        langBtn: string;
        toggleBtn: string;
    };
    home: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        contactBtn: string;
    };
    about: {
        title: string;
        sections: readonly [{
            readonly id: 1;
            readonly title: "Frontend Developer";
            readonly description: "I am a frontend developer with solid experience in building interactive and responsive web applications.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }, {
            readonly id: 2;
            readonly title: "Backend Developer";
            readonly description: "I have a strong foundation in backend development, designing robust APIs and handling database management.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }, {
            readonly id: 3;
            readonly title: "UI/UX Enthusiast";
            readonly description: "Crafting visually appealing and user-friendly interfaces is one of my top priorities.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }];
    };
    experiences: {
        title: string;
        data: readonly [{
            readonly id: 1;
            readonly role: "Fullstack Developer";
            readonly at: "Web@cademie by Epitech";
            readonly period: "Nov 2024 - Nov 2026";
            readonly description: readonly ["Designed and built an internal collaboration platform to improve team workflows.", "Implemented a scalable and optimized software architecture, ensuring high performance and maintainability.", "Developed backend and frontend features using modern web technologies."];
            readonly name: "Epitech";
            readonly image: string;
        }, {
            readonly id: 2;
            readonly role: "Software, DevOps";
            readonly at: "Aix-Marseille University";
            readonly period: "Sep 2022 - Jan 2024";
            readonly description: readonly ["Porting and customizing Kodi on Linux.", "Gaining expertise in Bash scripting for automation and system management."];
            readonly name: "Aix-Marseille University";
            readonly image: string;
        }, {
            readonly id: 3;
            readonly role: "Computer Science Student";
            readonly at: "Lycée Périer";
            readonly period: "Sep 2019 - Jul 2022";
            readonly description: readonly ["Built a strong foundation in algorithm design and problem-solving using Python.", "Explored essential data structures and algorithms through hands-on programming.", "Applied logical reasoning and computational thinking to develop optimized solutions."];
            readonly name: "Lycée Périer";
            readonly image: string;
        }];
    };
    skillsSection: {
        software: string;
        web: string;
        database: string;
        game: string;
    };
    projects: {
        title: string;
        data: readonly [{
            readonly id: 1;
            readonly title: "My Meetic";
            readonly description: "A dating platform clone built with PHP and JavaScript, allowing users to create profiles, browse potential matches, and interact in real-time.";
            readonly technologies: readonly ["PHP", "JavaScript"];
            readonly rncp: readonly [];
            readonly images: string[];
            readonly demoLink: "#";
            readonly repoLink: "https://github.com/yumetia/my_meetic";
        }, {
            readonly id: 2;
            readonly title: "Nakamanet";
            readonly description: "A platform for anime fans to track and share their favorite shows. Currently in development.";
            readonly technologies: readonly ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "(In development..)"];
            readonly rncp: readonly [];
            readonly images: string[];
            readonly demoLink: "#";
            readonly repoLink: "https://github.com/yumetia/nakamanet";
        }, {
            readonly id: 3;
            readonly title: "CSS Generator";
            readonly description: "A tool that creates a sprite from a folder of images and automatically generates the corresponding CSS stylesheet. It supports standard command-line options (sprite name, CSS name, recursion…) as well as bonus options (padding, resizing, columns).";
            readonly technologies: readonly ["PHP", "GD library"];
            readonly rncp: readonly [];
            readonly images: string[];
            readonly demoLink: "#";
            readonly repoLink: "https://github.com/yumetia/GenerateMVC";
        }, {
            readonly id: 4;
            readonly title: "Generate MVC";
            readonly description: "A lightweight PHP MVC framework generator that simplifies project structure and speeds up backend development with automatic routing and controllers.";
            readonly technologies: readonly ["PHP"];
            readonly rncp: readonly [];
            readonly images: string[];
            readonly demoLink: "#";
            readonly repoLink: "https://github.com/yumetia/GenerateMVC";
        }, {
            readonly id: 5;
            readonly title: "Stone Rain";
            readonly description: "A retro-style arcade game developed with Pyxel and Python, where players must dodge falling stones while trying to survive as long as possible.";
            readonly technologies: readonly ["Python", "Pyxel"];
            readonly rncp: readonly [];
            readonly images: string[];
            readonly demoLink: "https://yumetia.github.io/IshiNoAmeDemo/";
            readonly repoLink: "https://github.com/yumetia/IshiNoAme";
        }, {
            readonly id: 6;
            readonly title: "Mockup Responsive";
            readonly description: "A fully responsive website integration based on a provided design mockup. The project follows W3C standards, ensures SEO optimization, and implements adaptive images depending on screen size using HTML5, CSS3, and JavaScript with the BEM methodology.";
            readonly technologies: readonly ["HTML5", "CSS3", "JavaScript"];
            readonly rncp: readonly ["mockup", "presentation", "architecture"];
            readonly images: string[];
            readonly demoLink: "#";
            readonly repoLink: "https://github.com/yumetia/mockup-css-responsive";
        }];
        modalTitle: string;
        modalClose: string;
        play: string;
    };
    contact: {
        title: string;
        placeholders: {
            subject: string;
            name: string;
            email: string;
            message: string;
        };
        button: string;
        success: string;
        error: string;
    };
};
export default en;
