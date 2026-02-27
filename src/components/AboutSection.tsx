import { motion } from "framer-motion";
import { Heart, Users, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: Heart, label: "Patient-Centered Care" },
  { icon: Users, label: "Community Focused" },
  { icon: ShieldCheck, label: "Trusted Since 2005" },
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
              Caring for Our Community's Health
            </h2>
            {/* EDITABLE: About paragraph */}
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sunrise Community Hospital is a leading healthcare facility committed to providing accessible, affordable, and high-quality medical services to the people of our community and beyond.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a team of experienced doctors, nurses, and support staff, we offer a comprehensive range of medical services in a modern, welcoming environment. Our mission is to improve health outcomes and ensure every patient receives compassionate care.
            </p>
            <div className="flex flex-wrap gap-4">
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
                  <p className="text-lg font-semibold text-foreground">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Serving the Community</p>
                </div>
              </div>
            </div>
            {/* Stats floating card */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 card-shadow border border-border">
              <p className="text-2xl font-bold text-primary">50,000+</p>
              <p className="text-xs text-muted-foreground">Patients Served Annually</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
