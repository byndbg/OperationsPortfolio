import { useState } from "react";
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

function SkillTag({ skill }: { skill: string; key?: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const details = skillDetails[skill] || { proficiency: "Expert", application: "Proven professional competency." };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E5E2D9]/30 hover:bg-[#E5E2D9]/60 dark:bg-white/5 dark:hover:bg-white/10 text-[#1A1A1A]/80 dark:text-white/80 rounded-full border border-[#1A1A1A]/10 dark:border-white/10 hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-all duration-200 cursor-help select-none focus:outline-none focus:ring-1 focus:ring-[#1A1A1A]/40 dark:focus:ring-white/40"
        tabIndex={0}
      >
        <Check size={11} className="text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors" />
        <span className="text-[10px] font-bold uppercase tracking-wider">{skill}</span>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10, x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: 10, x: "-50%" }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 mb-2.5 w-56 p-3 bg-[#1A1A1A] dark:bg-zinc-900 border border-white/10 text-white rounded-xl shadow-xl z-50 pointer-events-none"
          >
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-[#1A1A1A] dark:bg-zinc-900 border-r border-b border-white/10 rotate-45" />
            
            <div className="space-y-1 relative z-10 text-left">
              <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#E5E2D9] truncate max-w-[110px]" title={skill}>
                  {skill}
                </span>
                <span className="px-1.5 py-0.5 bg-white/10 rounded text-[8px] font-bold uppercase tracking-wider text-[#E5E2D9] shrink-0">
                  {details.proficiency}
                </span>
              </div>
              <p className="text-[9px] text-white/80 leading-relaxed font-normal pt-1 break-words">
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
                    <SkillTag key={skill} skill={skill} />
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
