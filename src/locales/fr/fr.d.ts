declare const fr: {
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
            readonly title: "Développeur Frontend";
            readonly description: "Je suis développeur frontend avec une solide expérience dans la création d'applications web interactives et réactives.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }, {
            readonly id: 2;
            readonly title: "Développeur Backend";
            readonly description: "J'ai une base solide en développement backend, en concevant des API robustes et en gérant des bases de données.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }, {
            readonly id: 3;
            readonly title: "Passionné par l'UI/UX";
            readonly description: "Créer des interfaces visuellement attrayantes et faciles à utiliser est l'une de mes priorités.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }];
    };
    skillsSection: {
        software: string;
        web: string;
        database: string;
        game: string;
    };
    experiences: {
        title: string;
        data: readonly [{
            readonly id: 1;
            readonly role: "Développeur Fullstack";
            readonly at: "Web@cademie by Epitech";
            readonly period: "Nov 2024 - Nov 2026";
            readonly description: readonly ["Conception et développement d'une plateforme interne de collaboration pour améliorer les flux de travail d'équipe.", "Mise en place d'une architecture logicielle évolutive et optimisée, garantissant des performances élevées et une maintenance aisée.", "Développement des fonctionnalités backend et frontend avec des technologies web modernes."];
            readonly name: "Epitech";
            readonly image: string;
        }, {
            readonly id: 2;
            readonly role: "Software, DevOps";
            readonly at: "Université Aix-Marseille";
            readonly period: "Sep 2022 - Jan 2024";
            readonly description: readonly ["Portage et personnalisation de Kodi sur Linux.", "Acquisition d'une expertise en script Bash pour l'automatisation et la gestion des systèmes."];
            readonly name: "Université Aix-Marseille";
            readonly image: string;
        }, {
            readonly id: 3;
            readonly role: "Étudiant en Informatique";
            readonly at: "Lycée Périer";
            readonly period: "Sep 2019 - Jul 2022";
            readonly description: readonly ["Construction d'une base solide en conception d'algorithmes et résolution de problèmes avec Python.", "Exploration des structures de données et des algorithmes essentiels à travers des projets pratiques.", "Application de la pensée logique et computationnelle pour développer des solutions optimisées."];
            readonly name: "Lycée Périer";
            readonly image: string;
        }];
    };
    projects: {
        title: string;
        data: {
            id: number;
            title: string;
            description: string;
            technologies: string[];
            rncp: string[];
            images: string[];
            demoLink: string;
            repoLink: string;
        }[];
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
export default fr;
