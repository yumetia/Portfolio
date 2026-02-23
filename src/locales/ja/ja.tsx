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
      "PHPとJavaScriptで開発されたマッチングプラットフォームのクローン。ユーザーはプロフィールを作成し、候補者を検索し、リアルタイムで交流することができます。",
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
      "アニメファン向けのプラットフォーム。お気に入りの作品を管理・共有できます。現在開発中です。",
    technologies: ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "（開発中）"],
    rncp: [],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description:
      "画像フォルダからスプライト画像を生成し、対応するCSSスタイルシートを自動生成するツール。標準的なコマンドラインオプション（スプライト名、CSS名、再帰処理など）に加え、追加オプション（パディング、リサイズ、列指定）にも対応しています。",
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
      "軽量なPHP用MVCフレームワークジェネレーター。自動ルーティングやコントローラー生成により、プロジェクト構造を簡素化し、バックエンド開発を効率化します。",
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
      "PyxelとPythonで開発されたレトロ風アーケードゲーム。落ちてくる石を避けながら、できるだけ長く生き残ることを目指します。",
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
      "提供されたデザインモックアップを基にした、完全レスポンシブ対応のWebサイト実装。W3C標準に準拠し、SEO最適化を行い、HTML5・CSS3・JavaScriptおよびBEM手法を用いて画面サイズに応じた適応画像を実装しています。",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    rncp: ["mockup", "presentation", "architecture"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/mockup-css-responsive",
  },
];

export default projectsData;