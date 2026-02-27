export type RncpBloc = "RNCP38436BC01" | "RNCP38436BC02" | "RNCP38436BC03";
export type Lang = "fr" | "en";
/**
 * 1) Structure/order per bloc
 */
export declare const RNCP_BLOCKS: {
    readonly RNCP38436BC01: readonly ["RNCP01-1", "RNCP01-2", "RNCP01-3", "RNCP01-4", "RNCP01-5", "RNCP01-6"];
    readonly RNCP38436BC02: readonly ["RNCP02-1", "RNCP02-2", "RNCP02-3", "RNCP02-4", "RNCP02-5", "RNCP02-6", "RNCP02-7", "RNCP02-8"];
    readonly RNCP38436BC03: readonly ["RNCP03-1", "RNCP03-2", "RNCP03-3", "RNCP03-4", "RNCP03-5", "RNCP03-6"];
};
export type RncpId = (typeof RNCP_BLOCKS)[RncpBloc][number];
/**
 * 2) Descriptions
 */
export declare const RNCP_DESCRIPTION_FR: {
    readonly "RNCP01-1": "Rédiger un Cahier Des Charges (CDC) en partant d'une expression de besoins, afin de cadrer fonctionnellement un projet de solution web dans le respect des réglementations en vigueur et notamment le RGPD";
    readonly "RNCP01-2": "Rédiger des spécifications techniques en analysant un CDC, afin de cadrer techniquement un projet de développement de solution web";
    readonly "RNCP01-3": "Déployer un environnement de travail en mettant en place les outils de versionnage, de partage et de collaboration/communication nécessaires, afin de cadrer opérationnellement un projet de développement de solution web";
    readonly "RNCP01-4": "Réaliser une maquette afin de permettre au client de valider la structure de la solution web en respectant les bonnes pratiques en termes d'ergonomie et d'accessibilité";
    readonly "RNCP01-5": "Identifier les fonctionnalités à développer, en modélisant les divers éléments et leurs interconnexions, afin de structurer l'architecture de la solution web et de Base De Données (BDD)";
    readonly "RNCP01-6": "Rédiger une présentation pour présenter les choix techniques, les maquettes, et le schéma de la solution web en argumentant les choix faits afin de permettre au client ou au décideur de valider la proposition de solution";
    readonly "RNCP02-1": "Développer le prototype de la solution web afin de présenter l'architecture technique au client";
    readonly "RNCP02-2": "Rédiger le code de la solution en transcrivant les fonctionnalités du CDC, en respectant les normes d'accessibilité, d'ergonomie, de référencement, et la réglementation en vigueur afin de développer la solution web";
    readonly "RNCP02-3": "Intégrer les différents éléments de la solution web en fonction des maquettes, en respectant les dernières normes des langages utilisés (HTML, CSS, JS, …)";
    readonly "RNCP02-4": "Implémenter la partie \"front-end\" d'une solution web";
    readonly "RNCP02-5": "Implémenter la logique et la base de données assurant la persistance des données côté serveur (le \"back-end\")";
    readonly "RNCP02-6": "Implémenter des règles d'authentification, en respectant les bonnes pratiques en matière de sécurité, afin de sécuriser l'accès à une solution web";
    readonly "RNCP02-7": "Implémenter un plan de tests en concevant les différents tests unitaires et d'intégration afin de vérifier que l'ensemble des fonctionnalités développées fonctionne bien séparément et à l'unisson";
    readonly "RNCP02-8": "Déployer une application web en utilisant un serveur afin de rendre l'application accessible aux utilisateurs";
    readonly "RNCP03-1": "Rédiger une documentation technique à destination des équipes parties prenantes en réalisant la documentation technique et fonctionnelle de la solution web, afin de garantir sa pérennité et son évolution future";
    readonly "RNCP03-2": "Rédiger une documentation utilisateur pour apporter un support aux utilisateurs, afin de garantir l'autonomie et la satisfaction des utilisateurs de la solution web";
    readonly "RNCP03-3": "Monitorer le lancement d'une solution web, en recueillant les retours utilisateurs, afin d'évaluer la qualité de la solution web déployée";
    readonly "RNCP03-4": "Identifier des améliorations qualitatives et de performance d'une solution web, en analysant les retours utilisateurs et les données d'analyse du trafic, afin d'améliorer la qualité et la disponibilité d'une solution web déployée";
    readonly "RNCP03-5": "Analyser la qualité de l'ergonomie et la qualité de l'accessibilité de la solution (normes, design, ergonomie, navigation, référencement, bonnes pratiques, etc.) pour identifier les axes d'amélioration";
    readonly "RNCP03-6": "Rédiger un document argumentatif en listant des propositions d'améliorations afin de faire valider des préconisations de développements correctifs d'une solution web";
};
export declare const RNCP_DESCRIPTION_EN: {
    readonly "RNCP01-1": "Draft a Statement of Requirements (SOR) based on needs expression, in order to functionally define a web solution project while respecting current regulations, particularly GDPR";
    readonly "RNCP01-2": "Write technical specifications by analyzing a SOR, in order to technically define a web solution development project";
    readonly "RNCP01-3": "Deploy a working environment by implementing the necessary versioning, sharing, and collaboration/communication tools to operationally define a web solution development project";
    readonly "RNCP01-4": "Create a mockup to allow the client to validate the web solution's structure while respecting best practices in terms of ergonomics and accessibility";
    readonly "RNCP01-5": "Identify features to develop by modeling various elements and their interconnections to structure the architecture of the web solution and Database (DB)";
    readonly "RNCP01-6": "Write a presentation to showcase technical choices, mockups, and the web solution schema by arguing the choices made to allow the client or decision-maker to validate the proposed solution";
    readonly "RNCP02-1": "Develop the web solution prototype to present the technical architecture to the client";
    readonly "RNCP02-2": "Write the solution code by transcribing the SOR features while respecting accessibility, ergonomics, SEO standards and current regulations to develop the web solution";
    readonly "RNCP02-3": "Integrate the various elements of the web solution according to the mockups while respecting the latest standards of used languages (HTML, CSS, JS, ...)";
    readonly "RNCP02-4": "Implement the \"front-end\" part of a web solution";
    readonly "RNCP02-5": "Implement the logic and database ensuring data persistence on the server side (the \"back-end\")";
    readonly "RNCP02-6": "Implement authentication rules while respecting security best practices to secure access to a web solution";
    readonly "RNCP02-7": "Implement a testing plan by designing various unit and integration tests to verify that all developed features work well separately and together";
    readonly "RNCP02-8": "Deploy a web application using a server to make the application accessible to users";
    readonly "RNCP03-1": "Write technical documentation for stakeholder teams by creating the technical and functional documentation of the web solution to ensure its longevity and future evolution";
    readonly "RNCP03-2": "Write user documentation to provide support to users to ensure the autonomy and satisfaction of web solution users";
    readonly "RNCP03-3": "Monitor the launch of a web solution by collecting user feedback to assess the quality of the deployed web solution";
    readonly "RNCP03-4": "Identify quality and performance improvements for a web solution by analyzing user feedback and traffic analysis data to improve the quality and availability of a deployed web solution";
    readonly "RNCP03-5": "Analyze the quality of ergonomics and accessibility of the solution (standards, design, ergonomics, navigation, SEO, best practices, etc.) to identify areas for improvement";
    readonly "RNCP03-6": "Write an argumentative document listing improvement proposals to validate recommendations for corrective developments of a web solution";
};
export declare const RNCP_DESCRIPTION_DE: {
    readonly "RNCP01-1": "Ein Lastenheft (CDC) ausgehend von einer Bedarfserhebung erstellen, um ein Web-Lösungsprojekt funktional zu rahmen und dabei die geltenden Vorschriften, insbesondere die DSGVO, einzuhalten";
    readonly "RNCP01-2": "Technische Spezifikationen durch Analyse des Lastenhefts erstellen, um ein Web-Lösungsentwicklungsprojekt technisch zu rahmen";
    readonly "RNCP01-3": "Eine Arbeitsumgebung aufsetzen, indem die erforderlichen Tools für Versionierung, Sharing sowie Zusammenarbeit/Kommunikation eingerichtet werden, um ein Web-Lösungsentwicklungsprojekt operativ zu rahmen";
    readonly "RNCP01-4": "Ein Mockup erstellen, damit der Kunde die Struktur der Weblösung validieren kann, unter Einhaltung von Best Practices zu Ergonomie und Barrierefreiheit";
    readonly "RNCP01-5": "Zu entwickelnde Funktionen identifizieren, indem die verschiedenen Elemente und ihre Verknüpfungen modelliert werden, um die Architektur der Weblösung und der Datenbank zu strukturieren";
    readonly "RNCP01-6": "Eine Präsentation erstellen, um technische Entscheidungen, Mockups und das Schema der Weblösung darzustellen und die getroffenen Entscheidungen zu begründen, damit Kunde oder Entscheider den Lösungsvorschlag validieren kann";
    readonly "RNCP02-1": "Den Prototypen der Weblösung entwickeln, um dem Kunden die technische Architektur zu präsentieren";
    readonly "RNCP02-2": "Den Lösungscode erstellen, indem die Funktionen aus dem Lastenheft umgesetzt werden und dabei Standards für Barrierefreiheit, Ergonomie, SEO sowie die geltenden Vorschriften eingehalten werden, um die Weblösung zu entwickeln";
    readonly "RNCP02-3": "Die verschiedenen Elemente der Weblösung gemäß den Mockups integrieren und dabei die neuesten Standards der verwendeten Sprachen (HTML, CSS, JS, …) einhalten";
    readonly "RNCP02-4": "Den Front-End-Teil einer Weblösung implementieren";
    readonly "RNCP02-5": "Die Logik und Datenbank implementieren, die die Persistenz der Daten serverseitig (Back-End) sicherstellt";
    readonly "RNCP02-6": "Authentifizierungsregeln implementieren und dabei Sicherheits-Best-Practices einhalten, um den Zugriff auf eine Weblösung abzusichern";
    readonly "RNCP02-7": "Einen Testplan implementieren, indem verschiedene Unit- und Integrationstests entworfen werden, um zu überprüfen, dass alle entwickelten Funktionen einzeln und im Zusammenspiel korrekt funktionieren";
    readonly "RNCP02-8": "Eine Webanwendung auf einem Server deployen, um sie für Nutzer zugänglich zu machen";
    readonly "RNCP03-1": "Technische Dokumentation für Stakeholder-Teams erstellen, indem technische und funktionale Dokumentation der Weblösung verfasst wird, um deren Nachhaltigkeit und zukünftige Weiterentwicklung zu gewährleisten";
    readonly "RNCP03-2": "Benutzerdokumentation erstellen, um Nutzer zu unterstützen und die Autonomie und Zufriedenheit der Nutzer der Weblösung zu gewährleisten";
    readonly "RNCP03-3": "Den Launch einer Weblösung überwachen, indem Nutzerfeedback gesammelt wird, um die Qualität der ausgerollten Weblösung zu bewerten";
    readonly "RNCP03-4": "Qualitative und Performance-Verbesserungen einer Weblösung identifizieren, indem Nutzerfeedback und Traffic-Analyse-Daten ausgewertet werden, um die Qualität und Verfügbarkeit der bereitgestellten Weblösung zu verbessern";
    readonly "RNCP03-5": "Die Qualität von Ergonomie und Barrierefreiheit der Lösung (Standards, Design, Ergonomie, Navigation, SEO, Best Practices usw.) analysieren, um Verbesserungsachsen zu identifizieren";
    readonly "RNCP03-6": "Ein argumentatives Dokument verfassen, das Verbesserungsvorschläge auflistet, um Empfehlungen für korrigierende Weiterentwicklungen einer Weblösung validieren zu lassen";
};
export declare const RNCP_DESCRIPTION_JA: {
    readonly "RNCP01-1": "ニーズの表現（要望）を起点に要件定義書（CDC）を作成し、特にGDPR（一般データ保護規則）を含む現行規制を遵守しながらWebソリューション案件を機能面で定義する";
    readonly "RNCP01-2": "要件定義書（CDC）を分析して技術仕様書を作成し、Webソリューション開発プロジェクトを技術面で定義する";
    readonly "RNCP01-3": "バージョン管理、共有、コラボレーション／コミュニケーションに必要なツールを整備して作業環境を構築し、Webソリューション開発プロジェクトを運用面で定義する";
    readonly "RNCP01-4": "ユーザビリティ（エルゴノミクス）とアクセシビリティのベストプラクティスを踏まえてモックアップを作成し、顧客がWebソリューションの構造を確認・承認できるようにする";
    readonly "RNCP01-5": "各要素とその相互関係をモデリングして開発すべき機能を特定し、Webソリューションおよびデータベース（DB）のアーキテクチャを構造化する";
    readonly "RNCP01-6": "技術選定、モックアップ、Webソリューションの構成図を提示し、判断理由を論理的に説明するプレゼン資料を作成して、顧客または意思決定者が提案を承認できるようにする";
    readonly "RNCP02-1": "顧客に技術アーキテクチャを提示するため、Webソリューションのプロトタイプを開発する";
    readonly "RNCP02-2": "要件定義書（CDC）の機能を実装し、アクセシビリティ、ユーザビリティ、SEOの標準および現行規制を遵守して、Webソリューションのコードを作成する";
    readonly "RNCP02-3": "モックアップに基づいてWebソリューションの各要素を統合し、使用言語（HTML、CSS、JSなど）の最新標準に準拠する";
    readonly "RNCP02-4": "Webソリューションのフロントエンドを実装する";
    readonly "RNCP02-5": "サーバー側（バックエンド）でのデータ永続化を担うロジックとデータベースを実装する";
    readonly "RNCP02-6": "セキュリティのベストプラクティスに従って認証ルールを実装し、Webソリューションへのアクセスを保護する";
    readonly "RNCP02-7": "単体テストと結合テストを設計してテスト計画を実装し、開発した全機能が個別にも連携時にも正しく動作することを検証する";
    readonly "RNCP02-8": "サーバーを用いてWebアプリケーションをデプロイし、ユーザーが利用できる状態にする";
    readonly "RNCP03-1": "関係者チーム向けに、Webソリューションの技術・機能ドキュメントを作成して、保守性と将来的な進化を担保する";
    readonly "RNCP03-2": "ユーザーの自律的利用と満足度を確保するため、サポート目的のユーザードキュメントを作成する";
    readonly "RNCP03-3": "ユーザーフィードバックを収集しながらWebソリューションのリリースをモニタリングし、展開したソリューションの品質を評価する";
    readonly "RNCP03-4": "ユーザーフィードバックとトラフィック分析データを解析して、品質面および性能面の改善点を特定し、展開済みWebソリューションの品質と可用性を向上させる";
    readonly "RNCP03-5": "規格、デザイン、ユーザビリティ、ナビゲーション、SEO、ベストプラクティス等の観点から、ソリューションのユーザビリティおよびアクセシビリティ品質を分析し、改善軸を特定する";
    readonly "RNCP03-6": "改善提案を列挙した論証的ドキュメントを作成し、Webソリューションの是正開発に関する推奨事項の承認を得る";
};
