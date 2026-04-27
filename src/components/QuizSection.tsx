import { Suspense, lazy, useEffect, useState } from "react";
import { getQuizQuestions } from "@/data/quizData";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificateModal = lazy(() => import("./CertificateModal"));

const QuizSection = () => {
  const { language } = useLanguage();
  const quizQuestions = getQuizQuestions(language);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [userName, setUserName] = useState("");
  const [nameInput, setNameInput] = useState("");

  const question = quizQuestions[currentQ];
  const selected = selectedAnswers[currentQ];
  const isCorrect = selected === question.correctIndex;
  const answered = selected !== null;

  const score = selectedAnswers.reduce(
    (acc, ans, i) => acc + (ans === quizQuestions[i].correctIndex ? 1 : 0),
    0
  );
  const percentage = Math.round((score / quizQuestions.length) * 100);
  const passed = percentage >= 60;

  useEffect(() => {
    setCurrentQ(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(null));
    setShowResult(false);
    setShowExplanation(false);
    setShowCertificate(false);
    setUserName("");
    setNameInput("");
  }, [language, quizQuestions.length]);

  const handleSelect = (index: number) => {
    if (answered) return;
    const next = [...selectedAnswers];
    next[currentQ] = index;
    setSelectedAnswers(next);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQ(0);
    setSelectedAnswers(Array(quizQuestions.length).fill(null));
    setShowResult(false);
    setShowExplanation(false);
    setShowCertificate(false);
    setUserName("");
    setNameInput("");
  };

  const handleClaimCertificate = () => {
    if (nameInput.trim()) {
      setUserName(nameInput.trim());
      setShowCertificate(true);
    }
  };

  // Results screen
  if (showResult) {
    return (
      <section className="py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mx-auto max-w-xl text-center">
            <div className={`mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full shadow-card ${passed ? "bg-soft-sky" : "bg-soft-peach"}`}>
              {passed ? (
                <Award className="h-12 w-12 text-primary" />
              ) : (
                <XCircle className="h-12 w-12 text-secondary" />
              )}
            </div>

            <h2 className="mb-2 text-3xl font-bold text-foreground">{language === "zh" ? "測驗完成！" : "Quiz Completed!"}</h2>
            <p className="mb-2 text-lg text-muted-foreground">
              {language === "zh" ? "你的分數：" : "Your Score:"}
              <span className={`ml-2 text-2xl font-bold ${passed ? "text-primary" : "text-secondary"}`}>
                {score} / {quizQuestions.length} ({percentage}%)
              </span>
            </p>

            {passed ? (
              <div className="mt-8">
                <p className="mb-4 text-foreground">
                  {language === "zh"
                    ? "🎉 恭喜你通過測驗！請輸入你的姓名以獲取電子證書："
                    : "🎉 Congratulations! Enter your name to claim your digital certificate:"}
                </p>
                <div className="mx-auto flex max-w-sm gap-3">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder={language === "zh" ? "輸入你的姓名" : "Enter your name"}
                    className="flex-1 rounded-full border border-soft bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onKeyDown={(e) => e.key === "Enter" && handleClaimCertificate()}
                  />
                  <button
                    onClick={handleClaimCertificate}
                    disabled={!nameInput.trim()}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-bold text-primary-foreground shadow-card transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Award className="h-4 w-4" />
                    {language === "zh" ? "領取證書" : "Claim Certificate"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <p className="mb-4 text-muted-foreground">
                  {language === "zh"
                    ? "需要達到 60% 或以上才能獲得證書。再試一次吧！"
                    : "You need 60% or above to receive a certificate. Try again!"}
                </p>
              </div>
            )}

            <button
              onClick={handleRestart}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-soft bg-white px-5 py-3 text-base font-bold text-foreground shadow-card transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" />
              {language === "zh" ? "重新測驗" : "Retry Quiz"}
            </button>

            {/* Answer review */}
            <div className="mt-10 text-left">
              <h3 className="mb-4 text-lg font-semibold text-foreground">{language === "zh" ? "答案回顧" : "Answer Review"}</h3>
              <div className="space-y-4">
                {quizQuestions.map((q, i) => {
                  const userAns = selectedAnswers[i];
                  const correct = userAns === q.correctIndex;
                  return (
                    <div key={q.id} className="rounded-[18px] border border-soft bg-white p-4 shadow-card">
                      <div className="mb-2 flex items-start gap-2">
                        {correct ? (
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        ) : (
                          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        )}
                        <p className="text-base font-medium leading-relaxed text-foreground">{q.question}</p>
                      </div>
                      {!correct && (
                        <p className="ml-6 text-sm leading-relaxed text-muted-foreground">
                          {language === "zh" ? "正確答案：" : "Correct answer: "} {q.options[q.correctIndex]}
                        </p>
                      )}
                      <p className="ml-6 mt-1 text-sm leading-relaxed text-muted-foreground">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {showCertificate && (
          <Suspense fallback={null}>
            <CertificateModal
              name={userName}
              score={score}
              total={quizQuestions.length}
              onClose={() => setShowCertificate(false)}
            />
          </Suspense>
        )}
      </section>
    );
  }

  // Quiz questions
  return (
    <section className="py-4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <h1 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            {language === "zh" ? "📝 家長 AI 知識測驗" : "📝 Parent AI Knowledge Quiz"}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {language === "zh"
              ? "用測驗快速檢查你對 AI 基礎概念、工具使用與陪伴學習安全原則的掌握程度。"
              : "Use this quiz to check your understanding of AI basics, tool usage, and safe co-learning practices."}
          </p>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-base text-muted-foreground">
            <span>
              {language === "zh"
                ? `第 ${currentQ + 1} 題 / 共 ${quizQuestions.length} 題`
                : `Question ${currentQ + 1} / ${quizQuestions.length}`}
            </span>
            <span>{Math.round(((currentQ + (answered ? 1 : 0)) / quizQuestions.length) * 100)}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{
                width: `${((currentQ + (answered ? 1 : 0)) / quizQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[24px] border border-soft bg-white p-8 shadow-card">
            <h3 className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, i) => {
                let optionStyle = "border-soft bg-white hover:bg-muted cursor-pointer";
                if (answered) {
                  if (i === question.correctIndex) {
                    optionStyle = "border-primary bg-soft-sky cursor-default";
                  } else if (i === selected && !isCorrect) {
                    optionStyle = "border-secondary bg-soft-peach cursor-default";
                  } else {
                    optionStyle = "border-soft bg-white opacity-50 cursor-default";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`flex w-full items-start gap-3 rounded-[16px] border p-4 text-left transition-all ${optionStyle}`}
                  >
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border bg-muted text-sm font-medium text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-base leading-relaxed text-foreground">{option}</span>
                    {answered && i === question.correctIndex && (
                      <CheckCircle className="ml-auto h-5 w-5 flex-shrink-0 text-primary" />
                    )}
                    {answered && i === selected && !isCorrect && i !== question.correctIndex && (
                      <XCircle className="ml-auto h-5 w-5 flex-shrink-0 text-secondary" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showExplanation && answered && (
                  <div className={`mt-6 rounded-lg p-4 ${isCorrect ? "bg-soft-sky" : "bg-soft-peach"}`}>
                <p className="text-base font-medium text-foreground">
                  {isCorrect ? (language === "zh" ? "✅ 正確！" : "✅ Correct!") : language === "zh" ? "❌ 不正確" : "❌ Not Correct"}
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            {/* Next button */}
            {answered && (
              <div className="mt-6 text-right">
                <button onClick={handleNext} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-bold text-primary-foreground shadow-card transition-colors hover:bg-primary/90">
                  {currentQ < quizQuestions.length - 1 ? (language === "zh" ? "下一題" : "Next") : language === "zh" ? "查看結果" : "View Result"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
