import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Printer, FileText, ChevronRight } from "lucide-react";
import { portfolioData } from "../data";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  onOpenPdfModal: () => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenPdfModal }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      id="portfolio-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 no-print ${
        scrolled
          ? "bg-[#F9F8F6]/80 dark:bg-[#121110]/80 backdrop-blur-md border-b border-[#1A1A1A]/10 dark:border-white/10 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Initials */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tighter uppercase text-[#1A1A1A] dark:text-white"
        >
          <span className="w-8 h-8 rounded-full bg-[#1A1A1A] dark:bg-white text-white dark:text-[#121110] flex items-center justify-center font-serif italic text-sm shadow-sm">
            {portfolioData.personalInfo.firstName[0]}
            {portfolioData.personalInfo.lastName[0]}
          </span>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tighter leading-none">{portfolioData.personalInfo.name}</span>
            <span className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 leading-none mt-1">Operations Portfolio</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#1A1A1A]/60 dark:text-white/60 hover:text-[#1A1A1A] dark:hover:text-white transition-opacity duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-[#1A1A1A]/10 dark:border-white/10 pl-6">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 text-[#1A1A1A]/60 dark:text-white/60 hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
              title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Print Resume Option */}
            <button
              onClick={() => window.print()}
              className="p-2 rounded-full hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 text-[#1A1A1A]/60 dark:text-white/60 hover:text-[#1A1A1A] dark:hover:text-white transition-colors"
              title="Print standard resume"
              aria-label="Print resume"
            >
              <Printer size={17} />
            </button>

            {/* Quick Resume Button */}
            <button
              onClick={onOpenPdfModal}
              className="flex items-center gap-1.5 px-5 py-2.5 text-[11px] font-bold uppercase tracking-widest text-white bg-[#1A1A1A] dark:bg-white dark:text-[#121110] rounded-full hover:opacity-90 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <FileText size={13} />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-1 md:hidden">
          {/* Theme Toggle Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 text-[#1A1A1A]/60 dark:text-white/60 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-full hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 text-[#1A1A1A] dark:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed top-[100%] right-0 left-0 bg-[#F9F8F6] dark:bg-[#121110] border-b border-[#1A1A1A]/10 dark:border-white/10 transition-all duration-300 shadow-lg ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex justify-between items-center py-2 border-b border-[#1A1A1A]/5 dark:border-white/5 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/70 dark:text-white/70 hover:text-[#1A1A1A] dark:hover:text-white"
            >
              <span>{link.label}</span>
              <ChevronRight size={14} className="text-[#1A1A1A]/40 dark:text-white/40" />
            </a>
          ))}

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setIsOpen(false);
                window.print();
              }}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full border border-[#1A1A1A]/20 dark:border-white/20 text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/70 dark:text-white/70 hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5"
            >
              <Printer size={14} />
              <span>Print/PDF</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPdfModal();
              }}
              className="flex items-center justify-center gap-1.5 w-full py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest text-white bg-[#1A1A1A] dark:bg-white dark:text-[#121110] hover:opacity-90"
            >
              <FileText size={14} />
              <span>Full Text CV</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
