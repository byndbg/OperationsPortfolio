import { Compass, TrendingDown, Target, Building2, HelpCircle } from "lucide-react";
import { portfolioData } from "../data";

export default function About() {
  const { personalInfo } = portfolioData;

  const cardStats = [
    {
      id: "stat-sourcing",
      label: "Supply Sourcing Slashed",
      val: "66%",
      desc: "Reduced warehousing expenditures at Heartwood homes through strategic bulk procurement structures.",
      icon: <TrendingDown className="text-[#1A1A1A] dark:text-white" size={18} />
    },
    {
      id: "stat-opps",
      label: "Qualified Sales Leads",
      val: "$26M+",
      desc: "Identified and qualified municipal and transit bids for SaaS/turnkey logistics solutions across the US & Canada.",
      icon: <Target className="text-[#1A1A1A] dark:text-white" size={18} />
    },
    {
      id: "stat-transit",
      label: "Transit GIS Spatial Analysis",
      val: "5+ Years",
      desc: "Background mapping out electric fleet conversions, stop frequencies, and demographics linkage models.",
      icon: <Compass className="text-[#1A1A1A] dark:text-white" size={18} />
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-14 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">Executive Narrative</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Who is Blake?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-[#1A1A1A]/80 dark:text-white/80">
            <h3 className="font-serif italic text-xl font-normal text-[#1A1A1A] dark:text-white text-center rounded-[1px]">
              The Intersection of Geospatial Science, Logistics, and Policy
            </h3>
            
            <p className="leading-relaxed">
              I’m an operations and logistics specialist with a background in <span className="font-sans font-normal not-italic text-[#1A1A1A] dark:text-white">Geography and Political Science</span> from the <a href="#edu-usc" className="font-serif italic font-bold text-[#405E7F] dark:text-[#9FB1C1] hover:underline hover:opacity-90 transition-opacity">University of South Carolina</a> in Columbia, SC, with advanced public policy training from world-renowned experts at the <a href="#edu-umich" className="font-serif italic font-bold text-[#405E7F] dark:text-[#9FB1C1] hover:underline hover:opacity-90 transition-opacity">Gerald R. Ford School of Public Policy</a> at the University of Michigan in Ann Arbor, MI. 
            </p>

            <p className="leading-relaxed">
              Instead of looking at administrative coordination and warehouse facilities as static points, I view operations through a structural and geographic lens. I ask: <span className="italic">where can we automate routing friction? How can we reduce transport emissions? Where are the logistics bottlenecks draining local budgets?</span>
            </p>

            <p className="leading-relaxed">
              Through my work in short-term rental property management (<a href="#exp-heartwood" className="font-bold text-[#405E7F] dark:text-[#9FB1C1] hover:underline hover:opacity-90 transition-opacity">Heartwood Furnished Homes</a>), on-demand microtransit (<a href="#exp-via" className="font-bold text-[#405E7F] dark:text-[#9FB1C1] hover:underline hover:opacity-90 transition-opacity">Via Transportation</a>), and public regional transit systems (<a href="#exp-cmrta" className="font-bold text-[#405E7F] dark:text-[#9FB1C1] hover:underline hover:opacity-90 transition-opacity">CMRTA</a>), I have a proven track record of cutting costs, efficient and reliable workflow automations, and presenting clear geospatial assessments to stakeholders.
            </p>

            <p className="leading-relaxed font-bold text-[#1A1A1A] dark:text-white">
              My goal has always been to leave tomorrow better than I found it, by bringing alignment to fast-moving warehouse crews, municipal partners, and modern operations systems.
            </p>
          </div>

          {/* Quick Metrics & Strengths Cards (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-[#1A1A1A]/40 dark:text-white/40 font-bold text-[11px] uppercase tracking-widest mb-2">Key Accomplishments</p>
            
            {cardStats.map((stat) => (
              <div
                key={stat.id}
                className="p-5 bg-[#F9F8F6] dark:bg-[#121110] rounded-2xl border border-[#1A1A1A]/10 dark:border-white/10 flex gap-4 items-start hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="p-2.5 rounded-xl bg-[#1A1A1A]/5 dark:bg-white/5 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif italic font-bold text-2xl text-[#1A1A1A] dark:text-white">
                      {stat.val}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/70 dark:text-white/70">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-5 bg-[#E5E2D9] dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl text-[#1A1A1A] dark:text-[#F3F2F0]">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 mb-2.5 flex items-center gap-1.5">
                <Building2 size={12} />
                <span>Interests & Practice Areas</span>
              </h4>
              <p className="text-xs leading-relaxed font-normal opacity-90">
                Municipal Transit Coordination • SaaS Pipeline Optimizations • Geospatial Mapping • Sustainable Electric Vehicle Infrastructure • Warehouse Vendor Management
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
