import { FileDown, Printer, Award } from "lucide-react";

interface ResumeDownloadProps {
  onOpenPdfModal: () => void;
}

export default function ResumeDownload({ onOpenPdfModal }: ResumeDownloadProps) {
  return (
    <section className="py-16 bg-transparent border-t border-b border-[#1A1A1A]/10 dark:border-white/10 no-print">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Banner container */}
        <div className="p-8 md:p-12 bg-[#E5E2D9] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-3xl relative overflow-hidden text-center md:text-left md:flex items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-full text-[#1A1A1A]/70 dark:text-[#F3F2F0]/80 border border-[#1A1A1A]/10 dark:border-white/10">
              <Award size={11} className="text-[#1A1A1A]/50 dark:text-white/40" />
              <span className="text-[9px] font-bold uppercase tracking-widest">Print & PDF-Export Available</span>
            </div>

            <h3 className="font-serif italic text-2xl sm:text-3xl text-[#1A1A1A] dark:text-white font-normal leading-tight">
              Looking for the full resume?
            </h3>
            
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 dark:text-white/70 leading-relaxed font-normal">
              Get an instantly compiled, print-friendly resume. Designed with clean typography metrics for recruiters, ATS systems, and easy PDF printing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 pt-6 md:pt-0 relative z-10 w-full md:w-auto">
            {/* Download/Print with window.print() */}
            <button
              onClick={() => window.print()}
              className="px-6 py-3 bg-[#1A1A1A] text-white dark:bg-white dark:text-[#121110] font-bold text-[10px] uppercase tracking-widest rounded-full hover:opacity-90 shadow-sm transition-all cursor-pointer w-full md:w-52"
            >
              <Printer size={13} />
              <span>Print/Save as PDF</span>
            </button>

            {/* Structured highlights popup */}
            <button
              onClick={onOpenPdfModal}
              className="px-6 py-3 bg-transparent text-[#1A1A1A] dark:text-[#F3F2F0] font-bold text-[10px] uppercase tracking-widest rounded-full border border-[#1A1A1A]/20 dark:border-white/20 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-all w-full md:w-52"
            >
              <FileDown size={13} className="text-[#1A1A1A]/50 dark:text-white/40" />
              <span>View Resume Text</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
