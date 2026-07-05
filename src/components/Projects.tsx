import { useState } from "react";
import { ArrowUpRight, Folder, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData, Project } from "../data";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Geospatial & Urban Planning", "Public Policy Analysis", "Systems & Automations"];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 bg-slate-50/20 dark:bg-zinc-950/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Case Studies</p>
            <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
              Featured Capstones & Automations
            </h2>
            <p className="max-w-md text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
              Selected research capstones and automated workflows built using geospatial mapping systems and CRM integrations.
            </p>
          </div>

          {/* Filter Navigation Chips */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border shadow-xs ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 text-white border-transparent shadow-sm scale-[1.02]"
                    : "bg-white dark:bg-[#1A1F2C] border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                }`}
              >
                {cat === "All" ? "All Highlights" : cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(idx * 0.1, 0.4), ease: "easeOut" }}
              className="p-6 bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/20 transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Visual Banner */}
                {project.imageUrl && (
                  <div className="w-full h-36 bg-slate-100 dark:bg-zinc-800 border border-slate-200/50 dark:border-slate-800/50 rounded-xl overflow-hidden mb-2 relative shadow-xs">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                  </div>
                )}

                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="w-[36px] h-[36px] rounded-full bg-blue-50/80 dark:bg-blue-950/30 border border-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Folder size={15} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-500/10 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-2">
                  <h3 className="font-serif text-[17px] italic font-normal text-[#1A1A1A] dark:text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 dark:text-white/70 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Feature Bullets */}
                <div className="space-y-2 pt-2">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/60 dark:text-blue-400/60">Major Outcomes</p>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-2 items-start text-xs text-slate-700 dark:text-white/85 leading-normal">
                        <CheckCircle size={13} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies chip tags */}
              <div className="pt-6 space-y-3">
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800/80 w-full" />
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-800/80 rounded-md text-[9px] font-bold uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
