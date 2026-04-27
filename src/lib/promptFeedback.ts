export interface FeedbackItem {
  label: string;
  passed: boolean;
  suggestion: string;
}

export interface FeedbackResult {
  score: number; // 0-100
  level: "beginner" | "intermediate" | "advanced";
  items: FeedbackItem[];
  overallTip: string;
}

export type FeedbackLocale = "zh" | "en";

const ROLE_KEYWORDS = ["角色", "role", "你是", "扮演", "擔任", "專家", "老師", "導師", "教練", "輔導"];
const GOAL_KEYWORDS = ["目標", "goal", "幫助", "學習", "理解", "掌握", "練習", "教", "引導", "learn", "improve"];
const CONTEXT_KEYWORDS = ["背景", "context", "歲", "年級", "程度", "興趣", "喜歡", "特點", "age", "level", "interest"];
const RULE_KEYWORDS = ["規則", "rule", "不要", "不可", "請", "每次", "一次只", "避免", "記得", "必須", "must", "should", "only"];
const INTERACTION_KEYWORDS = ["互動", "問答", "對話", "回答", "提問", "等待", "回應", "一步一步", "逐步", "question", "wait", "response", "step-by-step"];
const TONE_KEYWORDS = ["友善", "溫柔", "鼓勵", "有趣", "輕鬆", "耐心", "正面", "開心", "friendly", "encouraging", "patient", "positive", "supportive"];
const STRUCTURE_MARKERS = ["【", "】", "：", "1.", "2.", "3.", "-", "•", "\n\n", "[Role]", "[Goal]", "[Context]"];

const CATEGORY_ALIASES = {
  socratic: ["蘇格拉底式引導", "Socratic Guidance"],
  sen: ["SEN 支援", "SEN Support"],
  intentionalError: ["刻意犯錯法", "Intentional Errors"],
};

function containsAny(text: string, keywords: string[]): boolean {
  const lower = text.toLowerCase();
  return keywords.some((k) => lower.includes(k.toLowerCase()));
}

function countMatches(text: string, keywords: string[]): number {
  const lower = text.toLowerCase();
  return keywords.filter((k) => lower.includes(k.toLowerCase())).length;
}

function isOneOfCategory(category: string, aliases: string[]): boolean {
  return aliases.includes(category);
}

export function analyzePrompt(userAnswer: string, category: string, locale: FeedbackLocale = "zh"): FeedbackResult {
  const items: FeedbackItem[] = [];
  const isEn = locale === "en";

  const hasRole = containsAny(userAnswer, ROLE_KEYWORDS);
  items.push({
    label: isEn ? "Role Definition" : "角色設定 (Role)",
    passed: hasRole,
    suggestion: hasRole
      ? isEn
        ? "Good role setup. A clear role usually improves response quality."
        : "你有設定 AI 的角色，很好！具體的角色能讓 AI 回應更專業。"
      : isEn
        ? "Add a role (for example: 'You are a child English teacher') so AI knows its perspective."
        : "建議加入角色設定，例如「你是一位兒童英語老師」，讓 AI 知道要以甚麼身份回應。",
  });

  const hasGoal = containsAny(userAnswer, GOAL_KEYWORDS);
  const goalSpecific = userAnswer.match(/\d+/) !== null || containsAny(userAnswer, ["具體", "specific", "measurable"]);
  items.push({
    label: isEn ? "Goal Clarity" : "目標清晰度 (Goal)",
    passed: hasGoal && goalSpecific,
    suggestion: hasGoal && goalSpecific
      ? isEn
        ? "Great. Your goal is clear and measurable."
        : "目標具體且有可衡量的指標，非常好！"
      : hasGoal
        ? isEn
          ? "Goal exists, but make it measurable (for example: 'learn 5-8 words')."
          : "有提到目標，但建議加入具體數字或範圍，例如「學習 5-8 個詞彙」而非「學習詞彙」。"
        : isEn
          ? "Missing a clear goal. Specify exactly what learning outcome you want."
          : "缺少明確目標。請寫清楚你希望 AI 幫孩子達成甚麼，例如「理解分數的加減」。",
  });

  const hasContext = containsAny(userAnswer, CONTEXT_KEYWORDS);
  items.push({
    label: isEn ? "Context Information" : "背景資訊 (Context)",
    passed: hasContext,
    suggestion: hasContext
      ? isEn
        ? "Good context detail. This helps AI tailor the response."
        : "有提供孩子的背景資訊，AI 能根據這些資訊調整回應。"
      : isEn
        ? "Add context like age, level, and interests for better personalization."
        : "建議加入孩子的年齡、程度、興趣等背景資訊，讓 AI 的回應更貼切。",
  });

  const hasRules = containsAny(userAnswer, RULE_KEYWORDS);
  items.push({
    label: isEn ? "Interaction Rules" : "互動規則",
    passed: hasRules,
    suggestion: hasRules
      ? isEn
        ? "Good constraints. Rules make interaction more consistent and useful."
        : "有設定規則來約束 AI 的行為，這能讓互動更有效。"
      : isEn
        ? "Add rules like 'ask one question at a time' or 'do not give direct answers'."
        : "建議加入互動規則，例如「一次只問一個問題」、「不要直接給答案」，控制 AI 的回應方式。",
  });

  const hasInteraction = containsAny(userAnswer, INTERACTION_KEYWORDS);
  items.push({
    label: isEn ? "Interaction Design" : "互動設計",
    passed: hasInteraction,
    suggestion: hasInteraction
      ? isEn
        ? "Good interaction planning. This supports active learning."
        : "有考慮到互動方式，能讓學習過程更有效。"
      : isEn
        ? "Describe how AI should interact (for example Q&A, wait, follow up)."
        : "建議說明 AI 應如何與孩子互動，例如「用問答方式」、「等孩子回答後再繼續」。",
  });

  const hasTone = containsAny(userAnswer, TONE_KEYWORDS);
  items.push({
    label: isEn ? "Tone & Attitude" : "語氣與態度",
    passed: hasTone,
    suggestion: hasTone
      ? isEn
        ? "Tone is well set. Child-friendly tone improves engagement."
        : "有注意到語氣設定，孩子會感受到更友善的互動氛圍。"
      : isEn
        ? "Add tone guidance like 'friendly and encouraging'."
        : "可以加入語氣指引，例如「用友善和鼓勵的語氣」，讓 AI 的回應更適合孩子。",
  });

  const hasStructure = countMatches(userAnswer, STRUCTURE_MARKERS) >= 3;
  items.push({
    label: isEn ? "Structure & Format" : "結構與格式",
    passed: hasStructure,
    suggestion: hasStructure
      ? isEn
        ? "Structure is clear, which helps AI follow instructions accurately."
        : "提示詞結構清晰，AI 更容易理解你的要求。"
      : isEn
        ? "Use markers like [Role] [Goal] [Context] or numbered steps for clarity."
        : "建議用【角色】【目標】【背景】等標記來組織提示詞，或用編號列出要點，讓結構更清晰。",
  });

  if (isOneOfCategory(category, CATEGORY_ALIASES.socratic)) {
    const hasSocratic = containsAny(userAnswer, ["不直接", "不要給答案", "提問", "引導", "no direct answer", "ask", "question"]);
    items.push({
      label: isEn ? "Socratic Elements" : "蘇格拉底式要素",
      passed: hasSocratic,
      suggestion: hasSocratic
        ? isEn
          ? "Strong Socratic direction: guiding by questions instead of giving answers."
          : "有體現蘇格拉底式引導的精神——透過提問而非直接給答案。"
        : isEn
          ? "For Socratic mode, emphasize 'no direct answers' and guided questioning."
          : "蘇格拉底式引導的關鍵是「不直接給答案」，要讓 AI 透過提問引導孩子自行思考。",
    });
  }

  if (isOneOfCategory(category, CATEGORY_ALIASES.sen)) {
    const hasSEN = containsAny(userAnswer, ["ADHD", "特殊", "分心", "短", "遊戲", "sen", "attention", "short rounds", "gamified"]);
    items.push({
      label: isEn ? "SEN Adaptation" : "SEN 適應性設計",
      passed: hasSEN,
      suggestion: hasSEN
        ? isEn
          ? "Good SEN adaptation. The prompt reflects learner needs."
          : "有針對孩子的特殊需要調整設計，很好！"
        : isEn
          ? "Mention SEN needs explicitly and include targeted supports (short rounds, cues, gamification)."
          : "建議明確提到孩子的特殊需要，並設計相應的調整（如短回合、多感官、遊戲化）。",
    });
  }

  if (isOneOfCategory(category, CATEGORY_ALIASES.intentionalError)) {
    const hasError = containsAny(userAnswer, ["犯錯", "錯誤", "故意", "找出", "mistake", "error", "intentional", "detect"]);
    items.push({
      label: isEn ? "Intentional-Error Design" : "犯錯法要素",
      passed: hasError,
      suggestion: hasError
        ? isEn
          ? "Good intentional-error setup. This can train checking and critical thinking."
          : "有設定 AI 故意犯錯的機制，能有效訓練批判思考。"
        : isEn
          ? "Intentional-error prompts should specify what errors to make and when."
          : "刻意犯錯法的核心是讓 AI 故意犯錯，要明確告訴 AI 何時犯錯、犯甚麼類型的錯。",
    });
  }

  const passedCount = items.filter((item) => item.passed).length;
  const score = Math.round((passedCount / items.length) * 100);

  const level: FeedbackResult["level"] =
    score >= 80 ? "advanced" : score >= 50 ? "intermediate" : "beginner";

  const overallTipsZh: Record<FeedbackResult["level"], string> = {
    beginner: "💪 好的開始！建議先掌握 RGC 框架的三個基本元素（角色、目標、背景），然後逐步加入互動規則和語氣設定。多參考範例答案，觀察它們如何組織提示詞。",
    intermediate: "👍 不錯！你已經掌握了基本結構。下一步可以嘗試加入更多細節：具體的數字指標、互動規則、以及針對孩子特點的個人化設定。",
    advanced: "🌟 非常出色！你的提示詞結構完整、內容豐富。繼續保持！可以嘗試更進階的技巧，如結合多種框架或設計多階段的學習流程。",
  };

  const overallTipsEn: Record<FeedbackResult["level"], string> = {
    beginner: "💪 Great start. Focus on the RGC basics first (Role, Goal, Context), then add interaction rules and tone guidance.",
    intermediate: "👍 Nice progress. Next, increase specificity with measurable goals, clearer constraints, and learner-specific personalization.",
    advanced: "🌟 Excellent work. Your prompt is clear and well-structured. You can now try multi-stage flows or mixed frameworks.",
  };

  return {
    score,
    level,
    items,
    overallTip: isEn ? overallTipsEn[level] : overallTipsZh[level],
  };
}
