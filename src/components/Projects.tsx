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
    <section id="projects" className="py-20 bg-transparent relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">Case Studies</p>
            <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
              Featured Capstones & Automations
            </h2>
            <p className="max-w-md text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
              Selected research capstones and automated workflows built using geospatial mapping systems and CRM integrations.
            </p>
          </div>

          {/* Filter Navigation Chips */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#1A1A1A] text-white dark:bg-white dark:text-[#121110] shadow-sm"
                    : "bg-transparent border border-[#1A1A1A]/20 dark:border-white/20 text-[#1A1A1A]/60 dark:text-white/60 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5"
                }`}
              >
                {cat === "All" ? "All Highlights" : cat.replace(" & ", " & ")}
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
              className="p-6 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl flex flex-col justify-between hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Visual Banner */}
                {project.imageUrl && (
                  <div className="w-full h-36 bg-[#E5E2D9] dark:bg-zinc-800 border border-[#1A1A1A]/10 dark:border-white/10 rounded-xl overflow-hidden mb-2 relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-500 ease-out"
                    />
                  </div>
                )}

                {/* Header */}
                <div className="flex justify-between items-start">
                  <div className="w-[36px] h-[36px] rounded-full bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 flex items-center justify-center text-[#1A1A1A] dark:text-white">
                    <Folder size={15} />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 dark:text-white/40 bg-[#E5E2D9]/20 dark:bg-white/2 border border-[#1A1A1A]/10 dark:border-white/10 px-2.5 py-1 rounded-full">
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
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40">Major Outcomes</p>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, fidx) => (
                      <li key={fidx} className="flex gap-2 items-start text-xs text-[#1A1A1A]/85 dark:text-white/85 leading-normal">
                        <CheckCircle size={12} className="text-[#1A1A1A] dark:text-white shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies chip tags */}
              <div className="pt-6 space-y-3">
                <div className="h-[1px] bg-[#1A1A1A]/10 dark:bg-white/10 w-full" />
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#E5E2D9]/40 dark:bg-white/5 text-[#1A1A1A]/80 dark:text-white/80 border border-[#1A1A1A]/10 dark:border-white/10 rounded-full text-[9px] font-bold uppercase tracking-wide"
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
