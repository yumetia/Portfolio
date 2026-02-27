declare const ja: {
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
export default ja;
