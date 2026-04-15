import { useRef } from "react";
import { X, Download } from "lucide-react";
import certificateBg from "@/assets/certificate-bg.svg";

interface CertificateModalProps {
  name: string;
  score: number;
  total: number;
  onClose: () => void;
}

const CertificateModal = ({ name, score, total, onClose }: CertificateModalProps) => {
  const certRef = useRef<HTMLDivElement>(null);
  const today = new Date().toLocaleDateString("zh-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownload = async () => {
    if (!certRef.current) return;
    try {
      const { default: html2canvas } = await import("html2canvas");
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });
      const link = document.createElement("a");
      link.download = `AI親子學堂證書_${name}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch {
      // fallback: alert user
      alert("下載失敗，請嘗試截圖保存。");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 rounded-full bg-card p-2 shadow-lg transition-colors hover:bg-muted"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        {/* Certificate */}
        <div
          ref={certRef}
          className="relative mx-auto overflow-hidden rounded-[32px] shadow-[0_18px_0_0_rgba(27,34,64,1)]"
          style={{ aspectRatio: "1200 / 850" }}
        >
          <img
            src={certificateBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative flex h-full flex-col justify-between px-20 py-14 text-center text-slate-900">
            <div className="flex flex-col items-center">
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border-4 border-slate-900 bg-[#ff7aa2] px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-900 shadow-[0_8px_0_0_rgba(27,34,64,1)]">
                <span className="text-lg">🎓</span>
                Parent AI Learning
              </div>
              <p className="mb-2 text-xs font-bold tracking-[0.24em] text-slate-700 uppercase">
                Certificate of Completion
              </p>
              <h2 className="mb-2 text-4xl font-black text-slate-900">
                完成證書
              </h2>
              <p className="max-w-2xl text-sm font-semibold leading-relaxed text-slate-700">
                茲證明以下學員已完成網站學習與測驗
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-4 flex w-full max-w-[680px] items-center justify-center rounded-[28px] border-4 border-slate-900 bg-[#ffd84d] px-8 py-5 shadow-[0_10px_0_0_rgba(27,34,64,1)]">
                <p className="break-words text-center text-3xl font-black leading-tight text-slate-900">
                  {name}
                </p>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-slate-700">
                已完成「家長 AI 學習指南」知識測驗，
                並取得 <span className="font-black text-slate-900">{score}/{total}</span> 分
                （<span className="font-black text-slate-900">{Math.round((score / total) * 100)}%</span>）。
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
                <span className="rounded-full border-4 border-slate-900 bg-[#95d46b] px-4 py-2 shadow-[0_6px_0_0_rgba(27,34,64,1)]">
                  家長 AI 知識測驗
                </span>
                <span className="rounded-full border-4 border-slate-900 bg-[#4cc9f0] px-4 py-2 shadow-[0_6px_0_0_rgba(27,34,64,1)]">
                  完成率達標
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full max-w-[560px] border-b-4 border-dashed border-slate-700/70" />
              <div className="mt-3 text-center">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Date</p>
                <p className="text-base font-black leading-tight text-slate-800">{today}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Download button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            下載證書
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
