import { motion } from "framer-motion";
import { Clock, CreditCard, CalendarCheck, Bed } from "lucide-react";
import { Button } from "@/components/ui/button";

const PatientInfoSection = () => {
  return (
    <section id="patient-info" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Patient Information</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Everything You Need to Know
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-xl p-6 border border-border card-shadow"
          >
            <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Operating Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mon – Sun</span>
                <span className="font-semibold text-accent">24 Hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Weekends</span>
                <span className="font-medium text-foreground">Open ✓</span>
              </div>
              <div className="pt-2 border-t border-border flex justify-between">
                <span className="text-muted-foreground">Emergency</span>
                <span className="font-semibold text-accent">Always Open</span>
              </div>
            </div>
          </motion.div>

          {/* Insurance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-card rounded-xl p-6 border border-border card-shadow"
          >
            <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Insurance & Payment</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>Accepted payment methods:</p>
              <ul className="space-y-2">
                {["NHIF / SHA", "Linda Mama", "Cash Payments", "M-Pesa"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bed Capacity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-card rounded-xl p-6 border border-border card-shadow"
          >
            <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
              <Bed className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Facility Capacity</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">In-Patient Beds</span>
                <span className="font-medium text-foreground">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">KHIS Reporting</span>
                <span className="font-medium text-foreground">Yes ✓</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Community Unit</span>
                <span className="font-medium text-foreground">Ngara CHU</span>
              </div>
            </div>
          </motion.div>

          {/* Appointment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-primary rounded-xl p-6 text-primary-foreground"
          >
            <div className="h-12 w-12 rounded-lg bg-primary-foreground/15 flex items-center justify-center mb-4">
              <CalendarCheck className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Visit Us Today</h3>
            <p className="text-sm text-primary-foreground/75 mb-6 leading-relaxed">
              Walk-ins welcome 24/7. For non-emergency visits, come during regular hours for shorter wait times.
            </p>
            <Button
              size="lg"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <CalendarCheck className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PatientInfoSection;
