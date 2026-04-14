import { useState } from "react";
import { CheckCircle, XCircle, RotateCcw, ArrowRight, PenLine, Shuffle, Lightbulb, BookOpen, MessageSquare, TrendingUp, Star } from "lucide-react";
import { analyzePrompt, type FeedbackResult } from "@/lib/promptFeedback";

interface Exercise {
  id: number;
  category: string;
  categoryIcon: string;
  scenario: string;
  task: string;
  hints: string[];
  checkpoints: string[];
  sampleAnswer: string;
}

const allExercises: Exercise[] = [
  {
    id: 1,
    category: "RGC 框架",
    categoryIcon: "🎯",
    scenario: "你的孩子（8 歲）正在學習英文動物詞彙，他/她很喜歡恐龍。",
    task: "用 RGC 框架寫一個提示詞，讓 AI 幫助孩子透過恐龍主題學習動物相關的英文詞彙。",
    hints: [
      "角色：想想甚麼專家最適合？（例如：古生物學家 + 英語老師）",
      "目標：明確說明要學甚麼（動物詞彙、分類、描述特徵）",
      "背景：年齡、程度、興趣都要交代清楚",
    ],
    checkpoints: ["有明確指定 AI 的角色", "目標具體且可衡量", "包含孩子的年齡和程度", "有設定互動方式"],
    sampleAnswer: `【角色】你是一位熱愛恐龍的兒童英語老師，擅長用有趣的方式教動物詞彙。\n\n【目標】幫助孩子通過恐龍主題學習 5-8 個動物相關英文詞彙，包括動物分類和描述特徵的形容詞。\n\n【背景】孩子 8 歲，英語初級程度，非常喜歡恐龍。請用恐龍作為起點，逐步延伸到其他動物，用互動問答的方式教學，一次一個詞彙。`,
  },
  {
    id: 2,
    category: "蘇格拉底式引導",
    categoryIcon: "🤔",
    scenario: "你的孩子（10 歲）數學考試成績不理想，特別是分數（fractions）的部分。",
    task: "用蘇格拉底式框架寫一個提示詞，讓 AI 透過提問引導孩子理解分數的概念，而不是直接教他/她。",
    hints: [
      "記得加入「不可直接給答案」的規則",
      "用生活例子（如切蛋糕、分薄餅）來引入分數概念",
      "讓 AI 從孩子已知的知識開始提問",
    ],
    checkpoints: ["包含「不直接給答案」的規則", "用了生活化的例子", "有逐步引導的結構", "設定了回應策略（答錯時怎麼做）"],
    sampleAnswer: `你是一位採用蘇格拉底式教學法的數學輔導員。\n\n目標：透過提問引導 10 歲孩子理解分數的概念（甚麼是分數、為甚麼需要分數、如何比較大小）。\n\n規則：\n- 絕對不直接解釋或給答案\n- 從生活例子開始：「如果你有一塊薄餅，要和 3 個朋友平分，每人得多少？」\n- 孩子回答後，追問「你怎麼想到的？」\n- 如果孩子答錯，不說「錯了」，而是引導他們重新想\n- 一次只問一個問題`,
  },
  {
    id: 3,
    category: "SEN 支援",
    categoryIcon: "💛",
    scenario: "你想幫孩子（7 歲，有輕度 ADHD）練習英文寫句子，但孩子很難長時間集中。",
    task: "設計一個提示詞，讓 AI 用遊戲化的短回合方式幫助孩子練習造句。",
    hints: [
      "每回合要短（1-2 分鐘），保持新鮮感",
      "可以加入積分、表情符號等趣味元素",
      "考慮孩子可能中途分心，加入「溫柔提醒」機制",
    ],
    checkpoints: ["提到孩子的特殊需要", "設計了短回合互動", "加入了遊戲化元素", "有分心時的應對策略"],
    sampleAnswer: `你是一位有趣的英文遊戲主持人，專門為容易分心的小朋友設計造句遊戲。\n\n規則：\n- 每回合給一個簡單的英文詞（如 cat、run、happy），孩子用它造一個句子\n- 每個句子給 ⭐ 評分（1-3 顆星），並說明為甚麼得這個分數\n- 每 3 回合換一個小遊戲變化（填空、改錯、接龍）\n- 如果孩子 30 秒沒回應，用有趣的方式提醒（「小星星在等你的答案呢！」）\n- 每完成 5 回合，總結進步並鼓勵\n\n孩子 7 歲，英語初學者。開始時說「歡迎來到造句小遊戲！🎮」`,
  },
  {
    id: 4,
    category: "分層提問",
    categoryIcon: "📊",
    scenario: "你想用 AI 幫孩子（9 歲）準備中文閱讀理解，課文是關於「中秋節的由來」。",
    task: "寫一個提示詞，讓 AI 用分層提問法（記憶 → 理解 → 應用）幫孩子理解課文。",
    hints: [
      "第一層：事實性問題（誰、甚麼、何時）",
      "第二層：推理性問題（為甚麼、怎樣）",
      "第三層：聯繫生活（你會怎樣做、有甚麼相似經驗）",
    ],
    checkpoints: ["清楚列出三個提問層次", "每層有具體問題示例", "設定了逐步推進的規則", "有應對孩子答不出的策略"],
    sampleAnswer: `你是一位中文閱讀理解導師，用分層提問法幫助 9 歲孩子理解課文。\n\n課文主題：中秋節的由來\n\n提問層次：\n1. 記憶層：「中秋節是在甚麼時候？」「故事裡的主角是誰？」\n2. 理解層：「嫦娥為甚麼要吃下仙丹？」「你覺得后羿的心情會怎樣？」\n3. 應用層：「你們家是怎樣過中秋節的？」「如果你是嫦娥，你會做同樣的選擇嗎？」\n\n規則：每次只問一個層次，等孩子答完再進入下一層。如果孩子答不出，給一點提示但不要直接告訴答案。`,
  },
  {
    id: 5,
    category: "情境模擬",
    categoryIcon: "🎭",
    scenario: "你的孩子（11 歲）即將參加英語會話考試，需要練習在餐廳點餐的對話。",
    task: "寫一個提示詞，讓 AI 模擬餐廳服務員，與孩子進行點餐角色扮演練習。",
    hints: [
      "設定 AI 扮演友善的服務員角色",
      "加入一些小狀況讓對話更真實（如某道菜售完）",
      "設定難度等級，可逐步增加複雜度",
    ],
    checkpoints: ["設定了清晰的角色扮演場景", "包含互動的對話流程", "有難度調整機制", "涵蓋實際會用到的詞彙和句型"],
    sampleAnswer: `你是一位友善的西餐廳服務員，正在和一位 11 歲的客人練習英語點餐對話。\n\n場景設定：一間家庭式西餐廳，有漢堡、意粉、沙律、甜品等。\n\n互動規則：\n- 先用英文打招呼並問幾位\n- 遞上菜單（列出 6-8 道菜品）\n- 等孩子點餐，適時問「Would you like anything to drink?」\n- 中途加入一個小狀況（如「Sorry, we're out of chocolate cake today. Would you like apple pie instead?」）\n- 最後確認訂單並報總價\n\n如果孩子用中文回答，溫和提醒用英文試試。每次對話結束後，給 2-3 個改善建議。`,
  },
  {
    id: 6,
    category: "逆向工程",
    categoryIcon: "🔄",
    scenario: "你的孩子（6 歲）畫了一幅畫，裡面有太陽、房子、花園和一隻狗。你想用這幅畫作為學習起點。",
    task: "寫一個提示詞，假設你已上傳孩子的畫作，讓 AI 從畫作中引出學習活動。",
    hints: [
      "讓 AI 先描述看到的內容，引起孩子共鳴",
      "從畫作元素延伸出不同科目的學習（英文、數學、常識）",
      "保持輕鬆有趣，不要像考試",
    ],
    checkpoints: ["有上傳/描述畫作的步驟", "從畫作延伸到學習活動", "覆蓋多個學習領域", "語氣輕鬆適合幼兒"],
    sampleAnswer: `你是一位創意幼兒教育導師。我上傳了一幅 6 歲孩子的畫作。\n\n請先觀察畫作，用欣賞的語氣描述你看到的內容（「哇，我看到一間漂亮的房子！旁邊是不是有一隻小狗？」）。\n\n然後從畫作中的元素引出學習活動：\n- 英文：教畫中物件的英文名（sun、house、dog、flower），一次一個\n- 數學：「畫裡有幾朵花？如果再加 2 朵呢？」\n- 常識：「狗狗喜歡吃甚麼？牠們需要甚麼照顧？」\n\n規則：像朋友聊天一樣，不要像老師上課。一次只問一個問題，等孩子回答。`,
  },
  {
    id: 7,
    category: "刻意犯錯法",
    categoryIcon: "❌",
    scenario: "你的孩子（9 歲）常常粗心大意，計算題經常寫錯。你想訓練他/她仔細檢查的習慣。",
    task: "寫一個提示詞，讓 AI 故意在數學解題過程中犯錯，讓孩子找出錯誤。",
    hints: [
      "讓 AI 扮演一個「粗心的學生」角色",
      "錯誤要設計得合理，不能太明顯也不能太隱蔽",
      "找到錯誤後要追問「為甚麼這是錯的」",
    ],
    checkpoints: ["設定了 AI 會犯錯的規則", "錯誤難度適合孩子程度", "有引導孩子解釋原因的步驟", "包含正面鼓勵機制"],
    sampleAnswer: `你是一個叫「小明」的 9 歲學生，你很努力但有時會粗心犯錯。\n\n現在你要做一些數學題（加減乘除、應用題），但你每 2-3 題就會故意犯一個錯（計算錯誤、漏看單位、抄錯數字等）。\n\n規則：\n- 先寫出完整的解題步驟\n- 犯錯要自然，不要太明顯\n- 問孩子「你覺得我做對了嗎？幫我檢查一下！」\n- 如果孩子找到錯誤，追問「為甚麼這裡錯了？正確答案應該是甚麼？」\n- 如果孩子沒找到，給提示「再看看第二步？」\n- 找到錯誤後說「謝謝你幫我改正！你真細心！」\n\n數學範圍：三年級程度的四則運算。`,
  },
  {
    id: 8,
    category: "RGC 框架",
    categoryIcon: "🎯",
    scenario: "你的孩子（12 歲）對太空很有興趣，你想用 AI 幫他/她做一個關於火星的專題研習。",
    task: "用 RGC 框架設計一個提示詞，讓 AI 引導孩子完成一份簡單的火星研究報告。",
    hints: [
      "角色可以是太空科學家或NASA研究員",
      "目標要包含研究報告的具體結構",
      "背景要說明是學校專題，程度要適合小學高年級",
    ],
    checkpoints: ["角色設定合理且有專業感", "列出了報告的具體架構", "有逐步引導的流程", "語言程度適合 12 歲"],
    sampleAnswer: `【角色】你是一位 NASA 的太空科學家，很喜歡和年輕人分享太空知識。\n\n【目標】引導 12 歲孩子完成一份約 500 字的火星研究報告，包含：\n1. 火星的基本資料（大小、距離、溫度）\n2. 為甚麼科學家對火星感興趣\n3. 人類探索火星的歷史（至少提及 2 個任務）\n4. 孩子的看法：人類未來能住在火星嗎？\n\n【背景】這是小學六年級的常識科專題。孩子對太空很有興趣但不知從何開始。\n\n請一個部分一個部分地引導，先問孩子已知道甚麼，再補充資料。每個部分完成後才進入下一個。`,
  },
  {
    id: 9,
    category: "情境模擬",
    categoryIcon: "🎭",
    scenario: "你的孩子（8 歲）正在學習使用金錢，你想讓他/她練習在超市購物和計算找零。",
    task: "設計一個提示詞，讓 AI 模擬超市收銀員，和孩子進行購物與付款的互動練習。",
    hints: [
      "列出一些商品和價格讓孩子選購",
      "加入計算總價和找零的環節",
      "可以加入特價優惠增加趣味和難度",
    ],
    checkpoints: ["有清晰的超市場景設定", "包含商品清單和價格", "有計算練習環節", "難度適合 8 歲孩子"],
    sampleAnswer: `你是一位超市的友善收銀員，和一位 8 歲小朋友玩購物遊戲。\n\n超市商品（用港幣）：\n🍎 蘋果 $5、🥛 牛奶 $12、🍞 麵包 $8、🍫 朱古力 $6、🧃 果汁 $4、🍌 香蕉 $3\n\n今日特價：買 2 件水果減 $2！\n\n互動流程：\n1. 歡迎小朋友，展示商品\n2. 讓孩子選 3-4 樣商品\n3. 問「你覺得總共要多少錢？」等孩子自己算\n4. 如果孩子給你 $50，問「要找多少錢？」\n5. 鼓勵：「你算得很快！」或引導：「再想想？蘋果和香蕉加起來是……？」\n\n完成後總結孩子買了甚麼、花了多少錢。`,
  },
  {
    id: 10,
    category: "蘇格拉底式引導",
    categoryIcon: "🤔",
    scenario: "你的孩子（11 歲）問你：「為甚麼天空是藍色的？」你想用 AI 引導他/她自己找到答案。",
    task: "寫一個蘇格拉底式提示詞，讓 AI 透過一連串問題引導孩子理解光的散射原理。",
    hints: [
      "從孩子能觀察到的現象開始提問",
      "逐步引入光是由不同顏色組成的概念",
      "用簡單比喻解釋散射（如水珠折射彩虹）",
    ],
    checkpoints: ["從觀察入手而非直接解釋", "有逐步深入的問題鏈", "用了孩子能理解的比喻", "鼓勵孩子猜測和推理"],
    sampleAnswer: `你是一位引導式科學導師，用蘇格拉底式提問幫助 11 歲孩子理解天空為甚麼是藍色的。\n\n規則：\n- 不要直接解釋答案\n- 從觀察開始：「你有沒有注意過，天空在不同時間是不同顏色的？甚麼時候不是藍色？」\n- 引入概念：「你知道彩虹有幾種顏色嗎？那些顏色從哪裡來的？」\n- 用比喻：「想像陽光是一條由很多顏色混在一起的光束，經過空氣時會發生甚麼？」\n- 每次只問一個問題\n- 如果孩子猜錯，說「有趣的想法！不過再想想……」然後給小提示\n- 最後讓孩子用自己的話總結`,
  },
];

const PracticeSection = () => {
  const [exercises, setExercises] = useState(allExercises.slice(0, 4));
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showHints, setShowHints] = useState(false);
  const [showSample, setShowSample] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);

  const exercise = exercises[currentExercise];

  const handleShuffle = () => {
    const shuffled = [...allExercises].sort(() => Math.random() - 0.5).slice(0, 4);
    setExercises(shuffled);
    setCurrentExercise(0);
    resetState();
  };

  const resetState = () => {
    setUserAnswer("");
    setShowHints(false);
    setShowSample(false);
    setSubmitted(false);
    setCheckedItems([]);
    setFeedback(null);
  };

  const handleNext = () => {
    setCurrentExercise((prev) => (prev + 1) % exercises.length);
    resetState();
  };

  const toggleCheck = (i: number) => {
    const next = [...checkedItems];
    next[i] = !next[i];
    setCheckedItems(next);
  };

  const categoryColors: Record<string, string> = {
    "RGC 框架": "bg-teal-light text-primary",
    "蘇格拉底式引導": "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    "SEN 支援": "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400",
    "分層提問": "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    "情境模擬": "bg-coral-light text-secondary",
    "逆向工程": "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
    "刻意犯錯法": "bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400",
  };

  return (
    <section id="practice" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">✏️ 提示詞練習場</h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            動手寫提示詞！透過真實場景練習，提升你與 AI 協作的能力。每次隨機抽取 4 道題目。
          </p>
          <button
            onClick={handleShuffle}
            className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            <Shuffle className="h-4 w-4" />
            隨機換題
          </button>
        </div>

        {/* Progress dots */}
        <div className="mb-8 flex items-center justify-center gap-2">
          {exercises.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentExercise(i); resetState(); }}
              className={`h-3 w-3 rounded-full transition-all ${
                i === currentExercise ? "scale-125 bg-primary" : "bg-border"
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
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${categoryColors[exercise.category] || "bg-muted text-muted-foreground"}`}>
                {exercise.categoryIcon} {exercise.category}
              </span>
              <span className="text-xs text-muted-foreground">練習 #{exercise.id}</span>
            </div>
            <p className="mb-4 text-foreground leading-relaxed">{exercise.scenario}</p>
            <div className="rounded-lg bg-muted p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                <PenLine className="h-4 w-4 text-primary" />
                你的任務：
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{exercise.task}</p>
            </div>
          </div>

          {/* Hints */}
          <button
            onClick={() => setShowHints(!showHints)}
            className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <Lightbulb className="h-4 w-4" />
            {showHints ? "隱藏提示" : "需要提示？"}
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
              placeholder="在這裡寫你的提示詞……&#10;&#10;💡 小提示：試試用【角色】【目標】【背景】的格式來組織你的提示詞"
              rows={10}
              className="w-full rounded-xl border border-border bg-card p-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
            />
            <p className="mt-1 text-xs text-muted-foreground">
              {userAnswer.length > 0
                ? `已寫 ${userAnswer.length} 字${userAnswer.length < 30 ? "（建議至少 30 字）" : " ✓"}`
                : "試試把你的想法寫下來"}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setSubmitted(true);
                setShowSample(true);
                setCheckedItems(Array(exercise.checkpoints.length).fill(false));
              }}
              disabled={userAnswer.length < 10}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <CheckCircle className="h-4 w-4" />
              提交並對照
            </button>
            <button
              onClick={() => {
                setShowSample(!showSample);
                if (!showSample) setCheckedItems(Array(exercise.checkpoints.length).fill(false));
              }}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <BookOpen className="h-4 w-4" />
              {showSample ? "隱藏參考答案" : "直接看參考答案"}
            </button>
            <button
              onClick={resetState}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              重寫
            </button>
          </div>

          {/* Sample Answer & Self-Check */}
          {showSample && (
            <div className="mt-6 rounded-xl border border-primary/20 bg-teal-light p-6">
              <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                <MessageSquare className="h-5 w-5 text-primary" />
                參考答案
              </h4>
              <pre className="whitespace-pre-wrap rounded-lg bg-card p-4 text-sm leading-relaxed text-foreground">
                {exercise.sampleAnswer}
              </pre>

              {submitted && userAnswer.length >= 10 && (
                <div className="mt-4 rounded-lg bg-card p-4">
                  <p className="text-sm font-medium text-foreground">✅ 自我檢查（點擊打勾）：</p>
                  <ul className="mt-3 space-y-2">
                    {exercise.checkpoints.map((cp, i) => (
                      <li key={i}>
                        <button
                          onClick={() => toggleCheck(i)}
                          className="flex w-full items-start gap-2.5 text-left text-sm text-foreground transition-colors hover:text-primary"
                        >
                          <span className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border transition-all ${
                            checkedItems[i]
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card"
                          }`}>
                            {checkedItems[i] && <CheckCircle className="h-3 w-3" />}
                          </span>
                          {cp}
                        </button>
                      </li>
                    ))}
                  </ul>
                  {checkedItems.length > 0 && (
                    <p className="mt-3 text-xs text-muted-foreground">
                      已完成 {checkedItems.filter(Boolean).length} / {exercise.checkpoints.length} 項
                    </p>
                  )}
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
