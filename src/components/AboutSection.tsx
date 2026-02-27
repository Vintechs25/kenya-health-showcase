import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck, Building } from "lucide-react";
import aboutImg from "@/assets/about-doctor.jpg";

const highlights = [
  { icon: ShieldCheck, label: "Ministry of Health" },
  { icon: Users, label: "Community Focused" },
  { icon: Building, label: "KEPH Level 4" },
  { icon: Heart, label: "Patient Centered" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-5">
              Caring for the Kabete Community
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kabete Gardens Hospital is a KEPH Level 4 hospital dedicated to providing quality healthcare in a warm and special way. We serve the Kabete community and surrounding areas with compassion, professionalism, and modern medical care.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Classified as a Level 4 hospital, our facility offers comprehensive inpatient and outpatient services. We operate 24 hours a day, 7 days a week — including weekends — ensuring that quality medical care is always available when you need it.
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 green-soft-bg rounded-full px-4 py-2">
                  <Icon className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative card-shadow">
              <img
                src={aboutImg}
                alt="Medical team at Kabete Gardens Hospital"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Stats floating card */}
            <div className="absolute -bottom-5 -left-3 md:-left-5 bg-card rounded-xl p-4 card-shadow border border-border">
              <p className="text-2xl font-bold text-primary">24</p>
              <p className="text-xs text-muted-foreground">In-Patient Beds</p>
            </div>
            <div className="absolute -top-5 -right-3 md:-right-5 bg-card rounded-xl p-4 card-shadow border border-border">
              <p className="text-2xl font-bold text-accent">24/7</p>
              <p className="text-xs text-muted-foreground">Always Open</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
