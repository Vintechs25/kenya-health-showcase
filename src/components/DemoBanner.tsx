import { X, Phone, Mail, Rocket } from "lucide-react";
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
        <div className="fixed bottom-5 right-5 z-[60] bg-foreground/95 backdrop-blur-md text-background rounded-2xl shadow-2xl border border-background/10 overflow-hidden" style={{ width: 300 }}>
          <button
            onClick={() => setBottomVisible(false)}
            className="absolute top-3 right-3 p-1 text-background/30 hover:text-background transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Video header */}
          <div className="relative h-16 overflow-hidden bg-primary/30">
            <video
              src="/vintech_logo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 flex items-center px-5">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <Rocket className="h-5 w-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-base font-extrabold text-background leading-none tracking-tight">Vintech Systems</p>
                  <p className="text-[11px] text-accent font-bold mt-0.5">DEMO PREVIEW</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-4">
            <p className="text-[13px] text-background/60 leading-relaxed mb-4">
              Want a professional website like this for your hospital? Let's talk.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="tel:0719767590"
                className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                0719767590
              </a>
              <a
                href="mailto:ltdvintech@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 bg-background/10 hover:bg-background/15 text-background text-xs font-semibold py-2.5 rounded-lg transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DemoBanner;
