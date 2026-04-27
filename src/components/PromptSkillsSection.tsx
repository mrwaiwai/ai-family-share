import { Copy, CheckCircle, ChevronDown, ChevronUp, Lightbulb } from "lucide-react";
import { useState } from "react";

const promptExamples = [
  {
    title: "RGC 框架",
    subtitle: "角色 · 目標 · 背景",
    prompt: `【角色】你是一位有經驗、富有同理心的英語老師，擅長根據孩子的閱讀程度與興趣設計詞彙學習活動。\n\n【目標】幫助孩子在符合其閱讀程度的情況下建立英語詞彙量，理解詞語的意思與用法。\n\n【背景】孩子目前的英語閱讀程度為初級，對足球很感興趣。請圍繞這個主題選擇合適的詞彙，用簡單句子和提問方式引導孩子理解詞義與用法。`,
    tips: ["先想清楚「角色」— 你希望 AI 扮演甚麼專家？", "「目標」要具體可衡量，避免模糊的指令", "「背景」越詳細，AI 回應越貼切"],
  },
  {
    title: "蘇格拉底式引導",
    subtitle: "用提問代替給答案",
    prompt: `你是一位採用蘇格拉底式引導的閱讀學習夥伴，透過提問與追問，幫助孩子逐步澄清與建構對文章的理解。\n\nAI 只能在孩子先嘗試回答後才回應，不可直接給出答案。主要以問題回應，例如：「你是從哪一句看到這個意思的？」`,
    tips: ["加入「不可直接給出答案」的約束條件", "提供示範問句讓 AI 參考風格", "讓 AI 在孩子回答後才回應"],
  },
  {
    title: "逆向工程",
    subtitle: "從成果反推提示詞",
    prompt: `將孩子的畫作上傳至 AI，反向推測生成引導問題和相關英語詞彙。特別適合用圖畫表達的孩子，從「看得見的東西」切入，建立詞彙量和表達能力。`,
    tips: ["上傳圖片/作品後，讓 AI 分析並生成學習素材", "特別適合視覺型或非語言型孩子", "從具體事物切入比抽象概念更有效"],
  },
  {
    title: "分層提問法",
    subtitle: "由淺入深引導思考",
    prompt: `你是一位耐心的學習導師。請用以下三個層次引導孩子理解一個概念：\n\n第一層（記憶）：「這個故事裡有誰？發生了甚麼事？」\n第二層（理解）：「你覺得主角為甚麼會這樣做？」\n第三層（應用）：「如果你是主角，你會怎樣做？為甚麼？」\n\n每次只問一個層次的問題，等孩子回答後再進入下一層。`,
    tips: ["適合閱讀理解和故事分析", "三層結構：記憶 → 理解 → 應用", "循序漸進，不要跳級"],
  },
  {
    title: "錯誤糾正法",
    subtitle: "讓 AI 故意犯錯",
    prompt: `你是一位學習夥伴，但你有時會故意犯一些小錯誤。\n\n規則：\n- 在回答中加入 1-2 個故意的錯誤\n- 用友善的語氣鼓勵孩子找出錯誤\n- 當孩子找到錯誤時，問他們「你怎麼知道這是錯的？」\n- 如果孩子沒發現，給一點提示但不要直接指出\n\n例子：「2 + 3 = 6，對嗎？你覺得如何？」`,
    tips: ["培養批判思維和主動思考能力", "錯誤要控制在孩子能力範圍內", "找到錯誤後讓孩子解釋為甚麼錯"],
  },
  {
    title: "情境模擬法",
    subtitle: "角色扮演學場景",
    prompt: `你現在是一位在超市工作的收銀員。孩子要練習用英文購物對話。\n\n規則：\n- 用簡單英語，配合孩子的程度\n- 可以假設超市有不同商品\n- 引導孩子問價錢、數量和付款\n- 如果孩子卡住了，用中文給小提示\n- 每次對話後問一個小問題鞏固所學\n\n開始時說：「Welcome! What would you like to buy today?」`,
    tips: ["將學習融入生活場景", "角色扮演降低孩子的壓力", "可換成餐廳、圖書館等不同場景"],
  },
];

const PromptCard = ({ title, subtitle, prompt, tips }: typeof promptExamples[0]) => {
  const [copied, setCopied] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.replace(/\\n/g, "\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-6">
      <h3 className="mb-1 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-4 text-base text-muted-foreground">{subtitle}</p>
      <pre className="mb-4 max-h-40 overflow-y-auto whitespace-pre-wrap rounded-lg bg-muted p-4 text-sm leading-relaxed text-foreground flex-1">
        {prompt}
      </pre>

      <button
        onClick={() => setShowTips(!showTips)}
        className="mb-3 flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        <Lightbulb className="h-3.5 w-3.5" />
        使用貼士
        {showTips ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
      </button>

      {showTips && (
        <ul className="mb-4 space-y-1.5 rounded-lg bg-teal-light p-3">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
              <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              {tip}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
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
        <p className="text-lg leading-relaxed text-muted-foreground">即用即試的提示詞模板，助你引導孩子學習</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {promptExamples.map((ex) => (
          <PromptCard key={ex.title} {...ex} />
        ))}
      </div>
    </div>
  </section>
);

export default PromptSkillsSection;
