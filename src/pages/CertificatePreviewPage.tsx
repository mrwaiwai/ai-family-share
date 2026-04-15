import { useState } from "react";
import CertificateModal from "@/components/CertificateModal";

const CertificatePreviewPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-[70vh] bg-[radial-gradient(circle_at_top,_rgba(255,216,77,0.28),_transparent_45%),linear-gradient(180deg,_#fff8ef_0%,_#ffe7cf_100%)]">
      {isOpen ? (
        <CertificateModal
          name="陳小美"
          score={13}
          total={15}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <div className="flex min-h-[70vh] items-center justify-center px-6 text-center">
          <div className="rounded-[28px] border-4 border-slate-900 bg-white px-8 py-10 shadow-[0_12px_0_0_rgba(27,34,64,1)]">
            <p className="mb-4 text-xl font-black text-slate-900">證書預覽已關閉</p>
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-full border-4 border-slate-900 bg-[#ffd84d] px-6 py-3 text-sm font-black text-slate-900 shadow-[0_6px_0_0_rgba(27,34,64,1)]"
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
