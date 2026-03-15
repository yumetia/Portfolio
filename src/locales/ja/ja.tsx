// ja.js
import age from "@utils/data"
import { LetterText, CalendarSync, Paintbrush } from "lucide-react";
const ja = {
  navbar: {
    home: "ホーム",
    about: "について",
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
    title: "こんにちは、Yumetiaです！",
    paragraph1: `${age}歳の情熱あふれる開発者です！`,
    paragraph2: "パフォーマンス、セキュリティ、細部へのこだわりを大切にしたWeb体験を作っています。",
    paragraph3: "すべてのコードは、明確な意図を持って書かれています。",
    contactBtn: "お問い合わせ",
  },
  about: {
    title: "について",
    sections: [
      {
        id: 1,
        title: "フロントエンド開発者",
        description:
          "モダンでインタラクティブなインターフェースの構築が好きで、快適なユーザー体験を追求しています。",
        icon: LetterText,
      },
      {
        id: 2,
        title: "バックエンド開発者",
        description:
          "パフォーマンスと保守性を重視した、信頼性の高いAPIとバックエンド設計を手がけています。",
        icon: CalendarSync,
      },
      {
        id: 3,
        title: "UI/UXへの情熱",
        description:
          "デザインと使いやすさを大切にしています。すっきりとして、直感的で、使っていて気持ちいいインターフェースを目指しています。",
        icon: Paintbrush,
      },
    ],
  },
  skillsSection: {
    software: "ソフトウェア開発",
    web: "Web開発",
    database: "データベース・認証",
    game: "ゲーム開発",
  },
  experiences: {
    title: "経験",
  },
  projects: {
    title: "プロジェクト",
    modalTitle: "習得スキル (RNCP)",
    modalClose: "閉じる",
    play: "プレイ",
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
    success: "✅ メッセージが送信されました！",
    error: "❌ 送信に失敗しました。もう一度お試しください。",
  },
  isBetaLang: true,
};
export default ja;
