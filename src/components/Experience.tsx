import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-transparent relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-14 space-y-3"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">Career History</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Professional Experience
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            Chronological log of full-time alignments and specialized internships optimizing public and private transit systems.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l border-[#1A1A1A]/10 dark:border-white/10 ml-4 md:ml-6 space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
              className="relative pl-8 md:pl-10"
            >
              
              {/* Chronological Dot Indicator */}
              <div className="absolute -left-[5.5px] top-2.5 w-[10px] h-[10px] rounded-full border border-[#1A1A1A]/20 dark:border-white/20 bg-[#1A1A1A] dark:bg-white flex items-center justify-center" />

              {/* Boxed Content */}
              <div className="p-6 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left part (Text specifications) */}
                  <div className={job.imageUrl ? "lg:col-span-8" : "lg:col-span-12"}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        {/* Role / Title */}
                        <h3 className="font-serif text-lg italic font-normal text-[#1A1A1A] dark:text-white">
                          {job.role}
                        </h3>
                        
                        {/* Organization / Company */}
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 mt-1">
                          {job.company}
                        </p>
                      </div>

                      {/* Metadata Chips (Duration & Location) */}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E5E2D9]/40 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-white rounded-full">
                          <Calendar size={11} />
                          <span>{job.duration}</span>
                        </span>
                        {job.location && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E5E2D9]/40 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-white rounded-full">
                            <MapPin size={11} />
                            <span>{job.location}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="h-[1px] bg-[#1A1A1A]/10 dark:bg-white/10 my-4" />

                    {/* Job Achievements / Bullets */}
                    <ul className="space-y-3">
                      {job.bulletPoints.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-[#1A1A1A]/80 dark:text-white/80 text-xs md:text-sm leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="text-[#1A1A1A]/40 dark:text-white/45 font-bold shrink-0 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right part (Experience Image banner) */}
                  {job.imageUrl && (
                    <div className="lg:col-span-4 h-36 lg:h-44 w-full rounded-xl border border-[#1A1A1A]/10 dark:border-white/10 overflow-hidden relative shadow-sm self-center">
                      <img
                        src={job.imageUrl}
                        alt={job.company}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-550 hover:scale-102"
                      />
                    </div>
                  )}

                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
