import { ArrowUpRight, Newspaper } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function Press() {
  const { press } = portfolioData;

  return (
    <section id="press" className="py-24 relative border-b border-[#1A1A1A]/10 dark:border-white/10 bg-white/30 dark:bg-zinc-900/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 mb-16"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">In The Press</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Media Coverage & Publications
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            Featured academic features, local broadcast coverages, policy breakthroughs, and community collaboration milestones.
          </p>
        </motion.div>

        {/* Press Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {press.map((article, idx) => (
            <motion.a
              key={idx}
              id={`press-card-${idx}`}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl overflow-hidden hover:border-blue-500/25 dark:hover:border-blue-500/20 hover:shadow-md transition-all duration-300 group cursor-pointer h-full"
            >
              {/* Card Image Header */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100 dark:bg-zinc-800 border-b border-slate-200/50 dark:border-slate-800/50">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                />
                
                {/* Source Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-blue-500/10 flex items-center gap-1.5 shadow-xs">
                  <Newspaper size={11} className="text-blue-600 dark:text-blue-400" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300">
                    {article.source}
                  </span>
                </div>
              </div>

              {/* Card Meta and Info */}
              <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                <div className="space-y-2">
                  {/* Article Date */}
                  <span className="text-[10px] font-bold text-[#1A1A1A]/35 dark:text-white/35 uppercase tracking-wider block">
                    {article.date}
                  </span>
                  
                  {/* Title */}
                  <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  
                  {/* Short Summary */}
                  <p className="text-xs text-[#1A1A1A]/70 dark:text-white/70 leading-relaxed font-normal">
                    {article.summary}
                  </p>
                </div>

                {/* Read Full Article CTAs */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 dark:text-white/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <span>Read full story</span>
                  <div className="p-1 rounded-full bg-slate-50 dark:bg-slate-800/60 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <ArrowUpRight size={12} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
