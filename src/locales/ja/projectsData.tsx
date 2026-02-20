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
      "PHPとJavaScriptで構築されたデーティングプラットフォームのクローン。ユーザーはプロフィール作成、マッチ候補の閲覧、リアルタイムでのやり取りが可能です。",
    technologies: ["PHP", "JavaScript"],
    images: myMeeticScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/my_meetic",
  },
  {
    id: 2,
    title: "Nakamanet",
    description:
      "アニメファン向けにお気に入り作品を記録・共有できるプラットフォーム。現在開発中。",
    technologies: ["Next.js", "Laravel", "AdonisJS", "DaisyUI", "（開発中）"],
    images: nakamanetScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/nakamanet",
  },
  {
    id: 3,
    title: "CSS Generator",
    description:
      "画像フォルダからスプライトを生成し、対応するCSSスタイルシートを自動作成するツール。標準コマンドラインオプション（スプライト名、CSS名、再帰処理など）および追加オプション（パディング、リサイズ、カラム指定）に対応。",
    technologies: ["PHP", "GD library"],
    images: cssGeneratorScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/GenerateMVC",
  },
  {
    id: 4,
    title: "Generate MVC",
    description:
      "軽量なPHP MVCフレームワークジェネレーター。自動ルーティングとコントローラー生成により、プロジェクト構造を簡素化しバックエンド開発を高速化します。",
    technologies: ["PHP"],
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
    images: stoneRainScreenshots(),
    demoLink: "https://yumetia.github.io/IshiNoAmeDemo/",
    repoLink: "https://github.com/yumetia/IshiNoAme",
  },
  {
    id: 6,
    title: "Mockup Responsive",
    description:
      "提供されたデザインモックアップを基に実装した完全レスポンシブWebサイト。W3C標準に準拠し、SEO最適化を行い、HTML5・CSS3・JavaScriptおよびBEM手法を用いて画面サイズに応じた適応画像を実装。",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    rncp: ["モックアップ", "Webソリューション設計", "技術プレゼンテーション"],
    images: mockupResponsiveScreenshots(),
    demoLink: "#",
    repoLink: "https://github.com/yumetia/mockup-css-responsive",
  },
] as const;

export default projectsData;