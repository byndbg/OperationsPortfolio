import { GraduationCap, Award, Landmark, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function Education() {
  const { education } = portfolioData;

  const getInstitutionIcon = (inst: string) => {
    return <GraduationCap className="text-[#1A1A1A] dark:text-white" size={16} />;
  };

  return (
    <section id="education" className="py-20 bg-transparent relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 space-y-3"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">Academic Background</p>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.15, 0.4), ease: "easeOut" }}
              className="p-6 md:p-8 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-all"
            >
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold tracking-widest uppercase text-[#1A1A1A]/40 dark:text-white/40">
                      {edu.duration}
                    </span>
                    <h3 className="font-serif text-lg italic font-normal text-[#1A1A1A] dark:text-white leading-tight mt-1">
                      {edu.degree}
                    </h3>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="p-2.5 bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 rounded-full shrink-0">
                    {getInstitutionIcon(edu.institution)}
                  </div>
                </div>

                <div className="h-[1px] bg-[#1A1A1A]/10 dark:bg-white/10" />

                {/* Academic Highlights & Awards */}
                {edu.details && (
                  <div className="space-y-2.5">
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40 flex items-center gap-1.5">
                      <Award size={11} />
                      <span>Honors & Affiliations</span>
                    </p>
                    <ul className="space-y-2">
                      {edu.details.map((detail, dIdx) => (
                        <li
                          key={dIdx}
                          className="text-[#1A1A1A]/80 dark:text-white/80 text-xs md:text-sm leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#1A1A1A]/45 dark:text-white/40 select-none font-bold mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Embedded Capstone Segment */}
                {edu.capstone && (
                  <div className="p-5 rounded-xl bg-[#E5E2D9]/40 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 space-y-2">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40 flex items-center gap-1.5">
                      <BookOpen size={11} className="text-[#1A1A1A]/45 dark:text-white/40" />
                      <span>Academic Capstone Study</span>
                    </h4>
                    <p className="text-xs font-bold text-[#1A1A1A] dark:text-white leading-tight">
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
