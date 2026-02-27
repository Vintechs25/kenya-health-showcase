import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container section-padding !py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">+</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-background text-sm block">Ngara Health Centre</span>
                <span className="text-[11px] text-background/50">City Council of Nairobi</span>
              </div>
            </div>
            <p className="text-sm text-background/50 leading-relaxed">
              A government health facility providing quality, accessible healthcare to the Ngara community and Starehe Sub-County.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About Us", "Our Services", "Patient Info", "Contact"].map((link) => (
                <li key={link}>
                  <button className="text-background/50 hover:text-background transition-colors">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Outpatient", "Maternity", "Laboratory", "Pharmacy", "Emergency", "In-Patient"].map((s) => (
                <li key={s}>
                  <span className="text-background/50">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/50">
                <Phone className="h-4 w-4 shrink-0" />
                +254 20 2717077
              </li>
              <li className="flex items-center gap-2 text-background/50">
                <Mail className="h-4 w-4 shrink-0" />
                kmhfl@health.go.ke
              </li>
              <li className="flex items-start gap-2 text-background/50">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                Park Road, Ngara, Nairobi
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/40">
          <p>© 2025 Ngara Health Centre. All rights reserved.</p>
          <p>Demo Preview – Created by Vintech Systems</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
