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

const quickRules = [
  "先陪孩子理解內容，再談對錯。",
  "每次使用 AI 建議控制在 20-30 分鐘。",
  "不輸入個人資料、不讓 AI 直接代做功課。",
  "完成後一定要有一小段親子討論。",
];

const ageGuidelines = [
  { age: "6-8 歲", level: "完全陪同", detail: "由家長一起輸入提示詞、一起閱讀、一起總結。" },
  { age: "9-11 歲", level: "在旁監督", detail: "可讓孩子先問，但家長在旁觀察和補問。" },
  { age: "12 歲+", level: "逐步獨立", detail: "可開始獨立使用，但要定期回顧對話和規則。" },
];

const communicationMistakes = [
  { avoid: "「點解又錯？」", why: "孩子容易只感到被否定，而不是知道怎樣改。", better: "「你點樣理解呢題？講我聽。」" },
  { avoid: "「快啲啦」", why: "會壓縮孩子思考和組織語言的時間。", better: "「我哋慢慢嚟，你先講第一步。」" },
  { avoid: "「睇下人哋幾叻」", why: "比較會破壞安全感，令孩子更唔敢開口。", better: "「你今次比上次清楚咗邊一點？」" },
];

const peerSteps = [
  {
    letter: "P",
    title: "Prompt 發問",
    subtitle: "先打開孩子的表達之門",
    accent: "bg-bubble-yellow",
    description: "用開放式問題邀請孩子講想法，而唔係只求標準答案。",
    examples: [
      "你覺得最重要的重點是什麼？",
      "你點解會咁樣理解？",
      "如果要向同學解釋，你會點講？",
    ],
  },
  {
    letter: "E",
    title: "Evaluate 評估",
    subtitle: "先肯定，再幫孩子微調",
    accent: "bg-bubble-pink",
    description: "評估的目的是確認孩子當下做到什麼，並幫他跨下一小步。",
    examples: [
      "你已經講到重點，呢一點做得好。",
      "如果再加一個原因，會更清楚。",
      "你留意到細節，觀察力幾好。",
    ],
  },
  {
    letter: "E",
    title: "Expand 擴展",
    subtitle: "幫孩子加詞彙、加例子、加連接",
    accent: "bg-teal-light",
    description: "只補充少量支架，讓孩子仍然保留主導權。",
    examples: [
      "你可以試下用『因為』去講。",
      "可唔可以加一個生活例子？",
      "試下用『首先、然後、最後』組織答案。",
    ],
  },
  {
    letter: "R",
    title: "Repeat 重述",
    subtitle: "將理解真正變成自己的說法",
    accent: "bg-bubble-green",
    description: "最後請孩子用自己的說話講一次，知識先真正內化。",
    examples: [
      "你用一句再講返重點。",
      "如果要教返我，你會點講？",
      "試下唔睇答案，再講一次。",
    ],
  },
];

const aiRoles = [
  { icon: Sparkles, title: "視覺輔助", text: "幫孩子將抽象概念變成例子、比喻或圖像化描述。" },
  { icon: BookMarked, title: "解釋助手", text: "將難字、長句或概念用更簡單的方式重新表達。" },
  { icon: MessageSquare, title: "練習夥伴", text: "陪孩子做對話、口語、理解題和延伸題。" },
  { icon: Heart, title: "耐心回應", text: "同一問題問多次也不會不耐煩，但仍然需要家長把關。" },
];

const scenarios = [
  {
    title: "英文生字練習",
    summary: "適合孩子怕悶、容易記唔牢生字的情況。",
    flow: [
      "先問：你今日最想記得哪一個字？",
      "用 AI 生出 2-3 個簡單例句和情境。",
      "家長先肯定孩子讀到的部分，再請孩子用自己的句子重講。",
    ],
  },
  {
    title: "閱讀理解",
    summary: "適合孩子睇完文章但唔知重點在哪裡。",
    flow: [
      "先問：你覺得這段最重要的是什麼？",
      "要求 AI 用孩子年齡適合的方式重新解釋。",
      "最後請孩子用一句說話總結，而不是直接照讀 AI 答案。",
    ],
  },
  {
    title: "SEN / 注意力較弱孩子",
    summary: "適合需要更短指令、更多圖像支架的情況。",
    flow: [
      "一次只做一小步，避免長篇指令。",
      "請 AI 幫忙拆成三個簡短步驟，或加上視覺化例子。",
      "每完成一步就即時肯定，減低挫敗感。",
    ],
  },
];

const resourceSections = [
  {
    id: "start",
    title: "先做什麼",
    intro: "如果你是第一次陪孩子用 AI，先不用看完整頁，先掌握這三件事。",
    cards: [
      "先講明使用目標：今天是查資料、練英文，還是理解功課？",
      "先定規則：可問什麼、不可輸入什麼、完成後要一起做什麼。",
      "先示範一次：由家長先問一次，讓孩子看見怎樣問、怎樣查、怎樣懷疑答案。",
    ],
  },
  {
    id: "communication",
    title: "家長怎樣說，孩子更願意講",
    intro: "很多親子衝突不是因為 AI，而是因為提問方式太像盤問或催促。",
    cards: communicationMistakes.map((item) => `避免 ${item.avoid}；改用 ${item.better}`),
  },
  {
    id: "safety",
    title: "安全界線要清楚",
    intro: "這些規則越早講清楚，孩子越容易安心地使用。",
    cards: [
      "不輸入姓名、學校、住址、電話、密碼等私隱資料。",
      "AI 可以幫理解和練習，但不可代做整份功課或作文。",
      "如果看到奇怪、不舒服或明顯不對的內容，要立即停下來一起討論。",
    ],
  },
];

const ParentGuidePage = () => (
  <div className="py-10 lg:py-14">
    <div className="container mx-auto px-4 md:px-6 lg:px-10">
      <div className="rounded-[2.2rem] border-[4px] border-ink bg-white p-6 shadow-playful md:p-8 lg:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bubble-pink px-4 py-2 shadow-playful">
              <Users className="h-4 w-4 text-ink" />
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">Parent Playbook</span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">家長指南</h1>
            <p className="mt-4 text-base font-bold leading-relaxed text-ink/75 md:text-lg">
              重新整理成「先掌握規則、再看方法、最後看情境」的閱讀方式，方便家長快速上手，也更適合手機逐段閱讀。
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[390px]">
            <div className="rounded-[1.4rem] border-[3px] border-ink bg-bubble-yellow p-4 shadow-playful">
              <p className="font-display text-2xl font-extrabold text-ink">先規則</p>
              <p className="text-sm font-bold text-ink/70">後方法</p>
            </div>
            <div className="rounded-[1.4rem] border-[3px] border-ink bg-teal-light p-4 shadow-playful">
              <p className="font-display text-2xl font-extrabold text-ink">4 步</p>
              <p className="text-sm font-bold text-ink/70">PEER 流程</p>
            </div>
            <div className="rounded-[1.4rem] border-[3px] border-ink bg-bubble-green p-4 shadow-playful">
              <p className="font-display text-2xl font-extrabold text-ink">3 組</p>
              <p className="text-sm font-bold text-ink/70">情境示例</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[0.95fr_2.05fr]">
        <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
          <div className="rounded-[2rem] border-[4px] border-ink bg-bubble-yellow p-6 shadow-playful">
            <h2 className="font-display text-2xl font-extrabold text-ink">先記住這幾條</h2>
            <ul className="mt-4 space-y-3">
              {quickRules.map((rule) => (
                <li key={rule} className="rounded-[1.2rem] border-[3px] border-ink bg-white px-4 py-3 text-sm font-bold leading-relaxed text-ink shadow-playful">
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border-[4px] border-ink bg-white p-6 shadow-playful">
            <h2 className="font-display text-2xl font-extrabold text-ink">分齡陪同</h2>
            <div className="mt-4 space-y-3">
              {ageGuidelines.map((item) => (
                <div key={item.age} className="rounded-[1.2rem] border-[3px] border-ink bg-background p-4">
                  <p className="font-display text-xl font-extrabold text-ink">{item.age}</p>
                  <p className="mt-1 text-sm font-extrabold text-secondary">{item.level}</p>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-ink/70">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <section className="rounded-[2rem] border-[4px] border-ink bg-white p-6 shadow-playful md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-coral-light px-4 py-2 shadow-playful">
              <Lightbulb className="h-4 w-4 text-ink" />
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">閱讀路線</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {resourceSections.map((section) => (
                <div key={section.id} className="rounded-[1.4rem] border-[3px] border-ink bg-background p-5 shadow-playful">
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

          <section className="rounded-[2rem] border-[4px] border-ink bg-teal-light p-6 shadow-playful md:p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-2 shadow-playful">
                  <Users className="h-4 w-4 text-ink" />
                  <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">PEER Framework</span>
                </div>
                <h2 className="mt-4 font-display text-3xl font-extrabold text-ink md:text-4xl">陪孩子學習的四步流程</h2>
              </div>
              <p className="max-w-xl text-sm font-bold leading-relaxed text-ink/75 md:text-base">
                這套流程最適合家長在實際陪讀、陪做功課、陪孩子問 AI 時使用。重點不是做得快，而是令孩子願意講、講得清、慢慢敢自己想。
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {peerSteps.map((step) => (
                <div key={step.title} className="rounded-[1.6rem] border-[3px] border-ink bg-white p-5 shadow-playful">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[1rem] border-[3px] border-ink text-xl font-extrabold text-ink ${step.accent}`}>
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
            <div className="rounded-[2rem] border-[4px] border-ink bg-white p-6 shadow-playful md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bubble-pink px-4 py-2 shadow-playful">
                <MessageSquare className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">說話方式</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">哪些說法會卡住孩子？</h2>
              <div className="mt-5 space-y-4">
                {communicationMistakes.map((item) => (
                  <div key={item.avoid} className="rounded-[1.4rem] border-[3px] border-ink bg-background p-4">
                    <p className="text-sm font-extrabold text-secondary">避免：{item.avoid}</p>
                    <p className="mt-1 text-sm font-bold leading-relaxed text-ink/70">{item.why}</p>
                    <div className="mt-3 rounded-[1rem] border-[3px] border-ink bg-white px-4 py-3">
                      <p className="text-sm font-extrabold text-primary">改用：{item.better}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border-[4px] border-ink bg-coral-light p-6 shadow-playful md:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-2 shadow-playful">
                <ShieldCheck className="h-4 w-4 text-ink" />
                <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">安全界線</span>
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">AI 可以做什麼，不可以做什麼？</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-[1.4rem] border-[3px] border-ink bg-white p-4 shadow-playful">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-primary"><CheckCircle className="h-4 w-4" /> 可以做</p>
                  <ul className="mt-3 space-y-2 text-sm font-bold leading-relaxed text-ink/75">
                    <li>解釋概念、重寫難句、設計練習題。</li>
                    <li>陪孩子做口語或理解練習。</li>
                    <li>將內容變成更易入口的學習材料。</li>
                  </ul>
                </div>
                <div className="rounded-[1.4rem] border-[3px] border-ink bg-white p-4 shadow-playful">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-secondary"><XCircle className="h-4 w-4" /> 不可以做</p>
                  <ul className="mt-3 space-y-2 text-sm font-bold leading-relaxed text-ink/75">
                    <li>直接代寫作文、代做功課、代替孩子思考。</li>
                    <li>處理涉及私隱或真實身份的敏感資料。</li>
                    <li>代替真正的親子交流與情緒陪伴。</li>
                  </ul>
                </div>
                <div className="rounded-[1.4rem] border-[3px] border-ink bg-white p-4 shadow-playful">
                  <p className="flex items-center gap-2 text-sm font-extrabold text-ink"><AlertTriangle className="h-4 w-4" /> 一旦出現奇怪內容</p>
                  <p className="mt-3 text-sm font-bold leading-relaxed text-ink/75">
                    先停，再問孩子有什麼感受，再一起拆解：哪裡不對、為何不對、之後怎樣分辨。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border-[4px] border-ink bg-white p-6 shadow-playful md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bubble-green px-4 py-2 shadow-playful">
              <Baby className="h-4 w-4 text-ink" />
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">AI 角色定位</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {aiRoles.map((role) => (
                <div key={role.title} className="rounded-[1.5rem] border-[3px] border-ink bg-background p-5 shadow-playful">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] border-[3px] border-ink bg-white">
                    <role.icon className="h-6 w-6 text-ink" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">{role.title}</h3>
                  <p className="mt-2 text-sm font-bold leading-relaxed text-ink/75">{role.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border-[4px] border-ink bg-bubble-yellow p-6 shadow-playful md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-2 shadow-playful">
              <GraduationCap className="h-4 w-4 text-ink" />
              <span className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-ink">情境參考</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">三個最常見的陪學場景</h2>
            <Accordion type="single" collapsible className="mt-5 space-y-4">
              {scenarios.map((scenario) => (
                <AccordionItem key={scenario.title} value={scenario.title} className="rounded-[1.4rem] border-[3px] border-ink bg-white px-5 shadow-playful">
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

          <section className="rounded-[2rem] border-[4px] border-ink bg-white p-6 text-center shadow-playful md:p-8">
            <p className="font-display text-3xl font-extrabold text-ink">最好的陪學，不是催孩子跑快，而是陪他走得穩。</p>
            <p className="mx-auto mt-4 max-w-3xl text-sm font-bold leading-relaxed text-ink/75 md:text-base">
              AI 可以是一支很好的工具，但真正令孩子學得安心、學得懂、學得長久的，仍然是家長的節奏、態度和說話方式。
            </p>
          </section>
        </div>
      </div>
    </div>
  </div>
);

export default ParentGuidePage;
