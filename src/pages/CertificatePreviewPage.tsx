import { useState } from "react";
import CertificateModal from "@/components/CertificateModal";

const CertificatePreviewPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-[70vh] bg-[radial-gradient(circle_at_12%_14%,rgba(255,186,207,0.4),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(153,236,244,0.42),transparent_30%),linear-gradient(180deg,#f7feff_0%,#eefdff_100%)]">
      {isOpen ? (
        <CertificateModal
          name="陳小美"
          score={13}
          total={15}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
          <div className="rounded-[28px] border border-soft bg-white px-8 py-10 shadow-card">
            <p className="mb-4 text-xl font-black text-ink">證書預覽已關閉</p>
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-full border border-soft bg-soft-sky px-6 py-3 text-sm font-extrabold text-ink shadow-card transition-colors hover:bg-soft-mint"
            >
              重新打開證書
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificatePreviewPage;
