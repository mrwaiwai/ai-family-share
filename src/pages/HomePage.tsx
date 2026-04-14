import heroImg from "@/assets/hero-illustration.jpg";
import { ArrowRight, BookOpen, PenLine, ClipboardCheck, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: BookOpen,
    title: "AI 知識百科",
    description: "了解什麼是 AI、不同工具的比較、操作方法和注意事項。",
    href: "/ai-knowledge",
    color: "bg-teal-light",
    iconColor: "text-primary",
  },
  {
    icon: Lightbulb,
    title: "提示詞技巧",
    description: "掌握 RGC 框架、蘇格拉底式引導等實用提示詞模板。",
    href: "/prompt-skills",
    color: "bg-coral-light",
    iconColor: "text-secondary",
  },
  {
    icon: PenLine,
    title: "提示詞練習",
    description: "透過真實場景動手練習撰寫提示詞，即時獲得改善建議。",
    href: "/practice",
    color: "bg-teal-light",
    iconColor: "text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "AI 知識測驗",
    description: "完成 15 題測驗，達 60% 以上即可獲發電子證書。",
    href: "/quiz",
    color: "bg-coral-light",
    iconColor: "text-secondary",
  },
  {
    icon: Users,
    title: "家長指南",
    description: "安全陪伴孩子使用 AI 的全面指引和分齡建議。",
    href: "/parent-guide",
    color: "bg-teal-light",
    iconColor: "text-primary",
  },
];

const HomePage = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-warm">
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 py-16 md:flex-row md:gap-16 md:py-24 lg:px-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            與孩子一起
            <br />
            <span className="text-gradient-primary">探索 AI 的力量</span>
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            基於 ISE 親子科技教育工作坊內容，為家長打造的互動學習平台。了解人工智能、掌握提示詞技巧，安全引導孩子使用 AI 輔助學習。
          </p>
          <Link
            to="/ai-knowledge"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
          >
            開始學習
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="flex-1">
          <img
            src={heroImg}
            alt="家長與孩子一起學習 AI"
            width={1280}
            height={720}
            className="w-full max-w-lg rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    {/* Section Cards */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-14 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">📚 學習內容</h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            選擇你感興趣的主題，按照自己的節奏學習
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`mb-6 inline-flex rounded-xl p-4 ${s.color}`}>
                <s.icon className={`h-7 w-7 ${s.iconColor}`} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                進入學習 <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          基於 ISE 親子科技教育工作坊內容 · 2026
        </p>
      </div>
    </footer>
  </div>
);

export default HomePage;
