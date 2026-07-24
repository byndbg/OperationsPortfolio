import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";
import Turnstile from "./Turnstile";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const isDevOrSandbox = typeof window !== "undefined" && (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname.endsWith(".run.app") ||
    window.location.hostname.includes("aistudio")
  );

  const turnstileSiteKey = isDevOrSandbox
    ? "1x00000000000000000000AA" // Cloudflare Turnstile Dummy site key for development
    : "0x4AAAAAADrlACHzl4cwuvqp"; // Production site key

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      setErrorMsg("Could not copy automatically. Please select the email manually.");
    }
  };

  const handleCopyPhone = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch (err) {
      setErrorMsg("Could not copy automatically. Please select the phone number manually.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMsg("Please fill out all fields before sending.");
      return;
    }
    if (!turnstileToken) {
      setErrorMsg("Please complete the security challenge verification first.");
      return;
    }
    setErrorMsg("");
    setSending(true);

    // Simulate sending, then redirect to mailto fallback for final submit
    setTimeout(() => {
      setSending(false);
      setSent(true);
      
      const subject = encodeURIComponent(`Inquiry from ${formState.name}`);
      const body = encodeURIComponent(
        `Hi Blake,\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
      );
      
      // Fallback redirect after a short timeout so user sees success feedback
      setTimeout(() => {
        window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
        setFormState({ name: "", email: "", message: "" });
        setSent(false); // Reset feedback
      }, 1200);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 bg-slate-50/10 dark:bg-zinc-950/10 no-print">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Get In Touch</p>
          <h2 className="font-serif text-3xl sm:text-4xl italic font-normal text-[#1A1A1A] dark:text-white">
            Connect With Blake
          </h2>
          <p className="max-w-xl text-xs text-[#1A1A1A]/60 dark:text-white/60 leading-relaxed">
            Have an opportunity, logistics project, operations review, or local government initiative in mind? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Details Column (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h3 className="font-serif italic text-xl font-normal text-blue-950 dark:text-blue-300">
                Contact Details
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 dark:text-white/70">
                You can reach out directly via phone, email, or LinkedIn.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-4">
              
              {/* Copy Email Card */}
              <div className="p-5 bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl relative group flex items-center justify-between gap-4 shadow-xs hover:shadow-md transition-all duration-300 hover:border-blue-500/20 dark:hover:border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/70 dark:text-blue-400/70">Email Address</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {copiedEmail && (
                    <span className="text-[10px] font-bold text-emerald-650 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20 animate-pulse">
                      Copied!
                    </span>
                  )}
                  <button
                    id="copy-email-btn"
                    onClick={handleCopyEmail}
                    className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-slate-500 dark:text-white/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Call Phone Card */}
              <div className="p-5 bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl relative group flex items-center justify-between gap-4 shadow-xs hover:shadow-md transition-all duration-300 hover:border-blue-500/20 dark:hover:border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full shrink-0">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/70 dark:text-blue-400/70">Phone Number</p>
                    <a href={`tel:${personalInfo.phone.replace(/[^0-9]/g, "")}`} className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {copiedPhone && (
                    <span className="text-[10px] font-bold text-emerald-650 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20 animate-pulse">
                      Copied!
                    </span>
                  )}
                  <button
                    id="copy-phone-btn"
                    onClick={handleCopyPhone}
                    className="p-2 bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/80 dark:border-slate-800/80 rounded-full text-slate-500 dark:text-white/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all text-xs cursor-pointer"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl flex items-center gap-4 shadow-xs hover:shadow-md transition-all duration-300 hover:border-blue-500/20 dark:hover:border-blue-500/20">
                <div className="p-2.5 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full shrink-0">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/70 dark:text-blue-400/70">Location</p>
                  <p className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] leading-relaxed">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white dark:bg-[#1A1F2C] border border-slate-200/50 dark:border-slate-800/80 rounded-2xl flex items-center justify-between gap-4 shadow-xs hover:shadow-md transition-all duration-300 hover:border-blue-500/25 dark:hover:border-blue-500/20 group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-blue-50/80 dark:bg-blue-950/30 border border-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full shrink-0">
                    <Linkedin size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-blue-600/70 dark:text-blue-400/70">LinkedIn Profile</p>
                    <p className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] leading-relaxed">
                      @blake-gibbons
                    </p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#1A1A1A]/50 dark:text-white/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mr-1" />
              </a>

            </div>
          </div>

          {/* Form Column (7 columns) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-white dark:bg-[#1A1F2C] border-y border-r border-l-4 border-slate-200/50 dark:border-slate-800/80 border-l-blue-600 dark:border-l-blue-500 rounded-r-2xl rounded-l-md shadow-xs space-y-6">
              <h3 className="font-serif italic text-lg font-normal text-blue-950 dark:text-blue-300">
                Send a Direct Message
              </h3>

              {errorMsg && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-650 dark:text-red-400 rounded-xl text-xs font-semibold animate-shake">
                  {errorMsg}
                </div>
              )}

              {sent && (
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 dark:text-emerald-400 rounded-xl text-xs font-semibold">
                  Thank you! Opening your email app...
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 select-none">Your Name</label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    disabled={sending || sent}
                    className="w-full px-4 py-3 text-xs bg-slate-50/50 dark:bg-zinc-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-[#1A1A1A] dark:text-white placeholder-[#1A1A1A]/40 dark:placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 disabled:opacity-50 transition-all duration-200"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 select-none">Your Email Address</label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    disabled={sending || sent}
                    className="w-full px-4 py-3 text-xs bg-slate-50/50 dark:bg-zinc-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-[#1A1A1A] dark:text-white placeholder-[#1A1A1A]/40 dark:placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 disabled:opacity-50 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="msg-input" className="text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 select-none">Message Body</label>
                <textarea
                  id="msg-input"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Describe your project, role opportunity, or question..."
                  disabled={sending || sent}
                  className="w-full px-4 py-3 text-xs bg-slate-50/50 dark:bg-zinc-900 border border-slate-200/60 dark:border-slate-800 rounded-xl text-[#1A1A1A] dark:text-white placeholder-[#1A1A1A]/40 dark:placeholder-white/30 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 resize-none disabled:opacity-50 transition-all duration-200"
                />
              </div>

              {/* Cloudflare Turnstile Verification Widget */}
              <div className="py-2 space-y-1.5 text-center">
                <Turnstile
                  siteKey={turnstileSiteKey}
                  onSuccess={(token) => {
                    setTurnstileToken(token);
                    setErrorMsg("");
                  }}
                  onError={() => {
                    setTurnstileToken(null);
                    setErrorMsg("Security check failed. Please refresh the page and try again.");
                  }}
                  onExpire={() => {
                    setTurnstileToken(null);
                    setErrorMsg("Security session expired. Please re-verify.");
                  }}
                />
                {isDevOrSandbox && (
                  <p className="text-[9px] text-[#1A1A1A]/40 dark:text-white/40 font-mono leading-relaxed mt-1">
                    💡 Running in Sandbox: Dynamic development mode enabled to bypass Cloudflare Turnstile domain validation. Production site key will be active on your live domain.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={sending || sent || !turnstileToken}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 hover:opacity-95 text-white shadow-md shadow-blue-500/10 hover:shadow-lg rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 cursor-pointer"
              >
                {sending ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={13} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
