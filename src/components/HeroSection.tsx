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
          alt="Kabete Gardens Hospital facility"
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
                KEPH Level 4 Hospital
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
            Kabete Gardens Hospital
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 font-medium mb-2">
            Your Health Solution — In a Warm &amp; Special Way
          </p>

          <p className="text-base md:text-lg text-primary-foreground/65 mb-8 max-w-lg">
            A private NHIF-accredited Level 4 hospital offering 24/7 outpatient, inpatient, and both minor &amp; major theatre services in Wangige, Nairobi.
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
              className="border-2 border-primary-foreground/40 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold px-8 text-base h-12 rounded-lg backdrop-blur-sm"
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
