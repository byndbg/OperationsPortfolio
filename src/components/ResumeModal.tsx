import { X, Printer, Copy, Check, ExternalLink, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { personalInfo, experience, education, skills } = portfolioData;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyRawText = async () => {
    // Compile clean resume plain text
    const text = `
BLAKE DYSON GIBBONS
(803) 760-9872 | bdg710@gmail.com | Columbia, SC
LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
${personalInfo.summary}

PROFESSIONAL EXPERIENCE
${experience
  .map(
    (exp) => `${exp.role.toUpperCase()} - ${exp.company.toUpperCase()}
${exp.duration} | ${exp.location || ""}
${exp.bulletPoints.map((b) => `• ${b}`).join("\n")}`
  )
  .join("\n\n")}

EDUCATION
${education
  .map(
    (edu) => `${edu.degree}
${edu.institution} | ${edu.duration}
${edu.details?.map((d) => `• ${d}`).join("\n")}
${edu.capstone ? `Capstone: ${edu.capstone.title}\n${edu.capstone.description}` : ""}`
  )
  .join("\n\n")}

SKILLS & TECHNOLOGIES
${skills.map((c) => `${c.categoryName}: ${c.skills.join(", ")}`).join("\n")}
    `.trim();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fail silently
    }
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm no-print">
      {/* Container */}
      <div className="bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200">
        
        {/* Top Control Bar */}
        <div className="p-4 bg-[#E5E2D9] dark:bg-[#121110] border-b border-[#1A1A1A]/10 dark:border-white/10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] dark:bg-white" />
            <span className="text-[10px] font-bold text-[#1A1A1A]/60 dark:text-white/60 uppercase tracking-wider leading-none">Interactive CV Transcriber</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Copy Clipboard */}
            <button
              onClick={handleCopyRawText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1A1A1A]/20 dark:border-white/20 text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-white bg-transparent hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-colors"
              title="Copy clean resume text to clipboard"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-600 dark:text-emerald-400" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            {/* Print direct */}
            <button
              onClick={() => {
                onClose();
                window.print();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A1A1A] text-white dark:bg-white dark:text-[#121110] text-[9px] font-bold uppercase tracking-wider hover:opacity-90 transition-all cursor-pointer"
              title="Save directly as PDF via standard print"
            >
              <Printer size={12} />
              <span>Print/Export PDF</span>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#1A1A1A]/50 hover:text-[#1A1A1A] dark:text-white/50 dark:hover:text-white hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
              title="Dismiss resume reader modal"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Scrollable sheet emulator */}
        <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-[#F9F8F6] dark:bg-[#121110]">
          <div className="bg-[#F9F8F6] dark:bg-zinc-900 border border-[#1A1A1A]/15 dark:border-zinc-800 p-8 sm:p-12 md:p-16 rounded-xl shadow-xs max-w-3xl mx-auto space-y-8 font-sans text-[#1A1A1A] dark:text-zinc-200 text-left">
            
            {/* CV Header */}
            <div className="text-center space-y-3 pb-6 border-b border-[#1A1A1A] dark:border-zinc-100">
              <h1 className="font-serif italic font-normal text-2xl sm:text-3xl text-[#1A1A1A] dark:text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/40">
                <span className="flex items-center gap-1">
                  <Phone size={11} />
                  <span>{personalInfo.phone}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail size={11} />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin size={11} />
                  <span>{personalInfo.location}</span>
                </span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/40">
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline flex items-center justify-center gap-1">
                  <span>linkedin.com/in/blake-gibbons/</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* Profile summary */}
            <div className="space-y-2.5">
              <h2 className="font-serif italic text-[13px] font-normal text-[#1A1A1A] dark:text-white uppercase tracking-wider pb-1 border-b border-[#1A1A1A]/10 dark:border-white/10">
                Summary
              </h2>
              <p className="text-[11px] leading-relaxed font-normal text-[#1A1A1A]/80 dark:text-zinc-350">
                {personalInfo.summary}
              </p>
            </div>

            {/* Work experience */}
            <div className="space-y-5">
              <h2 className="font-serif italic text-[13px] font-normal text-[#1A1A1A] dark:text-white uppercase tracking-wider pb-1 border-b border-[#1A1A1A]/10 dark:border-white/10">
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((job, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-0.5 text-xs font-bold text-[#1A1A1A] dark:text-white">
                      <span className="font-serif italic font-normal text-sm">{job.role}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-zinc-450">{job.duration}</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/40">{job.company}</p>
                    <ul className="list-disc list-inside space-y-1 pl-1">
                      {job.bulletPoints.map((bp, bidx) => (
                        <li key={bidx} className="text-[11px] leading-relaxed text-[#1A1A1A]/80 dark:text-zinc-400 pl-1 -indent-3 ml-3">
                          {bp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h2 className="font-serif italic text-[13px] font-normal text-[#1A1A1A] dark:text-white uppercase tracking-wider pb-1 border-b border-[#1A1A1A]/10 dark:border-white/10">
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-y-0.5 text-xs font-bold text-[#1A1A1A] dark:text-white">
                      <span className="font-serif italic font-normal text-sm">{edu.degree}</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-zinc-450">{edu.duration}</span>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/40">{edu.institution}</p>
                    {edu.details && (
                      <ul className="list-disc list-inside space-y-0.5 pl-1">
                        {edu.details.map((det, detIdx) => (
                           <li key={detIdx} className="text-[11px] text-[#1A1A1A]/80 dark:text-zinc-400 pl-1 -indent-3 ml-3">
                            {det}
                          </li>
                        ))}
                      </ul>
                    )}
                    {edu.capstone && (
                      <p className="text-[11px] text-[#1A1A1A]/70 dark:text-zinc-450 italic mt-0.5 pl-1.5">
                        <strong className="not-italic font-bold uppercase tracking-wider text-[10px] text-[#1A1A1A]/50 dark:text-white/40 mr-1">Capstone:</strong> {edu.capstone.title} — {edu.capstone.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2.5">
              <h2 className="font-serif italic text-[13px] font-normal text-[#1A1A1A] dark:text-white uppercase tracking-wider pb-1 border-b border-[#1A1A1A]/10 dark:border-white/10">
                Skills & Technologies
              </h2>
              <div className="space-y-1.5 text-[11px] flex flex-col gap-1.5">
                {skills.map((c, idx) => (
                  <p key={idx} className="leading-relaxed">
                    <strong className="text-[#1A1A1A] dark:text-[#E5E2D9] font-bold uppercase tracking-wide text-[10px] inline-block w-44">{c.categoryName}:</strong>
                    <span className="text-[#1A1A1A]/80 dark:text-zinc-400">{c.skills.join(", ")}</span>
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
