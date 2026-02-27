import { motion } from "framer-motion";
import {
  Stethoscope,
  Baby,
  FlaskConical,
  Pill,
  Siren,
  UserCheck,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Outpatient Services",
    description: "Comprehensive consultations, diagnosis, and treatment for walk-in and scheduled patients.",
  },
  {
    icon: Baby,
    title: "Maternity Care",
    description: "Full antenatal, delivery, and postnatal care in a safe, supportive environment.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Accurate and timely diagnostic testing with modern laboratory equipment.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Well-stocked pharmacy providing affordable, quality-assured medications.",
  },
  {
    icon: Siren,
    title: "Emergency Services",
    description: "Round-the-clock emergency care with trained personnel and equipped facility.",
  },
  {
    icon: UserCheck,
    title: "Specialist Clinics",
    description: "Access to specialist consultations including pediatrics, surgery, and internal medicine.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground">
            We provide a wide range of medical services to meet the healthcare needs of our community.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-card rounded-xl p-6 border border-border card-shadow hover:card-shadow-hover transition-shadow duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
