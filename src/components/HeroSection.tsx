import { motion } from "framer-motion";
import { Phone, Stethoscope, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-hospital.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ngara Health Centre facility"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 border border-accent/30">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">
                Open 24/7 — Weekends Included
              </span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 border border-primary-foreground/20">
              <Building2 className="h-3.5 w-3.5 text-primary-foreground/80" />
              <span className="text-sm font-medium text-primary-foreground/80">
                KEPH Level 3 · MFL #13122
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Ngara Health Centre
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium mb-2">
            City Council of Nairobi — Ministry of Health
          </p>

          <p className="text-base md:text-lg text-primary-foreground/65 mb-8 max-w-lg">
            A trusted government health facility located along Park Road, Ngara — providing quality, accessible healthcare to the Starehe community and beyond.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 text-base h-12 rounded-lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Stethoscope className="mr-2 h-5 w-5" />
              View Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 text-base h-12 rounded-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Facility
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
