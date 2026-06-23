import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Download,
  HeartHandshake,
  Lightbulb,
  MessageCircleHeart,
  PenLine,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type LocalizedText = { zh: string; en: string };

type Exercise = {
  original: LocalizedText;
  situation: LocalizedText;
  examples: LocalizedText[];
};

const exercises: Exercise[] = [
  {
    original: { zh: "點解又錯？", en: "Why are you wrong again?" },
    situation: { zh: "做功課或練習時出錯", en: "Making a mistake during homework or practice" },
    examples: [
      { zh: "你覺得頭先邊一步最難？", en: "Which step felt most difficult just now?" },
      { zh: "你想我同你一齊睇返邊一部分？", en: "Which part would you like us to look at together?" },
    ],
  },
  {
    original: { zh: "快啲啦！", en: "Hurry up!" },
    situation: { zh: "趕時間準備出門或完成事情", en: "Getting ready to leave or finish a task" },
    examples: [
      { zh: "你想先做邊一部分？", en: "Which part would you like to do first?" },
      { zh: "要分成幾小步先容易開始？", en: "How could we split this into smaller steps?" },
    ],
  },
  {
    original: { zh: "你係咪冇聽書？", en: "Weren't you listening?" },
    situation: { zh: "聽完指示後跟不上", en: "Finding it hard to follow an instruction" },
    examples: [
      { zh: "你記得頭先聽到咩？", en: "What do you remember hearing?" },
      { zh: "你想我用邊種方法再講一次？", en: "How would you like me to explain it again?" },
    ],
  },
  {
    original: { zh: "咁簡單都唔識？", en: "This is so easy. How don't you know it?" },
    situation: { zh: "遇到一題覺得應該懂得的問題", en: "Facing a question that seems like it should be familiar" },
    examples: [
      { zh: "你覺得邊個部分令你卡住？", en: "Which part is making you feel stuck?" },
      { zh: "你想由已經知道的地方開始嗎？", en: "Would you like to start with the part you already know?" },
    ],
  },
  {
    original: { zh: "你又唔專心！", en: "You're not focusing again!" },
    situation: { zh: "做功課或活動時分心", en: "Getting distracted during homework or an activity" },
    examples: [
      { zh: "你而家最難專心嘅係咩？", en: "What is making it hardest to focus right now?" },
      { zh: "你覺得要咩幫手先可以再開始？", en: "What support would help you get started again?" },
    ],
  },
  {
    original: { zh: "唔好再喊啦！", en: "Stop crying." },
    situation: { zh: "孩子哭泣或情緒難受", en: "The child is crying or feeling upset" },
    examples: [
      { zh: "呢件事令你有咩感覺？", en: "How is this making you feel?" },
      { zh: "你想我坐喺你身邊，定係想要少少時間？", en: "Would you like me to sit with you, or would you like some space?" },
    ],
  },
  {
    original: { zh: "我講咗幾多次？", en: "How many times have I told you?" },
    situation: { zh: "反覆提醒同一件事情", en: "Repeatedly reminding the same thing" },
    examples: [
      { zh: "你覺得邊部分最難記住？", en: "Which part is the hardest to remember?" },
      { zh: "我哋可以點樣互相提醒？", en: "How could we remind each other?" },
    ],
  },
  {
    original: { zh: "你睇下人哋幾叻！", en: "Look how much better everyone else is." },
    situation: { zh: "把孩子和別人比較", en: "Comparing the child with others" },
    examples: [
      { zh: "你覺得自己今次比上次進步咗邊一點？", en: "What feels clearer or better than last time?" },
      { zh: "你想為自己訂一個細細嘅目標嗎？", en: "Would you like to set a small goal for yourself?" },
    ],
  },
  {
    original: { zh: "唔明就算啦！", en: "Forget it if you don't understand." },
    situation: { zh: "孩子不明白而想放棄", en: "The child does not understand and wants to give up" },
    examples: [
      { zh: "邊度令你覺得最唔明？", en: "Which part feels most unclear?" },
      { zh: "你想我用另一個方法講一次嗎？", en: "Would you like me to explain it in a different way?" },
    ],
  },
  {
    original: { zh: "你仲未執書包？", en: "You still haven't packed your school bag?" },
    situation: { zh: "出門前收拾書包", en: "Packing a school bag before leaving" },
    examples: [
      { zh: "你覺得聽朝要用嘅嘢有邊幾樣？", en: "What things do you think you will need tomorrow?" },
      { zh: "你想由邊一樣開始執？", en: "Which item would you like to pack first?" },
    ],
  },
  {
    original: { zh: "你自己搞掂啦！", en: "Deal with it yourself." },
    situation: { zh: "孩子遇到困難要求幫忙", en: "The child asks for help with a difficulty" },
    examples: [
      { zh: "你而家已經做到邊一步？", en: "Which step have you managed already?" },
      { zh: "你想要一個提示，定係想我陪你試一次？", en: "Would you like a hint, or would you like us to try it together once?" },
    ],
  },
  {
    original: { zh: "又玩電話？", en: "On your phone again?" },
    situation: { zh: "使用電話時間太長", en: "Spending a long time on the phone" },
    examples: [{ zh: "你而家睇緊咩？仲想用幾耐？", en: "What are you watching, and how much longer do you need?" }, { zh: "我哋點樣安排休息時間會舒服啲？", en: "How could we plan a break that feels fair?" }],
  },
  {
    original: { zh: "唔准揀飲擇食！", en: "Stop being picky with food." },
    situation: { zh: "吃飯時拒絕食物", en: "Refusing food at mealtime" },
    examples: [{ zh: "你覺得今日邊樣食物最難接受？", en: "Which food feels hardest to try today?" }, { zh: "你想試一小口，定係揀另一樣配菜？", en: "Would you like to try one small bite or choose another side dish?" }],
  },
  {
    original: { zh: "做咩咁懶？", en: "Why are you being so lazy?" },
    situation: { zh: "開始做功課有困難", en: "Having trouble starting homework" },
    examples: [{ zh: "你覺得開始最難嘅係邊一步？", en: "Which part of getting started feels hardest?" }, { zh: "我可以點樣幫你開個頭？", en: "How can I help you make a start?" }],
  },
  {
    original: { zh: "你再咁樣我就嬲！", en: "If you keep doing that, I'll get angry!" },
    situation: { zh: "親子衝突時情緒升高", en: "Tension rising during a parent-child conflict" },
    examples: [{ zh: "我見到我哋都開始嬲，你想先停一停嗎？", en: "I notice we are both getting upset. Would you like to pause first?" }, { zh: "你想我先聽你講，定係一齊諗方法？", en: "Would you like me to listen first, or think of a solution together?" }],
  },
  {
    original: { zh: "唔好亂咁掉嘢！", en: "Don't throw things around!" },
    situation: { zh: "孩子生氣時亂掉物件", en: "Throwing objects when angry" },
    examples: [{ zh: "你好嬲，我想知道發生咩事。", en: "You seem very angry. I want to know what happened." }, { zh: "你想用咩方法令自己安全咁冷靜落嚟？", en: "What would help you calm down safely?" }],
  },
  {
    original: { zh: "講對唔住啦！", en: "Say sorry now!" },
    situation: { zh: "孩子和別人衝突後", en: "After the child has a conflict with someone" },
    examples: [{ zh: "你覺得頭先發生咩事？", en: "What do you think happened just now?" }, { zh: "你想點樣令對方知道你嘅心意？", en: "How would you like the other person to understand how you feel?" }],
  },
  {
    original: { zh: "你一定要贏！", en: "You have to win!" },
    situation: { zh: "比賽或競爭前", en: "Before a competition or contest" },
    examples: [{ zh: "你今日最想做好邊一部分？", en: "Which part would you most like to do well today?" }, { zh: "無論結果點樣，你想學到咩？", en: "Whatever the result, what would you like to learn?" }],
  },
  {
    original: { zh: "唔好成日問我！", en: "Stop asking me all the time!" },
    situation: { zh: "孩子不停求助或發問", en: "The child repeatedly asks for help or questions" },
    examples: [{ zh: "你而家最想我幫你邊一樣？", en: "What would you most like help with right now?" }, { zh: "你想先講講自己諗過咩方法嗎？", en: "Would you like to tell me what you have tried already?" }],
  },
  {
    original: { zh: "你又整亂晒！", en: "You made a mess again!" },
    situation: { zh: "收拾房間或物件", en: "Tidying a room or belongings" },
    examples: [{ zh: "你覺得而家要由邊度開始收拾？", en: "Where do you think we could start tidying?" }, { zh: "我哋可以點樣分工？", en: "How could we divide the jobs?" }],
  },
  {
    original: { zh: "點解你咁慢？", en: "Why are you so slow?" },
    situation: { zh: "完成日常步驟較慢", en: "Moving slowly through a daily routine" },
    examples: [{ zh: "你而家卡住喺邊一個步驟？", en: "Which step are you getting stuck on?" }, { zh: "你想我等一陣，定係一齊諗個快啲嘅方法？", en: "Would you like me to wait, or find a quicker way together?" }],
  },
  {
    original: { zh: "你唔可以怕！", en: "You can't be scared." },
    situation: { zh: "孩子面對害怕的新事情", en: "Facing something new that feels scary" },
    examples: [{ zh: "你擔心嘅係咩？", en: "What are you worried about?" }, { zh: "我可以點樣陪你試第一小步？", en: "How can I support you with the first small step?" }],
  },
  {
    original: { zh: "咁樣畫好醜！", en: "That drawing is ugly." },
    situation: { zh: "孩子創作或畫畫", en: "Making art or drawing" },
    examples: [{ zh: "你想同我講下你畫緊咩嗎？", en: "Would you like to tell me about what you are drawing?" }, { zh: "你最滿意邊一部分？", en: "Which part are you happiest with?" }],
  },
  {
    original: { zh: "唔好再拖拖拉拉！", en: "Stop dragging your feet!" },
    situation: { zh: "準備出門或開始任務", en: "Getting ready to leave or begin a task" },
    examples: [{ zh: "你覺得要幾多分鐘先可以準備好？", en: "How many minutes do you think you need to get ready?" }, { zh: "我哋想用咩方法提醒自己開始？", en: "What reminder would help us get started?" }],
  },
  {
    original: { zh: "唔准再同佢玩！", en: "You're not allowed to play with them anymore." },
    situation: { zh: "孩子和朋友相處衝突", en: "A conflict with a friend" },
    examples: [{ zh: "你同佢相處時，發生咗咩令你好唔舒服？", en: "What happened with your friend that made you feel uncomfortable?" }, { zh: "你想我哋一齊諗咩界線會安全啲？", en: "What boundary could we work out together that feels safer?" }],
  },
  {
    original: { zh: "又唔記得帶嘢？", en: "You forgot your things again?" },
    situation: { zh: "出門時忘記物品", en: "Forgetting items when leaving home" },
    examples: [{ zh: "你覺得下次出門前可以點樣檢查？", en: "How could you check before leaving next time?" }, { zh: "要唔要一齊整一張小清單？", en: "Would you like to make a small checklist together?" }],
  },
  {
    original: { zh: "考得咁差仲笑？", en: "Why are you smiling after such a poor score?" },
    situation: { zh: "收到考試或測驗成績", en: "Receiving a test or exam result" },
    examples: [{ zh: "你點樣睇今次份卷？", en: "How do you feel about this paper?" }, { zh: "你想先睇邊一題，搵返下一次可以試嘅方法？", en: "Which question would you like to review first to find something to try next time?" }],
  },
  {
    original: { zh: "起身啦，仲瞓！", en: "Get up already. You're still sleeping!" },
    situation: { zh: "早上起床困難", en: "Having difficulty getting up in the morning" },
    examples: [{ zh: "你覺得朝早最難離開張床嘅係咩？", en: "What makes it hardest to leave bed in the morning?" }, { zh: "今晚我哋可以準備啲咩令聽朝容易啲？", en: "What could we prepare tonight to make tomorrow morning easier?" }],
  },
];

const USED_PROMPTS_KEY = "open-response-used-prompts";
const COACH_ENDPOINT = import.meta.env.VITE_OPEN_RESPONSE_COACH_URL || "https://open-response-parent-practice.vercel.app/api/coach";

type CoachFeedback = {
  title: string;
  alignment: string;
  strengths: string;
  nextStep: string;
  suggestedResponse: string;
};

const pickExercises = () => {
  if (typeof window === "undefined") return exercises.slice(0, 5);

  const used = new Set<string>(JSON.parse(window.localStorage.getItem(USED_PROMPTS_KEY) || "[]"));
  const unused = exercises.filter((exercise) => !used.has(exercise.original.zh));
  const pool = unused.length >= 5 ? unused : exercises;
  const selected = [...pool].sort(() => Math.random() - 0.5).slice(0, 5);
  const nextUsed = pool === unused ? [...used, ...selected.map((exercise) => exercise.original.zh)] : selected.map((exercise) => exercise.original.zh);

  window.localStorage.setItem(USED_PROMPTS_KEY, JSON.stringify(nextUsed));
  return selected;
};

const hasAny = (value: string, phrases: string[]) => phrases.some((phrase) => value.toLowerCase().includes(phrase));

const getFeedback = (value: string, language: "zh" | "en") => {
  const normalized = value.trim();
  const isQuestion = normalized.includes("？") || normalized.includes("?") || hasAny(normalized, ["你覺得", "你想", "點樣", "咩", "what", "how", "would you"]);
  const isAffirming = hasAny(normalized, ["我見到", "欣賞", "你有", "我知道", "i notice", "i can see", "you tried", "i appreciate"]);
  const isDirective = hasAny(normalized, ["快啲", "唔准", "一定要", "應該", "立即", "hurry", "must", "should", "stop"]);

  if (isDirective) {
    return language === "zh"
      ? { title: "可以再留多一點空間。", text: "試下將指令改成提問，或者先講一句你觀察到的努力。", tone: "rose" }
      : { title: "Leave a little more space.", text: "Try turning the direction into a question, or start by naming an effort you noticed.", tone: "rose" };
  }
  if (isAffirming && isQuestion) {
    return language === "zh"
      ? { title: "好溫柔的開場。", text: "你先建立安全感，再邀請孩子表達想法，正正是開放式回應的重點。", tone: "mint" }
      : { title: "A warm opening.", text: "You built safety first, then invited the child to share. That is the heart of an open response.", tone: "mint" };
  }
  if (isQuestion) {
    return language === "zh"
      ? { title: "好好呀！", text: "呢句能夠邀請孩子表達想法。試下再加一句肯定，會更有支持感。", tone: "sky" }
      : { title: "A strong start.", text: "This invites the child to share their thinking. Add a small affirmation for even more support.", tone: "sky" };
  }
  return language === "zh"
    ? { title: "一個好開始。", text: "試下加上「你覺得……？」或「你想……？」讓孩子有機會說出自己的想法。", tone: "yellow" }
    : { title: "A good beginning.", text: "Try adding “What do you think...?” or “Would you like...?” to make space for the child's own thinking.", tone: "yellow" };
};

const getCoachFeedback = async (exercise: Exercise, response: string, language: "zh" | "en"): Promise<CoachFeedback> => {
  const result = await fetch(COACH_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      original: exercise.original.zh,
      situation: exercise.situation.zh,
      response,
      language,
    }),
  });

  if (!result.ok) throw new Error("Coach service unavailable");

  const feedback = await result.json();
  if (!feedback?.title || !feedback?.alignment || !feedback?.strengths || !feedback?.nextStep || !feedback?.suggestedResponse) {
    throw new Error("Coach service returned incomplete feedback");
  }
  return feedback as CoachFeedback;
};

const OpenResponsePracticePage = () => {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [screen, setScreen] = useState<"intro" | "practice" | "complete">("intro");
  const [selectedExercises, setSelectedExercises] = useState<Exercise[]>(() => exercises.slice(0, 5));
  const [position, setPosition] = useState(0);
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lastResponse, setLastResponse] = useState("");
  const [pledgeFrom, setPledgeFrom] = useState("");
  const [pledgeTo, setPledgeTo] = useState("");
  const [coachFeedback, setCoachFeedback] = useState<CoachFeedback | null>(null);
  const [coachStatus, setCoachStatus] = useState<"idle" | "loading" | "ready" | "fallback">("idle");

  const currentExercise = selectedExercises[position];
  const feedback = getFeedback(response, language);

  const startPractice = () => {
    const nextExercises = pickExercises();
    setSelectedExercises(nextExercises);
    setPosition(0);
    setResponse("");
    setSubmitted(false);
    setLastResponse("");
    setCoachFeedback(null);
    setCoachStatus("idle");
    setScreen("practice");
  };

  const submitResponse = async () => {
    if (!response.trim()) return;
    const completedResponse = response.trim();
    setSubmitted(true);
    setLastResponse(completedResponse);
    setCoachFeedback(null);
    setCoachStatus("loading");

    try {
      const personalisedFeedback = await getCoachFeedback(currentExercise, completedResponse, language);
      setCoachFeedback(personalisedFeedback);
      setCoachStatus("ready");
    } catch {
      setCoachStatus("fallback");
    }
  };

  const nextExercise = () => {
    if (position === selectedExercises.length - 1) {
      setPledgeFrom(currentExercise.original[language]);
      setPledgeTo(lastResponse || response);
      setScreen("complete");
      return;
    }
    setPosition((current) => current + 1);
    setResponse("");
    setSubmitted(false);
    setCoachFeedback(null);
    setCoachStatus("idle");
  };

  const downloadPledge = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = 1600;
    canvas.height = 1200;
    context.fillStyle = "#f7feff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffcad8";
    context.fillRect(0, 0, canvas.width, 30);
    context.fillStyle = "#bfead0";
    context.fillRect(0, canvas.height - 30, canvas.width, 30);
    context.strokeStyle = "#62b8ca";
    context.lineWidth = 7;
    context.strokeRect(52, 52, canvas.width - 104, canvas.height - 104);
    context.fillStyle = "#4ea8bc";
    context.font = "700 42px sans-serif";
    context.fillText("iSE Parent AI Learning Guide", 110, 150);
    context.fillStyle = "#24364c";
    context.font = "700 74px sans-serif";
    context.fillText(isEn ? "My Open-Response Pledge" : "我的一句話承諾", 110, 270);
    context.fillStyle = "#60778c";
    context.font = "400 38px sans-serif";
    context.fillText(isEn ? "I will try to turn:" : "我會試著把：", 110, 390);
    drawWrappedText(context, pledgeFrom || "________", 110, 475, 1380, 62, "700 54px sans-serif", "#24364c");
    context.fillStyle = "#60778c";
    context.font = "400 38px sans-serif";
    context.fillText(isEn ? "Into:" : "改成：", 110, 690);
    drawWrappedText(context, pledgeTo || "________", 110, 775, 1380, 62, "700 54px sans-serif", "#24364c");
    context.strokeStyle = "#c7dbe4";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(110, 1000);
    context.lineTo(1490, 1000);
    context.stroke();
    context.fillStyle = "#4ea8bc";
    context.font = "700 38px sans-serif";
    context.fillText(isEn ? "Changing one sentence can change a conversation." : "改變一句話，親子關係可以好唔同。", 110, 1080);

    const link = document.createElement("a");
    link.download = isEn ? "open-response-pledge.png" : "我的一句話承諾.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  if (screen === "intro") {
    return (
      <main className="bg-[radial-gradient(circle_at_10%_8%,rgba(255,197,213,0.38),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(191,234,208,0.42),transparent_22%),linear-gradient(180deg,rgba(247,254,255,0.94),rgba(255,246,238,0.92))] p-5 md:p-7">
        <section className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-soft bg-white/90 shadow-soft">
          <div className="grid gap-8 p-7 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-soft bg-soft-sky px-4 py-2 text-sm font-extrabold text-ink shadow-card">
                <MessageCircleHeart className="h-4 w-4 text-secondary" />
                {isEn ? "Parent Practice" : "給家長的小練習"}
              </div>
              <p className="mt-8 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-secondary">{isEn ? "From telling to asking" : "由「教」改為「問」"}</p>
              <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">
                {isEn ? <>One-Sentence<br />Transformation</> : <>一句話<br />改造練習</>}
              </h1>
              <p className="mt-5 max-w-xl text-lg font-semibold leading-relaxed text-soft-muted">
                {isEn
                  ? "A small practice for turning everyday parent phrases into open responses that invite children to think and speak."
                  : "改變一句話，親子關係可以好唔同。練習將日常說話改成能邀請孩子思考和表達的開放式回應。"}
              </p>
              <button onClick={startPractice} className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-base font-extrabold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5">
                {isEn ? "Start 5 practice prompts" : "開始 5 句練習"}
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="rounded-[28px] border border-soft bg-[linear-gradient(180deg,rgba(255,245,209,0.92),rgba(238,250,254,0.95))] p-6 shadow-card">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-soft-pink text-primary shadow-card"><HeartHandshake className="h-7 w-7" /></div>
              <p className="mt-6 font-display text-2xl font-extrabold text-ink">{isEn ? "A parent is not an answer machine." : "家長不是答案機。"}</p>
              <p className="mt-3 text-base font-semibold leading-relaxed text-ink/75">
                {isEn ? "Leave a little room for children to share feelings, reasons, and their own next step." : "留一個位置，讓孩子講感受、理由和自己的方法。"}
              </p>
              <div className="mt-6 rounded-[22px] border border-soft bg-white/85 p-4">
                <p className="text-sm font-extrabold text-secondary">{isEn ? "Today takes about 5 minutes" : "今日只需約 5 分鐘"}</p>
                <p className="mt-1 text-sm leading-relaxed text-soft-muted">{isEn ? "There are no perfect answers. Try one sentence at a time." : "沒有完美答案，只要逐句練習。"}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (screen === "complete") {
    return (
      <main className="bg-[radial-gradient(circle_at_10%_8%,rgba(255,197,213,0.38),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(191,234,208,0.42),transparent_22%),linear-gradient(180deg,rgba(247,254,255,0.94),rgba(255,246,238,0.92))] p-5 md:p-7">
        <section className="mx-auto max-w-3xl rounded-[32px] border border-soft bg-white/92 p-7 shadow-soft md:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soft-mint text-secondary shadow-card"><CheckCircle2 className="h-8 w-8" /></div>
          <p className="mt-6 font-display text-sm font-extrabold uppercase tracking-[0.16em] text-secondary">{isEn ? "Practice complete" : "完成小練習"}</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">{isEn ? <>You transformed<br />5 sentences.</> : <>你已經完成<br />5 句改造！</>}</h1>
          <p className="mt-5 max-w-2xl text-lg font-semibold leading-relaxed text-soft-muted">
            {isEn ? "Try changing just one sentence tonight. The goal is not to be a perfect parent, but to give your child more room to express themselves." : "今晚回家，試試只改變一句話。不是要做完美家長，而是多給孩子一個願意表達的空間。"}
          </p>

          <div className="mt-8 rounded-[28px] border border-soft bg-[linear-gradient(180deg,rgba(238,250,254,0.96),rgba(255,255,255,0.96))] p-5 shadow-card md:p-7">
            <div className="flex items-center gap-3"><PenLine className="h-5 w-5 text-primary" /><h2 className="font-display text-2xl font-extrabold text-ink">{isEn ? "My one-sentence pledge" : "我的一句話承諾"}</h2></div>
            <label className="mt-5 block text-sm font-extrabold text-ink">{isEn ? "I will try to turn:" : "我會試著把："}</label>
            <input value={pledgeFrom} onChange={(event) => setPledgeFrom(event.target.value)} className="mt-2 w-full rounded-2xl border border-soft bg-white px-4 py-3 text-base font-semibold text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
            <label className="mt-5 block text-sm font-extrabold text-ink">{isEn ? "Into:" : "改成："}</label>
            <textarea value={pledgeTo} onChange={(event) => setPledgeTo(event.target.value)} maxLength={160} className="mt-2 min-h-24 w-full resize-none rounded-2xl border border-soft bg-white px-4 py-3 text-base font-semibold text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
            <button onClick={downloadPledge} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3.5 font-extrabold text-secondary-foreground shadow-card transition-transform hover:-translate-y-0.5"><Download className="h-5 w-5" />{isEn ? "Download my pledge" : "下載我的一句話承諾"}</button>
          </div>

          <button onClick={startPractice} className="mt-7 inline-flex items-center gap-2 rounded-full border border-soft bg-white px-5 py-3 font-extrabold text-ink shadow-card transition-colors hover:bg-muted"><RotateCcw className="h-4 w-4" />{isEn ? "Practise again" : "再練習一次"}</button>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[linear-gradient(180deg,rgba(247,254,255,0.94),rgba(255,246,238,0.92))] p-5 md:p-7">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-[30px] border border-soft bg-white/94 p-6 shadow-soft md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-extrabold tracking-[0.12em] text-secondary">{isEn ? "ONE-SENTENCE TRANSFORMATION" : "一句話改造練習"}</p>
              <h1 className="mt-1 font-display text-2xl font-extrabold text-ink">{isEn ? "Ask slowly. Listen slowly." : "慢慢問，慢慢聽。"}</h1>
            </div>
            <span className="rounded-full bg-soft-sky px-4 py-2 text-sm font-extrabold text-secondary">{position + 1} / {selectedExercises.length}</span>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${((position + 1) / selectedExercises.length) * 100}%` }} /></div>

          <div className="mt-8 rounded-[26px] border border-soft bg-[linear-gradient(180deg,rgba(255,235,240,0.78),rgba(255,255,255,0.96))] p-5 md:p-7">
            <p className="text-sm font-extrabold text-primary">{isEn ? "Everyday situation" : "日常情境"}</p>
            <p className="mt-2 text-base font-semibold text-soft-muted">{currentExercise.situation[language]}</p>
            <p className="mt-5 font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">「{currentExercise.original[language]}」</p>
          </div>

          <div className="mt-7">
            <label htmlFor="open-response" className="font-display text-xl font-extrabold text-ink">{isEn ? "Rewrite it as an open response" : "請你改成一句開放式回應"}</label>
            {!submitted && (
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { zh: "用「你覺得……？」開始", en: "Start with “What do you think...?”", value: isEn ? "What do you think is the hardest part?" : "你覺得邊一步最難？" },
                  { zh: "先肯定孩子的努力", en: "Acknowledge effort first", value: isEn ? "I can see you have been trying. What would help now?" : "我見到你有嘗試。你覺得而家需要咩幫手？" },
                  { zh: "給孩子一個選擇", en: "Offer a choice", value: isEn ? "Would you like a hint, or would you like us to try together?" : "你想要一個提示，定係想我陪你試一次？" },
                ].map((tip) => (
                  <button key={tip.zh} type="button" onClick={() => setResponse(tip.value)} className="rounded-full border border-soft bg-soft-yellow px-3 py-2 text-xs font-extrabold text-ink shadow-card transition-colors hover:bg-white">
                    {tip[language]}
                  </button>
                ))}
              </div>
            )}
            <textarea id="open-response" disabled={submitted} value={response} onChange={(event) => setResponse(event.target.value)} maxLength={160} placeholder={isEn ? "For example: Which step feels difficult to you?" : "例如：你覺得邊一步令你覺得困難？"} className="mt-3 min-h-32 w-full resize-none rounded-[22px] border border-soft bg-white px-5 py-4 text-base font-semibold leading-relaxed text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:bg-muted" />
            <div className="mt-2 flex justify-between text-xs font-semibold text-soft-muted"><span>{isEn ? "Use questions, acknowledgement, or choice." : "可以用提問、肯定或給予選擇。"}</span><span>{response.length}/160</span></div>
          </div>

          {!submitted ? (
            <button onClick={submitResponse} disabled={!response.trim()} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 font-extrabold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45"><Sparkles className="h-5 w-5" />{isEn ? "See my practice feedback" : "看看我的練習提示"}</button>
          ) : (
            <div className="mt-6 space-y-5">
              <div className={`rounded-[22px] border p-5 ${feedback.tone === "rose" ? "border-[#f5b8c7] bg-[#fff0f4]" : feedback.tone === "mint" ? "border-[#b8e5ca] bg-[#effcf4]" : feedback.tone === "sky" ? "border-[#b7e4ee] bg-[#effbfe]" : "border-[#f0d979] bg-[#fff9df]"}`}>
                <div className="flex gap-3"><Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-secondary" /><div><p className="text-xs font-extrabold uppercase tracking-[0.12em] text-secondary">{isEn ? "Practice check-in" : "本地練習提示"}</p><p className="mt-1 font-display text-lg font-extrabold text-ink">{feedback.title}</p><p className="mt-1 text-sm font-semibold leading-relaxed text-ink/75">{feedback.text}</p></div></div>
              </div>

              {coachStatus === "loading" && <div className="rounded-[22px] border border-soft bg-white p-5 text-sm font-semibold text-soft-muted">{isEn ? "Preparing a personalised gentle-response reminder..." : "正在準備個人化的溫柔回應小提醒..."}</div>}

              {coachFeedback && (
                <div className="rounded-[22px] border border-[#b7e4ee] bg-[#effbfe] p-5 shadow-card">
                  <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-secondary">{isEn ? "Gentle-response reminder" : "溫柔回應小提醒"}</p>
                  <p className="mt-2 font-display text-xl font-extrabold text-ink">{coachFeedback.title}</p>
                  <div className="mt-4 grid gap-3 text-sm font-semibold leading-relaxed text-ink/80">
                    <p><span className="font-extrabold text-secondary">{isEn ? "Situation fit: " : "貼題程度："}</span>{coachFeedback.alignment}</p>
                    <p><span className="font-extrabold text-secondary">{isEn ? "What works: " : "做得好的地方："}</span>{coachFeedback.strengths}</p>
                    <p><span className="font-extrabold text-secondary">{isEn ? "Try next: " : "下一步可以試："}</span>{coachFeedback.nextStep}</p>
                  </div>
                  <div className="mt-4 rounded-[18px] border border-soft bg-white/90 p-4 text-sm font-bold leading-relaxed text-ink">「{coachFeedback.suggestedResponse}」</div>
                </div>
              )}

              {coachStatus === "fallback" && <p className="text-center text-xs font-semibold text-soft-muted">{isEn ? "Personalised guidance is unavailable at the moment. Your local practice feedback is still here to help." : "個人化小提醒暫時未能連線，以下本地練習提示仍可協助你繼續練習。"}</p>}

              <details className="rounded-[22px] border border-soft bg-soft-sky p-5">
                <summary className="cursor-pointer font-display text-lg font-extrabold text-ink">{isEn ? "Reference rewrites" : "參考改寫"}</summary>
                <div className="mt-4 space-y-2">{currentExercise.examples.map((example) => <p key={example.zh} className="flex gap-2 text-sm font-semibold leading-relaxed text-ink/80"><ChevronRight className="mt-1 h-4 w-4 shrink-0 text-secondary" />{example[language]}</p>)}</div>
              </details>

              <details className="rounded-[22px] border border-soft bg-white p-5">
                <summary className="cursor-pointer font-display text-lg font-extrabold text-ink">{isEn ? "PEER quick guide" : "PEER 四步提醒"}</summary>
                <div className="mt-4 grid gap-3 sm:grid-cols-4">{[
                  ["P", isEn ? "Prompt" : "發問", isEn ? "Open a question" : "用問題打開對話"],
                  ["E", isEn ? "Evaluate" : "肯定", isEn ? "Name effort first" : "先肯定努力"],
                  ["E", isEn ? "Expand" : "延伸", isEn ? "Add one small support" : "加一點提示"],
                  ["R", isEn ? "Repeat" : "重述", isEn ? "Invite own words" : "請孩子用自己說話講"],
                ].map(([letter, title, text]) => <div key={`${letter}-${title}`}><p className="font-display text-xl font-extrabold text-primary">{letter}</p><p className="mt-1 text-sm font-extrabold text-ink">{title}</p><p className="mt-1 text-xs font-semibold leading-relaxed text-soft-muted">{text}</p></div>)}</div>
              </details>
              <button onClick={nextExercise} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3.5 font-extrabold text-secondary-foreground shadow-card transition-transform hover:-translate-y-0.5">{position === selectedExercises.length - 1 ? (isEn ? "Finish practice" : "完成練習") : (isEn ? "Next sentence" : "下一句") }<ArrowRight className="h-5 w-5" /></button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

function drawWrappedText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, font: string, color: string) {
  context.font = font;
  context.fillStyle = color;
  const words = text.split("");
  let line = "";
  let currentY = y;

  words.forEach((word) => {
    const testLine = line + word;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line, x, currentY);
      line = word;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });
  if (line) context.fillText(line, x, currentY);
}

export default OpenResponsePracticePage;
