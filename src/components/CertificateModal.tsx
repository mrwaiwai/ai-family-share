import { useRef } from "react";
import { X, Download } from "lucide-react";
import certificateBg from "@/assets/certificate-bg.jpg";
import html2canvas from "html2canvas";

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
          className="relative mx-auto overflow-hidden rounded-lg"
          style={{ aspectRatio: "1200 / 850" }}
        >
          <img
            src={certificateBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative flex h-full flex-col items-center justify-center px-12 py-10 text-center">
            <p className="mb-1 text-xs tracking-[0.3em] text-amber-700 uppercase">
              Certificate of Completion
            </p>
            <h2 className="mb-1 text-2xl font-bold text-amber-900 md:text-3xl">
              完 成 證 書
            </h2>
            <div className="mx-auto my-4 h-px w-32 bg-amber-600/40" />
            <p className="mb-1 text-sm text-amber-800">茲證明</p>
            <p className="mb-4 text-3xl font-bold text-amber-900 md:text-4xl">{name}</p>
            <p className="mb-2 max-w-md text-sm leading-relaxed text-amber-800">
              已完成「AI 親子學堂」知識測驗
              <br />
              並取得 {score}/{total} 分（{Math.round((score / total) * 100)}%）的成績
            </p>
            <div className="mx-auto my-4 h-px w-48 bg-amber-600/30" />
            <p className="text-xs text-amber-700">
              ISE 親子科技教育工作坊 · {today}
            </p>
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
