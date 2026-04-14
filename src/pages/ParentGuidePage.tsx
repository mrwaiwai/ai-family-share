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
    tips: [
      "用孩子喜歡的主題（如足球）設計對話",
      "一次一個問題，保持互動",
      "讓孩子先猜測再引導",
    ],
  },
  {
    icon: GraduationCap,
    title: "特殊教育需要 (SEN)",
    description: "針對 ADHD、自閉症等特殊需要孩子，運用 AI 的個性化優勢輔助學習。",
    tips: [
      "用圖畫作為溝通起點",
      "蘇格拉底式提問引導理解",
      "簡短、分步驟的指令",
    ],
  },
];

const ParentGuidePage = () => (
  <div className="py-12 lg:py-16">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="mb-14">
        <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">👨‍👩‍👧‍👦 家長指南</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          安全、有效地陪伴孩子使用 AI 學習。掌握陪同技巧、設定界線，讓 AI 成為親子學習的好幫手。
        </p>
      </div>

      {/* Core Guidelines */}
      <div className="mb-20">
        <h2 className="mb-8 text-2xl font-bold text-foreground">核心原則</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guidelines.map((g) => (
            <div key={g.title} className="rounded-2xl border border-border bg-card p-8 text-center">
              <div className="mx-auto mb-5 inline-flex rounded-xl bg-teal-light p-4">
                <g.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{g.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{g.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AI Learning Topics */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-foreground">AI 與子女學習</h2>
        <p className="mb-8 text-muted-foreground">擴展學習：家長如何運用 AI 幫助孩子成長</p>

        <div className="grid gap-8 md:grid-cols-2">
          {aiLearningTopics.map((topic) => (
            <div key={topic.title} className="rounded-2xl border border-border bg-card p-10">
              <div className="mb-5 inline-flex rounded-xl bg-coral-light p-4">
                <topic.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{topic.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
              <ul className="space-y-3">
                {topic.tips.map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ParentGuidePage;
