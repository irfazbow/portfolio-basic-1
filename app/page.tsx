import HeroSection from "./_components/HeroSection";
import AboutSection from "./_components/AboutSection";
import ProjectSection from "./_components/ProjectSection";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <HeroSection />
      <ProjectSection />
      <AboutSection />
    </div>
  );
}
