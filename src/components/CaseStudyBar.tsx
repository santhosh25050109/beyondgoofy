import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle, X } from "lucide-react";

const CASE_STUDY_LINK = "https://claude.ai/artifact/SAez8GPM1T5WDLfdfgT6AW";
const DISMISS_KEY = "bg-casestudy-bar-dismissed";

const CaseStudyBar = () => {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") setDismissed(true);
    } catch {
      // storage unavailable, keep the bar visible
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.7;
      const nearBottom = window.scrollY + window.innerHeight > document.body.scrollHeight - 140;
      setShow(pastHero && !nearBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const dismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // storage unavailable, dismiss for this view only
    }
  };

  if (dismissed || !show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none">
      <div className="mx-auto max-w-2xl pointer-events-auto animate-slide-up">
        <div className="flex items-center gap-2 sm:gap-3 rounded-2xl border border-primary/25 bg-card/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg shadow-primary/10">
          <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />

          <a
            href={CASE_STUDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-w-0 flex-1 flex items-center gap-1.5"
          >
            <span className="min-w-0 truncate text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              <span className="sm:hidden">
                <strong className="text-foreground">0 to ₹6 Cr/month at 8+ ROAS</strong>
              </span>
              <span className="hidden sm:inline">
                Case study:{" "}
                <strong className="text-foreground">0 to ₹6 Cr/month revenue at 8+ ROAS</strong>
              </span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href={CASE_STUDY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors flex-shrink-0"
          >
            Read the deck
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss case study bar"
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyBar;
