import {
  ArrowRight,
  BookOpen,
  BrainCircuit,
  ClipboardCheck,
  Gamepad2,
  Lightbulb,
  MessageCircleHeart,
  PenLine,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroReference from "@/assets/ise-soft-hero-family.png";
import { useLanguage } from "@/contexts/LanguageContext";

const pageCopy = {
  zh: {
    badge: "家長學習・陪伴學習支援",
    heroTitle: "家長輕鬆掌握AI工具和親子陪伴學習方法",
    heroDesc:
      "這個網站專為家長而設，整理了 AI 基礎知識、提示詞技巧、實用練習、測驗和陪伴學習指南，幫你先學會，再更有信心陪孩子一起使用 AI。",
    startNow: "立即開始",
    takeQuiz: "去做小測驗",
    sectionTitle: "網站學習單元",
  },
  en: {
    badge: "Parent Learning Support",
    heroTitle: "Parents Can Easily Master AI Tools and Family Co-Learning Methods",
    heroDesc:
      "This website is designed for parents, covering AI basics, prompt skills, practical exercises, quizzes, and family guidance so you can learn first and guide your child with confidence.",
    startNow: "Get Started",
    takeQuiz: "Take Quiz",
    sectionTitle: "Learning Modules",
  },
};

const HomePage = () => {
  const { language } = useLanguage();
  const copy = pageCopy[language];

  const overviewCards = [
    {
      title: "6+",
      subtitle: language === "zh" ? "家長學習主題" : "Parent Learning Topics",
      icon: BrainCircuit,
      color: "bg-[linear-gradient(135deg,rgba(255,248,213,0.95),rgba(255,241,196,0.72))]",
    },
    {
      title: language === "zh" ? "15 題" : "15 Qs",
      subtitle: language === "zh" ? "重點測驗整理" : "Key Quiz Questions",
      icon: ClipboardCheck,
      color: "bg-[linear-gradient(135deg,rgba(255,235,242,0.95),rgba(255,225,235,0.75))]",
    },
    {
      title: language === "zh" ? "一步步" : "Step by Step",
      subtitle: language === "zh" ? "由入門到陪伴學習" : "From Basics to Co-Learning",
      icon: ShieldCheck,
      color: "bg-[linear-gradient(135deg,rgba(228,252,248,0.98),rgba(219,245,239,0.82))]",
    },
  ];

  const featurePanels = [
    {
      title: language === "zh" ? "家長學習內容" : "Parent Learning Content",
      text:
        language === "zh"
          ? "網站內容以家長角度整理，先幫你理解 AI 是什麼、有哪些常見工具、怎樣提問更有效，再延伸到如何安全地陪孩子一起學習和使用 AI。"
          : "Content is organized from a parent's perspective, helping you understand AI basics, common tools, and effective prompting before guiding safe co-learning with your child.",
      icon: BookOpen,
      href: "/ai-knowledge",
      chips: language === "zh" ? ["AI 知識", "提示詞技巧", "家長指南"] : ["AI Knowledge", "Prompt Skills", "Parent Guide"],
      tone: "bg-[linear-gradient(180deg,rgba(236,249,252,0.98),rgba(248,252,255,0.96))]",
    },
    {
      title: language === "zh" ? "實戰練習" : "Practical Practice",
      text:
        language === "zh"
          ? "用真實情境練習提問，幫家長更快掌握如何向 AI 清楚表達需求。"
          : "Practice with real scenarios to quickly learn how to express needs clearly to AI.",
      icon: PenLine,
      href: "/practice",
      chips: language === "zh" ? ["情境練習", "即時回饋"] : ["Scenario Practice", "Instant Feedback"],
      tone: "bg-[linear-gradient(135deg,rgba(255,235,241,0.98),rgba(255,244,247,0.95))]",
    },
    {
      title: language === "zh" ? "陪伴學習指南" : "Co-Learning Guide",
      text:
        language === "zh"
          ? "了解如何與孩子安全、有效地使用 AI，而不只是了解操作功能。"
          : "Learn how to use AI safely and effectively with your child, beyond just button-level operation.",
      icon: ShieldCheck,
      href: "/parent-guide",
      chips: language === "zh" ? ["安全", "界線", "陪伴"] : ["Safety", "Boundaries", "Support"],
      tone: "bg-[linear-gradient(135deg,rgba(232,250,241,0.98),rgba(241,253,247,0.96))]",
    },
  ];

  const modules = [
    {
      title: language === "zh" ? "AI 知識" : "AI Knowledge",
      description:
        language === "zh"
          ? "了解 AI 概念、工具差異與家長最常會遇到的基礎問題。"
          : "Understand AI fundamentals, tool differences, and common parent questions.",
      href: "/ai-knowledge",
      icon: BrainCircuit,
      color: "bg-soft-pink",
    },
    {
      title: language === "zh" ? "提示詞技巧" : "Prompt Skills",
      description:
        language === "zh"
          ? "學習如何清楚提問，讓 AI 更有效率地支援你和孩子。"
          : "Learn to ask clear questions so AI can better support you and your child.",
      href: "/prompt-skills",
      icon: Lightbulb,
      color: "bg-soft-sky",
    },
    {
      title: language === "zh" ? "提示詞練習" : "Prompt Practice",
      description:
        language === "zh"
          ? "透過實戰場景練習提示詞，將學到的方法真正運用出來。"
          : "Practice prompts with real scenarios and apply what you learn immediately.",
      href: "/practice",
      icon: PenLine,
      color: "bg-soft-peach",
    },
    {
      title: language === "zh" ? "AI 親子應用" : "Family AI Use Cases",
      description:
        language === "zh"
          ? "從日常陪伴學習到創作互動，探索 AI 可以如何融入親子學習。"
          : "Explore how AI can support family learning, from daily guidance to creative activities.",
      href: "/quiz",
      icon: Gamepad2,
      color: "bg-soft-yellow",
    },
    {
      title: language === "zh" ? "家長指南" : "Parent Guide",
      description:
        language === "zh"
          ? "整理陪孩子使用 AI 時需要留意的界線、風險和實際做法。"
          : "Review boundaries, risks, and practical methods when using AI with children.",
      href: "/parent-guide",
      icon: Users,
      color: "bg-soft-mint",
    },
    {
      title: language === "zh" ? "開放式回應練習" : "Open Response Practice",
      description:
        language === "zh"
          ? "把日常催促或批評，改成讓孩子有空間思考和表達的溫柔回應。"
          : "Turn everyday pressure or criticism into gentle responses that give children room to think and speak.",
      href: "/open-response-practice",
      icon: MessageCircleHeart,
      color: "bg-[#dff6eb]",
    },
  ];
  const primaryFeature = featurePanels[0];
  const PrimaryFeatureIcon = primaryFeature.icon;

  return (
  <div className="bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(241,250,252,0.96))] p-5 md:p-7">
    <div className="space-y-8">
      <section className="overflow-hidden rounded-[34px] border border-soft bg-[#d9f4fb] shadow-card">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.96fr]">
          <div className="px-6 py-7 md:px-10 md:py-9">
            <div className="flex flex-wrap gap-3">
              <div className="rounded-full bg-secondary px-4 py-2 text-sm font-bold text-white shadow-card">
                Parent AI Learning Hub
              </div>
              <div className="rounded-full bg-soft-pink px-4 py-2 text-sm font-bold text-primary shadow-card">
                {copy.badge}
              </div>
            </div>

            <h1
              className={`mt-5 font-display font-extrabold text-secondary ${
                language === "en"
                  ? "max-w-[12.5ch] text-[clamp(2.05rem,4.6vw,3.75rem)] leading-[1.14] tracking-[0.005em]"
                  : "max-w-[13.5ch] text-[clamp(2.1rem,4.9vw,3.65rem)] leading-[1.2] tracking-[0.01em]"
              }`}
            >
              {copy.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-[1.03rem] leading-8 text-soft-muted md:text-lg md:leading-8">
              {copy.heroDesc}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/ai-knowledge"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
              >
                {copy.startNow}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-soft bg-white px-8 py-4 text-lg font-bold text-secondary shadow-card transition-transform hover:-translate-y-0.5"
              >
                {copy.takeQuiz}
                <ClipboardCheck className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden bg-[linear-gradient(180deg,#d9f4fb,#d9f4fb)] md:min-h-[420px]">
            <div className="absolute inset-x-5 bottom-4 top-5 overflow-hidden rounded-[32px] md:inset-x-7 md:bottom-5 md:top-6">
              <img
                src={heroReference}
                alt={language === "zh" ? "一家三口一起閱讀的柔和插畫" : "A soft illustration of a family reading together"}
                className="h-full w-full scale-[1.08] object-contain object-[center_57%] md:scale-[1.12] lg:scale-[1.14]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {overviewCards.map((card) => (
          <div key={card.subtitle} className={`rounded-[24px] border border-soft p-6 shadow-card ${card.color}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-[2.15rem] font-extrabold leading-none text-secondary">{card.title}</p>
                <p className="mt-3 text-xl font-bold text-ink">{card.subtitle}</p>
              </div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/75 text-secondary shadow-card">
                <card.icon className="h-7 w-7" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className={`rounded-[28px] border border-soft p-6 shadow-card ${primaryFeature.tone}`}>
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-secondary shadow-card">
              <PrimaryFeatureIcon className="h-8 w-8" />
            </div>
            <div className="min-w-0">
              <h2 className="font-display text-[2rem] font-extrabold text-secondary">{primaryFeature.title}</h2>
              <p className="mt-3 text-lg leading-9 text-soft-muted">{primaryFeature.text}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {primaryFeature.chips.map((chip) => (
              <Link
                key={chip}
                to={primaryFeature.href}
                className="rounded-[18px] border border-soft bg-white px-5 py-3 text-base font-bold text-secondary shadow-card"
              >
                {chip}
              </Link>
            ))}
          </div>
        </article>

        <div className="grid gap-5">
          {featurePanels.slice(1).map((panel) => (
            <Link
              key={panel.title}
              to={panel.href}
              className={`rounded-[28px] border border-soft p-6 shadow-card transition-transform hover:-translate-y-0.5 ${panel.tone}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-secondary shadow-card">
                  <panel.icon className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-display text-[2rem] font-extrabold text-secondary">{panel.title}</h2>
                  <p className="mt-3 text-lg leading-9 text-soft-muted">{panel.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-[30px] border border-soft bg-white/90 px-6 py-8 shadow-card md:px-8">
        <div className="mb-8 flex items-center justify-center gap-4 text-center">
          <div className="h-px w-14 bg-secondary/35" />
          <p className="font-display text-[2rem] font-extrabold text-secondary">{copy.sectionTitle}</p>
          <div className="h-px w-14 bg-secondary/35" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.title}
              to={module.href}
              className="rounded-[26px] border border-soft bg-white p-5 shadow-card transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${module.color} text-secondary shadow-card`}>
                  <module.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-[1.55rem] font-extrabold text-secondary">{module.title}</h3>
                  <p className="mt-2 text-base leading-8 text-soft-muted">{module.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  </div>
  );
};

export default HomePage;
