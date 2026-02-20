import experiencesData from "./experiencesData";
import aboutSections from "./aboutSections";
import projectsData from "./projectsData";

const ja = {
  navbar: {
    home: "ホーム",
    about: "自己紹介",
    skills: "スキル",
    projects: "プロジェクト",
    experiences: "経歴",
    contact: "お問い合わせ",
    themeBtn: "テーマ",
    langBtn: "言語",
    toggleBtn: "日本語",
  },
  home: {
    title: "こんにちは、Yumetiaです",
    paragraph1: "情熱を持つ21歳の開発者です！",
    paragraph2:
      "パフォーマンスとセキュリティを重視したWeb体験を構築しています。",
    paragraph3: "すべてのコードは価値を生み出すために書かれています。",
    contactBtn: "お問い合わせはこちら",
  },
  about: {
    title: "自己紹介",
    sections: aboutSections,
  },
  experiences: {
    title: "経歴",
    data: experiencesData,
  },
  skillsSection: {
    software: "ソフトウェア開発",
    web: "Web開発",
    database: "データベース & 認証",
    game: "ゲーム開発",
  },
  projects: {
    title: "プロジェクト",
    data: projectsData,
  },
  contact: {
    title: "お問い合わせ",
    placeholders: {
      subject: "件名",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
    },
    button: "送信する",
    success: "✅ メッセージが正常に送信されました！",
    error: "❌ メッセージの送信に失敗しました。もう一度お試しください。",
  },
};

export default ja;