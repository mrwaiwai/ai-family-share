import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import PromptSkillsSection from "@/components/PromptSkillsSection";
import ParentGuideSection from "@/components/ParentGuideSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ModulesSection />
    <PromptSkillsSection />
    <ParentGuideSection />
    <Footer />
  </div>
);

export default Index;
