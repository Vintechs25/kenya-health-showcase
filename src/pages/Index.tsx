import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import PatientInfoSection from "@/components/PatientInfoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DemoBanner from "@/components/DemoBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DemoBanner />
      {/* Top padding to account for demo banner */}
      <div className="pt-9">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <PatientInfoSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
