import amu from "@assets/institutions/amu.jpg";
import epitech from "@assets/institutions/epitech.png";
import lyceePerier from "@assets/institutions/lyceePerier.png";

const experiencesData = [
  {
    id: 1,
    role: "フルスタック開発者",
    at: "Web@cademie by Epitech",
    period: "2024年11月 - 2026年11月",
    description: [
      "チームのワークフローを改善するための社内コラボレーションプラットフォームを設計・開発。",
      "高いパフォーマンスと保守性を確保するため、スケーラブルで最適化されたソフトウェアアーキテクチャを実装。",
      "最新のWeb技術を用いたバックエンドおよびフロントエンド機能の開発。",
    ],
    name: "Epitech",
    image: epitech,
  },
  {
    id: 2,
    role: "ソフトウェア・DevOps",
    at: "Aix-Marseille University",
    period: "2022年9月 - 2024年1月",
    description: [
      "Linux上でのKodiの移植およびカスタマイズ。",
      "自動化およびシステム管理のためのBashスクリプト技術を習得。",
    ],
    name: "Aix-Marseille University",
    image: amu,
  },
  {
    id: 3,
    role: "情報工学学生",
    at: "Lycée Périer",
    period: "2019年9月 - 2022年7月",
    description: [
      "Pythonを用いたアルゴリズム設計と問題解決の基礎を確立。",
      "実践的なプログラミングを通じて主要なデータ構造とアルゴリズムを学習。",
      "論理的思考と計算的思考を活用し、最適化された解決策を開発。",
    ],
    name: "Lycée Périer",
    image: lyceePerier,
  },
] as const;

export default experiencesData;