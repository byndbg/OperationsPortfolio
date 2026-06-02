import { Sliders, Compass, Target, Settings, Check } from "lucide-react";
import { portfolioData } from "../data";

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Operations & Logistics":
        return <Sliders className="text-[#1A1A1A] dark:text-white" size={17} />;
      case "GIS & Geospatial Analysis":
        return <Compass className="text-[#1A1A1A] dark:text-white" size={17} />;
      case "CRM & Stakeholder Management":
        return <Target className="text-[#1A1A1A] dark:text-white" size={17} />;
      default:
        return <Settings className="text-[#1A1A1A] dark:text-white" size={17} />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-transparent relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-14 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">Core Competencies</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Professional Skillset & Platforms
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            A comprehensive list of core logistics domains, geospatial mapping suites, CRM software, and automation tools backed by real-world deployments.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((category) => (
            <div
              key={category.categoryName}
              className="p-6 bg-[#F9F8F6] dark:bg-[#121110] rounded-2xl border border-[#1A1A1A]/10 dark:border-white/10 flex flex-col justify-between hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-colors duration-300"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#1A1A1A]/5 dark:bg-white/5 rounded-full border border-[#1A1A1A]/10 dark:border-white/10">
                    {getCategoryIcon(category.categoryName)}
                  </div>
                  <h3 className="font-serif text-[15px] italic font-normal text-[#1A1A1A] dark:text-white">
                    {category.categoryName}
                  </h3>
                </div>

                <div className="h-[1px] bg-[#1A1A1A]/10 dark:bg-white/10 w-full" />

                {/* Skill Tags List */}
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E5E2D9]/30 hover:bg-[#E5E2D9]/60 dark:bg-white/5 dark:hover:bg-white/10 text-[#1A1A1A]/80 dark:text-white/80 rounded-full border border-[#1A1A1A]/10 dark:border-white/10 hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      <Check size={11} className="text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
