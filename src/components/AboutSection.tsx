import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck, Building } from "lucide-react";
import aboutImg from "@/assets/about-doctor.jpg";

const highlights = [
  { icon: ShieldCheck, label: "NHIF Accredited" },
  { icon: Users, label: "Private Facility" },
  { icon: Building, label: "KEPH Level 4" },
  { icon: Heart, label: "Minor & Major Theatre" },
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
              Kabete Gardens Hospital is a private health facility which is NHIF accredited and recognized as a Level 4 health facility. Located in Wangige, Nairobi, we offer both outpatient and inpatient services around the clock, 24 hours a day, 7 days a week.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With our steady growth, we currently offer both minor and major theatre services. Our dedicated team of healthcare professionals is committed to delivering quality care in a warm and special way — ensuring every patient receives the attention and treatment they deserve.
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
