import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  X, 
  Briefcase, 
  Folder, 
  Wrench, 
  Newspaper, 
  GraduationCap, 
  ArrowRight, 
  Command, 
  Sparkles,
  SearchCode
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data";

interface SearchSystemProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  category: "experience" | "projects" | "skills" | "press" | "education";
  title: string;
  subtitle: string;
  excerpt: string;
  tags?: string[];
  elementId: string;
}

const SUGGESTED_TAGS = [
  "GIS",
  "Transit",
  "Logistics",
  "Salesforce",
  "Zapier",
  "Sourcing",
  "Urban Planning",
  "OSHA",
  "Excel",
  "Policy"
];

export default function SearchSystem({ isOpen, onClose }: SearchSystemProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Escape key listener & CMD+K launcher
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Perform search across portfolio data
  const getResults = (): SearchResult[] => {
    if (!query.trim()) return [];

    const results: SearchResult[] = [];
    const q = query.toLowerCase();

    // 1. Search Experience
    portfolioData.experience.forEach((job, idx) => {
      const matchRole = job.role.toLowerCase().includes(q);
      const matchCompany = job.company.toLowerCase().includes(q);
      const matchLocation = job.location?.toLowerCase().includes(q) || false;
      const matchingBullets = job.bulletPoints.filter(b => b.toLowerCase().includes(q));

      if (matchRole || matchCompany || matchLocation || matchingBullets.length > 0) {
        const id = `exp-${job.company.includes("Heartwood") ? "heartwood" : job.company.includes("Via") ? "via" : "cmrta"}`;
        results.push({
          id: `exp-${idx}`,
          category: "experience",
          title: job.role,
          subtitle: `${job.company} | ${job.duration}`,
          excerpt: matchingBullets.length > 0 ? matchingBullets[0] : job.bulletPoints[0],
          elementId: id
        });
      }
    });

    // 2. Search Projects
    portfolioData.projects.forEach((proj, idx) => {
      const matchTitle = proj.title.toLowerCase().includes(q);
      const matchCat = proj.category.toLowerCase().includes(q);
      const matchDesc = proj.description.toLowerCase().includes(q);
      const matchTech = proj.techStack.some(t => t.toLowerCase().includes(q));
      const matchFeatures = proj.keyFeatures.some(f => f.toLowerCase().includes(q));

      if (matchTitle || matchCat || matchDesc || matchTech || matchFeatures) {
        results.push({
          id: `proj-${idx}`,
          category: "projects",
          title: proj.title,
          subtitle: proj.category,
          excerpt: proj.description,
          tags: proj.techStack,
          elementId: "projects"
        });
      }
    });

    // 3. Search Skills
    portfolioData.skills.forEach((skillCat, idx) => {
      const matchCat = skillCat.categoryName.toLowerCase().includes(q);
      const matchingSkills = skillCat.skills.filter(s => s.toLowerCase().includes(q));

      if (matchCat || matchingSkills.length > 0) {
        results.push({
          id: `skill-${idx}`,
          category: "skills",
          title: skillCat.categoryName,
          subtitle: "Core Competency Category",
          excerpt: matchingSkills.length > 0 
            ? `Matches: ${matchingSkills.join(", ")}`
            : skillCat.skills.slice(0, 4).join(", ") + "...",
          tags: skillCat.skills,
          elementId: "skills"
        });
      }
    });

    // 4. Search Press
    portfolioData.press.forEach((article, idx) => {
      const matchTitle = article.title.toLowerCase().includes(q);
      const matchSource = article.source.toLowerCase().includes(q);
      const matchSummary = article.summary.toLowerCase().includes(q);

      if (matchTitle || matchSource || matchSummary) {
        results.push({
          id: `press-${idx}`,
          category: "press",
          title: article.title,
          subtitle: `${article.source} — ${article.date}`,
          excerpt: article.summary,
          elementId: "press"
        });
      }
    });

    // 5. Search Education
    portfolioData.education.forEach((edu, idx) => {
      const matchDegree = edu.degree.toLowerCase().includes(q);
      const matchInst = edu.institution.toLowerCase().includes(q);
      const matchDetails = edu.details.some(d => d.toLowerCase().includes(q));
      const matchCapstoneTitle = edu.capstone?.title.toLowerCase().includes(q) || false;
      const matchCapstoneDesc = edu.capstone?.description.toLowerCase().includes(q) || false;

      if (matchDegree || matchInst || matchDetails || matchCapstoneTitle || matchCapstoneDesc) {
        results.push({
          id: `edu-${idx}`,
          category: "education",
          title: edu.degree,
          subtitle: edu.institution,
          excerpt: edu.capstone 
            ? `Capstone Study: ${edu.capstone.title}` 
            : edu.details[0],
          elementId: "education"
        });
      }
    });

    // Filter by UI category choice
    if (activeCategory === "All") return results;
    return results.filter(r => r.category === activeCategory.toLowerCase());
  };

  const results = getResults();

  const handleResultClick = (elementId: string) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        
        // Add flash styling effect to guide attention
        element.classList.add("ring-4", "ring-[#2563EB]/40", "transition-all", "duration-500", "scale-[1.01]");
        setTimeout(() => {
          element.classList.remove("ring-4", "ring-[#2563EB]/40", "scale-[1.01]");
        }, 2000);
      }
    }, 300);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case "experience": return <Briefcase className="text-blue-500" size={16} />;
      case "projects": return <Folder className="text-emerald-500" size={16} />;
      case "skills": return <Wrench className="text-amber-500" size={16} />;
      case "press": return <Newspaper className="text-rose-500" size={16} />;
      case "education": return <GraduationCap className="text-indigo-500" size={16} />;
      default: return <SearchCode className="text-zinc-500" size={16} />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto no-print">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#121110]/60 dark:bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="flex min-h-full items-start justify-center p-4 pt-[10vh] sm:p-6 sm:pt-[15vh]">
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.95, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -10, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white dark:bg-[#1A1A1A] border border-[#1A1A1A]/10 dark:border-white/10 shadow-2xl flex flex-col"
            >
              {/* Header Input Area */}
              <div className="relative border-b border-[#1A1A1A]/10 dark:border-white/10 p-5 bg-[#FAF9F7] dark:bg-[#151413] flex items-center">
                <Search className="absolute left-6 text-zinc-400 dark:text-zinc-500" size={20} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search experience, skills, research, press..."
                  className="w-full pl-12 pr-12 py-2 bg-transparent text-sm md:text-base text-[#1A1A1A] dark:text-[#F3F2F0] placeholder-zinc-400 dark:placeholder-zinc-500 font-sans focus:outline-hidden"
                />
                
                {query ? (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-6 p-1.5 rounded-lg bg-zinc-200/50 dark:bg-white/5 hover:bg-zinc-200 dark:hover:bg-white/15 text-zinc-500 dark:text-zinc-300 transition-colors"
                  >
                    <X size={14} />
                  </button>
                ) : (
                  <div className="absolute right-6 flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-[#22211F] text-[10px] text-zinc-400 font-mono font-bold tracking-tight uppercase">
                    <Command size={10} />
                    <span>K</span>
                  </div>
                )}
              </div>

              {/* Suggestions / Results Area */}
              <div className="flex-1 max-h-[380px] overflow-y-auto p-5 space-y-5">
                {/* Empty State / Recommended Tags */}
                {!query && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
                        <Sparkles size={11} className="text-[#2563EB]" />
                        <span>Suggested Keywords</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {SUGGESTED_TAGS.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => setQuery(tag)}
                            className="px-3.5 py-2 text-xs font-semibold text-[#1A1A1A] dark:text-[#F3F2F0] bg-zinc-100 hover:bg-[#2563EB] hover:text-white dark:bg-[#22211F] dark:hover:bg-[#2563EB] dark:hover:text-white border border-zinc-200/20 rounded-xl cursor-pointer transition-all"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/30 dark:border-zinc-800/30 space-y-1.5">
                      <p className="text-[11px] font-semibold text-[#1A1A1A]/80 dark:text-zinc-300">
                        Interactive Index Search
                      </p>
                      <p className="text-[10px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Search Blake's full profile including work coordinates, policy capstones, transit feasibility reports, news press coverage, and technical CRM automations instantly.
                      </p>
                    </div>
                  </div>
                )}

                {/* Categories Tabs inside Search Results */}
                {query && (
                  <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none border-b border-zinc-100 dark:border-zinc-800/40">
                    {["All", "Experience", "Projects", "Skills", "Press", "Education"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider whitespace-nowrap cursor-pointer transition-all ${
                          activeCategory === cat
                            ? "bg-[#1A1A1A] text-white dark:bg-white dark:text-[#121110]"
                            : "text-zinc-500 hover:text-[#1A1A1A] dark:hover:text-zinc-200"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}

                {/* Display Matched Search Results */}
                {query && results.length > 0 && (
                  <div className="space-y-2.5">
                    <p className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                      Matched Results ({results.length})
                    </p>
                    <div className="space-y-2">
                      {results.map((res) => (
                        <div
                          key={res.id}
                          onClick={() => handleResultClick(res.elementId)}
                          className="p-3.5 rounded-2xl bg-[#F9F8F6] dark:bg-[#22211F] hover:bg-[#2563EB]/10 dark:hover:bg-[#2563EB]/15 border border-[#1A1A1A]/5 dark:border-white/5 hover:border-[#2563EB]/30 dark:hover:border-[#2563EB]/30 cursor-pointer flex justify-between items-center transition-all group"
                        >
                          <div className="space-y-1 flex-1 pr-4">
                            <div className="flex items-center gap-2">
                              {getIcon(res.category)}
                              <span className="text-xs font-bold text-[#1A1A1A] dark:text-white tracking-tight">
                                {res.title}
                              </span>
                            </div>
                            <p className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                              {res.subtitle}
                            </p>
                            <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-relaxed line-clamp-2">
                              {res.excerpt}
                            </p>
                          </div>
                          <div className="p-2 rounded-xl bg-white dark:bg-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity text-[#2563EB] shadow-sm shrink-0">
                            <ArrowRight size={14} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Matches Found */}
                {query && results.length === 0 && (
                  <div className="text-center py-10 space-y-2">
                    <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      No matching records found for "{query}"
                    </p>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-xs mx-auto">
                      Try searching broader keywords like "transit", "GIS", "sourcing", "outreach", or "policy".
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Instructions Footer */}
              <div className="p-3 border-t border-[#1A1A1A]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#151413] flex items-center justify-between text-[10px] text-zinc-400">
                <span className="flex items-center gap-1.5 font-sans">
                  <span>Press <kbd className="px-1.5 py-0.5 rounded-sm bg-zinc-200 dark:bg-zinc-800 text-zinc-500 font-mono text-[9px]">ESC</kbd> to close</span>
                </span>
                <span className="font-mono text-zinc-400/80">
                  Blake Dyson Gibbons • Portfolio Indexer v1.0
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
