import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, Copy, Check, ExternalLink } from "lucide-react";
import { portfolioData } from "../data";

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setErrorMsg("Could not copy automatically. Please select the email manualy.");
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
    <section id="contact" className="py-20 bg-transparent relative border-t border-b border-[#1A1A1A]/10 dark:border-white/10 no-print">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-14 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/40 dark:text-white/40">Get In Touch</p>
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
              <h3 className="font-serif italic text-xl font-normal text-[#1A1A1A] dark:text-white">
                Contact Details
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 dark:text-white/70">
                You can reach out directly via cell phone, email transmission, or networking hubs.
              </p>
            </div>

            {/* Coordinates list */}
            <div className="space-y-4">
              
              {/* Copy Email Card */}
              <div className="p-4 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl relative group flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 text-[#1A1A1A] dark:text-white rounded-full shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40">Email Address</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 bg-transparent hover:bg-[#1A1A1A]/5 dark:hover:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 rounded-full text-[#1A1A1A]/50 dark:text-white/40 transition-all text-xs"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Call Phone Card */}
              <a
                href={`tel:${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                className="p-4 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl flex items-center gap-4 hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-colors"
              >
                <div className="p-2.5 bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 text-[#1A1A1A] dark:text-white rounded-full shrink-0">
                  <Phone size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40">Phone Coordinate</p>
                  <p className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] leading-relaxed">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="p-4 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl flex items-center gap-4">
                <div className="p-2.5 bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 text-[#1A1A1A] dark:text-white rounded-full shrink-0">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40">Location Base</p>
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
                className="p-4 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl flex items-center justify-between gap-4 hover:border-[#1A1A1A]/20 dark:hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-[#1A1A1A]/5 dark:bg-white/5 border border-[#1A1A1A]/10 dark:border-white/10 text-[#1A1A1A] dark:text-white rounded-full shrink-0">
                    <Linkedin size={15} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 dark:text-white/40">LinkedIn Networking</p>
                    <p className="text-xs font-bold text-[#1A1A1A] dark:text-[#F3F2F0] leading-relaxed">
                      @blake-gibbons
                    </p>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#1A1A1A]/50 dark:text-white/40 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors mr-1" />
              </a>

            </div>
          </div>

          {/* Form Column (7 columns) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl space-y-5">
              <h3 className="font-serif italic text-lg font-normal text-[#1A1A1A] dark:text-white">
                Send an Direct Message
              </h3>

              {errorMsg && (
                <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-650 dark:text-red-400 rounded-xl text-xs font-semibold">
                  {errorMsg}
                </div>
              )}

              {sent && (
                <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 dark:text-emerald-400 rounded-xl text-xs font-semibold">
                  Thank you! Redirecting to email application client, one second...
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 select-none">Your Name</label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    disabled={sending || sent}
                    className="w-full px-4 py-3 text-xs bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xl text-[#1A1A1A] dark:text-white placeholder-[#1A1A1A]/40 dark:placeholder-white/30 focus:outline-none focus:border-[#1A1A1A]/30 dark:focus:border-white/30 disabled:opacity-50"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 select-none">Your Email Address</label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    disabled={sending || sent}
                    className="w-full px-4 py-3 text-xs bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xl text-[#1A1A1A] dark:text-white placeholder-[#1A1A1A]/40 dark:placeholder-white/30 focus:outline-none focus:border-[#1A1A1A]/30 dark:focus:border-white/30 disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="msg-input" className="text-[9px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-white/40 select-none">Message Body</label>
                <textarea
                  id="msg-input"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Describe your project, role opportunity, or question..."
                  disabled={sending || sent}
                  className="w-full px-4 py-3 text-xs bg-[#F9F8F6] dark:bg-[#121110] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xl text-[#1A1A1A] dark:text-white placeholder-[#1A1A1A]/40 dark:placeholder-white/30 focus:outline-none focus:border-[#1A1A1A]/30 dark:focus:border-white/30 resize-none disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className="w-full py-3.5 bg-[#1A1A1A] dark:bg-[#F3F2F0] text-white dark:text-[#121110] rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:opacity-90 transition-all disabled:opacity-50 cursor-pointer"
              >
                {sending ? (
                  <span>Preparing Dispatch...</span>
                ) : (
                  <>
                    <Send size={13} />
                    <span>Send Message via MailClient</span>
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
