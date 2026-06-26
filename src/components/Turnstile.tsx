import { useEffect, useRef } from "react";

interface TurnstileProps {
  siteKey: string;
  onSuccess: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export default function Turnstile({ siteKey, onSuccess, onError, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    // Add Cloudflare Turnstile script if it's not already loaded
    let script = document.getElementById("cloudflare-turnstile-script") as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = "cloudflare-turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    const initializeTurnstile = () => {
      const turnstile = (window as any).turnstile;
      if (turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          const widgetId = turnstile.render(containerRef.current, {
            sitekey: siteKey,
            callback: (token: string) => {
              onSuccess(token);
            },
            "error-callback": () => {
              if (onError) onError();
            },
            "expired-callback": () => {
              if (onExpire) onExpire();
            },
          });
          widgetIdRef.current = widgetId;
        } catch (err) {
          console.error("Turnstile rendering error:", err);
        }
      }
    };

    // If script is already loaded and window.turnstile is available
    if ((window as any).turnstile) {
      initializeTurnstile();
    } else {
      // Wait for script load
      const handleScriptLoad = () => {
        initializeTurnstile();
      };
      script.addEventListener("load", handleScriptLoad);

      // Interval fallback in case window.turnstile becomes active out of band
      const interval = setInterval(() => {
        if ((window as any).turnstile) {
          initializeTurnstile();
          clearInterval(interval);
        }
      }, 300);

      return () => {
        script.removeEventListener("load", handleScriptLoad);
        clearInterval(interval);
        if (widgetIdRef.current && (window as any).turnstile) {
          try {
            (window as any).turnstile.remove(widgetIdRef.current);
          } catch (e) {
            // Ignore clean up errors on fast transitions
          }
          widgetIdRef.current = null;
        }
      };
    }

    return () => {
      if (widgetIdRef.current && (window as any).turnstile) {
        try {
          (window as any).turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore
        }
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onSuccess, onError, onExpire]);

  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div ref={containerRef} id="cf-turnstile-element" />
    </div>
  );
}
