import { ArrowUpRight, Newspaper } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data";

export default function Press() {
  const { press } = portfolioData;

  return (
    <section id="press" className="py-20 bg-transparent relative border-b border-[#1A1A1A]/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 20 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 mb-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">In The Press</p>
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
              className="flex flex-col bg-[#FFFFFF] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl overflow-hidden hover:border-[#1A1A1A]/20 dark:hover:border-white/20 hover:shadow-md transition-shadow group cursor-pointer h-full"
            >
              {/* Card Image Header */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#1A1A1A]/5 dark:bg-white/5 border-b border-[#1A1A1A]/10 dark:border-white/10">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                />
                
                {/* Source Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#FFFFFF]/90 dark:bg-[#121110]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#1A1A1A]/5 dark:border-white/5 flex items-center gap-1.5 shadow-sm">
                  <Newspaper size={11} className="text-[#405E7F] dark:text-[#F3F2F0]" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/70 dark:text-[#FFFFFF]/70">
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
                  <h3 className="font-display font-semibold text-sm sm:text-base text-[#1A1A1A] dark:text-white leading-snug group-hover:text-[#405E7F] dark:group-hover:text-[#F3F2F0]/80 transition-colors">
                    {article.title}
                  </h3>
                  
                  {/* Short Summary */}
                  <p className="text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                {/* Read Full Article CTAs */}
                <div className="flex items-center justify-between pt-2 border-t border-[#1A1A1A]/5 dark:border-white/5 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 dark:text-white/40 group-hover:text-[#1A1A1A] dark:group-hover:text-[#FFFFFF] transition-colors">
                  <span>Read full story</span>
                  <div className="p-1 rounded-full bg-[#1A1A1A]/5 dark:bg-white/5 group-hover:bg-[#405E7F] group-hover:text-white transition-colors">
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
