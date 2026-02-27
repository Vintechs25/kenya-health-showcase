import { motion } from "framer-motion";
import {
  Stethoscope,
  Baby,
  FlaskConical,
  Pill,
  Siren,
  UserCheck,
} from "lucide-react";

import outpatientImg from "@/assets/outpatient.jpg";
import maternityImg from "@/assets/maternity.jpg";
import laboratoryImg from "@/assets/laboratory.jpg";
import pharmacyImg from "@/assets/pharmacy.jpg";
import emergencyImg from "@/assets/emergency.jpg";
import specialistImg from "@/assets/specialist.jpg";

const services = [
  {
    icon: Stethoscope,
    title: "Outpatient Services",
    description: "Comprehensive consultations, diagnosis, and treatment for walk-in and scheduled patients.",
    image: outpatientImg,
  },
  {
    icon: Baby,
    title: "Maternity Care",
    description: "Full antenatal, delivery, and postnatal care in a safe, supportive environment.",
    image: maternityImg,
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    description: "Accurate and timely diagnostic testing with modern laboratory equipment.",
    image: laboratoryImg,
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "Well-stocked pharmacy providing affordable, quality-assured medications.",
    image: pharmacyImg,
  },
  {
    icon: Siren,
    title: "Emergency Services",
    description: "Round-the-clock emergency care with trained personnel and equipped facility.",
    image: emergencyImg,
  },
  {
    icon: UserCheck,
    title: "Specialist Clinics",
    description: "Access to specialist consultations including pediatrics, surgery, and internal medicine.",
    image: specialistImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
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
              className="group bg-card rounded-xl overflow-hidden border border-border card-shadow hover:card-shadow-hover transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-3 left-3 h-10 w-10 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
