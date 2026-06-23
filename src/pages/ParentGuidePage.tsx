import {
  ShieldCheck,
  MessageSquare,
  Heart,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Users,
  Lightbulb,
  ArrowRight,
  Baby,
  GraduationCap,
  BookMarked,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

type AgeGuideline = { age: string; level: string; detail: string };
type CommunicationItem = { avoid: string; why: string; better: string };
type PeerStep = {
  letter: string;
  title: string;
  subtitle: string;
  accent: string;
  description: string;
  examples: string[];
};
type Scenario = { title: string; summary: string; flow: string[] };
type ResourceSection = { id: string; title: string; intro: string; cards: string[] };

const quickRulesZh = [
  "先陪孩子理解內容，再談對錯。",
  "每次使用 AI 建議控制在 20-30 分鐘。",
  "不輸入個人資料、不讓 AI 直接代做功課。",
  "完成後一定要有一小段親子討論。",
];

const quickRulesEn = [
  "Help children understand first, then discuss correctness.",
  "Keep each AI session around 20-30 minutes.",
  "Do not enter personal data and do not let AI do homework directly.",
  "Always include a short parent-child reflection after use.",
];

const ageGuidelinesZh: AgeGuideline[] = [
  { age: "6-8 歲", level: "完全陪同", detail: "由家長一起輸入提示詞、一起閱讀、一起總結。" },
  { age: "9-11 歲", level: "在旁監督", detail: "可讓孩子先問，但家長在旁觀察和補問。" },
  { age: "12 歲+", level: "逐步獨立", detail: "可開始獨立使用，但要定期回顧對話和規則。" },
];

const ageGuidelinesEn: AgeGuideline[] = [
  { age: "Age 6-8", level: "Full Supervision", detail: "Parents co-write prompts, co-read responses, and summarize together." },
  { age: "Age 9-11", level: "Nearby Supervision", detail: "Let children ask first, then observe and add guiding questions." },
  { age: "Age 12+", level: "Gradual Independence", detail: "Allow more independence with regular review of chat logs and rules." },
];

const communicationMistakesZh: CommunicationItem[] = [
  { avoid: "「為甚麼又錯？」", why: "孩子容易只感到被否定，而不是知道怎樣改。", better: "「你如何理解這題？告訴我。」" },
  { avoid: "「快一點吧」", why: "會壓縮孩子思考和組織語言的時間。", better: "「我們慢慢來，你先說第一步。」" },
  { avoid: "「看看別人多厲害」", why: "比較會破壞安全感，令孩子更不敢開口。", better: "「你這次比上次清楚了哪一點？」" },
];

const communicationMistakesEn: CommunicationItem[] = [
  { avoid: "\"Why are you wrong again?\"", why: "Children feel judged instead of learning how to improve.", better: "\"How did you understand this question? Tell me your thinking.\"" },
  { avoid: "\"Hurry up.\"", why: "It reduces thinking time and expression quality.", better: "\"Let's go step by step. Tell me the first step.\"" },
  { avoid: "\"Look how much better others are.\"", why: "Comparison lowers psychological safety and willingness to speak.", better: "\"What did you explain more clearly this time?\"" },
];

const peerStepsZh: PeerStep[] = [
  {
    letter: "P",
    title: "Prompt 發問",
    subtitle: "先打開孩子的表達之門",
    accent: "bg-soft-yellow",
    description: "用開放式問題邀請孩子表達想法，而不是只求標準答案。",
    examples: ["你覺得最重要的重點是什麼？", "你為甚麼會這樣理解？", "如果要向同學解釋，你會怎樣說？"],
  },
  {
    letter: "E",
    title: "Evaluate 評估",
    subtitle: "先肯定，再幫孩子微調",
    accent: "bg-soft-pink",
    description: "評估的目的是確認孩子當下做到什麼，並幫他跨下一小步。",
    examples: ["你已經說到重點，這一點做得很好。", "如果再加一個原因，會更清楚。", "你留意到細節，觀察力很好。"],
  },
  {
    letter: "E",
    title: "Expand 擴展",
    subtitle: "幫孩子加詞彙、加例子、加連接",
    accent: "bg-soft-sky",
    description: "只補充少量支架，讓孩子仍然保留主導權。",
    examples: ["你可以嘗試用『因為』來表達。", "可不可以加一個生活例子？", "嘗試用『首先、然後、最後』組織答案。"],
  },
  {
    letter: "R",
    title: "Repeat 重述",
    subtitle: "將理解真正變成自己的說法",
    accent: "bg-soft-mint",
    description: "最後請孩子用自己的說話說一次，知識先真正內化。",
    examples: ["你用一句話重述重點。", "如果要教我，你會怎樣說？", "嘗試不看答案，再說一次。"],
  },
];

const peerStepsEn: PeerStep[] = [
  {
    letter: "P",
    title: "Prompt",
    subtitle: "Open the door to child expression",
    accent: "bg-soft-yellow",
    description: "Use open-ended questions to invite thinking, not just final answers.",
    examples: ["What do you think is the key point?", "Why do you think so?", "How would you explain this to a classmate?"],
  },
  {
    letter: "E",
    title: "Evaluate",
    subtitle: "Affirm first, then refine",
    accent: "bg-soft-pink",
    description: "Identify what the child already did well, then guide one next step.",
    examples: ["You identified the main point well.", "Add one reason to make it clearer.", "Great detail awareness."],
  },
  {
    letter: "E",
    title: "Expand",
    subtitle: "Add words, examples, and links",
    accent: "bg-soft-sky",
    description: "Add small supports while preserving child ownership.",
    examples: ["Try using 'because' in your answer.", "Can you add a real-life example?", "Try 'first, then, finally' for structure."],
  },
  {
    letter: "R",
    title: "Repeat",
    subtitle: "Turn understanding into own words",
    accent: "bg-soft-mint",
    description: "Ask the child to restate independently to consolidate learning.",
    examples: ["Summarize the key point in one sentence.", "If you taught me, how would you say it?", "Say it again without looking."],
  },
];

const aiRolesZh = [
  { icon: Sparkles, title: "視覺輔助", text: "幫孩子將抽象概念變成例子、比喻或圖像化描述。" },
  { icon: BookMarked, title: "解釋助手", text: "將難字、長句或概念用更簡單的方式重新表達。" },
  { icon: MessageSquare, title: "練習夥伴", text: "陪孩子做對話、口語、理解題和延伸題。" },
  { icon: Heart, title: "耐心回應", text: "同一問題問多次也不會不耐煩，但仍然需要家長把關。" },
];

const aiRolesEn = [
  { icon: Sparkles, title: "Visual Support", text: "Turn abstract ideas into examples, metaphors, or visual descriptions." },
  { icon: BookMarked, title: "Explanation Helper", text: "Rewrite difficult concepts into child-friendly language." },
  { icon: MessageSquare, title: "Practice Partner", text: "Support dialogue, oral practice, comprehension, and extension tasks." },
  { icon: Heart, title: "Patient Response", text: "AI can repeat without frustration, but parent supervision remains essential." },
];

const scenariosZh: Scenario[] = [
  {
    title: "英文生字練習",
    summary: "適合孩子怕悶、容易記不牢生字的情況。",
    flow: ["先問：你今日最想記得哪一個字？", "用 AI 生出 2-3 個簡單例句和情境。", "家長先肯定孩子讀到的部分，再請孩子用自己的句子重述。"],
  },
  {
    title: "閱讀理解",
    summary: "適合孩子看完文章但不知道重點在哪裡。",
    flow: ["先問：你覺得這段最重要的是什麼？", "要求 AI 用孩子年齡適合的方式重新解釋。", "最後請孩子用一句說話總結，而不是直接照讀 AI 答案。"],
  },
  {
    title: "SEN / 注意力較弱孩子",
    summary: "適合需要更短指令、更多圖像支架的情況。",
    flow: ["一次只做一小步，避免長篇指令。", "請 AI 幫忙拆成三個簡短步驟，或加上視覺化例子。", "每完成一步就即時肯定，減低挫敗感。"],
  },
];

const scenariosEn: Scenario[] = [
  {
    title: "English Vocabulary Practice",
    summary: "Useful when children feel bored or forget new words quickly.",
    flow: ["Ask: which word do you want to remember today?", "Generate 2-3 simple example sentences.", "Affirm effort first, then ask child to restate in their own sentence."],
  },
  {
    title: "Reading Comprehension",
    summary: "Useful when children read a text but cannot identify key points.",
    flow: ["Ask: what is the most important idea in this paragraph?", "Request age-appropriate re-explanation from AI.", "Ask child to summarize in one sentence, not copy AI directly."],
  },
  {
    title: "SEN / Lower Attention Span",
    summary: "Useful for learners who need shorter instructions and stronger visual support.",
    flow: ["Do one small step at a time.", "Ask AI to split the task into three short steps.", "Give immediate positive feedback after each step."],
  },
];

const resourceSectionsZh: ResourceSection[] = [
  {
    id: "start",
    title: "先做什麼",
    intro: "如果你是第一次陪孩子用 AI，先不用看完整頁，先掌握這三件事。",
    cards: ["先說明使用目標：今天是查資料、練英文，還是理解功課？", "先定規則：可問什麼、不可輸入什麼、完成後要一起做什麼。", "先示範一次：由家長先問一次，讓孩子看見怎樣問、怎樣查、怎樣懷疑答案。"],
  },
  {
    id: "communication",
    title: "家長怎樣說，孩子更願意表達",
    intro: "很多親子衝突不是因為 AI，而是因為提問方式太像盤問或催促。",
    cards: communicationMistakesZh.map((item) => `避免 ${item.avoid}；改用 ${item.better}`),
  },
  {
    id: "safety",
    title: "安全界線要清楚",
    intro: "這些規則越早說清楚，孩子越容易安心地使用。",
    cards: ["不輸入姓名、學校、住址、電話、密碼等私隱資料。", "AI 可以幫理解和練習，但不可代做整份功課或作文。", "如果看到奇怪、不舒服或明顯不對的內容，要立即停下來一起討論。"],
  },
];

const resourceSectionsEn: ResourceSection[] = [
  {
    id: "start",
    title: "Start Here",
    intro: "If this is your first co-learning attempt with AI, start with these three actions.",
    cards: ["Define today's goal clearly.", "Set rules before starting.", "Model one full example together first."],
  },
  {
    id: "communication",
    title: "How Parents Speak Matters",
    intro: "Many conflicts come from pressure-style questioning, not from AI itself.",
    cards: communicationMistakesEn.map((item) => `Avoid ${item.avoid}; use ${item.better}`),
  },
  {
    id: "safety",
    title: "Set Clear Safety Boundaries",
    intro: "The earlier boundaries are stated, the safer and calmer usage becomes.",
    cards: ["Do not input personal identifiers.", "AI can support understanding but must not complete full assignments.", "Pause and discuss immediately if strange or unsafe content appears."],
  },
];

const ParentGuidePage = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const quickRules = isEn ? quickRulesEn : quickRulesZh;
  const ageGuidelines = isEn ? ageGuidelinesEn : ageGuidelinesZh;
  const communicationMistakes = isEn ? communicationMistakesEn : communicationMistakesZh;
  const peerSteps = isEn ? peerStepsEn : peerStepsZh;
  const aiRoles = isEn ? aiRolesEn : aiRolesZh;
  const scenarios = isEn ? scenariosEn : scenariosZh;
  const resourceSections = isEn ? resourceSectionsEn : resourceSectionsZh;

  return (
    <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(237,251,244,0.98))] p-5 md:p-7">
      <div className="space-y-8">
        <div className="rounded-[30px] border border-soft bg-[linear-gradient(180deg,rgba(239,252,245,0.98),rgba(255,255,255,0.96))] p-6 shadow-card md:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-pink px-4 py-2 shadow-card">
                <Users className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">Parent Playbook</span>
              </div>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">{isEn ? "Parent Guide" : "家長指南"}</h1>
              <p className="mt-4 text-base font-bold leading-relaxed text-ink/75 md:text-lg">
                {isEn
                  ? "A full practical guide for parent-child AI co-learning: rules, methods, and real scenarios."
                  : "重新整理成「先掌握規則、再看方法、最後看情境」的閱讀方式，方便家長快速掌握，也更適合手機逐段閱讀。"}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[390px]">
              <div className="rounded-[1.4rem] border border-soft bg-soft-yellow p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">{isEn ? "Rules" : "先規則"}</p>
                <p className="text-sm font-bold text-ink/70">{isEn ? "First" : "後方法"}</p>
              </div>
              <div className="rounded-[1.4rem] border border-soft bg-soft-sky p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">4</p>
                <p className="text-sm font-bold text-ink/70">{isEn ? "PEER Steps" : "PEER 流程"}</p>
              </div>
              <div className="rounded-[1.4rem] border border-soft bg-soft-mint p-4 shadow-card">
                <p className="font-display text-2xl font-extrabold text-ink">3</p>
                <p className="text-sm font-bold text-ink/70">{isEn ? "Scenarios" : "情境示例"}</p>
              </div>
            </div>
          </div>
        </div>

        <section className="rounded-[30px] border border-soft bg-[linear-gradient(135deg,rgba(234,250,254,0.96),rgba(255,238,243,0.9))] p-6 shadow-card md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white/90 px-4 py-2 shadow-card">
                <MessageSquare className="h-4 w-4 text-secondary" />
                <span className="text-sm font-extrabold text-ink">{isEn ? "New parent practice" : "新增家長練習"}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">{isEn ? "Practise open responses" : "練習開放式回應"}</h2>
              <p className="mt-3 text-base font-semibold leading-relaxed text-ink/75">{isEn ? "Transform five everyday parent phrases into questions that give children more room to think and speak." : "將 5 句日常親子說話，改成讓孩子有更多空間思考和表達的開放式回應。"}</p>
            </div>
            <Link to="/open-response-practice" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-extrabold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5">
              {isEn ? "Start practice" : "開始練習"}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_2.05fr]">
          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <div className="rounded-[2rem] border border-soft bg-soft-yellow p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-ink">{isEn ? "Remember These First" : "先記住這幾條"}</h2>
              <ul className="mt-4 space-y-3">
                {quickRules.map((rule) => (
                  <li key={rule} className="rounded-[1.2rem] border border-soft bg-white px-4 py-3 text-sm font-bold leading-relaxed text-ink shadow-card">
                    {rule}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-soft bg-white p-6 shadow-card">
              <h2 className="font-display text-2xl font-extrabold text-ink">{isEn ? "Age-Based Supervision" : "分齡陪同"}</h2>
              <div className="mt-4 space-y-3">
                {ageGuidelines.map((item) => (
                  <div key={item.age} className="rounded-[1.2rem] border border-soft bg-background p-4">
                    <p className="font-display text-xl font-extrabold text-ink">{item.age}</p>
                    <p className="mt-1 text-sm font-extrabold text-secondary">{item.level}</p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-ink/70">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-[2rem] border border-soft bg-white p-6 shadow-card md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-peach px-4 py-2 shadow-card">
                <Lightbulb className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{isEn ? "Reading Path" : "閱讀路線"}</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {resourceSections.map((section) => (
                  <div key={section.id} className="rounded-[1.4rem] border border-soft bg-background p-5 shadow-card">
                    <p className="font-display text-2xl font-extrabold text-ink">{section.title}</p>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-ink/75">{section.intro}</p>
                    <div className="mt-4 space-y-2">
                      {section.cards.map((card) => (
                        <div key={card} className="rounded-[1rem] bg-white px-3 py-2 text-sm font-bold text-ink/75">
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-soft bg-soft-sky p-6 shadow-card md:p-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-4 py-2 shadow-card">
                    <Users className="h-4 w-4 text-ink" />
                    <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">PEER Framework</span>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">
                    {isEn ? "Four-Step Co-Learning Flow" : "陪孩子學習的四步流程"}
                  </h2>
                </div>
                <p className="max-w-xl text-sm font-bold leading-relaxed text-ink/75 md:text-base">
                  {isEn
                    ? "This flow helps parents support learning without replacing child thinking. The goal is clarity, confidence, and independent reasoning."
                    : "這套流程最適合家長在實際陪讀、陪做功課、陪孩子問 AI 時使用。重點不是做得快，而是讓孩子願意表達、表達清楚，並逐步建立獨立思考。"}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {peerSteps.map((step) => (
                  <div key={step.title} className="rounded-[1.6rem] border border-soft bg-white p-5 shadow-card">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] border border-soft text-xl font-extrabold text-ink ${step.accent}`}>
                        {step.letter}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-extrabold text-ink">{step.title}</h3>
                        <p className="text-sm font-bold text-ink/60">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm font-bold leading-relaxed text-ink/75">{step.description}</p>
                    <ul className="mt-4 space-y-2">
                      {step.examples.map((example) => (
                        <li key={example} className="flex items-start gap-3 rounded-[1rem] bg-background px-4 py-3 text-sm font-bold text-ink/80">
                          <span className="mt-1 inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full bg-secondary" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[2rem] border border-soft bg-white p-6 shadow-card md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-pink px-4 py-2 shadow-card">
                  <MessageSquare className="h-4 w-4 text-ink" />
                  <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{isEn ? "Communication" : "說話方式"}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">{isEn ? "Phrases That Block Learning" : "哪些說法會卡住孩子？"}</h2>
                <div className="mt-5 space-y-4">
                  {communicationMistakes.map((item) => (
                    <div key={item.avoid} className="rounded-[1.4rem] border border-soft bg-background p-4">
                      <p className="text-sm font-extrabold text-secondary">{isEn ? "Avoid:" : "避免："} {item.avoid}</p>
                      <p className="mt-1 text-sm font-bold leading-relaxed text-ink/70">{item.why}</p>
                      <div className="mt-3 rounded-[1rem] border border-soft bg-white px-4 py-3">
                        <p className="text-sm font-extrabold text-primary">{isEn ? "Use instead:" : "改用："} {item.better}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-soft bg-soft-peach p-6 shadow-card md:p-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-4 py-2 shadow-card">
                  <ShieldCheck className="h-4 w-4 text-ink" />
                  <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{isEn ? "Safety Boundaries" : "安全界線"}</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">{isEn ? "What AI Should and Should Not Do" : "AI 可以做什麼，不可以做什麼？"}</h2>
                <div className="mt-5 space-y-4">
                  <div className="rounded-[1.4rem] border border-soft bg-white p-4 shadow-card">
                    <p className="flex items-center gap-2 text-sm font-extrabold text-primary"><CheckCircle className="h-4 w-4" /> {isEn ? "Can Do" : "可以做"}</p>
                    <ul className="mt-3 space-y-2 text-sm font-bold leading-relaxed text-ink/75">
                      <li>{isEn ? "Explain concepts and simplify difficult text." : "解釋概念、重寫難句、設計練習題。"}</li>
                      <li>{isEn ? "Support dialogue and practice activities." : "陪孩子做口語或理解練習。"}</li>
                      <li>{isEn ? "Generate accessible learning materials." : "將內容變成更易入口的學習材料。"}</li>
                    </ul>
                  </div>
                  <div className="rounded-[1.4rem] border border-soft bg-white p-4 shadow-card">
                    <p className="flex items-center gap-2 text-sm font-extrabold text-secondary"><XCircle className="h-4 w-4" /> {isEn ? "Should Not" : "不可以做"}</p>
                    <ul className="mt-3 space-y-2 text-sm font-bold leading-relaxed text-ink/75">
                      <li>{isEn ? "Replace the child's own assignment work." : "直接代寫作文、代做功課、代替孩子思考。"}</li>
                      <li>{isEn ? "Handle sensitive personal identity data." : "處理涉及私隱或真實身份的敏感資料。"}</li>
                      <li>{isEn ? "Replace real parent-child communication." : "代替真正的親子交流與情緒陪伴。"}</li>
                    </ul>
                  </div>
                  <div className="rounded-[1.4rem] border border-soft bg-white p-4 shadow-card">
                    <p className="flex items-center gap-2 text-sm font-extrabold text-ink"><AlertTriangle className="h-4 w-4" /> {isEn ? "If strange content appears" : "一旦出現奇怪內容"}</p>
                    <p className="mt-3 text-sm font-bold leading-relaxed text-ink/75">
                      {isEn
                        ? "Pause first, ask how the child feels, then analyze what is wrong and how to verify next time."
                        : "先停，再問孩子有什麼感受，再一起拆解：哪裡不對、為何不對、之後怎樣分辨。"}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] border border-soft bg-white p-6 shadow-card md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-mint px-4 py-2 shadow-card">
                <Baby className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{isEn ? "AI Role Positioning" : "AI 角色定位"}</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {aiRoles.map((role) => (
                  <div key={role.title} className="rounded-[1.5rem] border border-soft bg-background p-5 shadow-card">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-soft bg-white">
                      <role.icon className="h-6 w-6 text-ink" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">{role.title}</h3>
                    <p className="mt-2 text-sm font-bold leading-relaxed text-ink/75">{role.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-soft bg-soft-yellow p-6 shadow-card md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-4 py-2 shadow-card">
                <GraduationCap className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">{isEn ? "Scenario Reference" : "情境參考"}</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">{isEn ? "Three Common Co-Learning Scenarios" : "三個最常見的陪伴學習場景"}</h2>
              <Accordion type="single" collapsible className="mt-5 space-y-4">
                {scenarios.map((scenario) => (
                  <AccordionItem key={scenario.title} value={scenario.title} className="rounded-[1.4rem] border border-soft bg-white px-5 shadow-card">
                    <AccordionTrigger className="py-5 text-left font-display text-xl font-extrabold text-ink hover:no-underline">
                      {scenario.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <p className="text-sm font-bold leading-relaxed text-ink/75">{scenario.summary}</p>
                      <div className="mt-4 space-y-3">
                        {scenario.flow.map((step) => (
                          <div key={step} className="flex items-start gap-3 rounded-[1rem] bg-background px-4 py-3 text-sm font-bold leading-relaxed text-ink/80">
                            <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            <section className="rounded-[2rem] border border-soft bg-white p-6 text-center shadow-card md:p-8">
              <p className="font-display text-3xl font-extrabold text-ink">
                {isEn ? "The best support is not rushing children, but helping them build steady understanding." : "最好的陪伴學習，不是催孩子跑快，而是陪他走得穩。"}
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-sm font-bold leading-relaxed text-ink/75 md:text-base">
                {isEn
                  ? "AI can be powerful, but long-term learning still depends on parent rhythm, communication style, and emotional safety."
                  : "AI 可以是一支很好的工具，但真正令孩子學得安心、學得懂、學得長久的，仍然是家長的節奏、態度和說話方式。"}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentGuidePage;
