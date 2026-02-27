import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck, Building } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Ministry of Health" },
  { icon: Users, label: "Community Focused" },
  { icon: Building, label: "KEPH Level 3" },
  { icon: Heart, label: "Est. 2016" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-5">
              Caring for the Ngara Community
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ngara Health Centre is a government-operated Basic Health Centre under the City Council of Nairobi, regulated by the Ministry of Health. Located along Park Road near Guru Nanak Hospital in Starehe Sub-County, we serve as a vital primary healthcare facility for the Ngara ward and surrounding communities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Established on 17th March 2016 and classified as KEPH Level 3, our facility is committed to delivering accessible, affordable, and quality healthcare services. We operate 24 hours a day, 7 days a week — including weekends — ensuring that essential medical care is always available when you need it.
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
            <div className="aspect-[4/3] rounded-2xl bg-secondary overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">24-Hour Care</p>
                  <p className="text-sm text-muted-foreground">Open Every Day</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-shadow border border-border">
              <p className="text-2xl font-bold text-primary">24</p>
              <p className="text-xs text-muted-foreground">In-Patient Beds</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 card-shadow border border-border">
              <p className="text-2xl font-bold text-accent">Level 3</p>
              <p className="text-xs text-muted-foreground">KEPH Classification</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
