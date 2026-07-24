import portraitImg from "./assets/images/profile_portrait_1780379275743.png";
import heartwoodImg from "./assets/images/regenerated_image_1780558280146.jpg";
import viaImg from "./assets/images/regenerated_image_1780558282227.jpg";
import cmrtaImg from "./assets/images/regenerated_image_1784866577218.jpg";
import campusElectricImg from "./assets/images/electric_bus_charging_1780557429910.png";
import passengerRailImg from "./assets/images/passenger_train_map_1780557449015.png";
import crmAutomationImg from "./assets/images/crm_automation_1780557466462.png";

import pressLgbtqImg from "./assets/images/lgbtq_history_press_1780610970515.png";
import pressGradImg from "./assets/images/regenerated_image_1784866583097.jpg";
import pressCommunityImg from "./assets/images/regenerated_image_1780611570768.jpg";
import pressSafetyImg from "./assets/images/campus_safety_press_1780611005314.png";
import pressFellowshipImg from "./assets/images/regenerated_image_1784866585827.jpg";
import uscLogoImg from "./assets/images/usc_official_logo_v2_1784867016752.jpg";

export interface Project {
  title: string;
  category: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  imageUrl?: string;
}

export interface PressArticle {
  title: string;
  source: string;
  date: string;
  summary: string;
  url: string;
  imageUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  bulletPoints: string[];
  imageUrl?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  logoUrl?: string;
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
  press: PressArticle[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Blake Dyson Gibbons",
    firstName: "Blake",
    lastName: "Gibbons",
    title: "Operations & Logistics Coordinator",
    tagline: "Operations and logistics professional connecting supply workflows, GIS analysis, and automation to make complex systems run cleaner.",
    summary: "Dependable operations and coordination professional with hands-on experience in warehouse inventory management, fleet routing, customer service, and workflow automation. Skilled in GIS spatial analysis, scheduling, and multi-channel communication, with a proven track record of dependability, efficiency, and clear organization.",
    email: "bdg710@gmail.com",
    phone: "(803) 760-9872",
    location: "Columbia, SC",
    linkedin: "https://www.linkedin.com/in/blake-gibbons/",
    portraitUrl: portraitImg
  },
  experience: [
    {
      role: "Warehouse & Operations Logistics Specialist",
      company: "Heartwood Furnished Homes",
      duration: "Sep 2024 – Jun 2025",
      location: "Columbia, SC",
      imageUrl: heartwoodImg,
      bulletPoints: [
        "Coordinated weekly assembly and distribution of ~345 property amenity kits, ensuring 100% turnkey readiness across guest locations.",
        "Slashed bulk supply procurement and storage costs by 66% through improved vendor handling and creative inventory organization.",
        "Managed daily transport routing for ~1,000 lbs of laundry assets and oversaw scheduled maintenance for a 10-vehicle fleet.",
        "Maintained OSHA-compliant site safety guidelines, updating safety signage, security practices, and first-aid response stations."
      ]
    },
    {
      role: "Business Development Representative",
      company: "Via Transportation",
      duration: "May 2023 – Jun 2024",
      location: "Remote / New York, NY",
      imageUrl: viaImg,
      bulletPoints: [
        "Identified and qualified over $26M in municipal microtransit partnership opportunities through targeted account research across North America.",
        "Connected regional municipalities and transit agencies with microtransit solutions tailored to local mobility needs.",
        "Streamlined team lead tracking and follow-up pipelines in Salesforce using Zapier and CRM webhook automations."
      ]
    },
    {
      role: "Transit Services Intern",
      company: "Central Midlands Regional Transit Authority",
      duration: "Dec 2020 – Apr 2023",
      location: "Columbia, SC",
      imageUrl: cmrtaImg,
      bulletPoints: [
        "Analyzed route on-time performance (OTP) and ridership trends to support transit planners with clear, actionable reports.",
        "Assisted with operational projects, marketing initiatives, and public budget accessibility reports for regional bus networks.",
        "Created organized data collection templates and file systems that streamlined route audit workflows."
      ]
    }
  ],
  education: [
    {
      degree: "B.A. in Geography and Political Science",
      institution: "University of South Carolina",
      duration: "Aug 2019 – May 2023",
      logoUrl: uscLogoImg,
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
      imageUrl: campusElectricImg,
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
      imageUrl: passengerRailImg,
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
      description: "Designed and deployed custom scheduling pipelines and lead routers resulting in time savings and pipeline transparency during regional lead outreach.",
      imageUrl: crmAutomationImg,
      keyFeatures: [
        "Formulated multi-step Zapier workflows driven by incoming webhook API triggers.",
        "Configured structured automation mappings to bridge system communication gaps.",
        "Established automated dashboard metrics to track opportunities and speed up follow-ups."
      ],
      techStack: ["HubSpot CRM", "Salesforce", "Zapier Automations", "Webhooks & JSON"]
    }
  ],
  skills: [
    {
      categoryName: "Operations & Logistics",
      skills: ["Fleet Maintenance Routing", "Inventory Bulk Sourcing", "Warehouse Stock Control", "OSHA Safety Standards", "Vendor Negotiations", "Procurement & Auditing"]
    },
    {
      categoryName: "GIS & Geospatial Analysis",
      skills: ["ArcMap GIS", "ArcGIS Online Analytics", "Google Earth Pro Spatial Mapping", "Remix Transit Planning", "Spatial Data Modeling"]
    },
    {
      categoryName: "CRM & Administration",
      skills: ["Salesforce Administration", "HubSpot CRM Pipelines", "Zapier Workflow Automations", "Scheduling & Dispatch", "Customer & Client Service"]
    },
    {
      categoryName: "Tools & Platforms",
      skills: ["Google Workspace Suite", "Microsoft Excel & Office", "Canva Design", "Multi-Line Phone Communication", "Data Entry & Organization"]
    }
  ],
  press: [
    {
      title: "Columbia's deep, untold LGBTQ history",
      source: "WLTX-TV News",
      date: "May 2023",
      summary: "Features Blake Gibbons discussing the preservation of LGBTQ archives and capturing oral histories to chronicle the South Carolina region's community legacy.",
      url: "https://www.wltx.com/article/news/local/columbia-sc-deep-rooted-untold-lgbtq-history/101-f7eaccdd-6895-463d-9b5f-415b69b3c9ed",
      imageUrl: pressLgbtqImg
    },
    {
      title: "Outstanding Student Spotlight: Class of 2023",
      source: "University of South Carolina",
      date: "April 2023",
      summary: "Profiles Blake Gibbons as a leading graduate, highlighting his dual degree in Geography and Political Science, leadership executive accolades, and public policy ambitions.",
      url: "https://sc.edu/uofsc/posts/2023/04/class-of-2023.php",
      imageUrl: pressGradImg
    },
    {
      title: "Student organizes film screening to spark race relations dialogue",
      source: "WIS-TV News",
      date: "January 2019",
      summary: "Highlighting Blake's early civic leadership in organizing student film screenings and moderating open peer discussions centered around raising public race relations awareness.",
      url: "https://www.wistv.com/2019/01/26/student-organizes-screening-movie-that-aims-start-conversation-race-relations/",
      imageUrl: pressCommunityImg
    },
    {
      title: "UofSC police and student government audit campus safety walks",
      source: "WACH FOX News",
      date: "November 2021",
      summary: "Reports on student representative Blake Gibbons collaborating directly with campus safety officers on active inspection walks to improve nighttime walkway lighting and security response nodes.",
      url: "https://wach.com/news/local/usc-police-and-students-walk-the-campus-to-address-any-safety-concerns",
      imageUrl: pressSafetyImg
    },
    {
      title: "Standout student Blake Gibbons wins national PPIA Fellowship",
      source: "UofSC National Fellowships News",
      date: "April 2022",
      summary: "Documents Blake Gibbons winning the selective, nationwide Public Policy & International Affairs fellowship at the Gerald R. Ford School of Public Policy, University of Michigan.",
      url: "https://sc.edu/about/offices_and_divisions/fellowships_and_scholar_programs/news/national_fellowships_news/2022/blake_gibbons_wins_ppia.php",
      imageUrl: pressFellowshipImg
    }
  ]
};
