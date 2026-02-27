import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 20 2717077",
    href: "tel:+254202717077",
  },
  {
    icon: Mail,
    label: "Email",
    value: "kmhfl@health.go.ke",
    href: "mailto:kmhfl@health.go.ke",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Park Road, Near Guru Nanak Hospital, Ngara, Starehe Sub-County, Nairobi, Kenya",
    href: "https://www.google.com/maps?q=-1.27346,36.83134",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground">
            Reach out to us for inquiries, appointments, or any healthcare needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4 mb-8">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Address" ? "_blank" : undefined}
                  rel={label === "Address" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 bg-card p-4 rounded-xl border border-border card-shadow hover:card-shadow-hover transition-shadow"
                >
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-medium text-foreground mt-0.5">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] font-semibold rounded-lg"
              asChild
            >
              <a
                href="https://wa.me/254202717077?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20services%20at%20Ngara%20Health%20Centre."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden border border-border card-shadow min-h-[320px]"
          >
            <iframe
              title="Ngara Health Centre Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d36.83134!3d-1.27346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnMjQuNSJTIDM2wrA0OSc1Mi44IkU!5e0!3m2!1sen!2ske!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
