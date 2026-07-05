import { ArrowUp, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data";

export default function Footer() {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#111622] border-t border-[#1A1A1A]/10 dark:border-white/10 py-16 relative no-print">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand/Credentials */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <span className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-serif italic text-xs font-semibold shadow-xs">
                {personalInfo.firstName[0]}
                {personalInfo.lastName[0]}
              </span>
              <span className="font-serif italic text-lg font-normal text-[#1A1A1A] dark:text-white">{personalInfo.name}</span>
            </div>
            <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-widest">
              Operations & Logistics Coordinator • Geography & Public Policy
            </p>
          </div>

          {/* Socials / Direct Channels */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-white/60 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 rounded-full transition-all text-sm shadow-xs"
              title="LinkedIn Network"
            >
              <Linkedin size={15} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-white/60 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 rounded-full transition-all text-sm shadow-xs"
              title="Send Direct Email"
            >
              <Mail size={15} />
            </a>
          </div>

          {/* Back to top mechanism */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-white/80 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 rounded-full transition-all cursor-pointer shadow-xs"
            title="Scroll back to top of screen"
          >
            <span>Scroll to Top</span>
            <ArrowUp size={12} />
          </button>
        </div>

        {/* Divider & Copyright */}
        <div className="h-[1px] bg-slate-200 dark:bg-slate-800 my-8 w-full" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] text-[#1A1A1A]/40 dark:text-white/40 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Blake Dyson Gibbons. All rights reserved.</p>
          <p>
            Designed with absolute care by{" "}
            <span className="text-blue-600 dark:text-blue-400 font-bold">Blake</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
