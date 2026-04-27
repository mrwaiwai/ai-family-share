import { Bot, Wrench, BookOpen, AlertTriangle, Puzzle, Users, Sparkles, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

type KnowledgeItem = {
  icon: typeof Bot;
  title: string;
  description: string;
  tag: string;
  category: string;
  accent: string;
  details: string[];
  keyPoints: { label: string; value: string }[];
};

const knowledgeItemsZh: KnowledgeItem[] = [
  {
    icon: Bot,
    title: "什麼是人工智能 (AI)？",
    description: "先建立基礎概念，知道 AI 會做什麼、不會做什麼，避免一開始就對 AI 有錯誤想像。",
    tag: "基礎入門",
    category: "入門認識",
    accent: "bg-soft-yellow",
    details: [
      "人工智能（AI）是讓電腦模擬人類處理資訊的技術，可以分析語言、圖像、聲音和資料模式。",
      "傳統 AI 通常只會完成明確任務，例如語音助理、路線建議、垃圾郵件過濾。",
      "生成式 AI（如 ChatGPT、Gemini）能根據大量資料模式產生新內容，例如文字、圖像、簡報和程式碼。",
      "AI 並不是真的『理解』世界，而是根據統計模式預測最可能出現的下一句或下一個結果。",
      "可以用 TPG 去理解：Think（接收輸入）→ Process（分析）→ Generate（產生輸出）。",
      "因為訓練資料來自大量網上內容，所以 AI 可能包含過時資料、偏見或不準確的回應。",
    ],
    keyPoints: [
      { label: "一句理解", value: "AI 是會預測和生成內容的工具" },
      { label: "重要提醒", value: "AI 看似聰明，但不等於真正明白" },
      { label: "家長角度", value: "先懂原理，先容易判斷回應值不值得信" },
    ],
  },
  {
    icon: Wrench,
    title: "認識不同的 AI 工具",
    description: "不同工具有不同強項，家長不需要全部熟悉，但要知道如何選擇最適合當下目的的工具。",
    tag: "工具介紹",
    category: "入門認識",
    accent: "bg-soft-pink",
    details: [
      "ChatGPT：用途全面，適合寫作、教學、翻譯、腦力激盪，通常是最易入門的選擇。",
      "Google Gemini：和 Google 生態整合度高，做資料整理、多模態查詢時比較方便。",
      "DeepSeek：在數學、推理、理科問題方面常有不錯表現，中文也相對自然。",
      "Claude：較擅長長文閱讀、摘要和溫和清晰的表達，適合處理長內容。",
      "Copilot：如果家長日常常用 Office 或 Windows，會較容易無縫接入工作流程。",
      "圖像工具如 DALL-E、Midjourney、Stable Diffusion，適合做視覺創作和靈感發想。",
      "對多數家長來說，先固定用一至兩個工具學熟，比不停換工具更有效。",
    ],
    keyPoints: [
      { label: "初學者首選", value: "ChatGPT / Gemini" },
      { label: "長文整理", value: "Claude" },
      { label: "理科推理", value: "DeepSeek" },
    ],
  },
  {
    icon: BookOpen,
    title: "如何操作 AI 工具",
    description: "將操作步驟拆細，令家長知道從註冊、提問到追問，實際上每一步應該做什麼。",
    tag: "實用操作",
    category: "實際使用",
    accent: "bg-soft-sky",
    details: [
      "先選平台並註冊帳戶，大部分主流工具都有免費版本，足夠家長初步熟習。",
      "認識基本介面：一個輸入框、一段對話歷史、一個回應區，重點不是按鈕多，而是懂得對話。",
      "第一次不需要追求完美提示詞，先學會清楚說明：你想它做什麼、對誰說、要多長、多簡單。",
      "收到第一個答案後，重點不是立即接受，而是學會追問、修改、縮窄範圍。",
      "如果內容太深，可以要求『用 8 歲孩子能理解的方式解釋』，或『舉生活例子』。",
      "進階可用上傳文件、圖像、語音輸入等功能，但先掌握基本對話能力最重要。",
    ],
    keyPoints: [
      { label: "起步順序", value: "註冊 → 問問題 → 追問 → 修正" },
      { label: "最有用技巧", value: "要求更簡單、更具體、更貼近孩子" },
      { label: "家長任務", value: "示範如何檢查答案，而不是示範如何偷快" },
    ],
  },
  {
    icon: Puzzle,
    title: "提示詞撰寫技巧",
    description: "提示詞不需要寫到好複雜，重點是令 AI 明白角色、目標和背景。",
    tag: "核心技能",
    category: "實際使用",
    accent: "bg-soft-mint",
    details: [
      "RGC 是最適合家長入手的框架：Role（角色）、Goal（目標）、Context（背景）。",
      "例如與其問『教我英文』，不如問『你是一位小學英文老師，請用 8 歲孩子明白的方式教我 5 個關於天氣的英文詞語』。",
      "如果想訓練孩子思考，不要要求 AI 直接給答案，可以要求它用提問方式引導。",
      "有時候 AI 回應太空泛，加入限制條件會明顯改善，例如字數、年齡、情境、輸出格式。",
      "家長可將常用提問句保存下來，建立自己的『家庭提示詞小抄』。",
    ],
    keyPoints: [
      { label: "入門框架", value: "RGC：角色 + 目標 + 背景" },
      { label: "改善回應", value: "加年齡、情境、字數、格式要求" },
      { label: "陪孩子學", value: "請 AI 引導，不要直接代答" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "使用 AI 的注意事項",
    description: "這一部分最適合家長先讀，因為它直接關係到安全、私隱、學術誠信和使用界線。",
    tag: "安全須知",
    category: "安全與陪伴",
    accent: "bg-soft-peach",
    details: [
      "AI 幻覺是最常見問題之一：它可能以非常自信的語氣提供錯誤內容，所以重要資訊一定要交叉核實。",
      "不要輸入個人敏感資料，包括姓名、住址、學校、電話、密碼、身份證資料等。",
      "如果孩子用 AI 做功課，要清楚界線：AI 可以幫忙理解、整理、練習，但不應代寫整份作業。",
      "AI 可能帶有偏見，尤其涉及性別、文化、社會議題時，更需要教孩子保持批判思考。",
      "部分平台有年齡限制，年幼孩子應由家長陪同使用，而不是單獨探索。",
      "如果 AI 產生不適合兒童的內容，要將它視為媒體素養教學機會，而不是單純責備孩子。",
    ],
    keyPoints: [
      { label: "最常見風險", value: "自信但錯誤的資訊" },
      { label: "私隱原則", value: "不輸入真實個人資料" },
      { label: "學習原則", value: "AI 可輔助，不可代做" },
    ],
  },
  {
    icon: Users,
    title: "家長與子女陪同指引",
    description: "家長最重要的角色不是監視，而是陪同設定方向、一起判斷內容值不值得信。",
    tag: "必讀指南",
    category: "安全與陪伴",
    accent: "bg-white",
    details: [
      "家長可用三步做陪同：一起設定提示詞、一起閱讀回應、一起討論值不值得相信。",
      "當孩子讀完 AI 回應後，可以先問：『你覺得這個回應是否準確？』而不是直接判定對錯。",
      "6-8 歲適合完全陪同，9-11 歲適合在旁監督，12 歲以上可逐步獨立但定期回顧。",
      "可事先定規則，例如每次用 20-30 分鐘、不能輸入個人資料、做完要一起總結一點學到的內容。",
      "如果孩子過份依賴 AI，家長可調整任務設計，例如要求孩子先說出自己的答案，再用 AI 對照。",
      "最有效的陪伴不是全程糾正，而是示範『如何問、如何查、如何想』。",
    ],
    keyPoints: [
      { label: "家長定位", value: "引導者 + 把關人" },
      { label: "陪同三步", value: "設定 → 閱讀 → 討論" },
      { label: "重點能力", value: "判斷力比速度更重要" },
    ],
  },
];

const knowledgeItemsEn: KnowledgeItem[] = [
  {
    icon: Bot,
    title: "What Is Artificial Intelligence (AI)?",
    description: "Build core understanding first: what AI can do, what it cannot do, and why this matters for families.",
    tag: "Foundations",
    category: "Foundations",
    accent: "bg-soft-yellow",
    details: [
      "AI refers to systems that process information patterns in language, images, audio, and data.",
      "Traditional AI focuses on fixed tasks such as filtering spam or suggesting routes.",
      "Generative AI can produce new content such as text, images, slides, and code.",
      "AI does not truly 'understand' like humans; it predicts likely outputs from patterns.",
      "A practical model is TPG: Think (input) → Process (analysis) → Generate (output).",
      "Because AI is trained on large datasets, responses may be outdated, biased, or inaccurate.",
    ],
    keyPoints: [
      { label: "One-line summary", value: "AI predicts and generates based on patterns" },
      { label: "Important reminder", value: "Fluent output does not always mean correct understanding" },
      { label: "Parent perspective", value: "Understanding principles helps families verify answers" },
    ],
  },
  {
    icon: Wrench,
    title: "Choosing the Right AI Tools",
    description: "Parents do not need every tool. Choose based on purpose, child profile, and task type.",
    tag: "Tool Guide",
    category: "Foundations",
    accent: "bg-soft-pink",
    details: [
      "ChatGPT: strong all-round support for writing, explanation, and brainstorming.",
      "Gemini: useful when integrated with Google ecosystem and multimodal tasks.",
      "DeepSeek: often strong in logic and STEM-style reasoning.",
      "Claude: often strong for long-form reading and structured summaries.",
      "Copilot: convenient in Microsoft-centered workflows.",
      "Image tools (DALL-E, Midjourney, Stable Diffusion) are useful for creative tasks.",
      "For most families, mastering 1-2 tools works better than constant switching.",
    ],
    keyPoints: [
      { label: "Beginner picks", value: "ChatGPT / Gemini" },
      { label: "Long content", value: "Claude" },
      { label: "Reasoning-heavy", value: "DeepSeek" },
    ],
  },
  {
    icon: BookOpen,
    title: "How to Use AI Tools",
    description: "Break usage into clear steps from signup to prompting and follow-up refinement.",
    tag: "Practical Setup",
    category: "Practical Use",
    accent: "bg-soft-sky",
    details: [
      "Choose a platform and register. Free tiers are usually enough to start.",
      "Understand the basic interface: input box, response area, and chat history.",
      "Do not chase perfect prompts at first; focus on clear intent and audience.",
      "Treat first answers as drafts: refine with follow-up questions.",
      "Ask for age-appropriate explanation and concrete examples when needed.",
      "Advanced features (file/image/voice input) can be added after core dialogue skills.",
    ],
    keyPoints: [
      { label: "Start sequence", value: "Register → Ask → Follow up → Refine" },
      { label: "High-impact skill", value: "Ask for clarity, constraints, and audience fit" },
      { label: "Parent role", value: "Model verification, not shortcut behavior" },
    ],
  },
  {
    icon: Puzzle,
    title: "Prompting Skills",
    description: "Good prompts do not need to be long. They need clear role, goal, and context.",
    tag: "Core Skill",
    category: "Practical Use",
    accent: "bg-soft-mint",
    details: [
      "RGC (Role, Goal, Context) is the most practical framework for parents.",
      "A specific prompt beats a vague one. Add audience, length, and format constraints.",
      "For critical thinking, ask AI to guide by questions instead of giving final answers.",
      "When responses are generic, add context like child age, subject, and scenario.",
      "Save successful templates to build your own family prompt library.",
    ],
    keyPoints: [
      { label: "Starter framework", value: "RGC: role + goal + context" },
      { label: "Response quality", value: "Specific constraints produce better outputs" },
      { label: "Co-learning", value: "Guide thinking rather than auto-answering" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "AI Safety and Risk Awareness",
    description: "This section is essential for parents: privacy, misinformation risk, and learning boundaries.",
    tag: "Safety",
    category: "Safety & Co-Learning",
    accent: "bg-soft-peach",
    details: [
      "AI hallucinations are common: confident tone can still be wrong.",
      "Never enter sensitive personal data (name, address, school, ID, passwords).",
      "Set boundaries for homework: AI can support understanding but should not replace student work.",
      "Bias may appear in social or cultural topics. Teach children to evaluate critically.",
      "Check platform age restrictions and supervise younger users.",
      "If unsafe output appears, treat it as a guided media literacy discussion moment.",
    ],
    keyPoints: [
      { label: "Most common risk", value: "Confident but inaccurate answers" },
      { label: "Privacy rule", value: "No real personal data" },
      { label: "Learning rule", value: "AI assists, not replaces learning" },
    ],
  },
  {
    icon: Users,
    title: "Parent-Child Co-Learning Guidance",
    description: "Parents are not just monitors. They are direction-setters and reasoning coaches.",
    tag: "Must Read",
    category: "Safety & Co-Learning",
    accent: "bg-white",
    details: [
      "Use a 3-step routine: set prompt together, read together, discuss together.",
      "Ask children to evaluate response quality before giving your judgment.",
      "Age guidance: 6-8 full supervision, 9-11 nearby supervision, 12+ gradual independence.",
      "Set family rules for time, data safety, and post-use reflection.",
      "If over-reliance appears, require child-first answers before AI comparison.",
      "Most effective support is modeling how to ask, verify, and reason.",
    ],
    keyPoints: [
      { label: "Parent position", value: "Guide + gatekeeper" },
      { label: "3-step routine", value: "Set → Read → Discuss" },
      { label: "Core competency", value: "Judgment over speed" },
    ],
  },
];

const AIKnowledgePage = () => {
  const { language } = useLanguage();

  const isEn = language === "en";
  const knowledgeItems = isEn ? knowledgeItemsEn : knowledgeItemsZh;
  const categories = isEn ? ["Foundations", "Practical Use", "Safety & Co-Learning"] : ["入門認識", "實際使用", "安全與陪伴"];
  const categoryStyles: Record<string, { panel: string; badge: string }> = {
    [categories[0]]: { panel: "bg-soft-yellow", badge: "bg-soft-pink" },
    [categories[1]]: { panel: "bg-soft-sky", badge: "bg-soft-mint" },
    [categories[2]]: { panel: "bg-soft-peach", badge: "bg-white" },
  };

  const groupedKnowledge = categories.map((category) => [category, knowledgeItems.filter((item) => item.category === category)] as const);

  const quickStart = isEn
    ? [
        "New to AI: start with What AI Is and Tool Guide.",
        "Already using AI: continue with Usage Flow and Prompting Skills.",
        "Safety concerns: prioritize Risk Awareness and Co-Learning Guidance.",
      ]
    : [
        "第一次接觸 AI：先看「什麼是 AI」和「不同 AI 工具」",
        "已開始使用工具：先看「如何操作」和「提示詞技巧」",
        "擔心孩子安全：先看「注意事項」和「陪同指引」",
      ];

  const categoryIntro: Record<string, string> = isEn
    ? {
        Foundations: "Start with clear concepts: what AI is, where tools differ, and what parents should understand first.",
        "Practical Use": "Move from knowing to doing: usage workflow, prompting method, and quality improvement.",
        "Safety & Co-Learning": "Focus on privacy, boundaries, verification, and parent-child co-learning routines.",
      }
    : {
        入門認識: "先建立清晰概念，知道 AI 是什麼、有哪些工具，以及它和一般搜尋有什麼不同。",
        實際使用: "進入操作與提問層面，讓家長可以真正掌握，而不是只停留在知道工具名稱。",
        安全與陪伴: "將最重要的風險、私隱界線和家長陪同方法集中整理，方便實際應用。",
      };

  const readingOrder = isEn
    ? [
        "Start with What AI Is to build basic understanding.",
        "Continue with Tool Usage and Prompting Skills.",
        "Finish with Safety and Parent Guidance for family rules.",
      ]
    : [
        "先看「什麼是 AI」建立基本理解。",
        "再看「如何操作」和「提示詞技巧」學會真正使用。",
        "最後回到「注意事項」和「陪同指引」建立家庭規則。",
      ];

  const overviewPrimary = isEn ? "Overview" : "先總覽";
  const overviewSecondary = isEn ? "Then Deep Dive" : "再深入閱讀";

  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(238,249,252,0.98))] p-5 md:p-7">
      <div className="space-y-8">
        <div className="rounded-[30px] border border-soft bg-[linear-gradient(180deg,rgba(232,249,252,0.98),rgba(255,255,255,0.96))] p-6 shadow-card md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-yellow px-4 py-2 shadow-card">
                <Sparkles className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">AI Knowledge Guide</span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">{isEn ? "AI Knowledge Hub" : "AI 知識百科"}</h1>
              <p className="mt-4 text-base font-bold leading-relaxed text-ink/75 md:text-lg">
                {isEn
                  ? "A complete parent-friendly guide to AI concepts, practical usage, and safe family co-learning."
                  : "將資訊重新整理成家長易讀版本。你可以先看分類，再決定深入哪一個主題，手機和電腦都會較容易掃讀。"}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[360px]">
              <div className="rounded-[1.4rem] border border-soft bg-soft-pink p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">3</p>
                <p className="text-sm font-bold text-ink/70">{isEn ? "Category Tracks" : "主題分類"}</p>
              </div>
              <div className="rounded-[1.4rem] border border-soft bg-soft-sky p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">6</p>
                <p className="text-sm font-bold text-ink/70">{isEn ? "Core Topics" : "核心主題"}</p>
              </div>
              <div className="rounded-[1.4rem] border border-soft bg-soft-mint p-4 shadow-card">
                <p className={`font-display font-extrabold text-ink ${isEn ? "text-[1.65rem] leading-[1.1]" : "text-[1.55rem] leading-[1.22] tracking-[0.01em] break-keep"}`}>
                  {overviewPrimary}
                </p>
                <p className={`mt-1 font-bold text-ink/70 ${isEn ? "text-sm" : "text-[0.96rem] leading-[1.35] tracking-[0.01em] break-keep"}`}>
                  {overviewSecondary}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_2.1fr]">
          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[2rem] border border-soft bg-soft-yellow p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-ink">{isEn ? "Quick Start" : "快速開始"}</h2>
              <ul className="mt-4 space-y-3">
                {quickStart.map((item) => (
                  <li key={item} className="rounded-[1.2rem] border border-soft bg-white px-4 py-3 text-sm font-bold leading-relaxed text-ink shadow-card">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-soft bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-ink">{isEn ? "Category Navigation" : "分類導覽"}</h2>
              <div className="mt-4 space-y-3">
                {groupedKnowledge.map(([category, items]) => (
                  <a
                    key={category}
                    href={`#${category}`}
                    className="flex items-center justify-between rounded-[1.2rem] border border-soft bg-background px-4 py-3 text-sm font-extrabold text-ink shadow-card transition-transform hover:-translate-y-0.5"
                  >
                    <span>{category}</span>
                    <span className="rounded-full bg-white px-3 py-1 text-xs">{items.length}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            {groupedKnowledge.map(([category, items]) => (
              <section key={category} id={category} className="scroll-mt-24">
                <div className={`rounded-[2rem] border border-soft p-6 shadow-card ${categoryStyles[category].panel}`}>
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className={`inline-flex rounded-full border border-soft px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.16em] text-ink shadow-card ${categoryStyles[category].badge}`}>
                        {category}
                      </div>
                      <h2 className="mt-4 font-display text-[1.95rem] font-extrabold leading-[1.2] tracking-[0.01em] text-ink md:text-[2.2rem] md:leading-[1.16]">
                        {category}
                      </h2>
                    </div>
                    <p className="max-w-xl text-sm font-bold leading-relaxed text-ink/75 md:text-base">{categoryIntro[category]}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-5">
                  {items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-[2rem] border border-soft bg-white p-5 shadow-card md:p-6">
                        <div className="flex flex-col gap-5">
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                            <div className="flex gap-4">
                              <div className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-[1.2rem] border border-soft ${item.accent}`}>
                                <Icon className="h-7 w-7 text-ink" />
                              </div>
                              <div>
                                <div className="inline-flex rounded-full border border-soft bg-background px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-ink">{item.tag}</div>
                                <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight text-ink">{item.title}</h3>
                                <p className="mt-2 max-w-3xl text-sm font-bold leading-relaxed text-ink/75 md:text-base">{item.description}</p>
                              </div>
                            </div>
                          </div>

                          <div className="grid gap-3 md:grid-cols-3">
                            {item.keyPoints.map((kp) => (
                              <div key={kp.label} className="rounded-[1.3rem] border border-soft bg-background p-4">
                                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-ink/60">{kp.label}</p>
                                <p className="mt-2 text-sm font-bold leading-relaxed text-ink">{kp.value}</p>
                              </div>
                            ))}
                          </div>

                          <Accordion type="single" collapsible className="rounded-[1.5rem] border border-soft bg-background px-4">
                            <AccordionItem value={item.title} className="border-none">
                              <AccordionTrigger className="py-5 text-left font-display text-lg font-extrabold text-ink hover:no-underline">
                                {isEn ? "View Details" : "查看詳細內容"}
                              </AccordionTrigger>
                              <AccordionContent className="pb-5">
                                <ul className="space-y-3">
                                  {item.details.map((detail) => (
                                    <li key={detail} className="flex items-start gap-3 rounded-[1rem] bg-white px-4 py-3 text-sm font-bold leading-relaxed text-ink/80">
                                      <span className="mt-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-secondary" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}

            <section className="rounded-[2rem] border border-soft bg-soft-peach p-6 shadow-card md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-4 py-2 shadow-card">
                <ArrowRight className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{isEn ? "Suggested Reading Order" : "建議閱讀順序"}</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {readingOrder.map((item, index) => (
                  <div key={item} className="rounded-[1.3rem] border border-soft bg-white p-4 shadow-card">
                    <p className="font-display text-xl font-extrabold text-ink">0{index + 1}</p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-ink/75">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIKnowledgePage;
