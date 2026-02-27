import { motion } from "framer-motion";
import { Award, ShieldCheck, Wallet, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Qualified Medical Staff",
    description: "Our team of certified doctors, nurses, and specialists are committed to delivering excellent patient care.",
  },
  {
    icon: ShieldCheck,
    title: "Government Recognized & Licensed",
    description: "Fully registered and compliant with Kenya's health regulations and quality standards.",
  },
  {
    icon: Wallet,
    title: "Affordable & Accessible",
    description: "Quality healthcare services at rates that are fair and accessible to all community members.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Strategically located for easy access by public and private transport with ample parking.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            A Hospital You Can Trust
          </h2>
          <p className="text-muted-foreground">
            We are dedicated to providing the highest standard of care with integrity and compassion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
