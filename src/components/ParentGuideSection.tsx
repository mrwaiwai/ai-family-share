import { ShieldCheck, Eye, Clock, BookMarked, Sparkles, GraduationCap } from "lucide-react";

const guidelines = [
  {
    icon: Eye,
    title: "陪同使用",
    text: "年幼孩子容易過快接受 AI 的答案。家長陪伴能確保孩子不會跳過思考過程。",
  },
  {
    icon: ShieldCheck,
    title: "設定安全界線",
    text: "了解 AI 可能生成不當內容的風險，提前設定好使用規範和時間限制。",
  },
  {
    icon: Clock,
    title: "控制學習節奏",
    text: "AI 幫忙調整內容，但學什麼、學多少、什麼時候停，仍由大人決定。",
  },
  {
    icon: BookMarked,
    title: "覆盤與分析",
    text: "利用 AI 分析對話記錄，辨識孩子的強項與需要加強的地方。",
  },
];

const aiLearningTopics = [
  {
    icon: Sparkles,
    title: "AI 輔助語言學習",
    description: "如何用 AI 幫助孩子學英文、建立詞彙量，從興趣出發設計學習活動。",
    tips: ["用孩子喜歡的主題（如足球）設計對話", "一次一個問題，保持互動", "讓孩子先猜測再引導"],
  },
  {
    icon: GraduationCap,
    title: "特殊教育需要 (SEN)",
    description: "針對 ADHD、自閉症等特殊需要孩子，運用 AI 的個性化優勢輔助學習。",
    tips: ["用圖畫作為溝通起點", "蘇格拉底式提問引導理解", "簡短、分步驟的指令"],
  },
];

const ParentGuideSection = () => (
  <section id="parent-guide" className="py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">家長指南</h2>
        <p className="text-muted-foreground">安全、有效地陪伴孩子使用 AI 學習</p>
      </div>

      <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guidelines.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-teal-light p-3">
              <g.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold text-foreground">{g.title}</h3>
            <p className="text-sm text-muted-foreground">{g.text}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 text-center">
        <h3 className="mb-2 text-2xl font-bold text-foreground">AI 與子女學習</h3>
        <p className="text-muted-foreground">擴展學習：家長如何運用 AI 幫助孩子成長</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {aiLearningTopics.map((topic) => (
          <div key={topic.title} className="rounded-xl border border-border bg-card p-8">
            <div className="mb-4 inline-flex rounded-lg bg-coral-light p-3">
              <topic.icon className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="mb-2 text-xl font-semibold text-foreground">{topic.title}</h4>
            <p className="mb-4 text-sm text-muted-foreground">{topic.description}</p>
            <ul className="space-y-2">
              {topic.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ParentGuideSection;
