import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  BrainCircuit,
  ClipboardCheck,
  Home,
  Lightbulb,
  Menu,
  MessageCircleHeart,
  PanelLeftClose,
  PanelLeftOpen,
  PenLine,
  ShieldCheck,
  X,
} from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";

const SIDEBAR_COLLAPSE_KEY = "ai-family-share-sidebar-collapsed";

const navItems = [
  { to: "/", icon: Home, color: "bg-soft-yellow", label: { zh: "首頁", en: "Home" } },
  { to: "/ai-knowledge", icon: BookOpen, color: "bg-[#d9d8ff]", label: { zh: "AI 知識", en: "AI Knowledge" } },
  { to: "/prompt-skills", icon: Lightbulb, color: "bg-soft-peach", label: { zh: "提示詞技巧", en: "Prompt Skills" } },
  { to: "/practice", icon: PenLine, color: "bg-soft-sky", label: { zh: "提示詞練習", en: "Prompt Practice" } },
  { to: "/quiz", icon: ClipboardCheck, color: "bg-[#ffe1b6]", label: { zh: "AI 知識測驗", en: "AI Quiz" } },
  { to: "/parent-guide", icon: ShieldCheck, color: "bg-soft-pink", label: { zh: "家長指南", en: "Parent Guide" } },
  { to: "/open-response-practice", icon: MessageCircleHeart, color: "bg-soft-mint", label: { zh: "開放式回應練習", en: "Open Response Practice" } },
];

const pageTitles = {
  zh: {
    "/": "家長 AI 學習指南",
    "/ai-knowledge": "AI 知識",
    "/prompt-skills": "提示詞技巧",
    "/practice": "提示詞練習",
    "/quiz": "AI 知識測驗",
    "/parent-guide": "家長指南",
    "/open-response-practice": "開放式回應練習",
  },
  en: {
    "/": "Parent AI Learning Guide",
    "/ai-knowledge": "AI Knowledge",
    "/prompt-skills": "Prompt Skills",
    "/practice": "Prompt Practice",
    "/quiz": "AI Quiz",
    "/parent-guide": "Parent Guide",
    "/open-response-practice": "Open Response Practice",
  },
};

const getInitialCollapsed = () => {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(SIDEBAR_COLLAPSE_KEY) === "1";
};

const AppLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(getInitialCollapsed);
  const location = useLocation();
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    window.localStorage.setItem(SIDEBAR_COLLAPSE_KEY, desktopCollapsed ? "1" : "0");
  }, [desktopCollapsed]);

  const currentTitle = useMemo(
    () => pageTitles[language][location.pathname as keyof (typeof pageTitles)["zh"]] ?? pageTitles[language]["/"],
    [language, location.pathname],
  );

  return (
    <div className="min-h-screen px-4 py-4 md:px-5 lg:px-6">
      <div className={`mx-auto grid max-w-[1500px] gap-5 ${desktopCollapsed ? "lg:grid-cols-[92px_minmax(0,1fr)]" : "lg:grid-cols-[240px_minmax(0,1fr)]"}`}>
        <aside className="hidden lg:block">
          <div className="soft-card flex h-fit flex-col p-4 transition-all duration-300">
            <div className="flex items-start justify-between gap-2">
              <Link
                to="/"
                className={`rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.78),rgba(228,248,251,0.72))] ${desktopCollapsed ? "flex-1 px-3 py-4 text-center" : "flex-1 p-5"}`}
              >
                <p className={`${desktopCollapsed ? "text-3xl" : "text-5xl"} font-display font-extrabold uppercase leading-none text-secondary`}>iSE</p>
                {!desktopCollapsed && (
                  <>
                    <p className="mt-3 text-[1.45rem] font-bold leading-snug text-ink">
                      {language === "zh" ? "家長 AI 學習指南" : "Parent AI Learning Guide"}
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-soft-muted">
                      Parent AI Learning Guide
                    </p>
                  </>
                )}
              </Link>

              <button
                onClick={() => setDesktopCollapsed((prev) => !prev)}
                title={desktopCollapsed ? (language === "zh" ? "展開側欄" : "Expand sidebar") : language === "zh" ? "收合側欄" : "Collapse sidebar"}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-soft bg-white text-ink shadow-card transition-colors hover:bg-muted"
              >
                {desktopCollapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
              </button>
            </div>

            <div className={`mt-4 flex ${desktopCollapsed ? "flex-col" : "gap-2"} gap-2`}>
              <button
                onClick={() => setLanguage("zh")}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold shadow-card ${language === "zh" ? "border-soft bg-soft-sky text-secondary" : "border-soft bg-white text-ink"}`}
              >
                {desktopCollapsed ? "中" : "中文"}
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full border px-3 py-1.5 text-xs font-bold shadow-card ${language === "en" ? "border-soft bg-soft-sky text-secondary" : "border-soft bg-white text-ink"}`}
              >
                {desktopCollapsed ? "EN" : "English"}
              </button>
            </div>

            <div className="mt-8">
              {!desktopCollapsed && (
                <p className="px-3 text-sm font-bold uppercase tracking-[0.22em] text-soft-muted">
                  {language === "zh" ? "導航地圖" : "Navigation"}
                </p>
              )}
              <nav className="mt-4 space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    title={item.label[language]}
                    className={`flex items-center rounded-[26px] border border-transparent bg-white/75 text-ink shadow-card transition-all hover:-translate-y-0.5 hover:border-soft ${desktopCollapsed ? "justify-center px-2 py-3" : "gap-4 px-4 py-4"}`}
                    activeClassName="border-soft bg-white shadow-soft"
                  >
                    <span className={`flex ${desktopCollapsed ? "h-11 w-11" : "h-12 w-12"} shrink-0 items-center justify-center rounded-full ${item.color} text-secondary shadow-card`}>
                      <item.icon className={`${desktopCollapsed ? "h-4 w-4" : "h-5 w-5"}`} />
                    </span>
                    {!desktopCollapsed && <span className="text-[1.05rem] font-bold">{item.label[language]}</span>}
                  </NavLink>
                ))}
              </nav>
            </div>

            {!desktopCollapsed ? (
              <div className="mt-auto rounded-[28px] border border-soft bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(234,249,252,0.95))] p-4 shadow-card">
                <div className="overflow-hidden rounded-[22px] bg-[linear-gradient(180deg,rgba(255,228,233,0.86),rgba(221,249,252,0.9))] p-4">
                  <div className="flex items-end gap-3">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-soft-pink shadow-card">
                      <BrainCircuit className="h-8 w-8 text-primary" />
                    </div>
                    <div className="pb-1">
                      <p className="font-display text-xl font-extrabold text-secondary">
                        {language === "zh" ? "家長陪伴學習重點" : "Parent Tips"}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-soft-muted">
                        {language === "zh" ? "先學 AI，再更有信心陪孩子使用。" : "Learn AI first, then guide your child with confidence."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-auto flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-pink shadow-card">
                  <BrainCircuit className="h-5 w-5 text-primary" />
                </div>
              </div>
            )}
          </div>
        </aside>

        <div className="min-w-0">
          <header className="soft-card mb-5 px-4 py-4 md:px-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileOpen((open) => !open)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-soft bg-white text-ink shadow-card lg:hidden"
                >
                  {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
                <button
                  onClick={() => setDesktopCollapsed((prev) => !prev)}
                  className="hidden h-11 w-11 items-center justify-center rounded-full border border-soft bg-white text-ink shadow-card transition-colors hover:bg-muted lg:flex"
                  title={desktopCollapsed ? (language === "zh" ? "展開側欄" : "Expand sidebar") : language === "zh" ? "收合側欄" : "Collapse sidebar"}
                >
                  {desktopCollapsed ? <PanelLeftOpen className="h-5 w-5" /> : <PanelLeftClose className="h-5 w-5" />}
                </button>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-sky text-secondary shadow-card">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-[1.45rem] font-extrabold text-ink md:text-[1.7rem]">
                    {currentTitle}
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage("zh")}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold shadow-card ${language === "zh" ? "border-soft bg-soft-sky text-secondary" : "border-soft bg-white text-ink"}`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold shadow-card ${language === "en" ? "border-soft bg-soft-sky text-secondary" : "border-soft bg-white text-ink"}`}
                  >
                    English
                  </button>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-soft-pink text-primary shadow-card">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div className="rounded-full border border-soft bg-white px-4 py-2 text-sm font-bold text-ink shadow-card">
                  {language === "zh" ? "家長友善學習平台" : "Parent-Friendly Platform"}
                </div>
              </div>
            </div>

            {mobileOpen && (
              <div className="mt-4 space-y-2 lg:hidden">
                <div className="mb-2 flex gap-2 px-1">
                  <button
                    onClick={() => setLanguage("zh")}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold shadow-card ${language === "zh" ? "border-soft bg-soft-sky text-secondary" : "border-soft bg-white text-ink"}`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold shadow-card ${language === "en" ? "border-soft bg-soft-sky text-secondary" : "border-soft bg-white text-ink"}`}
                  >
                    English
                  </button>
                </div>
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-[22px] border border-soft bg-white px-4 py-3 text-ink shadow-card"
                    activeClassName="bg-muted"
                  >
                    <span className={`flex h-10 w-10 items-center justify-center rounded-full ${item.color} text-secondary`}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    <span className="font-bold">{item.label[language]}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </header>

          <div className="soft-card reading-friendly overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
