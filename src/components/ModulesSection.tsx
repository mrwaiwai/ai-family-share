import { Bot, Brain, MessageSquare, Lightbulb, Shield, Puzzle } from "lucide-react";
import ModuleCard from "./ModuleCard";

const modules = [
  {
    icon: Bot,
    title: "什麼是人工智能？",
    description: "了解傳統 AI 與生成式 AI 的分別，認識 ChatGPT、Siri 等工具背後的原理。",
    color: "bg-teal-light" as const,
    iconColor: "text-primary",
    tag: "基礎",
  },
  {
    icon: Brain,
    title: "GPT 的運作原理",
    description: "輸入 → 過程 → 輸出（TPG）：拆解大型語言模型如何理解和生成內容。",
    color: "bg-coral-light" as const,
    iconColor: "text-secondary",
    tag: "基礎",
  },
  {
    icon: Lightbulb,
    title: "偏見、幻覺與批判思維",
    description: "訓練數據的偏差如何影響 AI 輸出？如何教孩子批判性地使用 AI。",
    color: "bg-purple-light" as const,
    iconColor: "text-accent",
    tag: "進階",
  },
  {
    icon: MessageSquare,
    title: "AI 模型比較與選擇",
    description: "ChatGPT、DeepSeek、Gemini — 不同模型適合甚麼年齡和學習場景？",
    color: "bg-teal-light" as const,
    iconColor: "text-primary",
    tag: "實用",
  },
  {
    icon: Puzzle,
    title: "提示詞撰寫技巧",
    description: "RGC 框架、蘇格拉底式引導、逆向工程 — 掌握與 AI 對話的藝術。",
    color: "bg-coral-light" as const,
    iconColor: "text-secondary",
    tag: "核心",
  },
  {
    icon: Shield,
    title: "家長的陪同指引",
    description: "為甚麼家長陪同如此重要？如何設定界線，安全地讓孩子使用 AI。",
    color: "bg-purple-light" as const,
    iconColor: "text-accent",
    tag: "必讀",
  },
];

const ModulesSection = () => (
  <section id="modules" className="py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">學習模組</h2>
        <p className="text-muted-foreground">由淺入深，循序漸進掌握 AI 教育知識</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m, i) => (
          <ModuleCard key={m.title} {...m} delay={i * 100} />
        ))}
      </div>
    </div>
  </section>
);

export default ModulesSection;
