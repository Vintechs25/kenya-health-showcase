import { X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const DemoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <>
      {/* Top sticky banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-background text-center py-2 px-4 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-2.5 py-0.5 border border-accent/30">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-semibold">DEMO</span>
          </span>
          <span className="text-background/80">
            This is a demo preview by{" "}
            <span className="font-semibold text-background">Vintech Systems</span>
          </span>
          <span className="hidden sm:inline text-background/50">|</span>
          <a href="tel:0719767590" className="hidden sm:inline-flex items-center gap-1 text-background/70 hover:text-background transition-colors">
            <Phone className="h-3 w-3" />
            0719767590
          </a>
          <a href="mailto:ltdvintech@gmail.com" className="hidden sm:inline-flex items-center gap-1 text-background/70 hover:text-background transition-colors">
            <Mail className="h-3 w-3" />
            ltdvintech@gmail.com
          </a>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-background/50 hover:text-background transition-colors"
          aria-label="Close demo banner"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Bottom floating badge */}
      <div className="fixed bottom-4 left-4 z-[60] bg-foreground/95 backdrop-blur text-background rounded-xl px-4 py-3 card-shadow max-w-xs">
        <p className="text-xs font-semibold text-accent mb-1">🚀 Demo Preview</p>
        <p className="text-[11px] text-background/60 leading-relaxed mb-2">
          Want a website like this for your hospital? Contact Vintech Systems today.
        </p>
        <div className="flex items-center gap-3 text-[11px]">
          <a href="tel:0719767590" className="flex items-center gap-1 text-background/80 hover:text-background font-medium">
            <Phone className="h-3 w-3" />
            0719767590
          </a>
          <a href="mailto:ltdvintech@gmail.com" className="flex items-center gap-1 text-background/80 hover:text-background font-medium">
            <Mail className="h-3 w-3" />
            Email Us
          </a>
        </div>
      </div>
    </>
  );
};

export default DemoBanner;
