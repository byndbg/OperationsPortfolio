import { Compass, TrendingDown, Target, Building2 } from "lucide-react";
import { portfolioData } from "../data";

export default function About() {
  const { personalInfo } = portfolioData;

  const cardStats = [
    {
      id: "stat-sourcing",
      label: "Supply Cost Savings",
      val: "66%",
      desc: "Reduced warehousing and inventory costs through strategic bulk purchasing and vendor management.",
      icon: <TrendingDown className="text-emerald-600 dark:text-emerald-400" size={18} />,
      bgClass: "bg-emerald-50/30 hover:bg-emerald-50/60 dark:bg-emerald-950/10 dark:hover:bg-emerald-950/20 border-emerald-500/15 dark:border-emerald-500/10",
      iconBg: "bg-emerald-100/60 dark:bg-emerald-500/15",
      valColor: "text-emerald-700 dark:text-emerald-400"
    },
    {
      id: "stat-opps",
      label: "Municipal Outreach Identified",
      val: "$26M+",
      desc: "Identified and qualified $26M+ in municipal microtransit service opportunities across North America.",
      icon: <Target className="text-blue-600 dark:text-blue-400" size={18} />,
      bgClass: "bg-blue-50/30 hover:bg-blue-50/60 dark:bg-blue-950/10 dark:hover:bg-blue-950/20 border-blue-500/15 dark:border-blue-500/10",
      iconBg: "bg-blue-100/60 dark:bg-blue-500/15",
      valColor: "text-blue-700 dark:text-blue-400"
    },
    {
      id: "stat-transit",
      label: "Logistics & GIS Background",
      val: "5+ Years",
      desc: "Practical experience mapping transit networks, fleet routing, and spatial demographic data.",
      icon: <Compass className="text-indigo-600 dark:text-indigo-400" size={18} />,
      bgClass: "bg-indigo-50/30 hover:bg-indigo-50/60 dark:bg-indigo-950/10 dark:hover:bg-indigo-950/20 border-indigo-500/15 dark:border-indigo-500/10",
      iconBg: "bg-indigo-100/60 dark:bg-indigo-500/15",
      valColor: "text-indigo-700 dark:text-indigo-400"
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 overflow-hidden bg-slate-50/30 dark:bg-zinc-950/10">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Professional Background</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Who is Blake?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6 text-[#1A1A1A]/80 dark:text-white/80">
            <h3 className="font-serif italic text-xl font-normal text-blue-900 dark:text-blue-300">
              The Intersection of Geospatial Science, Logistics, and Policy
            </h3>
            
            <p className="leading-relaxed">
              I’m an operations and logistics specialist with a background in <span className="font-sans font-medium text-slate-900 dark:text-white">Geography and Political Science</span> from the <a href="#edu-usc" className="font-serif italic font-bold text-blue-600 dark:text-blue-400 hover:underline hover:opacity-90 transition-opacity">University of South Carolina</a> in Columbia, SC, with advanced public policy training from world-renowned experts at the <a href="#edu-umich" className="font-serif italic font-bold text-blue-600 dark:text-blue-400 hover:underline hover:opacity-90 transition-opacity">Gerald R. Ford School of Public Policy</a> at the University of Michigan in Ann Arbor, MI. 
            </p>

            <p className="leading-relaxed">
              Instead of looking at administrative coordination and warehouse facilities as static points, I view operations through a structural and geographic lens. I ask: <span className="italic">where can we automate routing friction? How can we reduce transport emissions? Where are the logistics bottlenecks draining local budgets?</span>
            </p>

            <p className="leading-relaxed">
              Through my work in short-term rental property management (<a href="#exp-heartwood" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:opacity-90 transition-opacity">Heartwood Furnished Homes</a>), on-demand microtransit (<a href="#exp-via" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:opacity-90 transition-opacity">Via Transportation</a>), and public regional transit systems (<a href="#exp-cmrta" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline hover:opacity-90 transition-opacity">CMRTA</a>), I have a proven track record of cutting costs, efficient and reliable workflow automations, and presenting clear geospatial assessments to stakeholders.
            </p>

            <p className="leading-relaxed font-bold text-[#1A1A1A] dark:text-white border-l-2 border-blue-500 pl-4 py-1 italic">
              My goal has always been to leave tomorrow better than I found it, by bringing alignment to fast-moving warehouse crews, municipal partners, and modern operations systems.
            </p>
          </div>

          {/* Quick Metrics & Strengths Cards (Cols 8-12) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-[#1A1A1A]/40 dark:text-white/40 font-bold text-[11px] uppercase tracking-widest mb-2">Key Accomplishments</p>
            
            {cardStats.map((stat) => (
              <div
                key={stat.id}
                className={`p-6 rounded-2xl border flex gap-4 items-start shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 ${stat.bgClass}`}
              >
                <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${stat.iconBg}`}>
                  {stat.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className={`font-serif italic font-black text-2xl ${stat.valColor}`}>
                      {stat.val}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/75 dark:text-white/70 leading-relaxed font-normal">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}

            <div className="p-6 bg-gradient-to-br from-blue-900 to-indigo-950 dark:from-slate-900 dark:to-zinc-950 border border-blue-500/20 rounded-2xl text-white shadow-lg relative overflow-hidden group">
              {/* Highlight Background Flare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />
              
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-200 mb-3 flex items-center gap-1.5 relative z-10">
                <Building2 size={13} className="text-blue-300" />
                <span>Interests & Practice Areas</span>
              </h4>
              <p className="text-xs leading-relaxed font-normal text-slate-100 opacity-95 relative z-10">
                Municipal Transit Coordination • SaaS Pipeline Optimizations • Geospatial Mapping • Sustainable Electric Vehicle Infrastructure • Warehouse Vendor Management
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
