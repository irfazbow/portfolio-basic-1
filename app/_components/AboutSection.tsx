import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto py-32">
        <div className="border-b border-primary-orange mb-12">
          <h2 className="text-2xl lg:text-4xl mb-4">
            <span className="text-primary-orange">Education</span> Background
          </h2>
          <p className="font-light mb-4">
            Latest academic achievement and research focus
          </p>
        </div>

        <div className="">
          <Link href="/about#education">
            <div className="pb-2 group cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-light mb-2 group-hover:text-primary-orange transition-colors">
                  Master of Science in Materials Science and Engineering
                </h3>
                <p className="text-orange-600 font-light mb-2">
                  Yeungnam University
                </p>
                <p className="text-sm text-zinc-500">
                  Researches focused in hydrogen embrittlement and surface
                  roughness effect of the material on it, with other area of
                  researches as follows:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-zinc-500 mt-2 ml-4">
                  <li>Measurement of hydrogen diffusivity on steels</li>
                  <li>
                    Aerosol deposition, an advanced coating process, to prevent
                    hydrogen diffusion
                  </li>
                  <li>Differential speed rolling for better toughness</li>
                </ul>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity">
                Discover more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-32">
        <div className="border-b border-primary-orange mb-12">
          <h2 className="text-2xl lg:text-4xl mb-4">
            Professional <span className="text-primary-orange">Experience</span>
          </h2>
          <p className="font-light mb-4">
            Recent roles and responsibilities in engineering and technology
          </p>
        </div>

        <div className="space-y-12">
          <Link href="/about#experience">
            <div className="pb-2 group cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-light mb-2 group-hover:text-primary-orange transition-colors">
                  Material Engineer
                </h3>
                <p className="text-orange-600 font-light mb-2">
                  Cladtek Bi-Metal Manufacturing
                </p>
                <p className="text-sm text-zinc-500">
                  Leading technical solutions for bi-metal manufacturing
                  processes, specializing in material analysis and quality
                  assurance for critical industrial applications.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity">
                Discover more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          <Link href="/about#experience">
            <div className="pb-2 group cursor-pointer">
              <div className="mb-4">
                <h3 className="text-lg font-light mb-2 group-hover:text-primary-orange transition-colors">
                  Machine Learning Data Entry Intern
                </h3>
                <p className="text-orange-600 font-light mb-2">
                  Pitjarus Teknologi
                </p>
                <p className="text-sm text-zinc-500">
                  Contributed to machine learning model improvement through
                  precise data collection and validation, achieving significant
                  accuracy improvements in image recognition systems.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-orange opacity-0 group-hover:opacity-100 transition-opacity">
                Discover more <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
