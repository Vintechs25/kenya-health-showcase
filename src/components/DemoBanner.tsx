import { X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const DemoBanner = () => {
  const [topVisible, setTopVisible] = useState(true);
  const [bottomVisible, setBottomVisible] = useState(true);

  return (
    <>
      {/* Top sticky banner */}
      {topVisible && (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-background">
          <div className="container flex items-center justify-between h-9 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-3 font-medium overflow-hidden">
              <span className="inline-flex items-center gap-1.5 shrink-0 rounded-full bg-accent/20 px-2 py-0.5 border border-accent/30">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-bold text-[10px] sm:text-xs">DEMO</span>
              </span>
              <span className="text-background/70 hidden sm:inline">
                Preview by <span className="font-bold text-background">Vintech Systems</span>
              </span>
              <span className="text-background/70 sm:hidden font-bold">Vintech Systems</span>
              <span className="text-background/20 hidden md:inline">|</span>
              <a href="tel:0719767590" className="hidden md:inline-flex items-center gap-1 text-background/60 hover:text-background transition-colors">
                <Phone className="h-3 w-3" />
                0719767590
              </a>
              <a href="mailto:ltdvintech@gmail.com" className="hidden md:inline-flex items-center gap-1 text-background/60 hover:text-background transition-colors">
                <Mail className="h-3 w-3" />
                ltdvintech@gmail.com
              </a>
            </div>
            <button
              onClick={() => setTopVisible(false)}
              className="p-1 text-background/40 hover:text-background transition-colors shrink-0"
              aria-label="Close demo banner"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom floating badge */}
      {bottomVisible && (
        <div className="fixed bottom-4 left-4 z-[60] bg-foreground/95 backdrop-blur-md text-background rounded-xl p-4 card-shadow max-w-[280px] border border-background/5">
          <button
            onClick={() => setBottomVisible(false)}
            className="absolute top-2 right-2 p-1 text-background/30 hover:text-background transition-colors"
            aria-label="Close"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-2 mb-2">
            <video
              src="/vintech_logo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-6 w-auto rounded"
            />
            <div>
              <p className="text-[11px] font-bold text-background leading-tight">Vintech Systems</p>
              <p className="text-[10px] text-accent font-semibold">Demo Preview</p>
            </div>
          </div>
          <p className="text-[11px] text-background/50 leading-relaxed mb-3">
            Want a professional website like this for your hospital?
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="tel:0719767590" className="flex items-center gap-1 text-background/70 hover:text-background font-medium transition-colors">
              <Phone className="h-3 w-3" />
              Call Us
            </a>
            <a href="mailto:ltdvintech@gmail.com" className="flex items-center gap-1 text-background/70 hover:text-background font-medium transition-colors">
              <Mail className="h-3 w-3" />
              Email Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoBanner;
