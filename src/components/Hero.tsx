import { ArrowUpRight, Mail, FileText, MapPin } from "lucide-react";
import { portfolioData } from "../data";
import { motion } from "motion/react";

interface HeroProps {
  onOpenPdfModal: () => void;
}

export default function Hero({ onOpenPdfModal }: HeroProps) {
  const { personalInfo } = portfolioData;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Editorial Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a05_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a05_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Main Title Content (Cols 1-7) */}
          <div className="md:col-span-7 space-y-6">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#E5E2D9] dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-white"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Roles & Sourcing Placements</span>
            </motion.div>

            {/* Main Headline with high-end editorial dual formatting */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1A1A1A] dark:text-white leading-[1.08] tracking-tight"
              >
                Hi, I'm <span className="not-italic font-black tracking-tighter text-[#1A1A1A] dark:text-white">{personalInfo.firstName}</span> <br />
                <span className="not-italic font-bold tracking-tighter text-[#1A1A1A]/80 dark:text-white/80 text-3xl sm:text-4xl lg:text-5xl block mt-2">
                  {personalInfo.title}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#1A1A1A]/70 dark:text-white/70 text-base md:text-lg font-normal leading-relaxed max-w-xl"
              >
                {personalInfo.tagline}
              </motion.p>
            </div>

            {/* Quick Location Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-1.5 text-[#1A1A1A]/40 dark:text-white/40 text-xs font-bold uppercase tracking-widest"
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#F9F8F6] bg-[#1A1A1A] dark:bg-[#F3F2F0] dark:text-[#121110] rounded-full hover:opacity-90 shadow-md transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Let's connect</span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href="https://cal.com/blake-gibbons"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#F3F2F0] bg-transparent border border-[#1A1A1A]/20 dark:border-white/20 rounded-full hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 transition-all"
              >
                <FileText size={14} className="text-[#1A1A1A]/45 dark:text-white/45" />
                <span>Book time on my calendar</span>
              </a>
            </motion.div>
          </div>

          {/* Portrait Headshot (Cols 8-12) */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"
            >
              {/* Subtle background card spacing */}
              <div className="absolute inset-0 border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl rotate-3 scale-102 bg-[#E5E2D9]/30 dark:bg-white/2 pointer-events-none" />

              {/* Portrait container image */}
              <div className="absolute inset-0 bg-[#E5E2D9] dark:bg-zinc-900 border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden transition-transform duration-500 group">
                <img
                  src={personalInfo.portraitUrl}
                  alt={personalInfo.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-102 transition-all duration-500 ease-out"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
