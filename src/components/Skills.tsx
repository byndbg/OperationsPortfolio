import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders, Compass, Target, Settings, Check } from "lucide-react";
import { portfolioData } from "../data";

interface SkillDetail {
  proficiency: string;
  application: string;
}

const skillDetails: Record<string, SkillDetail> = {
  // Operations & Logistics
  "Fleet Operations Tracking": {
    proficiency: "Advanced",
    application: "Coordinated scheduled maintenance and routing for a 10-vehicle fleet.",
  },
  "Inventory Bulk Sourcing": {
    proficiency: "Expert",
    application: "Slashed bulk supply and storage costs by 66% through strategic vendor handling.",
  },
  "Zapier Workflow Automation": {
    proficiency: "Expert",
    application: "Configured multi-step triggers within Salesforce to eliminate manual outreach steps.",
  },
  "MCP Webhook Protocols": {
    proficiency: "Advanced",
    application: "Integrated third-party API webhooks and models directly to clean data schemas.",
  },
  "OSHA Safety Guidelines": {
    proficiency: "Advanced",
    application: "Spearheaded facility signage, security practices, and first-aid response updates.",
  },
  "Procurement & Auditing": {
    proficiency: "Advanced",
    application: "Designed modern, structured sheets reducing transit route auditing timelines.",
  },

  // GIS & Geospatial Analysis
  "ArcMap GIS": {
    proficiency: "Expert",
    application: "Conducted transit corridor studies and generated spatial suitability models.",
  },
  "ArcCloud Analytics": {
    proficiency: "Advanced",
    application: "Coupled regional public records with political and age clustering indexes.",
  },
  "Google Earth Pro Spatial Modelling": {
    proficiency: "Expert",
    application: "Simulated high-frequency transit routes and corridor charging network nodes.",
  },
  "Remix Transit Planning": {
    proficiency: "Advanced",
    application: "Optimized route corridors, passenger access metrics, and transit stop coordinates.",
  },
  "KML/KMZ File Formatting": {
    proficiency: "Advanced",
    application: "Wrote structured transit network spatial tables for visual overlay projections.",
  },

  // CRM & Stakeholder Management
  "Salesforce Admin": {
    proficiency: "Advanced",
    application: "Streamlined outbound municipal lead pipelines and set automation triggers.",
  },
  "HubSpot CRM Pipelines": {
    proficiency: "Advanced",
    application: "Optimized deal-tracking boards, target criteria filters, and response rates.",
  },
  "Monday.com Boards": {
    proficiency: "Advanced",
    application: "Constructed workflow tracking environments for multi-person operations units.",
  },
  "Corporate Outreach Campaigning": {
    proficiency: "Expert",
    application: "Dispatched highly customized account outreach campaigns generating $26M+ in leads.",
  },
  "Client Correspondence Scheduling": {
    proficiency: "Expert",
    application: "Maintained professional, high-priority relationships across government clients.",
  },

  // Tools & Platforms
  "Google Workspace Suite": {
    proficiency: "Expert",
    application: "Developed collaborative document libraries and cloud storage frameworks.",
  },
  "Microsoft Office Excel Pro": {
    proficiency: "Expert",
    application: "Formulated custom quantitative microeconomic sheets and pivot tables for reports.",
  },
  "Canva Graphics": {
    proficiency: "Advanced",
    application: "Engineered high-contrast visual materials, layout assets, and branding flyers.",
  },
  "Hootsuite Management": {
    proficiency: "Advanced",
    application: "Coordinated digital social channels to boost resident awareness of public transit.",
  },
  "Apple iWork Platforms": {
    proficiency: "Expert",
    application: "Engineered highly polished, minimal presentations for board and faculty reviews.",
  },
  "Social Copywriting & Analytics": {
    proficiency: "Advanced",
    application: "Drafted targeted, concise messaging aligned with organizational growth objectives.",
  },
};

const SkillTag: React.FC<{ skill: string; categoryName: string }> = ({ skill, categoryName }) => {
  const [isHovered, setIsHovered] = useState(false);
  const details = skillDetails[skill] || { proficiency: "Expert", application: "Proven professional competency." };

  const getColorClasses = () => {
    switch (categoryName) {
      case "Operations & Logistics":
        return {
          tag: "bg-blue-50/50 hover:bg-blue-100/80 text-blue-800 border-blue-200/40 dark:bg-blue-950/20 dark:hover:bg-blue-950/45 dark:text-blue-300 dark:border-blue-900/30",
          check: "text-blue-500",
          focus: "focus:ring-blue-500/50"
        };
      case "GIS & Geospatial Analysis":
        return {
          tag: "bg-emerald-50/50 hover:bg-emerald-100/80 text-emerald-800 border-emerald-200/40 dark:bg-emerald-950/20 dark:hover:bg-emerald-950/45 dark:text-emerald-300 dark:border-emerald-900/30",
          check: "text-emerald-500",
          focus: "focus:ring-emerald-500/50"
        };
      case "CRM & Stakeholder Management":
        return {
          tag: "bg-violet-50/50 hover:bg-violet-100/80 text-violet-800 border-violet-200/40 dark:bg-violet-950/20 dark:hover:bg-violet-950/45 dark:text-violet-300 dark:border-violet-900/30",
          check: "text-violet-500",
          focus: "focus:ring-violet-500/50"
        };
      default: // Tools & Platforms
        return {
          tag: "bg-amber-50/50 hover:bg-amber-100/80 text-amber-800 border-amber-200/40 dark:bg-amber-950/20 dark:hover:bg-amber-950/45 dark:text-amber-300 dark:border-amber-900/30",
          check: "text-amber-500",
          focus: "focus:ring-amber-500/50"
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div
        className={`group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-help select-none focus:outline-none focus:ring-1 ${colors.tag} ${colors.focus}`}
        tabIndex={0}
      >
        <Check size={11} className={`${colors.check} shrink-0`} />
        <span className="text-[10px] font-bold uppercase tracking-wider">{skill}</span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: 10, x: "-50%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 mb-2.5 w-56 p-3.5 bg-zinc-950 border border-white/10 text-white rounded-xl shadow-xl z-50 pointer-events-none"
          >
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-zinc-950 border-r border-b border-white/10 rotate-45" />
            
            <div className="space-y-1 relative z-10 text-left">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-200 truncate max-w-[110px]" title={skill}>
                  {skill}
                </span>
                <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] font-bold uppercase tracking-wider text-slate-300 shrink-0">
                  {details.proficiency}
                </span>
              </div>
              <p className="text-[10px] text-white/80 leading-relaxed font-normal pt-1.5 break-words">
                {details.application}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryTheme = (name: string) => {
    switch (name) {
      case "Operations & Logistics":
        return {
          icon: <Sliders className="text-blue-600 dark:text-blue-400" size={17} />,
          badgeBg: "bg-blue-100/60 dark:bg-blue-500/15 border border-blue-500/10",
          titleColor: "text-blue-900 dark:text-blue-300",
          borderHover: "hover:border-blue-500/30 dark:hover:border-blue-500/25 shadow-blue-500/5"
        };
      case "GIS & Geospatial Analysis":
        return {
          icon: <Compass className="text-emerald-600 dark:text-emerald-400" size={17} />,
          badgeBg: "bg-emerald-100/60 dark:bg-emerald-500/15 border border-emerald-500/10",
          titleColor: "text-emerald-900 dark:text-emerald-300",
          borderHover: "hover:border-emerald-500/30 dark:hover:border-emerald-500/25 shadow-emerald-500/5"
        };
      case "CRM & Stakeholder Management":
        return {
          icon: <Target className="text-violet-600 dark:text-violet-400" size={17} />,
          badgeBg: "bg-violet-100/60 dark:bg-violet-500/15 border border-violet-500/10",
          titleColor: "text-violet-900 dark:text-violet-300",
          borderHover: "hover:border-violet-500/30 dark:hover:border-violet-500/25 shadow-violet-500/5"
        };
      default:
        return {
          icon: <Settings className="text-amber-600 dark:text-amber-400" size={17} />,
          badgeBg: "bg-amber-100/60 dark:bg-amber-500/15 border border-amber-500/10",
          titleColor: "text-amber-900 dark:text-amber-300",
          borderHover: "hover:border-amber-500/30 dark:hover:border-amber-500/25 shadow-amber-500/5"
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 bg-white/40 dark:bg-zinc-900/10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-16 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Core Competencies</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Professional Skillset & Platforms
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            A comprehensive list of core logistics domains, geospatial mapping suites, CRM software, and automation tools backed by real-world deployments.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((category) => {
            const theme = getCategoryTheme(category.categoryName);
            return (
              <div
                key={category.categoryName}
                className={`p-7 bg-white dark:bg-[#1A1F2C] rounded-2xl border border-slate-200/50 dark:border-slate-800/80 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 ${theme.borderHover}`}
              >
                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${theme.badgeBg}`}>
                      {theme.icon}
                    </div>
                    <h3 className={`font-serif text-[16px] italic font-normal ${theme.titleColor}`}>
                      {category.categoryName}
                    </h3>
                  </div>

                  <div className="h-[1px] bg-slate-100 dark:bg-slate-800/80 w-full" />

                  {/* Skill Tags List */}
                  <div className="flex flex-wrap gap-2.5 pt-1.5">
                    {category.skills.map((skill) => (
                      <SkillTag key={skill} skill={skill} categoryName={category.categoryName} />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
