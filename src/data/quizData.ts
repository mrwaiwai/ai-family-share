export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "以下哪一項最能描述「生成式人工智能」(Generative AI) 的特點？",
    options: [
      "只能遵循預設規則執行任務",
      "能夠深度學習並產生新的內容（如文字、圖像）",
      "只能進行語音識別",
      "只能處理數學計算",
    ],
    correctIndex: 1,
    explanation:
      "生成式 AI 能深度學習並利用它們產生新的內容——例如文字、圖像、音樂、影片、程式碼。這與傳統 AI（如 Siri、Alexa）只遵循預設規則不同。",
  },
  {
    id: 2,
    question: "在 RGC 提示詞框架中，「R」代表甚麼？",
    options: ["背景 (Context)", "目標 (Goal)", "規則 (Rule)", "角色 (Role)"],
    correctIndex: 3,
    explanation:
      "RGC 代表 Role（角色）、Goal（目標）、Context（背景）。R 即角色，讓 AI 扮演特定角色（如老師、教練）能令回應更專業和貼切。",
  },
  {
    id: 3,
    question: "蘇格拉底式引導的核心原則是甚麼？",
    options: [
      "AI 直接給孩子正確答案",
      "AI 用大量練習題訓練孩子",
      "AI 通過提問引導孩子自己思考和理解",
      "AI 為孩子朗讀課文內容",
    ],
    correctIndex: 2,
    explanation:
      "蘇格拉底式引導強調 AI 不直接給答案，而是通過拆解步驟和提問來引導孩子解釋理由、分析假設，逐步建構自己的理解。",
  },
  {
    id: 4,
    question: "為甚麼家長陪同孩子使用 AI 如此重要？",
    options: [
      "因為 AI 操作太複雜，孩子不會用",
      "因為法律規定孩子不能使用電腦",
      "因為 AI 需要家長的帳號才能登入",
      "因為年幼孩子容易跳過思考過程，且 AI 可能生成不當內容",
    ],
    correctIndex: 3,
    explanation:
      "年幼孩子容易過快接受 AI 的答案而跳過思考過程。此外，部分 AI 系統可能生成不適合兒童的內容，因此大人的角色不可或缺。",
  },
  {
    id: 5,
    question: "「逆向工程」提示詞技巧最適合用於甚麼場景？",
    options: [
      "將孩子的畫作或成果上傳，反向推測學習引導方向",
      "讓 AI 做數學計算",
      "讓 AI 自動批改作業",
      "讓 AI 設計考試試卷",
    ],
    correctIndex: 0,
    explanation:
      "逆向工程是將現有成果（如孩子的畫作）上傳至 AI，從具體可見的事物出發，反向推測生成引導問題和學習素材，特別適合視覺型或非語言型孩子。",
  },
  {
    id: 6,
    question: "TPG 思考邏輯中的「P」代表甚麼？",
    options: [
      "程式 (Program)",
      "過程 (Process)",
      "提示 (Prompt)",
      "計劃 (Plan)",
    ],
    correctIndex: 1,
    explanation:
      "TPG 代表 Think（思考/輸入）、Process（過程/處理）、Generate（生成/輸出），幫助理解 AI 如何接收、處理和產生資訊。",
  },
  {
    id: 7,
    question: "以下哪一個不是生成式 AI 能產生的內容類型？",
    options: [
      "文字和程式碼",
      "圖像和音樂",
      "物理實體物件",
      "影片和語音",
    ],
    correctIndex: 2,
    explanation:
      "生成式 AI 能產生文字、圖像、音樂、影片、程式碼等數碼內容，但不能直接製造物理實體物件。",
  },
  {
    id: 8,
    question: "使用「分層提問法」時，正確的提問順序是甚麼？",
    options: [
      "應用 → 理解 → 記憶",
      "理解 → 應用 → 記憶",
      "記憶 → 應用 → 理解",
      "記憶 → 理解 → 應用",
    ],
    correctIndex: 3,
    explanation:
      "分層提問法遵循布魯姆分類學，由淺入深：先確認記憶（事實性問題），再測試理解（推理性問題），最後引導應用（聯繫生活）。",
  },
  {
    id: 9,
    question: "RGC 框架中的「G」(Goal) 應該怎樣設定？",
    options: [
      "越模糊越好，讓 AI 自由發揮",
      "具體、可衡量，清楚說明想達成的學習目標",
      "只需要寫一個字概括",
      "不需要設定，AI 會自動理解",
    ],
    correctIndex: 1,
    explanation:
      "好的目標應該具體且可衡量，例如「學習 5 個與天氣相關的英文詞彙」比「學英文」更有效，AI 能據此提供精準的回應。",
  },
  {
    id: 10,
    question: "「刻意犯錯法」的教學原理是甚麼？",
    options: [
      "讓孩子習慣犯錯，降低挫敗感",
      "測試 AI 系統的錯誤率",
      "讓 AI 故意給出錯誤答案，激發孩子的批判思考能力",
      "收集孩子常犯的錯誤作為評估",
    ],
    correctIndex: 2,
    explanation:
      "刻意犯錯法讓 AI 故意在回答中加入錯誤，要求孩子找出並糾正，從而訓練他們的批判性思維和仔細檢查的習慣。",
  },
  {
    id: 11,
    question: "以下哪個做法最能有效利用 AI 輔助 SEN（特殊教育需要）孩子學習？",
    options: [
      "完全依賴 AI 代替老師和家長",
      "用 AI 大量出練習題，讓孩子反覆操練",
      "根據孩子的特點調整提示詞，設計個人化的短回合互動",
      "讓孩子自行使用 AI，不需要大人參與",
    ],
    correctIndex: 2,
    explanation:
      "SEN 孩子需要個人化的學習方式。透過在提示詞中說明孩子的特點（如 ADHD 需要短回合、多感官刺激），AI 能提供更合適的互動內容。",
  },
  {
    id: 12,
    question: "ChatGPT、DeepSeek 和 Gemini 的共同點是甚麼？",
    options: [
      "它們都是由同一間公司開發的",
      "它們都只能處理英文",
      "它們都是免費且沒有使用限制的",
      "它們都是大型語言模型，能理解和生成自然語言",
    ],
    correctIndex: 3,
    explanation:
      "ChatGPT（OpenAI）、DeepSeek（深度求索）和 Gemini（Google）都是大型語言模型，能理解和生成自然語言，但由不同公司開發，各有特點。",
  },
  {
    id: 13,
    question: "「情境模擬」提示詞技巧的主要好處是甚麼？",
    options: [
      "減少 AI 的運算負擔",
      "讓 AI 回應更簡短",
      "創造沉浸式學習體驗，讓孩子在模擬場景中練習",
      "限制孩子只能用特定語言回答",
    ],
    correctIndex: 2,
    explanation:
      "情境模擬（如模擬超市購物、餐廳點餐）能創造沉浸式學習環境，讓孩子在有趣的場景中練習語言或數學技能，提高學習動機。",
  },
  {
    id: 14,
    question: "在提示詞中加入「一次只問一個問題」這類規則的目的是甚麼？",
    options: [
      "控制 AI 的回應節奏，避免資訊過載",
      "減少 AI 的使用費用",
      "讓 AI 的回應更短",
      "防止 AI 出錯",
    ],
    correctIndex: 0,
    explanation:
      "加入互動規則（如一次一個問題、等待回答後再繼續）能控制對話節奏，避免一次給太多資訊導致孩子消化不了，特別對年幼孩子很重要。",
  },
  {
    id: 15,
    question: "以下哪一個是使用 AI 輔助孩子學習時的最佳實踐？",
    options: [
      "讓 AI 完全取代家長的教學角色",
      "不設任何限制，讓孩子自由探索所有 AI 功能",
      "把 AI 當作萬能工具，不需要檢查它的回應",
      "把 AI 當作輔助工具，家長保持參與並引導孩子批判性思考",
    ],
    correctIndex: 3,
    explanation:
      "AI 是輔助工具而非替代品。家長應保持參與，引導孩子批判性地評估 AI 的回應，培養獨立思考能力，而不是被動接受所有 AI 的答案。",
  },
];
