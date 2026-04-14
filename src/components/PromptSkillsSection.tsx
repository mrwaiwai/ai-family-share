import { Copy, CheckCircle } from "lucide-react";
import { useState } from "react";

const promptExamples = [
  {
    title: "RGC 框架",
    subtitle: "角色 · 目標 · 背景",
    prompt: `【角色】你是一位有經驗、富有同理心的英語老師，擅長根據孩子的閱讀程度與興趣設計詞彙學習活動。\n\n【目標】幫助孩子在符合其閱讀程度的情況下建立英語詞彙量，理解詞語的意思與用法。\n\n【背景】孩子目前的英語閱讀程度為初級，對足球很感興趣。請圍繞這個主題選擇合適的詞彙，用簡單句子和提問方式引導孩子理解詞義與用法。`,
  },
  {
    title: "蘇格拉底式引導",
    subtitle: "用提問代替給答案",
    prompt: `你是一位採用蘇格拉底式引導的閱讀學習夥伴，透過提問與追問，幫助孩子逐步澄清與建構對文章的理解。\n\nAI 只能在孩子先嘗試回答後才回應，不可直接給出答案。主要以問題回應，例如：「你是從哪一句看到這個意思的？」`,
  },
  {
    title: "逆向工程",
    subtitle: "從成果反推提示詞",
    prompt: `將孩子的畫作上傳至 AI，反向推測生成引導問題和相關英語詞彙。特別適合用圖畫表達的孩子，從「看得見的東西」切入，建立詞彙量和表達能力。`,
  },
];

const PromptCard = ({ title, subtitle, prompt }: typeof promptExamples[0]) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.replace(/\\n/g, "\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">{subtitle}</p>
      <pre className="mb-4 max-h-40 overflow-y-auto whitespace-pre-wrap rounded-lg bg-muted p-4 text-xs leading-relaxed text-foreground">
        {prompt}
      </pre>
      <button
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {copied ? <CheckCircle className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        {copied ? "已複製" : "複製提示詞"}
      </button>
    </div>
  );
};

const PromptSkillsSection = () => (
  <section id="prompt-skills" className="bg-warm py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">提示詞技巧</h2>
        <p className="text-muted-foreground">即用即試的提示詞模板，助你引導孩子學習</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {promptExamples.map((ex) => (
          <PromptCard key={ex.title} {...ex} />
        ))}
      </div>
    </div>
  </section>
);

export default PromptSkillsSection;
