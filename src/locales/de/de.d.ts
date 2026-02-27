declare const de: {
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
            readonly title: "Frontend-Entwickler";
            readonly description: "Ich bin ein Frontend-Entwickler mit solider Erfahrung in der Entwicklung interaktiver und responsiver Webanwendungen.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }, {
            readonly id: 2;
            readonly title: "Backend-Entwickler";
            readonly description: "Ich verfüge über eine starke Grundlage in der Backend-Entwicklung, entwerfe robuste APIs und verwalte Datenbanken.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }, {
            readonly id: 3;
            readonly title: "UI/UX-Enthusiast";
            readonly description: "Die Gestaltung visuell ansprechender und benutzerfreundlicher Oberflächen hat für mich oberste Priorität.";
            readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
        }];
    };
    experiences: {
        title: string;
        data: readonly [{
            readonly id: 1;
            readonly role: "Fullstack-Entwickler";
            readonly at: "Web@cademie by Epitech";
            readonly period: "Nov 2024 - Nov 2026";
            readonly description: readonly ["Konzeption und Entwicklung einer internen Kollaborationsplattform zur Optimierung von Team-Workflows.", "Implementierung einer skalierbaren und optimierten Softwarearchitektur zur Sicherstellung von Performance und Wartbarkeit.", "Entwicklung von Backend- und Frontend-Funktionalitäten mit modernen Webtechnologien."];
            readonly name: "Epitech";
            readonly image: string;
        }, {
            readonly id: 2;
            readonly role: "Software, DevOps";
            readonly at: "Aix-Marseille University";
            readonly period: "Sep 2022 - Jan 2024";
            readonly description: readonly ["Portierung und Anpassung von Kodi unter Linux.", "Vertiefung der Kenntnisse in Bash-Scripting für Automatisierung und Systemverwaltung."];
            readonly name: "Aix-Marseille University";
            readonly image: string;
        }, {
            readonly id: 3;
            readonly role: "Informatikstudent";
            readonly at: "Lycée Périer";
            readonly period: "Sep 2019 - Jul 2022";
            readonly description: readonly ["Aufbau einer soliden Grundlage in Algorithmendesign und Problemlösung mit Python.", "Erforschung grundlegender Datenstrukturen und Algorithmen durch praktische Programmierung.", "Anwendung von logischem Denken und rechnergestützter Problemlösung zur Entwicklung optimierter Lösungen."];
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
export default de;
