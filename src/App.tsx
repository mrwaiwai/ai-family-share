import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/AppLayout";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
const HomePage = lazy(() => import("@/pages/HomePage"));
const AIKnowledgePage = lazy(() => import("@/pages/AIKnowledgePage"));
const PromptSkillsPage = lazy(() => import("@/pages/PromptSkillsPage"));
const PracticePage = lazy(() => import("@/pages/PracticePage"));
const QuizPage = lazy(() => import("@/pages/QuizPage"));
const ParentGuidePage = lazy(() => import("@/pages/ParentGuidePage"));
const OpenResponsePracticePage = lazy(() => import("@/pages/OpenResponsePracticePage"));
const CertificatePreviewPage = lazy(() => import("@/pages/CertificatePreviewPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const RouteLoadingFallback = () => {
  const { language } = useLanguage();
  return (
    <div className="flex min-h-[40vh] items-center justify-center px-6 py-16">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
        <p className="text-sm text-muted-foreground">{language === "zh" ? "正在載入內容..." : "Loading content..."}</p>
      </div>
    </div>
  );
};

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/ai-knowledge" element={<AIKnowledgePage />} />
              <Route path="/prompt-skills" element={<PromptSkillsPage />} />
              <Route path="/practice" element={<PracticePage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/parent-guide" element={<ParentGuidePage />} />
              <Route path="/open-response-practice" element={<OpenResponsePracticePage />} />
              <Route path="/certificate-preview" element={<CertificatePreviewPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </LanguageProvider>
);

export default App;
