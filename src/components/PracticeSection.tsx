import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, PenLine } from "lucide-react";

interface Exercise {
  id: number;
  scenario: string;
  task: string;
  hints: string[];
  sampleAnswer: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    scenario: "你的孩子（8 歲）正在學習英文動物詞彙，他/她很喜歡恐龍。",
    task: "用 RGC 框架寫一個提示詞，讓 AI 幫助孩子透過恐龍主題學習動物相關的英文詞彙。",
    hints: [
      "角色：想想甚麼專家最適合？（例如：古生物學家 + 英語老師）",
      "目標：明確說明要學甚麼（動物詞彙、分類、描述特徵）",
      "背景：年齡、程度、興趣都要交代清楚",
    ],
    sampleAnswer: `【角色】你是一位熱愛恐龍的兒童英語老師，擅長用有趣的方式教動物詞彙。\n\n【目標】幫助孩子通過恐龍主題學習 5-8 個動物相關英文詞彙，包括動物分類和描述特徵的形容詞。\n\n【背景】孩子 8 歲，英語初級程度，非常喜歡恐龍。請用恐龍作為起點，逐步延伸到其他動物，用互動問答的方式教學，一次一個詞彙。`,
  },
  {
    id: 2,
    scenario: "你的孩子（10 歲）數學考試成績不理想，特別是分數（fractions）的部分。",
    task: "用蘇格拉底式框架寫一個提示詞，讓 AI 透過提問引導孩子理解分數的概念，而不是直接教他/她。",
    hints: [
      "記得加入「不可直接給答案」的規則",
      "用生活例子（如切蛋糕、分薄餅）來引入分數概念",
      "讓 AI 從孩子已知的知識開始提問",
    ],
    sampleAnswer: `你是一位採用蘇格拉底式教學法的數學輔導員。\n\n目標：透過提問引導 10 歲孩子理解分數的概念（甚麼是分數、為甚麼需要分數、如何比較大小）。\n\n規則：\n- 絕對不直接解釋或給答案\n- 從生活例子開始：「如果你有一塊薄餅，要和 3 個朋友平分，每人得多少？」\n- 孩子回答後，追問「你怎麼想到的？」\n- 如果孩子答錯，不說「錯了」，而是引導他們重新想\n- 一次只問一個問題`,
  },
  {
    id: 3,
    scenario: "你想幫孩子（7 歲，有輕度 ADHD）練習英文寫句子，但孩子很難長時間集中。",
    task: "設計一個提示詞，讓 AI 用遊戲化的短回合方式幫助孩子練習造句。",
    hints: [
      "每回合要短（1-2 分鐘），保持新鮮感",
      "可以加入積分、表情符號等趣味元素",
      "考慮孩子可能中途分心，加入「溫柔提醒」機制",
    ],
    sampleAnswer: `你是一位有趣的英文遊戲主持人，專門為容易分心的小朋友設計造句遊戲。\n\n規則：\n- 每回合給一個簡單的英文詞（如 cat、run、happy），孩子用它造一個句子\n- 每個句子給 ⭐ 評分（1-3 顆星），並說明為甚麼得這個分數\n- 每 3 回合換一個小遊戲變化（填空、改錯、接龍）\n- 如果孩子 30 秒沒回應，用有趣的方式提醒（「小星星在等你的答案呢！」）\n- 每完成 5 回合，總結進步並鼓勵\n\n孩子 7 歲，英語初學者。開始時說「歡迎來到造句小遊戲！🎮」`,
  },
  {
    id: 4,
    scenario: "你想用 AI 幫孩子（9 歲）準備中文閱讀理解，課文是關於「中秋節的由來」。",
    task: "寫一個提示詞，讓 AI 用分層提問法（記憶 → 理解 → 應用）幫孩子理解課文。",
    hints: [
      "第一層：事實性問題（誰、甚麼、何時）",
      "第二層：推理性問題（為甚麼、怎樣）",
      "第三層：聯繫生活（你會怎樣做、有甚麼相似經驗）",
    ],
    sampleAnswer: `你是一位中文閱讀理解導師，用分層提問法幫助 9 歲孩子理解課文。\n\n課文主題：中秋節的由來\n\n提問層次：\n1. 記憶層：「中秋節是在甚麼時候？」「故事裡的主角是誰？」\n2. 理解層：「嫦娥為甚麼要吃下仙丹？」「你覺得后羿的心情會怎樣？」\n3. 應用層：「你們家是怎樣過中秋節的？」「如果你是嫦娥，你會做同樣的選擇嗎？」\n\n規則：每次只問一個層次，等孩子答完再進入下一層。如果孩子答不出，給一點提示但不要直接告訴答案。`,
  },
];

const PracticeSection = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHints, setShowHints] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const exercise = exercises[currentExercise];

  const handleNext = () => {
    setCurrentExercise((prev) => (prev + 1) % exercises.length);
    setUserAnswer("");
    setShowHints(false);
    setShowSample(false);
    setSubmitted(false);
  };

  const handleReset = () => {
    setUserAnswer("");
    setShowHints(false);
    setShowSample(false);
    setSubmitted(false);
  };

  return (
    <section id="practice" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">✏️ 家長練習場</h2>
          <p className="text-muted-foreground">
            動手寫提示詞！透過真實場景練習，提升你與 AI 協作的能力
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {exercises.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentExercise(i);
                setUserAnswer("");
                setShowHints(false);
                setShowSample(false);
                setSubmitted(false);
              }}
              className={`h-3 w-3 rounded-full transition-all ${
                i === currentExercise
                  ? "scale-125 bg-primary"
                  : i < currentExercise && submitted
                  ? "bg-primary/40"
                  : "bg-border"
              }`}
            />
          ))}
          <span className="ml-3 text-sm text-muted-foreground">
            練習 {currentExercise + 1} / {exercises.length}
          </span>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Scenario Card */}
          <div className="mb-6 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-coral-light px-3 py-1 text-xs font-medium text-secondary">
              <PenLine className="h-3.5 w-3.5" />
              情境 {exercise.id}
            </div>
            <p className="mb-4 text-foreground leading-relaxed">{exercise.scenario}</p>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium text-foreground">📝 你的任務：</p>
              <p className="mt-1 text-sm text-muted-foreground">{exercise.task}</p>
            </div>
          </div>

          {/* Hints */}
          <button
            onClick={() => setShowHints(!showHints)}
            className="mb-4 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            {showHints ? "隱藏提示 💡" : "需要提示？💡"}
          </button>

          {showHints && (
            <div className="mb-6 rounded-lg border border-primary/20 bg-teal-light p-4">
              <ul className="space-y-2">
                {exercise.hints.map((hint, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-0.5 font-semibold text-primary">{i + 1}.</span>
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Answer Area */}
          <div className="mb-6">
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="在這裡寫你的提示詞..."
              rows={8}
              className="w-full rounded-xl border border-border bg-card p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              {userAnswer.length > 0
                ? `已寫 ${userAnswer.length} 字`
                : "試試把你的想法寫下來"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setSubmitted(true);
                setShowSample(true);
              }}
              disabled={userAnswer.length < 10}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <CheckCircle className="h-4 w-4" />
              提交並查看參考答案
            </button>
            <button
              onClick={() => setShowSample(!showSample)}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              {showSample ? "隱藏參考答案" : "直接看參考答案"}
            </button>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              重寫
            </button>
          </div>

          {/* Sample Answer */}
          {showSample && (
            <div className="mt-6 rounded-xl border border-primary/20 bg-teal-light p-6">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                參考答案
              </h4>
              <pre className="whitespace-pre-wrap rounded-lg bg-card p-4 text-sm leading-relaxed text-foreground">
                {exercise.sampleAnswer}
              </pre>

              {submitted && userAnswer.length >= 10 && (
                <div className="mt-4 rounded-lg bg-card p-4">
                  <p className="text-sm font-medium text-foreground">💬 自我檢查：</p>
                  <ul className="mt-2 space-y-1.5">
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      你有明確指定 AI 的角色嗎？
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      目標是否具體、可衡量？
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      有沒有交代孩子的年齡、程度和興趣？
                    </li>
                    <li className="flex items-start gap-2 text-xs text-muted-foreground">
                      <XCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                      有沒有設定互動規則（如一次一個問題）？
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Next Button */}
          <div className="mt-8 text-center">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              下一題
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;
