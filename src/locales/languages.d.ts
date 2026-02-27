import { Locale } from "@context/LanguageContext";
/**
 * Helper: read `field_en` / `field_fr` from an object.
 * Fallback order: field_<locale> -> field_en -> field (if we keep a non-localized field)
*/
export declare function getLocalized<T = string>(obj: Record<string, unknown>, field: string, locale: Locale): T | undefined;
declare const languages: {
    readonly en: {
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
    readonly fr: {
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
    readonly de: {
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
    readonly ja: {
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
                readonly title: "フロントエンド開発者";
                readonly description: "インタラクティブでレスポンシブなWebアプリケーションの構築において、確かな経験を持つフロントエンド開発者です。";
                readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
            }, {
                readonly id: 2;
                readonly title: "バックエンド開発者";
                readonly description: "バックエンド開発における強固な基盤を持ち、堅牢なAPI設計やデータベース管理を行っています。";
                readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
            }, {
                readonly id: 3;
                readonly title: "UI/UX愛好家";
                readonly description: "視覚的に魅力的でユーザーフレンドリーなインターフェースの設計を最優先事項の一つとしています。";
                readonly icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
            }];
        };
        experiences: {
            title: string;
            data: readonly [{
                readonly id: 1;
                readonly role: "フルスタック開発者";
                readonly at: "Web@cademie by Epitech";
                readonly period: "2024年11月 - 2026年11月";
                readonly description: readonly ["チームのワークフローを改善するための社内コラボレーションプラットフォームを設計・開発。", "高いパフォーマンスと保守性を確保するため、スケーラブルで最適化されたソフトウェアアーキテクチャを実装。", "最新のWeb技術を用いたバックエンドおよびフロントエンド機能の開発。"];
                readonly name: "Epitech";
                readonly image: string;
            }, {
                readonly id: 2;
                readonly role: "ソフトウェア・DevOps";
                readonly at: "Aix-Marseille University";
                readonly period: "2022年9月 - 2024年1月";
                readonly description: readonly ["Linux上でのKodiの移植およびカスタマイズ。", "自動化およびシステム管理のためのBashスクリプト技術を習得。"];
                readonly name: "Aix-Marseille University";
                readonly image: string;
            }, {
                readonly id: 3;
                readonly role: "情報工学学生";
                readonly at: "Lycée Périer";
                readonly period: "2019年9月 - 2022年7月";
                readonly description: readonly ["Pythonを用いたアルゴリズム設計と問題解決の基礎を確立。", "実践的なプログラミングを通じて主要なデータ構造とアルゴリズムを学習。", "論理的思考と計算的思考を活用し、最適化された解決策を開発。"];
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
};
export default languages;
