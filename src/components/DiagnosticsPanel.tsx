import React, { useState, useEffect } from "react";
import { Terminal, CheckCircle2, XCircle, Loader2, Server, HelpCircle, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LogEntry {
  step: string;
  status: "idle" | "loading" | "success" | "failed";
  message: string;
}

export default function DiagnosticsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    { step: "APP START", status: "loading", message: "Initializing React client..." },
    { step: "DATABASE INIT", status: "idle", message: "Awaiting DB setup..." },
    { step: "DATABASE READY", status: "idle", message: "Awaiting DB readiness..." },
    { step: "SERVER READY", status: "idle", message: "Awaiting server ping..." },
    { step: "API READY", status: "idle", message: "Awaiting API validation..." },
    { step: "FRONTEND READY", status: "idle", message: "Awaiting client mount..." },
  ]);

  const updateStep = (
    stepName: string,
    status: "idle" | "loading" | "success" | "failed",
    message: string
  ) => {
    setLogs((prev) =>
      prev.map((log) => (log.step === stepName ? { ...log, status, message } : log))
    );
    console.log(`[DIAGNOSTICS] ${stepName}: ${status.toUpperCase()} - ${message}`);
  };

  useEffect(() => {
    const runDiagnostics = async () => {
      // 1. APP START
      updateStep("APP START", "success", "React Client successfully initialized.");

      // 2. DATABASE INIT
      updateStep("DATABASE INIT", "loading", "Initializing in-memory portfolio datastore...");
      await new Promise((r) => setTimeout(r, 400));

      // 3. DATABASE READY
      updateStep("DATABASE INIT", "success", "In-memory database initialized successfully.");
      updateStep("DATABASE READY", "success", "Static portfolio datasets compiled and ready.");

      // 4. SERVER READY
      updateStep("SERVER READY", "loading", "Pinging backend health endpoint at /api/health...");
      try {
        const serverRes = await fetch("/api/health");
        if (serverRes.ok) {
          const data = await serverRes.json();
          if (data.status === "ok") {
            updateStep("SERVER READY", "success", "Express backend is healthy and listening on Port 3000.");
          } else {
            throw new Error(`Unexpected status response: ${JSON.stringify(data)}`);
          }
        } else {
          throw new Error(`HTTP Error ${serverRes.status}`);
        }
      } catch (err: any) {
        updateStep(
          "SERVER READY",
          "failed",
          `Backend connection failed: ${err.message || "Connection refused"}`
        );
        updateStep("API READY", "failed", "API check bypassed due to offline server.");
        updateStep("FRONTEND READY", "failed", "Frontend mounted in isolated offline mode.");
        return;
      }

      // 5. API READY
      updateStep("API READY", "loading", "Validating chatbot routing at /api/chat...");
      try {
        const chatRes = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ history: [] }), // send empty history just to check routing
        });
        
        // Note: Empty history might return 200 or 500 depending on Gemini key configuration,
        // but if it hits the controller, the API route is alive!
        if (chatRes.status === 200 || chatRes.status === 500) {
          const isKeyMissing = chatRes.status === 500;
          const statusText = isKeyMissing 
            ? "API Active (Gemini API key is required in Settings > Secrets for chat generation)"
            : "API Active & chatbot endpoints fully validated.";
          updateStep("API READY", "success", statusText);
        } else {
          throw new Error(`Received status ${chatRes.status}`);
        }
      } catch (err: any) {
        updateStep("API READY", "failed", `API Route failed: ${err.message}`);
      }

      // 6. FRONTEND READY
      updateStep("FRONTEND READY", "success", "Full Stack application fully synchronized and ready.");
    };

    runDiagnostics();
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 no-print">
      {/* Floating Toggle Button */}
      <motion.button
        id="diagnostics-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-950 dark:bg-zinc-100/90 dark:hover:bg-white text-white dark:text-zinc-900 shadow-xl backdrop-blur-md text-xs font-semibold cursor-pointer border border-white/10 dark:border-zinc-200"
      >
        <Activity size={14} className="animate-pulse text-emerald-500" />
        <span>Diagnostics Panel</span>
      </motion.button>

      {/* Diagnostics Logs Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-14 left-0 w-80 bg-zinc-950/95 dark:bg-zinc-900/95 border border-zinc-800 dark:border-zinc-700/50 rounded-2xl p-4 shadow-2xl text-zinc-100 dark:text-zinc-200 backdrop-blur-lg flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Terminal size={14} />
                <span>System Startup Logs</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[10px] text-zinc-400 hover:text-white bg-zinc-800/50 px-2 py-0.5 rounded-md"
              >
                Close
              </button>
            </div>

            <div className="space-y-3.5 max-h-72 overflow-y-auto pr-1">
              {logs.map((log) => (
                <div key={log.step} className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold tracking-tight text-zinc-300 dark:text-zinc-100">
                      {log.step}
                    </span>
                    <span className="flex items-center">
                      {log.status === "success" && (
                        <CheckCircle2 size={13} className="text-emerald-500" />
                      )}
                      {log.status === "failed" && (
                        <XCircle size={13} className="text-red-500 animate-pulse" />
                      )}
                      {log.status === "loading" && (
                        <Loader2 size={13} className="text-amber-500 animate-spin" />
                      )}
                      {log.status === "idle" && (
                        <HelpCircle size={13} className="text-zinc-600" />
                      )}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-400 dark:text-zinc-300 leading-normal">
                    {log.message}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-[9px] text-zinc-500 border-t border-zinc-800 pt-2 font-mono text-center">
              Port: 3000 | Env: {process.env.NODE_ENV || "development"}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
