import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AISection from "../components/AISection";
import WhyUsSection from "../components/WhyUsSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ChatbotWidget from "../components/ChatbotWidget";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "#000000" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AISection />
      <WhyUsSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ChatbotWidget />
    </div>
  );
}
