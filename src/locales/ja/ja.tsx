import experiencesData from "./experiencesData";
import aboutSections from "./aboutSections";
import projectsData from "./projectsData"

const ja = {
  navbar: {
    home: "ホーム",
    about: "自己紹介",
    skills: "スキル",
    projects: "プロジェクト",
    experiences: "経験",
    contact: "お問い合わせ",
    themeBtn: "テーマ",
    langBtn: "言語",
    toggleBtn: "日本語",
    modalClose: "閉じる",
  },
  home: {
    title: "こんにちは、Yumetiaです",
    paragraph1: "情熱を持つ21歳の開発者です！",
    paragraph2: "パフォーマンスとセキュリティを重視したWeb体験を構築しています。",
    paragraph3: "コードのすべての部分は、価値を生み出すために書かれています。",
    contactBtn: "お問い合わせはこちら！",
  },
  about: {
    title: "自己紹介",
    sections: aboutSections,
  },
  experiences: {
    title: "経験",
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
    modalTitle: "習得スキル（RNCP）",
    modalClose: "閉じる",
    play: "プレイ"
  },
  contact: {
    title: "お問い合わせ",
    placeholders: {
      subject: "件名",
      name: "お名前",
      email: "メールアドレス",
      message: "メッセージ",
    },
    button: "メッセージを送信",
    success: "✅ メッセージが正常に送信されました！",
    error: "❌ 送信に失敗しました。もう一度お試しください。",
  },
  isBetaLang:true
};

export default ja;