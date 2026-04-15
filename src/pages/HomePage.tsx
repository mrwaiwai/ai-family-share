import { ArrowRight, BookOpen, PenLine, ClipboardCheck, Users, Lightbulb, Sparkles, Heart, Stars, SmilePlus } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  {
    icon: BookOpen,
    title: "AI 知識百科",
    description: "了解什麼是 AI、不同工具的比較、操作方法和注意事項。",
    href: "/ai-knowledge",
    color: "bg-coral-light",
    badge: "AI 入門",
  },
  {
    icon: Lightbulb,
    title: "提示詞技巧",
    description: "掌握 RGC 框架、蘇格拉底式引導等實用提示詞模板。",
    href: "/prompt-skills",
    color: "bg-teal-light",
    badge: "表達力",
  },
  {
    icon: PenLine,
    title: "提示詞練習",
    description: "透過真實場景動手練習撰寫提示詞，即時獲得改善建議。",
    href: "/practice",
    color: "bg-bubble-pink",
    badge: "互動玩學",
  },
  {
    icon: ClipboardCheck,
    title: "AI 知識測驗",
    description: "完成 15 題測驗，達 60% 以上即可獲發電子證書。",
    href: "/quiz",
    color: "bg-bubble-green",
    badge: "挑戰模式",
  },
  {
    icon: Users,
    title: "家長指南",
    description: "安全陪伴孩子使用 AI 的全面指引和分齡建議。",
    href: "/parent-guide",
    color: "bg-bubble-yellow",
    badge: "親子共學",
  },
];

const HomePage = () => (
  <div className="overflow-hidden">
    <section className="relative overflow-hidden px-4 pb-16 pt-8 md:px-6 lg:px-10">
      <div className="pointer-events-none absolute left-6 top-14 animate-float-gentle text-secondary">
        <Stars className="h-9 w-9" />
      </div>
      <div className="pointer-events-none absolute right-10 top-24 animate-wiggle-slow text-accent">
        <Heart className="h-10 w-10 fill-current" />
      </div>
      <div className="pointer-events-none absolute bottom-12 left-8 animate-pulse-pop text-primary">
        <Sparkles className="h-10 w-10" />
      </div>

      <div className="container mx-auto">
        <div className="relative rounded-[2.5rem] border-[4px] border-ink bg-sunburst px-6 py-10 shadow-playful md:px-10 md:py-14 lg:px-14">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-conic-gradient(from 270deg at 50% 55%, rgba(255,255,255,0.35) 0deg 10deg, transparent 10deg 20deg)",
            }}
          />

          <div className="relative z-10 mb-8 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-2 shadow-playful">
              <SmilePlus className="h-5 w-5 text-secondary" />
              <span className="font-display text-base font-extrabold uppercase tracking-[0.14em] text-ink">Parent AI Learning Hub</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bubble-yellow px-4 py-2 shadow-playful">
              <span className="text-lg">👨‍👩‍👧‍👦</span>
              <span className="text-base font-extrabold text-ink">家長學習 + 陪學支援</span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="text-center lg:text-left">
              <h1 className="font-display text-4xl font-extrabold leading-[0.95] text-ink md:text-6xl lg:text-7xl">
                幫家長輕鬆掌握
                <br />
                AI 工具同
                <br />
                <span className="text-white [text-shadow:3px_3px_0_hsl(var(--foreground))]">親子陪學方法</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-relaxed text-ink/80 lg:mx-0 lg:text-xl">
                呢個網站專為家長而設，整理咗 AI 基礎知識、提示詞技巧、實用練習、測驗同陪學指南，幫你先學識，再更有信心陪孩子一齊使用 AI。
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/ai-knowledge"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink bg-bubble-yellow px-8 py-4 text-base font-extrabold text-ink shadow-playful transition-all hover:-translate-y-1"
                >
                  立即開始
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-ink bg-white px-8 py-4 text-base font-extrabold text-ink shadow-playful transition-all hover:-translate-y-1"
                >
                  去做小測驗
                  <ClipboardCheck className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.8rem] border-[3px] border-ink bg-white/90 p-4 text-left shadow-playful">
                  <p className="font-display text-2xl font-extrabold text-ink">5+</p>
                  <p className="text-base font-bold text-ink/70">家長學習主題</p>
                </div>
                <div className="rounded-[1.8rem] border-[3px] border-ink bg-bubble-pink p-4 text-left shadow-playful">
                  <p className="font-display text-2xl font-extrabold text-ink">15 題</p>
                  <p className="text-base font-bold text-ink/70">重點測驗整理</p>
                </div>
                <div className="rounded-[1.8rem] border-[3px] border-ink bg-teal-light p-4 text-left shadow-playful">
                  <p className="font-display text-2xl font-extrabold text-ink">一步步</p>
                  <p className="text-base font-bold text-ink/70">由入門到陪學</p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[2rem] border-[4px] border-ink bg-white/90 p-6 shadow-playful">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bubble-pink px-4 py-2 shadow-playful">
                    <span className="text-xl">🗂️</span>
                    <span className="font-display text-base font-extrabold uppercase tracking-[0.13em] text-ink">家長學習內容</span>
                  </div>
                  <p className="text-lg font-bold leading-relaxed text-ink/80">
                    網站內容以家長角度整理，先幫你理解 AI 是什麼、有哪些常見工具、怎樣提問更有效，再延伸到如何安全地陪孩子一起學習和使用 AI。
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <div className="rounded-full border-[3px] border-ink bg-bubble-yellow px-4 py-2 text-base font-extrabold text-ink shadow-playful">🧠 AI 知識</div>
                    <div className="rounded-full border-[3px] border-ink bg-teal-light px-4 py-2 text-base font-extrabold text-ink shadow-playful">💬 提示詞技巧</div>
                    <div className="rounded-full border-[3px] border-ink bg-bubble-green px-4 py-2 text-base font-extrabold text-ink shadow-playful">👨‍👩‍👧‍👦 家長指南</div>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.8rem] border-[4px] border-ink bg-bubble-pink p-5 shadow-playful">
                    <p className="text-3xl">✍️</p>
                    <p className="mt-3 font-display text-2xl font-extrabold text-ink">實戰練習</p>
                    <p className="mt-2 text-base font-bold leading-relaxed text-ink/75">用真實情境練習提問，幫家長更快掌握如何向 AI 清楚表達需求。</p>
                  </div>
                  <div className="rounded-[1.8rem] border-[4px] border-ink bg-white p-5 shadow-playful">
                    <p className="text-3xl">✅</p>
                    <p className="mt-3 font-display text-2xl font-extrabold text-ink">陪學指南</p>
                    <p className="mt-2 text-base font-bold leading-relaxed text-ink/75">了解如何陪孩子安全、有效地使用 AI，而唔係只係識按功能。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-10 md:px-6 lg:px-10">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-5 py-2 shadow-playful">
            <span className="text-xl">📚</span>
            <span className="font-display text-base font-extrabold uppercase tracking-[0.15em] text-ink">網站學習單元</span>
          </div>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink md:text-5xl">由家長最需要的內容開始學</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base font-bold text-ink/70 md:text-lg">
            每個單元都圍繞家長常見需要設計，方便你由認識 AI、學習操作，到實際陪孩子應用。
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className={`card-doodle group relative rounded-[2rem] border-[4px] border-ink p-8 shadow-playful transition-all duration-300 hover:-translate-y-2 ${s.color}`}
            >
              <div className="relative z-10">
                <div className="mb-5 inline-flex rounded-full border-[3px] border-ink bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-[0.14em] text-ink">
                  {s.badge}
                </div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.4rem] border-[3px] border-ink bg-white shadow-playful">
                  <s.icon className="h-8 w-8 text-ink" />
                </div>
                <h3 className="font-display text-3xl font-extrabold leading-tight text-ink">{s.title}</h3>
                <p className="mb-8 mt-3 text-base font-bold leading-relaxed text-ink/75">{s.description}</p>
                <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-5 py-3 text-base font-extrabold text-ink shadow-playful transition-all group-hover:translate-x-1">
                  進入學習
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="px-4 pb-14 pt-4 md:px-6 lg:px-10">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2.2rem] border-[4px] border-ink bg-white p-8 shadow-playful">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-bubble-yellow px-4 py-2 shadow-playful">
              <Sparkles className="h-4 w-4 text-ink" />
              <span className="font-display text-base font-extrabold uppercase tracking-[0.13em] text-ink">網站特色</span>
            </div>
            <h2 className="font-display text-3xl font-extrabold text-ink md:text-4xl">為家長整理得更清楚、更易用</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[1.6rem] border-[3px] border-ink bg-bubble-pink p-5 shadow-playful">
                <p className="text-3xl">🧠</p>
                <p className="mt-3 font-display text-xl font-extrabold text-ink">重點清晰</p>
                <p className="mt-2 text-base font-bold leading-relaxed text-ink/75">將 AI 概念、工具比較與安全原則整理成家長容易掌握的內容。</p>
              </div>
              <div className="rounded-[1.6rem] border-[3px] border-ink bg-teal-light p-5 shadow-playful">
                <p className="text-3xl">🎯</p>
                <p className="mt-3 font-display text-xl font-extrabold text-ink">實用導向</p>
                <p className="mt-2 text-base font-bold leading-relaxed text-ink/75">由理解概念到實際提問、練習與測驗，都圍繞家長真實使用情境。</p>
              </div>
              <div className="rounded-[1.6rem] border-[3px] border-ink bg-bubble-green p-5 shadow-playful">
                <p className="text-3xl">💛</p>
                <p className="mt-3 font-display text-xl font-extrabold text-ink">陪學友善</p>
                <p className="mt-2 text-base font-bold leading-relaxed text-ink/75">幫助家長建立陪孩子使用 AI 的節奏、界線與判斷力。</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2.2rem] border-[4px] border-ink bg-coral-light p-8 shadow-playful">
            <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-2 shadow-playful">
              <span className="text-xl">🚀</span>
              <span className="font-display text-base font-extrabold uppercase tracking-[0.13em] text-ink">快速開始</span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-extrabold text-ink">今日想由邊度開始？</h3>
            <div className="mt-5 space-y-4">
              <Link to="/prompt-skills" className="flex items-center justify-between rounded-[1.4rem] border-[3px] border-ink bg-white px-5 py-4 font-extrabold text-ink shadow-playful transition-all hover:-translate-y-1">
                <span>學提示詞框架</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/practice" className="flex items-center justify-between rounded-[1.4rem] border-[3px] border-ink bg-bubble-yellow px-5 py-4 font-extrabold text-ink shadow-playful transition-all hover:-translate-y-1">
                <span>立即做練習</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/parent-guide" className="flex items-center justify-between rounded-[1.4rem] border-[3px] border-ink bg-white px-5 py-4 font-extrabold text-ink shadow-playful transition-all hover:-translate-y-1">
                <span>睇家長指南</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="px-4 pb-12 pt-4 md:px-6 lg:px-10">
      <div className="container mx-auto">
        <div className="rounded-[2rem] border-[4px] border-ink bg-bubble-cream p-6 text-center shadow-playful">
          <p className="font-display text-2xl font-extrabold text-ink">家長 AI 學習指南</p>
        </div>
      </div>
    </footer>
  </div>
);

export default HomePage;
