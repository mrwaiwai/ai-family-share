import { Copy, CheckCircle, ChevronDown, ChevronUp, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type PromptExample = {
  title: string;
  subtitle: string;
  prompt: string;
  tips: string[];
};

const promptExamplesZh: PromptExample[] = [
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

const promptExamplesEn: PromptExample[] = [
  {
    title: "RGC Framework",
    subtitle: "Role · Goal · Context",
    prompt: `[Role] You are an experienced and empathetic English teacher who designs vocabulary activities based on a child's reading level and interests.\n\n[Goal] Help the child build English vocabulary and understand word meaning and usage in age-appropriate ways.\n\n[Context] The child is beginner level and loves football. Use this theme to select suitable words, then guide understanding through simple sentences and follow-up questions.`,
    tips: ["Define the role clearly first.", "Make goals specific and measurable.", "Add detailed context to improve relevance."],
  },
  {
    title: "Socratic Guidance",
    subtitle: "Questions instead of direct answers",
    prompt: `You are a Socratic learning partner. Use questions and follow-up prompts to help the child build understanding step by step.\n\nRules:\n- Do not give direct answers first\n- Ask one question at a time\n- Wait for the child's response before continuing\n- Ask for evidence (for example: \"Which sentence supports your idea?\")`,
    tips: ["Set clear constraints: no direct answers.", "Provide sample question style.", "Enforce one-turn-at-a-time interaction."],
  },
  {
    title: "Reverse Prompting",
    subtitle: "From output to learning prompts",
    prompt: `I uploaded the child's drawing. Please infer suitable learning prompts and English vocabulary based on what you see. Focus on concrete objects in the image and turn them into interactive language practice.`,
    tips: ["Use uploaded work as the learning anchor.", "Best for visual/nonverbal learners.", "Start from concrete details before abstract concepts."],
  },
  {
    title: "Layered Questioning",
    subtitle: "From simple to deep thinking",
    prompt: `You are a patient tutor. Guide understanding through three layers:\n\nLayer 1 (Memory): Who is in the story? What happened?\nLayer 2 (Understanding): Why did the main character do that?\nLayer 3 (Application): If you were the main character, what would you do and why?\n\nAsk only one layer question at a time, then wait for the child's reply before moving forward.`,
    tips: ["Great for reading comprehension.", "Use Memory → Understanding → Application.", "Do not skip levels."],
  },
  {
    title: "Intentional Error Method",
    subtitle: "Let AI make controlled mistakes",
    prompt: `You are a learning partner who occasionally makes small mistakes.\n\nRules:\n- Include 1-2 intentional mistakes in each response\n- Encourage the child to find them\n- Ask: \"How do you know this is wrong?\"\n- If the child misses it, give a hint but do not reveal immediately`,
    tips: ["Build critical thinking habits.", "Keep errors age-appropriate.", "Ask children to explain why correction is needed."],
  },
  {
    title: "Scenario Simulation",
    subtitle: "Role-play for practical situations",
    prompt: `You are a supermarket cashier helping a child practice shopping English.\n\nRules:\n- Use simple English for the child's level\n- Introduce items, prices, quantities, and payment\n- If the child gets stuck, provide short hints\n- Ask one review question after each mini-dialogue\n\nStart with: \"Welcome! What would you like to buy today?\"`,
    tips: ["Bring learning into daily life.", "Role-play lowers pressure.", "Can be adapted to restaurant/library/travel scenes."],
  },
];

const PromptCard = ({
  title,
  subtitle,
  prompt,
  tips,
  language,
}: PromptExample & { language: "zh" | "en" }) => {
  const [copied, setCopied] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.replace(/\\n/g, "\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col rounded-[2rem] border border-soft bg-white p-6 shadow-card">
      <div className="mb-4 inline-flex w-fit rounded-full border border-soft bg-soft-yellow px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-ink shadow-card">
        {subtitle}
      </div>
      <h3 className="mb-4 font-display text-3xl font-extrabold text-ink">{title}</h3>
      <pre className="mb-5 max-h-44 flex-1 overflow-y-auto whitespace-pre-wrap rounded-[1.3rem] border border-soft bg-background p-5 text-sm font-bold leading-relaxed text-ink">
        {prompt}
      </pre>

      <button
        onClick={() => setShowTips(!showTips)}
        className="mb-4 inline-flex items-center gap-2 text-sm font-extrabold text-ink transition-opacity hover:opacity-80"
      >
        <Lightbulb className="h-4 w-4 text-secondary" />
        {language === "zh" ? "使用貼士" : "Tips"}
        {showTips ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
      </button>

      {showTips && (
        <ul className="mb-5 space-y-2 rounded-[1.3rem] border border-soft bg-soft-sky p-4">
          {tips.map((tip) => (
            <li key={tip} className="flex items-start gap-2.5 text-sm font-bold text-ink">
              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
              {tip}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={handleCopy}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-soft bg-soft-pink px-5 py-3 text-sm font-extrabold text-ink shadow-card transition-transform hover:-translate-y-0.5"
      >
        {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        {copied ? (language === "zh" ? "已複製" : "Copied") : language === "zh" ? "複製提示詞" : "Copy Prompt"}
      </button>
    </div>
  );
};

const PromptSkillsPage = () => {
  const { language } = useLanguage();
  const promptExamples = language === "zh" ? promptExamplesZh : promptExamplesEn;

  const copy =
    language === "zh"
      ? {
          title: "提示詞技巧",
          desc: "幫家長整理常用又易掌握的提示詞框架。你可以先理解每種提問方式適合什麼情境，再直接複製模板到 AI 工具實戰使用。",
          stats: ["常用框架", "即用模板", "再帶入陪伴學習"],
          startTitle: "先看哪幾種？",
          startItems: [
            "第一次用 AI：先看 RGC 框架。",
            "想訓練孩子思考：先看蘇格拉底式引導。",
            "想做生活化練習：先看情境模擬法。",
            "想提升判斷力：看看錯誤糾正法。",
          ],
          howTitle: "使用方法",
          howItems: [
            "先選一個最貼近你目前需要的框架。",
            "先複製模板，再按孩子年齡、科目、情境微調。",
            "用完一次後回看效果，再修改角色、目標或背景。",
          ],
          reminderTitle: "重點提醒",
          reminderItems: [
            "先講清楚 AI 扮演什麼角色。",
            "目標要具體，不要只寫『幫我教』。",
            "背景越完整，回應越接近家長真實需要。",
          ],
        }
      : {
          title: "Prompt Skills",
          desc: "Practical prompt frameworks for parents. Learn when to use each approach, then copy templates directly into AI tools.",
          stats: ["Core Frameworks", "Ready-to-Use", "Apply in Co-Learning"],
          startTitle: "Where to Start",
          startItems: [
            "New to AI: start with RGC.",
            "For thinking skills: use Socratic Guidance.",
            "For daily practice: use Scenario Simulation.",
            "For judgment skills: use Intentional Errors.",
          ],
          howTitle: "How to Use",
          howItems: [
            "Pick one framework that matches your current goal.",
            "Copy a template and adjust age, subject, and context.",
            "Review outcomes and refine role/goal/context.",
          ],
          reminderTitle: "Key Reminders",
          reminderItems: [
            "Define AI's role clearly.",
            "Set specific, measurable goals.",
            "Add enough context for age and scenario.",
          ],
        };

  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(255,244,247,0.98))] p-5 md:p-7">
      <div className="space-y-8">
        <div className="rounded-[30px] border border-soft bg-[linear-gradient(180deg,rgba(255,236,242,0.98),rgba(255,255,255,0.96))] p-6 shadow-card md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-yellow px-4 py-2 shadow-card">
                <Sparkles className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">Prompt Guide</span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">{copy.title}</h1>
              <p className="mt-4 max-w-3xl text-base font-bold leading-relaxed text-ink/75 md:text-lg">{copy.desc}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[390px]">
              <div className="rounded-[1.4rem] border border-soft bg-soft-pink p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">6</p>
                <p className="text-sm font-bold text-ink/70">{copy.stats[0]}</p>
              </div>
              <div className="rounded-[1.4rem] border border-soft bg-soft-sky p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">{language === "zh" ? "可直接複製" : "Copy & Use"}</p>
                <p className="text-sm font-bold text-ink/70">{copy.stats[1]}</p>
              </div>
              <div className="rounded-[1.4rem] border border-soft bg-soft-mint p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">{language === "zh" ? "先學" : "Learn First"}</p>
                <p className="text-sm font-bold text-ink/70">{copy.stats[2]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_2.05fr]">
          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[2rem] border border-soft bg-soft-yellow p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-ink">{copy.startTitle}</h2>
              <div className="mt-4 space-y-3">
                {copy.startItems.map((item) => (
                  <div key={item} className="rounded-[1.2rem] border border-soft bg-white px-4 py-3 text-sm font-bold leading-relaxed text-ink shadow-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-soft bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-ink">{copy.howTitle}</h2>
              <div className="mt-4 space-y-3">
                {copy.howItems.map((step, index) => (
                  <div key={step} className="rounded-[1.2rem] border border-soft bg-background p-4">
                    <p className="font-display text-xl font-extrabold text-ink">0{index + 1}</p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-ink/75">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[2rem] border border-soft bg-soft-peach p-6 shadow-card md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-4 py-2 shadow-card">
                <ArrowRight className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{copy.reminderTitle}</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {copy.reminderItems.map((item) => (
                  <div key={item} className="rounded-[1.3rem] border border-soft bg-white p-4 shadow-card">
                    <p className="text-sm font-bold leading-relaxed text-ink/80">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
              {promptExamples.map((ex) => (
                <PromptCard key={ex.title} {...ex} language={language} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptSkillsPage;
