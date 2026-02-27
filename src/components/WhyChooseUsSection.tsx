import { motion } from "framer-motion";
import { Award, ShieldCheck, Wallet, MapPin, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Qualified Medical Staff",
    description: "Our team of certified doctors, nurses, and specialists are committed to delivering excellent patient care.",
    stat: "20+",
    statLabel: "Healthcare Workers",
  },
  {
    icon: ShieldCheck,
    title: "NHIF Accredited",
    description: "Fully accredited by NHIF, ensuring affordable and accessible healthcare coverage for all patients.",
    stat: "Level 4",
    statLabel: "Hospital",
  },
  {
    icon: Wallet,
    title: "Affordable & Accessible",
    description: "Quality healthcare services at rates that are fair and accessible to all community members.",
    stat: "NHIF",
    statLabel: "SHA Accepted",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Wangige, Nairobi — conveniently located and easily accessible to serve the community.",
    stat: "24/7",
    statLabel: "Always Open",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding hero-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2 mb-4">
            A Facility You Can Trust
          </h2>
          <p className="text-primary-foreground/60">
            We are dedicated to providing the highest standard of care with integrity and compassion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-foreground">{reason.stat}</p>
                  <p className="text-[10px] text-primary-foreground/50 uppercase tracking-wider">{reason.statLabel}</p>
                </div>
              </div>
              <h3 className="text-base font-semibold text-primary-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-primary-foreground/55 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-12 text-sm text-primary-foreground/50"
        >
          {["NHIF Accredited", "Minor & Major Theatre", "24/7 Inpatient & Outpatient", "Wangige, Nairobi"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
