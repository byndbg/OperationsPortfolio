export interface Project {
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  bulletPoints: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details?: string[];
  capstone?: {
    title: string;
    description: string;
  };
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    tagline: string;
    summary: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    portraitUrl: string;
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Blake Dyson Gibbons",
    firstName: "Blake",
    lastName: "Gibbons",
    title: "Operations & Logistics Coordinator",
    tagline: "Bridging geography, public policy, and operational workflows to build efficient, scalable supply channels.",
    summary: "Operations and coordination professional specializing in supply cost reduction, client-facing workflows, and day-to-day execution. Proven success in logistics optimization, scheduling automation, stakeholder correspondence, and geospatial analysis in fast-paced public transit and luxury real estate environments.",
    email: "bdg710@gmail.com",
    phone: "(803) 760-9872",
    location: "Columbia, SC",
    linkedin: "https://www.linkedin.com/in/blake-gibbons/",
    portraitUrl: "/src/assets/images/profile_portrait_1780379275743.png"
  },
  experience: [
    {
      role: "Warehouse & Amenity Services Specialist",
      company: "Heartwood Furnished Homes",
      duration: "Sep 2024 – Jun 2025",
      location: "Columbia, SC",
      bulletPoints: [
        "Orchestrated weekly production of ~345 custom guest amenity bags, consistently exceeding forecasted demand coordinates to ensure 100% turn-key property readiness.",
        "Slashed bulk supply procurement and storage costs by 66% through improved vendor handling and creative repurposing of surplus high-end linens.",
        "Managed daily transport routing of ~1,000 lbs of laundry assets and oversaw scheduled maintenance for a 10-vehicle fleet.",
        "Spearheaded OSHA-compliant safety guidelines, updating critical site signage, security practices, and first-aid response stations."
      ]
    },
    {
      role: "Business Development Representative",
      company: "Via Transportation",
      duration: "May 2023 – Jun 2024",
      location: "Remote / New York, NY",
      bulletPoints: [
        "Generated $26M+ in qualified sales opportunities by launching targeted account campaigns targeting municipality nodes across the US and Canada.",
        "Sourced high-ticket turnkey and SaaS microtransit deployments by matching regional mobility pain points with tailored service models.",
        "Configured custom automation triggers (Zapier, CRM webhooks) and redesigned team lead tracking pipelines within Salesforce, increasing reach efficiency."
      ]
    },
    {
      role: "Transit Services Intern",
      company: "Central Midlands Regional Transit Authority",
      duration: "Dec 2020 – Apr 2023",
      location: "Columbia, SC",
      bulletPoints: [
        "Analyzed system-wide OTP (On-Time Performance) and ridership spikes across bus routes and stops, drafting key data-driven reports for transit planners.",
        "Collaborated on operational, marketing, and public budget initiatives to scale the transit network and boost resident accessibility.",
        "Created modern, structured data collection templates and file organizing structures, reducing route audits processing times."
      ]
    }
  ],
  education: [
    {
      degree: "B.A. in Geography and Political Science",
      institution: "University of South Carolina",
      duration: "Aug 2019 – May 2023",
      details: [
        "GPA: 3.7 / 4.0 — Cum Laude with Leadership Distinction",
        "Awards: Student Body President's Executive Meritorious Award, USC Outstanding Senior Award",
        "Leadership: Executive-level Student Government, Russell House Steering Committee, Entrepreneurship Club, TRiO (Opportunity Scholars Program)"
      ],
      capstone: {
        title: "Campus Transit Electrification Feasibility Study",
        description: "Analyzed the operational, spatial, and budgetary impacts of transitioning the University's transit fleet to full electric bus configurations, presenting spatial models and actionable timelines."
      }
    },
    {
      degree: "Public Policy & International Affairs Fellow",
      institution: "University of Michigan – Gerald R. Ford School of Public Policy",
      duration: "Jun 2022 – Aug 2022",
      details: [
        "Junior Summer Institute (JSI) Fellowship, focusing on intensive quantitative policy writing, microeconomic evaluation, and critical urban planning."
      ],
      capstone: {
        title: "Amtrak Revitalization Demographics Linkage Study",
        description: "Analyzed spatial trends for U.S. rail passenger transit revitalization by linking geographic Amtrak data with political affiliations, age parameters, and spatial clustering metrics."
      }
    }
  ],
  projects: [
    {
      title: "Campus Electrification & Sustainability Model",
      category: "Geospatial & Urban Planning",
      description: "An environmental capstone research project delivering comprehensive strategies for transitioning the University of South Carolina campus transit system into a clean, zero-emission electric fleet.",
      keyFeatures: [
        "Mapped high-frequency shuttle corridors and simulated spatial charging network nodes.",
        "Calculated estimated carbon offsets and relative localized air-quality indexes.",
        "Presented formal budgetary recommendations directly to the USC administration board."
      ],
      techStack: ["ArcMap", "Google Earth Pro", "Remix Transit Planning", "Remix Scheduling"]
    },
    {
      title: "Passenger Rail Revitalization Database Study",
      category: "Public Policy Analysis",
      description: "A research project linking historical Amtrak passenger trends against regional demographic datasets (age waves, political trends, urban clustering) to support public funding proposals.",
      keyFeatures: [
        "Maintained data collection integrity compiling thousands of Amtrak station records.",
        "Conducted spatial analytics correlating high-density corridors with regional investment budgets.",
        "Prepared analytical briefings delivered to policy faculty at Gerald R. Ford School of Public Policy."
      ],
      techStack: ["KML/KMZ Mapping", "ArcCloud GIS", "Excel Data Modelling", "Quantitative Writing"]
    },
    {
      title: "CRM Automated Outreach Lead Pipeline",
      category: "Systems & Automations",
      description: "Designed and deployed custom scheduling pipelines and lead routers resulting in massive time-savings and pipeline transparency during corporate lead outreach.",
      keyFeatures: [
        "Formulated multi-step Zapier workflows driven by incoming webhook API calls.",
        "Wrote detailed MCP (Model Context Protocol) automation mappings to bridge communication gaps.",
        "Established automated dashboard metrics to flag outbound opportunities and speed up follow-ups."
      ],
      techStack: ["HubSpot CRM", "Salesforce", "Zapier Automations", "Webhooks & JSON"]
    }
  ],
  skills: [
    {
      categoryName: "Operations & Logistics",
      skills: ["Fleet Operations Tracking", "Inventory Bulk Sourcing", "Zapier Workflow Automation", "MCP Webhook Protocols", "OSHA Safety Guidelines", "Procurement & Auditing"]
    },
    {
      categoryName: "GIS & Geospatial Analysis",
      skills: ["ArcMap GIS", "ArcCloud Analytics", "Google Earth Pro Spatial Modelling", "Remix Transit Planning", "KML/KMZ File Formatting"]
    },
    {
      categoryName: "CRM & Stakeholder Management",
      skills: ["Salesforce Admin", "HubSpot CRM Pipelines", "Monday.com Boards", "Corporate Outreach Campaigning", "Client Correspondence Scheduling"]
    },
    {
      categoryName: "Tools & Platforms",
      skills: ["Google Workspace Suite", "Microsoft Office Excel Pro", "Canva Graphics", "Hootsuite Management", "Apple iWork Platforms", "Social Copywriting & Analytics"]
    }
  ]
};
