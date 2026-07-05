import { GraduationCap, Award, Landmark, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function Education() {
  const { education } = portfolioData;

  const getInstitutionIcon = (inst: string) => {
    return <GraduationCap size={16} />;
  };

  return (
    <section id="education" className="py-24 relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 bg-white/40 dark:bg-zinc-900/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 space-y-3"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Academic Background</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Education & Fellowships
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            A background combining structural spatial science with intensive quantitative political science and public policy research.
          </p>
        </motion.div>

        {/* Education Timeline / Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={`${edu.institution}-${idx}`}
              id={
                edu.institution.includes("South Carolina") ? "edu-usc" :
                edu.institution.includes("Michigan") ? "edu-umich" : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.15, 0.4), ease: "easeOut" }}
              className="p-6 md:p-8 bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl flex flex-col justify-between hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 scroll-mt-24 shadow-xs"
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">
                      {edu.duration}
                    </span>
                    <h3 className="font-serif text-lg italic font-normal text-blue-950 dark:text-blue-300 leading-tight mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="p-2.5 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full shrink-0">
                    {getInstitutionIcon(edu.institution)}
                  </div>
                </div>

                <div className="h-[1px] bg-slate-100 dark:bg-slate-800/80" />

                {/* Academic Highlights & Awards */}
                {edu.details && (
                  <div className="space-y-2.5">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/75 dark:text-blue-400/80 flex items-center gap-1.5">
                      <Award size={12} className="text-blue-600 dark:text-blue-400" />
                      <span>Honors & Affiliations</span>
                    </p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-slate-700 dark:text-white/80 text-xs md:text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-blue-500 dark:text-blue-400 select-none font-bold mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Embedded Capstone Segment */}
                {edu.capstone && (
                  <div className="p-5 rounded-xl bg-gradient-to-r from-blue-50/40 to-indigo-50/20 dark:from-blue-950/10 dark:to-indigo-950/5 border border-blue-500/10 dark:border-blue-900/30 space-y-2">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-blue-800 dark:text-blue-300 flex items-center gap-1.5">
                      <BookOpen size={11} className="text-blue-500 dark:text-blue-400" />
                      <span>Academic Capstone Study</span>
                    </h4>
                    <p className="text-xs font-bold text-blue-950 dark:text-slate-100 leading-tight">
                      {edu.capstone.title}
                    </p>
                    <p className="text-[11px] text-[#1A1A1A]/70 dark:text-white/70 leading-relaxed font-normal">
                      {edu.capstone.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
