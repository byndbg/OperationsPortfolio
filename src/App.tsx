import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import ResumeDownload from "./components/ResumeDownload";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import BackToTop from "./components/BackToTop";
import { portfolioData } from "./data";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or default to light mode
    try {
      const saved = localStorage.getItem("portfolio_dark_mode");
      if (saved !== null) {
        return saved === "true";
      }
    } catch (e) {
      // Fail silently
    }
    return false;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync mode with class on documentElement
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("portfolio_dark_mode", String(darkMode));
    } catch (e) {
      // Fail silently
    }
  }, [darkMode]);

  const { personalInfo, experience, education, skills } = portfolioData;

  return (
    <div className={`min-h-screen font-sans antialiased text-[#1A1A1A] dark:text-[#F3F2F0] bg-[#F9F8F6] dark:bg-[#121110] transition-colors duration-300`}>
      
      {/* 1. Main Interactive Layout (Hidden during standard printing) */}
      <div className="no-print">
        {/* Sticky Header */}
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onOpenPdfModal={() => setIsResumeOpen(true)} 
        />

        {/* Hero Landing */}
        <Hero onOpenPdfModal={() => setIsResumeOpen(true)} />

        {/* Narrative Biography / Stat Highlights */}
        <About />

        {/* Competencies Dashboard */}
        <Skills />

        {/* Career Timeline */}
        <Experience />

        {/* Technical & Policy Case Studies */}
        <Projects />

        {/* Educational Credentials & Honors */}
        <Education />

        {/* Full Resume Transcriber CTA */}
        <ResumeDownload onOpenPdfModal={() => setIsResumeOpen(true)} />

        {/* Contact form & coordinates */}
        <Contact />

        {/* Footer shortcuts */}
        <Footer />

        {/* Modal Interactivity Sheet */}
        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />

        {/* Back to Top Floating button */}
        <BackToTop />
      </div>

      {/* 2. Pristine Print-Only CSS Template (Hidden on web, perfectly styled for standard paper PDF export/print matching original resume format) */}
      <div className="hidden print:block print-container p-[0.5in] text-zinc-950 font-sans leading-relaxed text-[11px] bg-white">
        
        {/* Header Block */}
        <div className="text-center space-y-2 border-b-2 border-zinc-900 pb-3">
          <h1 className="font-display font-black text-2xl tracking-tight text-zinc-950 uppercase">{personalInfo.name}</h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-medium text-zinc-700">
            <span className="flex items-center gap-1">
              <Phone size={10} />
              <span>{personalInfo.phone}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Mail size={10} />
              <span>{personalInfo.email}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin size={10} />
              <span>{personalInfo.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>{personalInfo.linkedin.replace("https://", "")}</span>
            </span>
          </div>
        </div>

        {/* Summary Segment */}
        <div className="mt-4 space-y-1">
          <h2 className="font-display font-black text-[11px] text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-0.5">Summary</h2>
          <p className="text-zinc-800 text-[11px] leading-relaxed">{personalInfo.summary}</p>
        </div>

        {/* Work Experience Timeline */}
        <div className="mt-4 space-y-3">
          <h2 className="font-display font-black text-[11px] text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-0.5">Experience</h2>
          <div className="space-y-3">
            {experience.map((job, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center text-[11px] font-bold text-zinc-950">
                  <span>{job.role.toUpperCase()} — {job.company.toUpperCase()}</span>
                  <span className="font-normal text-zinc-700">{job.duration}</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 pl-2 text-zinc-800 text-[10px] leading-normal">
                  {job.bulletPoints.map((bp, bidx) => (
                    <li key={bidx} className="pl-1 -indent-2.5 ml-2.5">{bp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Credentials */}
        <div className="mt-4 space-y-3">
          <h2 className="font-display font-black text-[11px] text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-0.5">Education</h2>
          <div className="space-y-3">
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-center text-[11px] font-bold text-zinc-950">
                  <span>{edu.degree} | {edu.institution}</span>
                  <span className="font-normal text-zinc-700">{edu.duration}</span>
                </div>
                {edu.details && (
                  <ul className="list-disc list-inside space-y-0.5 pl-2 text-zinc-800 text-[10px] leading-normal">
                    {edu.details.map((det, dIdx) => (
                      <li key={dIdx} className="pl-1 -indent-2.5 ml-2.5">{det}</li>
                    ))}
                  </ul>
                )}
                {edu.capstone && (
                  <p className="text-[10px] text-zinc-650 italic pl-2.5 mt-0.5">
                    <strong>Capstone:</strong> {edu.capstone.title} — {edu.capstone.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories and Tools */}
        <div className="mt-4 space-y-1.5">
          <h2 className="font-display font-black text-[11px] text-zinc-950 uppercase tracking-wider border-b border-zinc-300 pb-0.5">Skills & Technologies</h2>
          <div className="space-y-1 text-[10px] text-zinc-800 leading-relaxed font-medium">
            {skills.map((c, idx) => (
              <p key={idx}>
                <strong className="text-zinc-950 font-bold uppercase tracking-wide inline-block w-40">{c.categoryName}:</strong>
                <span>{c.skills.join(", ")}</span>
              </p>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
