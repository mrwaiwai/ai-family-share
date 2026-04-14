import { useState } from "react";
import {
  ShieldCheck, Eye, Clock, BookMarked, Sparkles, GraduationCap,
  MessageSquare, Heart, ChevronDown, ChevronUp, AlertTriangle,
  CheckCircle, XCircle, Users, Lightbulb, ArrowRight, Baby
} from "lucide-react";

/* ─── Expandable Section ─── */
const ExpandableCard = ({
  title, icon: Icon, iconBg, iconColor, children, defaultOpen = false
}: {
  title: string;
  icon: typeof Eye;
  iconBg: string;
  iconColor: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <button className="flex w-full items-center gap-4 p-6 text-left lg:p-8" onClick={() => setOpen(!open)}>
        <div className={`flex-shrink-0 rounded-xl p-3.5 ${iconBg}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="flex-1 text-lg font-semibold text-foreground lg:text-xl">{title}</h3>
        {open ? <ChevronUp className="h-5 w-5 text-muted-foreground" /> : <ChevronDown className="h-5 w-5 text-muted-foreground" />}
      </button>
      {open && <div className="border-t border-border px-6 pb-8 pt-6 lg:px-8">{children}</div>}
    </div>
  );
};

/* ─── Data ─── */
const axlinePrinciples = [
  { title: "溫暖關係", text: "建立一個讓孩子感到絕對安全的心理氛圍。" },
  { title: "接納孩子", text: "無論孩子的情緒或進度如何，都無條件地接納。" },
  { title: "自由表達", text: "創造一個讓孩子敢於說出所有真實想法的空間。" },
  { title: "情緒覺察", text: "先處理好孩子的情感，再處理事情或學習。" },
  { title: "相信孩子", text: "深信每個孩子都有自我解決問題與成長的潛能。" },
  { title: "孩子主動", text: "讓孩子帶路，由他們掌握學習的節奏與方向。" },
  { title: "不加速", text: "給予孩子充分的等待時間，不催促是最高級的尊重。" },
  { title: "限制中享受自由", text: "在合理的規則框架下，給予孩子最大的選擇權。" },
];

const peerSteps = [
  {
    letter: "P",
    title: "Prompt（發問）",
    subtitle: "打開對話之門",
    color: "bg-teal-light text-primary",
    description: "用開放式問題開局，邀請孩子講想法。讓孩子不只答「係/唔係」，而是說出理由、方法與感受。",
    howTo: [
      "觀察型：「你喺呢一頁見到邊三樣最重要嘅細節？點解？」",
      "原因型：「呢段最重要嘅重點係乜？有乜線索支持你？」",
      "方法型：「第一步應該點開始？點解？」",
    ],
    tips: [
      "等待 3-5 秒：給孩子時間「找字→組句→出聲」。家長的沉默是鼓勵，不是不耐煩。",
      "孩子卡住時：先「降階」處理，例如用選擇題：「主角似『緊張』定『失望』？你點知？」",
    ],
  },
  {
    letter: "E",
    title: "Evaluate（評估）",
    subtitle: "先肯定，再微調",
    color: "bg-coral-light text-secondary",
    description: "評估不代表評判對錯。它的目的是確認理解、接納孩子的嘗試，並為他們提供繼續攀登的安全感。",
    howTo: [
      "先聽清（3 秒）：孩子說話時先沉默聽完，不要打斷。",
      "肯定具體亮點：「你先講重點，開始得好。」「你留意到眼神，呢點好細心。」",
      "溫和微修正：用「加」、「補」、「再清楚少少」代替「錯」。",
    ],
    tips: [
      "避免空泛地說「好叻」，要描述觀察到的具體行為。",
      "範例：「如果加返原因，句子會更清楚。」",
    ],
  },
  {
    letter: "E",
    title: "Expand（擴展）",
    subtitle: "豐富孩子的表達",
    color: "bg-teal-light text-primary",
    description: "用「兩詞＋一例」公式豐富孩子的表達，但主導權必須留在孩子手上。每次擴展限制在 15-20 秒內。",
    howTo: [
      "因果詞：因為 / 所以",
      "證據詞：線索是 / 從中看到",
      "連接詞：首先 / 然後 / 最後",
      "程序詞：代入 / 檢查",
    ],
    tips: [
      "每次只補充 2-3 個關鍵詞或一個貼地例子。",
      "完成後馬上把話筒交回孩子：「我補個例子，到你用一句講返重點。」",
    ],
  },
  {
    letter: "R",
    title: "Repeat（重述）",
    subtitle: "讓知識真正內化",
    color: "bg-coral-light text-secondary",
    description: "重述是對話的收尾儀式，也是理解的最終驗收。把「以為懂」變成「講得出」。",
    howTo: [
      "直接請求：「你用一句講返重點。」",
      "句型骨架：「重點係【___】，因為【___】，所以【___】。」",
      "提供提示詞卡（例如寫有「因為...所以...」的卡片）。",
    ],
    tips: [
      "先肯定：「你肯講返重點，呢步好重要。」",
      "再微補：「如果加返一個原因會更清楚。」",
      "在積極的氛圍中結束對話。",
    ],
  },
];

const doStatements = [
  { text: "「邊一部分你最唔明？講我聽」", effect: "降階引導，降低開口門檻" },
  { text: "「你可以用 because 講一次」", effect: "擴展思考" },
  { text: "「有啲緊張係正常，我哋一齊改」", effect: "先處理情感，再處理學習" },
  { text: "「你留意到呢啲細節，好細心」", effect: "引導複製好的學習行為" },
];

const dontStatements = [
  { avoid: "「點解又錯？」", problem: "令孩子覺得自己「好蠢」", replace: "「你點知要咩樣做？」——探尋其思路" },
  { avoid: "「快啲啦」", problem: "壓縮思考空間", replace: "「我哋慢慢嚟」——實踐「緩慢是快」" },
  { avoid: "「睇人哋都識講」", problem: "比較會損害關係", replace: "「下次我哋一齊試」" },
];

const peerScenarios = [
  {
    title: "學英文生字（默書好悶？）",
    steps: {
      P: "「你今日最想記得邊個字？點解？」",
      AI: "用 ChatGPT 生成關於 "rain" 的簡單例句和圖像描述。",
      E1: "「你 rain 發音幾準喎。」",
      E2: "「如果加 It is raining 就變成完整句子。」",
      R: "「你用一句英文講返你最記得嘅例句。」",
    },
  },
  {
    title: "英文故事伴讀（孩子只聽不講？）",
    steps: {
      P: "「Look at the picture. What can you see?」",
      AI: "問 AI「呢幅圖講緊乜」，讓孩子跟讀簡單句子。",
      E1: "「你講到 dog 同 happy，好好。」",
      E2: "「如果加 because 會唔會更清楚？」",
      R: "「你用英文再講一次故事入面隻狗點樣。」",
    },
  },
  {
    title: "口語練習（怕講錯唔敢開口？）",
    steps: {
      P: "「你今日想同 AI 講邊句英文？」",
      AI: "用兒童友善口語 App（如 Buddy.ai）練習。",
      E1: "「你肯試住對 AI 講，呢個勇氣好重要。」",
      E2: "「如果加 small，句子會更生動。」",
      R: "「你再試一次，加埋新嘅詞。」",
    },
  },
];

const aiRoles = [
  { icon: Sparkles, title: "視覺輔助", text: "生成圖像描述或多個例句，幫助孩子建立形象化記憶。" },
  { icon: BookMarked, title: "解釋生字", text: "用簡單的雙語或比喻解釋，降低孩子理解的門檻。" },
  { icon: MessageSquare, title: "練習夥伴", text: "進行朗讀、對話練習，或生成類似題目讓孩子挑戰。" },
  { icon: Heart, title: "永不疲倦的耐心", text: "AI 永遠不會責罵孩子，無論問多少次、錯多少遍都不會不耐煩。" },
];

const ageGuidelines = [
  { age: "6-8 歲", level: "完全陪同", detail: "家長全程參與，一起設定提示詞、閱讀回應、討論反思。" },
  { age: "9-11 歲", level: "在旁監督", detail: "孩子可嘗試自行提問，家長在旁觀察並適時引導。" },
  { age: "12 歲+", level: "逐步獨立", detail: "允許獨立使用，但定期檢查對話記錄，討論使用心得。" },
];

/* ─── Page Component ─── */
const ParentGuidePage = () => (
  <div className="py-12 lg:py-16">
    <div className="container mx-auto px-6 lg:px-12">
      {/* Header */}
      <div className="mb-16">
        <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">👨‍👩‍👧‍👦 家長指南</h1>
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          一套完整的親子 AI 學習指南——從溝通心法、PEER 四步框架到真實情景示範，幫助你用溫柔且有效的方式，陪伴孩子與 AI 一起成長。
        </p>
      </div>

      <div className="space-y-8">
        {/* ─── 1. 溝通迴圈 ─── */}
        <ExpandableCard title="打破溫習迴圈：改變從溝通開始" icon={MessageSquare} iconBg="bg-coral-light" iconColor="text-secondary" defaultOpen>
          <div className="space-y-8">
            <div className="rounded-xl bg-muted p-6">
              <p className="mb-4 text-sm font-medium text-foreground">你是否也陷入了這樣的溫習迴圈？</p>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                {["催促追問", "孩子沉默或頂撞", "親子衝突", "勉強完成"].map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="rounded-lg bg-coral-light px-3 py-1.5 font-medium text-secondary">{step}</span>
                    {i < 3 && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-base font-semibold text-foreground">常見誤區</h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "過度干預", example: "「點解又錯？」" },
                  { label: "壓力比較", example: "「點解你唔似同學考滿分？」" },
                  { label: "威脅手段", example: "「再唔聽話就停電話！」" },
                  { label: "忍不住代勞", example: "見到孩子做得慢就落手幫忙" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-card p-5">
                    <p className="mb-1 text-sm font-semibold text-secondary">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.example}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-teal-light p-6">
              <h4 className="mb-3 text-base font-semibold text-foreground">🔑 關鍵一步：改變我們的角色</h4>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { from: "由「教」", to: "改為「問」" },
                  { from: "由「改」", to: "改為「肯定」" },
                  { from: "由「催」", to: "改為「等」" },
                ].map((item) => (
                  <div key={item.from} className="rounded-lg bg-card p-4 text-center">
                    <p className="text-sm text-muted-foreground">{item.from}</p>
                    <ArrowRight className="mx-auto my-1.5 h-4 w-4 text-primary" />
                    <p className="text-sm font-semibold text-primary">{item.to}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 2. 開放式回應 ─── */}
        <ExpandableCard title="開放式回應：溝通的基礎心法" icon={Lightbulb} iconBg="bg-teal-light" iconColor="text-primary">
          <div className="space-y-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              源自遊戲治療，一種不帶批判、描述事實的溝通方式，鼓勵孩子表達自己的想法和感受。核心理念：想令子女更聰明，就要提出有效的問題。
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-secondary" />
                  <h4 className="font-semibold text-foreground">關閉式問題</h4>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">像一扇關上的門</p>
                <p className="rounded-lg bg-coral-light p-3 text-sm text-foreground">「這是貓嗎？」→ 答案只有 Yes / No</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold text-foreground">開放式問題</h4>
                </div>
                <p className="mb-2 text-sm text-muted-foreground">像一扇打開的門</p>
                <p className="rounded-lg bg-teal-light p-3 text-sm text-foreground">「你認為貓為什麼會跑？」→ 鼓勵思考和表達</p>
              </div>
            </div>

            <div>
              <h4 className="mb-3 text-base font-semibold text-foreground">效果</h4>
              <ul className="space-y-2">
                {[
                  "刺激認知能力，為未來的閱讀理解和講故事技巧打好基礎。",
                  "鼓勵孩子自由表達，而非在「是/否」的固定選項中選擇。",
                  "培養獨立思考和語言組織能力。",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 3. 八大原則 ─── */}
        <ExpandableCard title="以兒童為本的八大原則（Axline）" icon={Heart} iconBg="bg-coral-light" iconColor="text-secondary">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              心理學家 Axline 提出的八大原則，是我們在親子 AI 學習旅程中最可靠的羅盤。它確保我們的每一步，都以孩子的感受與成長為核心。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {axlinePrinciples.map((p, i) => (
                <div key={p.title} className="rounded-xl border border-border bg-card p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{i + 1}</span>
                    <h4 className="font-semibold text-foreground">{p.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-teal-light p-6">
              <h4 className="mb-4 font-semibold text-foreground">🧭 羅盤核心指引</h4>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: "關係先於內容", text: "必須「先暖後問」，安全的關係是孩子表達的基礎。" },
                  { title: "跟隨不主導", text: "「孩子帶路，成人跟住走」——我們是陪伴者，不是指揮官。" },
                  { title: "緩慢是快", text: "不催促、小步走。穩定的情緒比追趕進度更能提升學習效率。" },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-card p-4">
                    <p className="mb-1 text-sm font-semibold text-primary">{item.title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 4. PEER 框架 ─── */}
        <ExpandableCard title="PEER 四步框架：陪伴學習的微流程" icon={Users} iconBg="bg-teal-light" iconColor="text-primary" defaultOpen>
          <div className="space-y-8">
            <p className="text-sm leading-relaxed text-muted-foreground">
              PEER 是一套易記且實用的框架，幫助我們搭建與孩子對話的階梯，引導他們獨立思考。透過「半級半級上」的方法，孩子能在安全感中，一步步學會獨立思考。
            </p>

            <div className="space-y-6">
              {peerSteps.map((step) => (
                <div key={step.title} className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="flex items-center gap-4 border-b border-border bg-muted/50 p-6">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold ${step.color}`}>
                      {step.letter}
                    </span>
                    <div>
                      <h4 className="font-semibold text-foreground">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-primary">如何做</p>
                        <ul className="space-y-2">
                          {step.howTo.map((h) => (
                            <li key={h} className="flex items-start gap-2.5 text-sm text-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-secondary">小貼士</p>
                        <ul className="space-y-2">
                          {step.tips.map((t) => (
                            <li key={t} className="flex items-start gap-2.5 text-sm text-foreground">
                              <Lightbulb className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 5. DOs & DON'Ts ─── */}
        <ExpandableCard title="溝通魔法句 vs 溝通陷阱" icon={MessageSquare} iconBg="bg-coral-light" iconColor="text-secondary">
          <div className="space-y-8">
            {/* DOs */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-base font-semibold text-primary">
                <CheckCircle className="h-5 w-5" /> 溫柔溝通的魔法句（DOs）
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">運用「句柄」（句型骨架），將批判轉化為引導。</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {doStatements.map((d) => (
                  <div key={d.text} className="rounded-xl bg-teal-light p-5">
                    <p className="mb-2 text-sm font-medium text-foreground">{d.text}</p>
                    <p className="text-xs text-primary">{d.effect}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* DON'Ts */}
            <div>
              <h4 className="mb-4 flex items-center gap-2 text-base font-semibold text-secondary">
                <AlertTriangle className="h-5 w-5" /> 需要留意的溝通陷阱（DON'Ts）
              </h4>
              <div className="space-y-4">
                {dontStatements.map((d) => (
                  <div key={d.avoid} className="rounded-xl border border-border bg-card p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
                      <div className="flex-1">
                        <p className="mb-1 text-sm font-medium text-secondary">❌ 避免：{d.avoid}</p>
                        <p className="text-xs text-muted-foreground">{d.problem}</p>
                      </div>
                      <ArrowRight className="hidden h-5 w-5 text-muted-foreground sm:block sm:mt-1" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-primary">✅ 改為：</p>
                        <p className="text-xs text-foreground">{d.replace}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 6. PEER x AI 真實情景 ─── */}
        <ExpandableCard title="PEER × AI 真實情景示範" icon={Sparkles} iconBg="bg-teal-light" iconColor="text-primary">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              三個真實場景示範，看看 PEER 框架如何配合 AI，成為親子學習的好幫手。
            </p>
            {peerScenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="border-b border-border bg-muted/50 px-6 py-4">
                  <h4 className="font-semibold text-foreground">🎯 {scenario.title}</h4>
                </div>
                <div className="grid gap-px bg-border sm:grid-cols-5">
                  {(["P", "AI", "E1", "E2", "R"] as const).map((key) => {
                    const labels: Record<string, string> = { P: "P 發問", AI: "🤖 AI 幫手", E1: "E 評估", E2: "E 擴展", R: "R 重述" };
                    const bgColors: Record<string, string> = { P: "bg-teal-light", AI: "bg-muted", E1: "bg-coral-light", E2: "bg-teal-light", R: "bg-coral-light" };
                    return (
                      <div key={key} className="bg-card p-4">
                        <p className={`mb-2 inline-block rounded-md px-2 py-0.5 text-xs font-semibold ${bgColors[key]}`}>{labels[key]}</p>
                        <p className="text-xs leading-relaxed text-foreground">{scenario.steps[key]}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ExpandableCard>

        {/* ─── 7. AI 的角色定位 ─── */}
        <ExpandableCard title="AI 小幫手的角色與定位" icon={Baby} iconBg="bg-coral-light" iconColor="text-secondary">
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {aiRoles.map((role) => (
                <div key={role.title} className="rounded-xl border border-border bg-card p-6">
                  <div className="mb-3 inline-flex rounded-xl bg-teal-light p-3">
                    <role.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">{role.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{role.text}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-teal-light p-6">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-primary">
                  <CheckCircle className="h-5 w-5" /> AI 該做
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>✓ 解釋生字、提供例句</li>
                  <li>✓ 做對話練習</li>
                  <li>✓ 啟發靈感、想法工具</li>
                  <li>✓ 生成類似題目讓孩子挑戰</li>
                </ul>
              </div>
              <div className="rounded-xl bg-coral-light p-6">
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-secondary">
                  <XCircle className="h-5 w-5" /> AI 不該做
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li>✗ 直接給答案、代寫作文</li>
                  <li>✗ 代替真實的親子語言互動</li>
                  <li>✗ 讓孩子變成被動接收者</li>
                  <li>✗ 取代家長的引導角色</li>
                </ul>
              </div>
            </div>

            {/* 三個危險陷阱 */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="mb-4 flex items-center gap-2 font-semibold text-secondary">
                <AlertTriangle className="h-5 w-5" /> 三個危險陷阱
              </h4>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { title: "禁止代勞", text: "絕對不能讓 AI 代寫作文或直接完成作業，這會剝奪孩子寶貴的嘗試與思考機會。" },
                  { title: "拒絕被動", text: "不應直接向 AI 索取最終答案，這會讓孩子變成被動的資訊接收者。" },
                  { title: "不可替代", text: "AI 不能取代真實的親子語言互動。過度依賴會減少孩子在真實世界中的溝通能力。" },
                ].map((trap) => (
                  <div key={trap.title} className="rounded-xl bg-muted p-4">
                    <p className="mb-2 text-sm font-semibold text-secondary">{trap.title}</p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{trap.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 8. 分齡建議 ─── */}
        <ExpandableCard title="分齡陪同建議" icon={ShieldCheck} iconBg="bg-teal-light" iconColor="text-primary">
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {ageGuidelines.map((ag) => (
                <div key={ag.age} className="rounded-xl border border-border bg-card p-6 text-center">
                  <p className="mb-2 text-2xl font-bold text-primary">{ag.age}</p>
                  <p className="mb-3 rounded-full bg-teal-light px-3 py-1 text-sm font-semibold text-primary">{ag.level}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{ag.detail}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-muted p-6">
              <h4 className="mb-3 font-semibold text-foreground">📋 建議使用規則</h4>
              <ul className="space-y-2.5">
                {[
                  "每次使用時間建議 20-30 分鐘",
                  "明確可以問甚麼類型的問題",
                  "不可以分享個人敏感資訊",
                  "完成後一起討論和反思學到了甚麼",
                  "定期回顧對話記錄，了解孩子的學習狀況",
                ].map((rule) => (
                  <li key={rule} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ExpandableCard>

        {/* ─── 9. AI 與子女學習 ─── */}
        <ExpandableCard title="AI 輔助學習與 SEN 支援" icon={GraduationCap} iconBg="bg-coral-light" iconColor="text-secondary">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex rounded-xl bg-teal-light p-4">
                <Sparkles className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">AI 輔助語言學習</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                如何用 AI 幫助孩子學英文、建立詞彙量，從興趣出發設計學習活動。
              </p>
              <ul className="space-y-3">
                {[
                  "用孩子喜歡的主題（如足球）設計對話",
                  "一次一個問題，保持互動",
                  "讓孩子先猜測再引導",
                  "配合 PEER 框架引導對話",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-5 inline-flex rounded-xl bg-coral-light p-4">
                <GraduationCap className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">特殊教育需要 (SEN)</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                針對 ADHD、自閉症等特殊需要孩子，運用 AI 的個性化優勢輔助學習。
              </p>
              <ul className="space-y-3">
                {[
                  "用圖畫作為溝通起點",
                  "蘇格拉底式提問引導理解",
                  "簡短、分步驟的指令",
                  "AI 的耐心特質特別適合 SEN 孩子",
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ExpandableCard>
      </div>

      {/* Closing Quote */}
      <div className="mt-16 rounded-2xl bg-warm p-10 text-center lg:p-14">
        <p className="mb-4 text-2xl font-bold text-foreground lg:text-3xl">
          最好的學習，是陪孩子散步 🌿
        </p>
        <p className="mx-auto max-w-xl text-muted-foreground leading-relaxed">
          我們跟隨孩子的步伐，在孩子累了或遇到障礙時，適時遞上一根 AI 做的「行山杖」——而不是直接把孩子抱到終點。
        </p>
        <p className="mt-6 text-lg font-semibold text-primary">
          記住，改變一句話，親子關係，從此大不同。
        </p>
      </div>
    </div>
  </div>
);

export default ParentGuidePage;
