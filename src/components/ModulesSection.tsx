import { Bot, Brain, MessageSquare, Lightbulb, Shield, Puzzle, Wrench, BookOpen, AlertTriangle, Users } from "lucide-react";
import ModuleCard from "./ModuleCard";

const modules = [
  {
    icon: Bot,
    title: "什麼是人工智能 (AI)？",
    description: "了解 AI 的基本概念，分辨傳統 AI 與生成式 AI 的差異，認識 AI 如何影響日常生活。",
    color: "bg-teal-light",
    iconColor: "text-primary",
    tag: "基礎入門",
    details: [
      "人工智能 (AI) 是讓電腦模擬人類思考和學習的技術，能夠處理語言、圖像、聲音等資訊。",
      "傳統 AI（如 Siri、Alexa）只能遵循預設規則執行特定任務，例如設定鬧鐘、查天氣。",
      "生成式 AI（如 ChatGPT、Gemini）能深度學習並產生全新內容——文字、圖像、音樂、程式碼等。",
      "AI 不是「有思想的機器」，它通過分析大量數據中的模式來預測和生成回應，沒有真正的理解力。",
      "TPG 思考邏輯：Think（輸入/思考）→ Process（處理/分析）→ Generate（生成/輸出），這是所有 AI 模型的基本運作方式。",
      "AI 的訓練數據來自互聯網上的文本、書籍、網站等，因此可能包含偏見或過時資訊。",
    ],
    keyPoints: [
      { label: "核心概念", value: "模式識別 + 內容生成" },
      { label: "運作原理", value: "TPG：輸入 → 處理 → 輸出" },
      { label: "關鍵區別", value: "傳統 AI vs 生成式 AI" },
      { label: "重要認知", value: "AI 沒有真正的思考能力" },
    ],
  },
  {
    icon: Wrench,
    title: "認識不同的 AI 工具",
    description: "比較市面上主流 AI 工具的功能、特點和適用場景，幫助你選擇最合適的工具。",
    color: "bg-coral-light",
    iconColor: "text-secondary",
    tag: "工具介紹",
    details: [
      "ChatGPT（OpenAI）：最廣泛使用的 AI 對話工具，支援文字、圖像輸入，有免費版（GPT-3.5）和付費版（GPT-4）。擅長寫作、翻譯、編程、教學。",
      "Google Gemini：Google 開發，深度整合 Google 搜索和服務。擅長多模態（文字+圖片+影片），中文理解力強，適合學術研究和資料整理。",
      "DeepSeek：中國深度求索公司開發，開源模型，免費使用。數學和編程能力強，中文表現優秀，適合學習理科知識。",
      "Claude（Anthropic）：注重安全和準確性，擅長長文分析和學術寫作，回應較為謹慎和客觀。",
      "Microsoft Copilot：整合在 Windows、Office 等微軟產品中，適合日常辦公和文檔處理。",
      "圖像生成工具：DALL-E（OpenAI）、Midjourney、Stable Diffusion 能根據文字描述生成圖像，適合創意和設計。",
      "選擇建議：初學者可從 ChatGPT 或 Gemini 開始，它們介面友善、功能全面；有特定需求再嘗試專門工具。",
    ],
    keyPoints: [
      { label: "最適合初學者", value: "ChatGPT / Gemini" },
      { label: "數學/編程", value: "DeepSeek" },
      { label: "長文分析", value: "Claude" },
      { label: "圖像生成", value: "DALL-E / Midjourney" },
    ],
  },
  {
    icon: BookOpen,
    title: "如何操作 AI 工具",
    description: "從註冊帳戶到實際對話，一步步教你使用 AI 工具進行學習和教學。",
    color: "bg-teal-light",
    iconColor: "text-primary",
    tag: "實用操作",
    details: [
      "第一步：選擇平台並註冊帳戶。大部分工具（ChatGPT、Gemini、DeepSeek）都有免費版本，用電郵即可註冊。",
      "第二步：熟悉介面。每個工具都有對話框，你輸入文字（提示詞），AI 會生成回應。可以連續對話，AI 會記住上下文。",
      "第三步：撰寫有效的提示詞。不要只輸入「教我英文」，而是提供具體的角色、目標和背景資訊（RGC 框架）。",
      "第四步：檢查和優化回應。AI 的第一次回應未必完美，你可以要求它「更簡單」、「加入例子」、「用另一種方式解釋」。",
      "第五步：善用追問功能。像和老師對話一樣，可以不斷追問「為甚麼？」「可以舉個例子嗎？」「還有其他方法嗎？」",
      "進階技巧：上傳圖片或文件讓 AI 分析、使用語音輸入、建立自訂指令（Custom Instructions）保存常用設定。",
    ],
    keyPoints: [
      { label: "起步", value: "註冊 → 輸入 → 對話" },
      { label: "核心技能", value: "撰寫有效提示詞" },
      { label: "優化方法", value: "追問 + 調整指令" },
      { label: "進階功能", value: "上傳文件 / 語音輸入" },
    ],
  },
  {
    icon: AlertTriangle,
    title: "使用 AI 的注意事項",
    description: "了解 AI 的局限性和潛在風險，學會安全、負責任地使用 AI 工具。",
    color: "bg-coral-light",
    iconColor: "text-secondary",
    tag: "安全須知",
    details: [
      "AI 幻覺（Hallucination）：AI 有時會自信地生成錯誤或虛構的資訊，看起來很真實但完全是編造的。務必核實重要資訊。",
      "數據偏見：AI 從訓練數據學習，可能反映社會中的偏見（性別、種族、文化等），要教導孩子批判性思考。",
      "隱私安全：不要在 AI 對話中輸入個人敏感資訊（如身份證號碼、地址、密碼、銀行資料）。",
      "版權問題：AI 生成的內容可能涉及版權，用於學校作業時應標明是 AI 輔助生成，不要直接抄襲。",
      "過度依賴：AI 是輔助工具而非替代品，孩子仍需發展獨立思考和解決問題的能力。",
      "年齡限制：大部分 AI 工具要求用戶年滿 13 歲（部分為 18 歲），年幼孩子必須在家長陪同下使用。",
      "內容過濾：部分 AI 可能生成不適合兒童的內容，家長應預先測試並設定適當的使用規則。",
    ],
    keyPoints: [
      { label: "最常見問題", value: "AI 幻覺（虛構資訊）" },
      { label: "隱私原則", value: "絕不輸入個人資料" },
      { label: "學術誠信", value: "標明 AI 輔助" },
      { label: "年齡要求", value: "13 歲以下需陪同" },
    ],
  },
  {
    icon: Puzzle,
    title: "提示詞撰寫技巧",
    description: "掌握與 AI 有效溝通的方法，學習多種提示詞框架，讓 AI 回應更精準。",
    color: "bg-teal-light",
    iconColor: "text-primary",
    tag: "核心技能",
    details: [
      "RGC 框架：Role（角色）+ Goal（目標）+ Context（背景）— 最基本也最實用的提示詞結構。告訴 AI 扮演甚麼角色、要達成甚麼目標、在甚麼背景下進行。",
      "蘇格拉底式引導：設定 AI 不直接給答案，而是透過一連串提問引導孩子自行思考和推理。培養批判性思維。",
      "分層提問法：記憶（事實）→ 理解（推理）→ 應用（實踐），由淺入深逐步引導學習。",
      "逆向工程：上傳孩子的作品（畫作、作文、作業），讓 AI 從成果反向推測學習方向，特別適合視覺型學習者。",
      "刻意犯錯法：讓 AI 故意在回答中犯錯，訓練孩子找出錯誤，培養仔細檢查和批判性思考的習慣。",
      "情境模擬：設定虛擬場景（如餐廳點餐、超市購物），讓孩子在沉浸式環境中練習語言或數學技能。",
      "黃金法則：提示詞越具體，AI 回應越好。加入數字指標、互動規則、語氣要求會大幅提升品質。",
    ],
    keyPoints: [
      { label: "入門框架", value: "RGC（角色+目標+背景）" },
      { label: "思維訓練", value: "蘇格拉底式 / 犯錯法" },
      { label: "創意教學", value: "逆向工程 / 情境模擬" },
      { label: "黃金法則", value: "越具體 = 越好的回應" },
    ],
  },
  {
    icon: Users,
    title: "家長與子女陪同指引",
    description: "家長在 AI 教育中的角色定位、陪同方法和安全界線設定全攻略。",
    color: "bg-coral-light",
    iconColor: "text-secondary",
    tag: "必讀指南",
    details: [
      "為何需要陪同：年幼孩子容易過快接受 AI 答案而跳過思考過程，也可能接觸到不當內容。家長的角色是引導者和把關人。",
      "陪同三步曲：① 一起設定提示詞 → ② 一起閱讀 AI 回應 → ③ 一起討論和反思。讓學習成為親子互動的機會。",
      "提問引導法：不要告訴孩子答案，而是問「你覺得 AI 說的對嗎？」「為甚麼它這樣回答？」「你同意嗎？」培養獨立判斷力。",
      "設定使用規則：每次使用時間（建議 20-30 分鐘）、可以問甚麼類型的問題、不可以分享甚麼資訊、完成後要做甚麼。",
      "分齡建議：6-8 歲完全陪同、9-11 歲可在旁監督、12 歲以上可逐步獨立但定期檢查對話記錄。",
      "正向示範：家長自己先學會使用 AI，在孩子面前展示正確的使用方式（檢查答案、質疑回應、保護隱私）。",
      "學習記錄：可以和孩子一起將有趣的 AI 對話截圖保存，建立「我們的 AI 學習日記」，回顧成長過程。",
      "緊急應對：如果 AI 生成了不當內容，保持冷靜，和孩子解釋「AI 有時會犯錯」，作為媒體素養教育的機會。",
    ],
    keyPoints: [
      { label: "核心角色", value: "引導者 + 把關人" },
      { label: "陪同三步", value: "設定 → 閱讀 → 反思" },
      { label: "6-8 歲", value: "完全陪同" },
      { label: "12 歲+", value: "逐步獨立 + 定期檢查" },
    ],
  },
];

const ModulesSection = () => (
  <section id="modules" className="py-20">
    <div className="container mx-auto px-4">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold text-foreground">🧠 AI 知識百科</h2>
        <p className="mx-auto max-w-lg text-muted-foreground">
          由淺入深，全面認識人工智能。點擊每個卡片展開詳細內容。
        </p>
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
