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
    question: "在 RGC 提示詞框架中，「C」代表甚麼？",
    options: ["創意 (Creativity)", "背景 (Context)", "指令 (Command)", "對話 (Conversation)"],
    correctIndex: 1,
    explanation:
      "RGC 代表 Role（角色）、Goal（目標）、Context（背景）。背景資訊包括孩子的年齡、程度、興趣等，讓 AI 能給出更貼切的回應。",
  },
  {
    id: 3,
    question: "蘇格拉底式引導的核心原則是甚麼？",
    options: [
      "AI 直接給孩子正確答案",
      "AI 通過提問引導孩子自己思考和理解",
      "AI 用大量練習題訓練孩子",
      "AI 為孩子朗讀課文內容",
    ],
    correctIndex: 1,
    explanation:
      "蘇格拉底式引導強調 AI 不直接給答案，而是通過拆解步驟和提問來引導孩子解釋理由、分析假設，逐步建構自己的理解。",
  },
  {
    id: 4,
    question: "為甚麼家長陪同孩子使用 AI 如此重要？",
    options: [
      "因為 AI 操作太複雜，孩子不會用",
      "因為年幼孩子容易跳過思考過程，且 AI 可能生成不當內容",
      "因為 AI 需要家長的帳號才能登入",
      "因為法律規定孩子不能使用電腦",
    ],
    correctIndex: 1,
    explanation:
      "年幼孩子容易過快接受 AI 的答案而跳過思考過程。此外，部分 AI 系統可能生成不適合兒童的內容，因此大人的角色不可或缺。",
  },
  {
    id: 5,
    question: "「逆向工程」提示詞技巧最適合用於甚麼場景？",
    options: [
      "讓 AI 做數學計算",
      "將孩子的畫作或成果上傳，反向推測學習引導方向",
      "讓 AI 自動批改作業",
      "讓 AI 設計考試試卷",
    ],
    correctIndex: 1,
    explanation:
      "逆向工程是將現有成果（如孩子的畫作）上傳至 AI，從具體可見的事物出發，反向推測生成引導問題和學習素材，特別適合視覺型或非語言型孩子。",
  },
];
