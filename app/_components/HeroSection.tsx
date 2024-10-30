import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center max-w-4xl mx-auto px-6">
      <div className="space-y-6">
        <h1 className="text-6xl font-light tracking-tight fade-up mb-20">
          Software & Material{" "}
          <span className="text-primary-orange">Engineer</span>
        </h1>
        <h2 className="text-3xl fade-up">
          <span className="text-primary-orange">Irfan</span> Fawaz Prabowo
        </h2>
        <p className="text-xl text-zinc-600 max-w-2xl fade-up-delay-1">
          A curious newcomer towards software engineering, experienced in
          material engineering.
        </p>
        <div className="fade-up-delay-2">
          <a
            href="#project"
            className="inline-flex items-center gap-2 text-primary-orange hover:gap-4 transition-all"
          >
            Discover Irfan&apos;s Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
