import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, Sparkles, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const QUICK_QUESTIONS = [
  "What is Blake's core background?",
  "Tell me about the transit electrification study.",
  "What are Blake's technical skills?",
  "How can I contact Blake?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am Blake's virtual assistant. I can help answer your questions about his operations experience, logistics background, urban planning research, and skills. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setError(null);
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      // Map history to simple format expected by API
      const historyPayload = [...messages, userMessage].map((msg) => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ history: historyPayload })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to communicate with AI.");
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.text || "I was unable to formulate a response. Please try again."
        }
      ]);
    } catch (err: any) {
      console.error("Chatbot response error:", err);
      setError(err?.message || "Something went wrong. Please check if GEMINI_API_KEY is configured.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage(inputValue);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50 no-print">
        <motion.button
          id="chatbot-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="p-4 rounded-full bg-[#1A1A1A] dark:bg-[#F3F2F0] text-white dark:text-[#121110] shadow-xl cursor-pointer flex items-center justify-center focus:outline-hidden relative group"
          title="Chat with Blake's AI"
          aria-label="Toggle chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div
                key="chat-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <MessageSquare size={22} />
              </motion.div>
            )}
          </AnimatePresence>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#2563EB]"></span>
            </span>
          )}
        </motion.button>
      </div>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbot-window"
            id="chatbot-window"
            initial={{ opacity: 0, scale: 0.9, y: 50, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] h-[540px] max-h-[calc(100vh-120px)] bg-white dark:bg-[#1A1A1A] border border-[#1A1A1A]/10 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden no-print"
          >
            {/* Header */}
            <div className="p-4 border-b border-[#1A1A1A]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#151413] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#1A1A1A]/5 dark:bg-white/5 text-[#2563EB]">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] dark:text-[#F3F2F0]">
                    Blake's Assistant
                  </h3>
                  <div className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Online & ready</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                aria-label="Close Chatbot"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-[#1A1A1A]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#1A1A1A] dark:bg-[#F3F2F0] text-white dark:text-[#121110] rounded-br-none"
                        : "bg-zinc-100 dark:bg-[#22211F] text-zinc-800 dark:text-zinc-200 rounded-bl-none border border-zinc-200/30 dark:border-zinc-800/30"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-1 mb-1 text-[#2563EB] font-semibold text-[10px] uppercase tracking-wider">
                        <Sparkles size={10} />
                        <span>AI Assistant</span>
                      </div>
                    )}
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}

              {/* Pulsing Dots Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl rounded-bl-none px-4 py-3 bg-zinc-100 dark:bg-[#22211F] text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30">
                    <div className="flex items-center gap-1.5 py-0.5">
                      <span className="h-2 w-2 rounded-full bg-[#2563EB]/60 animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="h-2 w-2 rounded-full bg-[#2563EB]/80 animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="h-2 w-2 rounded-full bg-[#2563EB] animate-bounce"></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Segment */}
              {error && (
                <div className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200/50 dark:border-red-900/30 rounded-xl flex gap-2 text-xs text-red-600 dark:text-red-400">
                  <AlertCircle size={14} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Chat unavailable</p>
                    <p className="mt-0.5 opacity-90">{error}</p>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            {messages.length === 1 && !isLoading && (
              <div className="px-4 py-2 bg-zinc-50 dark:bg-[#161514] border-t border-[#1A1A1A]/5 dark:border-white/5 space-y-1.5">
                <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 block">Suggested Prompts</span>
                <div className="flex flex-wrap gap-1.5">
                  {QUICK_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(q)}
                      className="text-[10px] text-zinc-600 dark:text-zinc-300 hover:text-[#1A1A1A] dark:hover:text-white bg-white dark:bg-[#22211F] border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 rounded-full cursor-pointer hover:bg-zinc-50 dark:hover:bg-[#2B2927] transition-all text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 border-t border-[#1A1A1A]/10 dark:border-white/10 bg-[#FAF9F7] dark:bg-[#151413] flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about experience, transit study..."
                disabled={isLoading}
                className="flex-1 bg-white dark:bg-[#22211F] border border-[#1A1A1A]/10 dark:border-white/10 rounded-xl px-3 py-2 text-xs text-[#1A1A1A] dark:text-[#F3F2F0] focus:outline-hidden focus:border-[#2563EB] disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(inputValue)}
                disabled={!inputValue.trim() || isLoading}
                className="p-2.5 rounded-xl bg-[#1A1A1A] dark:bg-[#F3F2F0] text-white dark:text-[#121110] cursor-pointer hover:bg-[#2563EB] dark:hover:bg-[#2563EB] hover:text-white dark:hover:text-white disabled:opacity-40 disabled:hover:bg-[#1A1A1A] dark:disabled:hover:bg-[#F3F2F0] dark:disabled:hover:text-[#121110] disabled:cursor-not-allowed transition-all flex items-center justify-center"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
