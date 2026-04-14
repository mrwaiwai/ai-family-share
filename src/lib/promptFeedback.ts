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

const ROLE_KEYWORDS = ["角色", "role", "你是", "扮演", "擔任", "專家", "老師", "導師", "教練", "輔導"];
const GOAL_KEYWORDS = ["目標", "goal", "幫助", "學習", "理解", "掌握", "練習", "教", "引導"];
const CONTEXT_KEYWORDS = ["背景", "context", "歲", "年級", "程度", "興趣", "喜歡", "特點"];
const RULE_KEYWORDS = ["規則", "rule", "不要", "不可", "請", "每次", "一次只", "避免", "記得", "必須"];
const INTERACTION_KEYWORDS = ["互動", "問答", "對話", "回答", "提問", "等待", "回應", "一步一步", "逐步"];
const TONE_KEYWORDS = ["友善", "溫柔", "鼓勵", "有趣", "輕鬆", "耐心", "正面", "開心"];
const STRUCTURE_MARKERS = ["【", "】", "：", "1.", "2.", "3.", "-", "•", "\n\n"];

function containsAny(text: string, keywords: string[]): boolean {
  return keywords.some((k) => text.includes(k));
}

function countMatches(text: string, keywords: string[]): number {
  return keywords.filter((k) => text.includes(k)).length;
}

export function analyzePrompt(userAnswer: string, category: string): FeedbackResult {
  const text = userAnswer.toLowerCase();
  const items: FeedbackItem[] = [];

  // 1. Role
  const hasRole = containsAny(userAnswer, ROLE_KEYWORDS);
  items.push({
    label: "角色設定 (Role)",
    passed: hasRole,
    suggestion: hasRole
      ? "你有設定 AI 的角色，很好！具體的角色能讓 AI 回應更專業。"
      : "建議加入角色設定，例如「你是一位兒童英語老師」，讓 AI 知道要以甚麼身份回應。",
  });

  // 2. Goal
  const hasGoal = containsAny(userAnswer, GOAL_KEYWORDS);
  const goalSpecific = userAnswer.match(/\d+/) !== null || userAnswer.includes("具體");
  items.push({
    label: "目標清晰度 (Goal)",
    passed: hasGoal && goalSpecific,
    suggestion: hasGoal && goalSpecific
      ? "目標具體且有可衡量的指標，非常好！"
      : hasGoal
      ? "有提到目標，但建議加入具體數字或範圍，例如「學習 5-8 個詞彙」而非「學習詞彙」。"
      : "缺少明確目標。請寫清楚你希望 AI 幫孩子達成甚麼，例如「理解分數的加減」。",
  });

  // 3. Context
  const hasContext = containsAny(userAnswer, CONTEXT_KEYWORDS);
  items.push({
    label: "背景資訊 (Context)",
    passed: hasContext,
    suggestion: hasContext
      ? "有提供孩子的背景資訊，AI 能根據這些資訊調整回應。"
      : "建議加入孩子的年齡、程度、興趣等背景資訊，讓 AI 的回應更貼切。",
  });

  // 4. Rules / constraints
  const hasRules = containsAny(userAnswer, RULE_KEYWORDS);
  items.push({
    label: "互動規則",
    passed: hasRules,
    suggestion: hasRules
      ? "有設定規則來約束 AI 的行為，這能讓互動更有效。"
      : "建議加入互動規則，例如「一次只問一個問題」、「不要直接給答案」，控制 AI 的回應方式。",
  });

  // 5. Interaction design
  const hasInteraction = containsAny(userAnswer, INTERACTION_KEYWORDS);
  items.push({
    label: "互動設計",
    passed: hasInteraction,
    suggestion: hasInteraction
      ? "有考慮到互動方式，能讓學習過程更有效。"
      : "建議說明 AI 應如何與孩子互動，例如「用問答方式」、「等孩子回答後再繼續」。",
  });

  // 6. Tone
  const hasTone = containsAny(userAnswer, TONE_KEYWORDS);
  items.push({
    label: "語氣與態度",
    passed: hasTone,
    suggestion: hasTone
      ? "有注意到語氣設定，孩子會感受到更友善的互動氛圍。"
      : "可以加入語氣指引，例如「用友善和鼓勵的語氣」，讓 AI 的回應更適合孩子。",
  });

  // 7. Structure
  const hasStructure = countMatches(userAnswer, STRUCTURE_MARKERS) >= 3;
  items.push({
    label: "結構與格式",
    passed: hasStructure,
    suggestion: hasStructure
      ? "提示詞結構清晰，AI 更容易理解你的要求。"
      : "建議用【角色】【目標】【背景】等標記來組織提示詞，或用編號列出要點，讓結構更清晰。",
  });

  // Category-specific checks
  if (category === "蘇格拉底式引導") {
    const hasSocratic = userAnswer.includes("不直接") || userAnswer.includes("不要給答案") || userAnswer.includes("提問") || userAnswer.includes("引導");
    items.push({
      label: "蘇格拉底式要素",
      passed: hasSocratic,
      suggestion: hasSocratic
        ? "有體現蘇格拉底式引導的精神——透過提問而非直接給答案。"
        : "蘇格拉底式引導的關鍵是「不直接給答案」，要讓 AI 透過提問引導孩子自行思考。",
    });
  }

  if (category === "SEN 支援") {
    const hasSEN = userAnswer.includes("ADHD") || userAnswer.includes("特殊") || userAnswer.includes("分心") || userAnswer.includes("短") || userAnswer.includes("遊戲");
    items.push({
      label: "SEN 適應性設計",
      passed: hasSEN,
      suggestion: hasSEN
        ? "有針對孩子的特殊需要調整設計，很好！"
        : "建議明確提到孩子的特殊需要，並設計相應的調整（如短回合、多感官、遊戲化）。",
    });
  }

  if (category === "刻意犯錯法") {
    const hasError = userAnswer.includes("犯錯") || userAnswer.includes("錯誤") || userAnswer.includes("故意") || userAnswer.includes("找出");
    items.push({
      label: "犯錯法要素",
      passed: hasError,
      suggestion: hasError
        ? "有設定 AI 故意犯錯的機制，能有效訓練批判思考。"
        : "刻意犯錯法的核心是讓 AI 故意犯錯，要明確告訴 AI 何時犯錯、犯甚麼類型的錯。",
    });
  }

  // Score
  const passedCount = items.filter((i) => i.passed).length;
  const score = Math.round((passedCount / items.length) * 100);

  const level: FeedbackResult["level"] =
    score >= 80 ? "advanced" : score >= 50 ? "intermediate" : "beginner";

  const overallTips: Record<string, string> = {
    beginner: "💪 好的開始！建議先掌握 RGC 框架的三個基本元素（角色、目標、背景），然後逐步加入互動規則和語氣設定。多參考範例答案，觀察它們如何組織提示詞。",
    intermediate: "👍 不錯！你已經掌握了基本結構。下一步可以嘗試加入更多細節：具體的數字指標、互動規則、以及針對孩子特點的個人化設定。",
    advanced: "🌟 非常出色！你的提示詞結構完整、內容豐富。繼續保持！可以嘗試更進階的技巧，如結合多種框架或設計多階段的學習流程。",
  };

  return { score, level, items, overallTip: overallTips[level] };
}
