import { LetterText, CalendarSync, Paintbrush } from "lucide-react";

const aboutSections = [
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
] as const;

export default aboutSections;