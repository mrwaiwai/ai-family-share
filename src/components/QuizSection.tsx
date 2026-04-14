import { useState } from "react";
import { quizQuestions } from "@/data/quizData";
import { CheckCircle, XCircle, ArrowRight, RotateCcw, Award } from "lucide-react";
import CertificateModal from "./CertificateModal";

const QuizSection = () => {
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
      <section id="quiz" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl text-center">
            <div className={`mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full ${passed ? "bg-teal-light" : "bg-coral-light"}`}>
              {passed ? (
                <Award className="h-12 w-12 text-primary" />
              ) : (
                <XCircle className="h-12 w-12 text-secondary" />
              )}
            </div>

            <h2 className="mb-2 text-3xl font-bold text-foreground">測驗完成！</h2>
            <p className="mb-2 text-lg text-muted-foreground">
              你的分數：
              <span className={`ml-2 text-2xl font-bold ${passed ? "text-primary" : "text-secondary"}`}>
                {score} / {quizQuestions.length} ({percentage}%)
              </span>
            </p>

            {passed ? (
              <div className="mt-8">
                <p className="mb-4 text-foreground">
                  🎉 恭喜你通過測驗！請輸入你的姓名以獲取電子證書：
                </p>
                <div className="mx-auto flex max-w-sm gap-3">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    placeholder="輸入你的姓名"
                    className="flex-1 rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    onKeyDown={(e) => e.key === "Enter" && handleClaimCertificate()}
                  />
                  <button
                    onClick={handleClaimCertificate}
                    disabled={!nameInput.trim()}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Award className="h-4 w-4" />
                    領取證書
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <p className="mb-4 text-muted-foreground">
                  需要達到 60% 或以上才能獲得證書。再試一次吧！
                </p>
              </div>
            )}

            <button
              onClick={handleRestart}
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              <RotateCcw className="h-4 w-4" />
              重新測驗
            </button>

            {/* Answer review */}
            <div className="mt-10 text-left">
              <h3 className="mb-4 text-lg font-semibold text-foreground">答案回顧</h3>
              <div className="space-y-4">
                {quizQuestions.map((q, i) => {
                  const userAns = selectedAnswers[i];
                  const correct = userAns === q.correctIndex;
                  return (
                    <div key={q.id} className="rounded-lg border border-border bg-card p-4">
                      <div className="mb-2 flex items-start gap-2">
                        {correct ? (
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        ) : (
                          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        )}
                        <p className="text-sm font-medium text-foreground">{q.question}</p>
                      </div>
                      {!correct && (
                        <p className="ml-6 text-xs text-muted-foreground">
                          正確答案：{q.options[q.correctIndex]}
                        </p>
                      )}
                      <p className="ml-6 mt-1 text-xs text-muted-foreground">{q.explanation}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {showCertificate && (
          <CertificateModal
            name={userName}
            score={score}
            total={quizQuestions.length}
            onClose={() => setShowCertificate(false)}
          />
        )}
      </section>
    );
  }

  // Quiz questions
  return (
    <section id="quiz" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-foreground">📝 AI 知識測驗</h2>
          <p className="text-muted-foreground">
            完成 15 條問題，達 60% 以上即可獲發電子證書
          </p>
        </div>

        {/* Progress bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
            <span>第 {currentQ + 1} 題 / 共 {quizQuestions.length} 題</span>
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
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="mb-6 text-lg font-semibold leading-relaxed text-foreground">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, i) => {
                let optionStyle = "border-border bg-card hover:bg-muted cursor-pointer";
                if (answered) {
                  if (i === question.correctIndex) {
                    optionStyle = "border-primary bg-teal-light cursor-default";
                  } else if (i === selected && !isCorrect) {
                    optionStyle = "border-secondary bg-coral-light cursor-default";
                  } else {
                    optionStyle = "border-border bg-card opacity-50 cursor-default";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    className={`flex w-full items-start gap-3 rounded-lg border p-4 text-left transition-all ${optionStyle}`}
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-medium text-muted-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm text-foreground">{option}</span>
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
              <div className={`mt-6 rounded-lg p-4 ${isCorrect ? "bg-teal-light" : "bg-coral-light"}`}>
                <p className="text-sm font-medium text-foreground">
                  {isCorrect ? "✅ 正確！" : "❌ 不正確"}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            {/* Next button */}
            {answered && (
              <div className="mt-6 text-right">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {currentQ < quizQuestions.length - 1 ? "下一題" : "查看結果"}
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
