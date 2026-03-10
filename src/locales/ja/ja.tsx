
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

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
    sections: [
      {
        id: 1,
        title: "フロントエンド開発者",
        description:
          "インタラクティブでレスポンシブなWebアプリケーションの構築において、確かな経験を持つフロントエンド開発者です。",
        icon: LetterText,
      },
      {
        id: 2,
        title: "バックエンド開発者",
        description:
          "バックエンド開発における強固な基盤を持ち、堅牢なAPI設計やデータベース管理を行っています。",
        icon: CalendarSync,
      },
      {
        id: 3,
        title: "UI/UX愛好家",
        description:
          "視覚的に魅力的でユーザーフレンドリーなインターフェースの設計を最優先事項の一つとしています。",
        icon: Paintbrush,
      },
    ],
  },
  experiences: {
    title: "経験",
  },
  skillsSection: {
    software: "ソフトウェア開発",
    web: "Web開発",
    database: "データベース & 認証",
    game: "ゲーム開発",
  },
  projects: {
    title: "プロジェクト",
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