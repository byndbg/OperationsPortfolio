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
          className="mb-16 space-y-3"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Career History</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Professional Experience
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            Professional background in warehouse operations, business development, and public transit management.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-blue-200 dark:border-blue-950/60 ml-4 md:ml-6 space-y-12">
          {experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${idx}`}
              id={
                job.company.includes("Heartwood") ? "exp-heartwood" :
                job.company.includes("Via") ? "exp-via" :
                job.company.includes("Central Midlands") || job.company.includes("CMRTA") ? "exp-cmrta" : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
              className="relative pl-8 md:pl-10 scroll-mt-24 animate-fade-in"
            >
              
              {/* Chronological Dot Indicator */}
              <div className="absolute -left-[7px] top-[26px] w-[12px] h-[12px] rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-[#121110] flex items-center justify-center shadow-xs" />

              {/* Boxed Content */}
              <div className="p-7 bg-white dark:bg-[#1A1F2C] border-y border-r border-l-4 border-slate-200/50 dark:border-slate-800/80 border-l-blue-600 dark:border-l-blue-500 rounded-r-2xl rounded-l-md shadow-xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700/80 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  
                  {/* Left part (Text specifications) */}
                  <div className={job.imageUrl ? "lg:col-span-8 space-y-4" : "lg:col-span-12 space-y-4"}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        {/* Role / Title */}
                        <h3 className="font-serif text-lg italic font-normal text-blue-950 dark:text-blue-300 leading-snug">
                          {job.role}
                        </h3>
                        
                        {/* Organization / Company */}
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 mt-1">
                          {job.company}
                        </p>
                      </div>

                      {/* Metadata Chips (Duration & Location) */}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/70 dark:bg-blue-950/20 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 border border-blue-100/30 dark:border-blue-900/20 rounded-full">
                          <Calendar size={11} className="text-blue-500" />
                          <span>{job.duration}</span>
                        </span>
                        {job.location && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50/70 dark:bg-blue-950/20 text-[10px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 border border-blue-100/30 dark:border-blue-900/20 rounded-full">
                            <MapPin size={11} className="text-blue-500" />
                            <span>{job.location}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="h-[1px] bg-slate-100 dark:bg-slate-800/80" />

                    {/* Job Achievements / Bullets */}
                    <ul className="space-y-3 pt-1">
                      {job.bulletPoints.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-slate-700 dark:text-white/85 text-xs md:text-sm leading-relaxed flex items-start gap-3"
                        >
                          <span className="text-blue-500 dark:text-blue-400 font-bold shrink-0 mt-1 select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right part (Experience Image banner) */}
                  {job.imageUrl && (
                    <div className="lg:col-span-4 h-36 lg:h-44 w-full rounded-xl border border-slate-200/50 dark:border-slate-800/50 overflow-hidden relative shadow-xs self-center">
                      <img
                        src={job.imageUrl}
                        alt={job.company}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-550 hover:scale-103"
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
