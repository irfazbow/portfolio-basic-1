import WorkSection from "./_components/ProjectSection";
import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </div>
  );
}
