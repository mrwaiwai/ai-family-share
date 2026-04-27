import { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Download, ShieldCheck, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CertificateModalProps {
  name: string;
  score: number;
  total: number;
  onClose: () => void;
}

const CertificateModal = ({ name, score, total, onClose }: CertificateModalProps) => {
  const certRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);

  const passRate = Math.round((score / total) * 100);
  const now = useMemo(() => new Date(), []);
  const dateText = now.toLocaleDateString(language === "en" ? "en-US" : "zh-HK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const certificateNo = useMemo(() => {
    const yyyy = String(now.getFullYear());
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const base = `${name}-${score}-${total}-${yyyy}${mm}${dd}`;
    let hash = 0;
    for (let i = 0; i < base.length; i += 1) hash = (hash * 31 + base.charCodeAt(i)) >>> 0;
    return `ISE-${yyyy}${mm}${dd}-${String(hash % 1000000).padStart(6, "0")}`;
  }, [name, now, score, total]);

  const copy =
    language === "en"
      ? {
          heading: "CERTIFICATE",
          subheading: "OF COMPLETION",
          subtitle: "This certificate is awarded to",
          learner: "Recipient",
          statement:
            "for successfully completing the Parent AI Learning Guide knowledge assessment.",
          scoreLabel: "Score",
          dateLabel: "Date Issued",
          certNoLabel: "Certificate No.",
          issuerLabel: "Issued By",
          issuerValue: "iSE Parent AI Learning Guide",
          completionMark: "Completed Assessment",
          download: "Download Certificate",
          downloading: "Preparing Certificate...",
          filename: "Parent-AI-Certificate",
          fallback: "Download failed. Please save by screenshot.",
          organization: "Inclusive Sports Education",
        }
      : {
          heading: "CERTIFICATE",
          subheading: "測驗完成證書",
          subtitle: "茲頒發本證書予",
          learner: "學員",
          statement: "以證明其已完成「家長 AI 學習指南」知識測驗。",
          scoreLabel: "測驗成績",
          dateLabel: "頒發日期",
          certNoLabel: "證書編號",
          issuerLabel: "頒發單位",
          issuerValue: "iSE 家長 AI 學習指南",
          completionMark: "已完成測驗",
          download: "下載證書",
          downloading: "正在準備證書...",
          filename: "AI親子學堂證書",
          fallback: "下載失敗，請嘗試截圖保存。",
          organization: "特殊教育需要融合運動學院",
        };

  const handleDownload = async () => {
    if (!certRef.current || isDownloading) return;
    setIsDownloading(true);
    try {
      await document.fonts?.ready;
      const { default: html2canvas } = await import("html2canvas");
      const exportNode = certRef.current.cloneNode(true) as HTMLDivElement;
      exportNode.style.width = "1200px";
      exportNode.style.height = "850px";
      exportNode.style.maxWidth = "none";
      exportNode.style.aspectRatio = "1200 / 850";
      exportNode.style.position = "fixed";
      exportNode.style.left = "-99999px";
      exportNode.style.top = "0";
      exportNode.style.zIndex = "-1";
      document.body.appendChild(exportNode);

      let canvas: HTMLCanvasElement;
      try {
        canvas = await html2canvas(exportNode, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#fffefd",
          logging: false,
        });
      } finally {
        exportNode.remove();
      }

      const blob = await new Promise<Blob | null>((resolve) => {
        canvas.toBlob((result) => resolve(result), "image/png");
      });

      if (!blob) {
        const fallbackWindow = window.open();
        if (fallbackWindow) {
          fallbackWindow.document.write(`<img src="${canvas.toDataURL("image/png")}" alt="Certificate" />`);
          fallbackWindow.document.close();
          return;
        }
        throw new Error("Unable to generate certificate image.");
      }

      const link = document.createElement("a");
      const objectUrl = URL.createObjectURL(blob);
      const safeName = name.replace(/[\\/:*?"<>|]/g, "_").trim() || "certificate";
      link.download = `${copy.filename}_${safeName}.png`;
      link.href = objectUrl;
      link.rel = "noopener";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch (error) {
      console.error("Certificate download failed", error);
      alert(copy.fallback);
    } finally {
      setIsDownloading(false);
    }
  };

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/45 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[calc(100vh-2rem)] w-full max-w-[min(1040px,calc(100vw-2rem),calc((100vh-12.5rem)*1.4118))] flex-col overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-10 rounded-full border border-soft bg-white p-2.5 shadow-card transition-colors hover:bg-muted"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div
          ref={certRef}
          data-certificate-content
          className="relative mx-auto w-full flex-none overflow-hidden rounded-[18px] border border-[#9ccdd7] bg-[#fffefd] shadow-soft"
          style={{ aspectRatio: "1200 / 850" }}
        >
          <div className="pointer-events-none absolute inset-[18px] z-0 rounded-[12px] border-2 border-[#62b8ca]" />
          <div className="pointer-events-none absolute inset-[30px] z-0 rounded-[8px] border border-[#f4d776]" />
          <div className="pointer-events-none absolute left-0 top-0 z-0 h-20 w-20 rounded-br-[28px] border-b-[8px] border-r-[8px] border-[#62b8ca]" />
          <div className="pointer-events-none absolute right-0 top-0 z-0 h-20 w-20 rounded-bl-[28px] border-b-[8px] border-l-[8px] border-[#62b8ca]" />
          <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-20 w-20 rounded-tr-[28px] border-r-[8px] border-t-[8px] border-[#62b8ca]" />
          <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-20 w-20 rounded-tl-[28px] border-l-[8px] border-t-[8px] border-[#62b8ca]" />
          <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_16%_20%,rgba(98,184,202,0.12)_0_2px,transparent_3px),radial-gradient(circle_at_82%_24%,rgba(255,197,213,0.18)_0_2px,transparent_3px),radial-gradient(circle_at_50%_82%,rgba(244,215,118,0.16)_0_2px,transparent_3px)]" />

          <div className="relative z-10 flex h-full flex-col px-[5.2rem] py-12 text-[#24364c]">
            <div className="flex items-start justify-between gap-6">
              <div className="text-left">
                <p className="font-display text-5xl font-extrabold leading-none text-[#4ea8bc]">iSE</p>
                <p className="mt-2 text-sm font-bold leading-snug text-[#60778c]">{copy.organization}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold uppercase text-[#60778c]">{copy.certNoLabel}</p>
                <p className="mt-1 text-sm font-extrabold text-[#2f4b63]">{certificateNo}</p>
              </div>
            </div>

            <div className="mt-3 text-center">
              <h2 className="font-display text-[3.45rem] font-extrabold leading-none text-[#4ea8bc]">{copy.heading}</h2>
              <p className="mt-3 text-sm font-extrabold uppercase text-[#7d90a2]">{copy.subheading}</p>
              <div className="mx-auto mt-4 h-px w-[520px] max-w-full bg-[#c7dbe4]" />
              <p className="mt-5 text-base font-bold text-[#6b7f91]">{copy.subtitle}</p>

              <div className="mx-auto mt-4 max-w-[620px] border-b-2 border-[#c7dbe4] px-8 pb-3">
                <p className="text-xs font-bold text-[#7d90a2]">{copy.learner}</p>
                <p className="mt-2 break-words font-display text-[2.85rem] font-extrabold leading-tight text-[#1f344d]">{name}</p>
              </div>

              <p className="mx-auto mt-4 max-w-[760px] text-base font-semibold leading-relaxed text-[#3f566d]">
                {copy.statement}
              </p>
            </div>

            <div className="mt-auto grid grid-cols-[1fr_150px_1fr] items-end gap-8">
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-xs font-bold uppercase text-[#7d90a2]">{copy.issuerLabel}</p>
                  <p className="mt-1 text-base font-extrabold text-[#304a66]">{copy.issuerValue}</p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[#c8dbe2] bg-[#eefafe] px-4 py-2 text-xs font-bold text-[#4e7888]">
                  <ShieldCheck className="h-4 w-4" />
                  {copy.completionMark}
                </div>
              </div>

              <div className="flex flex-col items-center justify-end">
                <div className="relative flex h-[116px] w-[116px] items-center justify-center rounded-full border-[7px] border-[#f4d776] bg-[#eefafe] shadow-card">
                  <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#62b8ca] bg-white">
                    <Award className="h-10 w-10 text-[#4ea8bc]" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-right">
                <div>
                  <p className="text-xs font-bold uppercase text-[#7d90a2]">{copy.scoreLabel}</p>
                  <p className="mt-1 text-base font-extrabold text-[#304a66]">{score}/{total} ({passRate}%)</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-[#7d90a2]">{copy.dateLabel}</p>
                  <p className="mt-1 text-base font-extrabold text-[#304a66]">{dateText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 rounded-full border border-soft bg-white px-6 py-3 text-sm font-extrabold text-ink shadow-card transition-colors hover:bg-muted disabled:cursor-wait disabled:opacity-70"
          >
            <Download className="h-4 w-4" />
            {isDownloading ? copy.downloading : copy.download}
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(modal, document.body);
};

export default CertificateModal;
