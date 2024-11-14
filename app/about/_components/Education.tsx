import React from "react";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  subtitle1?: string;
  subtitle2?: string;
  gpa?: string;
  logo: string;
  achievements?: string[];
};

const educationData: EducationItem[] = [
  {
    degree: "Full Stack Software Engineering",
    institution: "Purwadhika – Batam Campus",
    period: "March 2024 - October 2024",
    subtitle1: "Learning on Campus | March 2024 – June 2024",
    subtitle2: "Final Project From Home | August 2024 – October 2024",
    description:
      "Projects: Company Profile, Property Renting Management Website",
    logo: "/about/education-purwadhika.webp",
    achievements: [
      "Back-end development with Java, Spring Boot, and PostgreSQL",
      "Front-end development with TypeScript, React, Next.js, and Tailwind CSS",
      "Trained in designing and implementing database systems",
      "Built RESTful APIs and implemented authentication/authorization systems",
      "Practiced version control with Git and collaborative development workflows",
      "Deployed projects on Google Cloud Platform and Vercel",
    ],
  },
  {
    degree: "Master of Science in Materials Science and Engineering",
    institution: "Yeungnam University",
    period: "September 2020 - August 2022",
    description:
      "Thesis: Effect of Surface Roughness on Hydrogen Embrittlement of Austenitic and Ferritic Steels",
    gpa: "GPA: 4.40 / 4.50",
    logo: "/about/education-yeungnam.webp",
    achievements: [
      "Conducted research on hydrogen embrittlement in austenitic stainless steels, ferritic stainless steels, and high and medium Mn steels",
      "Analyzed hydrogen diffusivity in metallic materials",
      "Investigated aerosol deposition coating processes on steels for hydrogen diffusivity",
      "Performed differential speed rolling experiments and analysis",
      "Managed to self perform SEM, XRD, tensile test, hardness test, hydrogen charging, hydrogen diffusivity, surface roughness, etc",
    ],
  },
  {
    degree: "Bachelor of Engineering in Metallurgy and Materials Engineering",
    institution: "University of Indonesia",
    period: "September 2015 - August 2019",
    description:
      "Undergraduate thesis: Effect of Heat Input on Impact Toughness and Microstructure of SM570 Steel with Flux Cored Arc Welding",
    gpa: "GPA: 3.24 / 4.00",
    logo: "/about/education-ui.webp",
    achievements: [
      "Researches focused on welding, mechanical properties, and microstructural analysis",
      "Performed microstructural analysis image through academic papers",
      "The final weld metal through FCAW produced acicular ferrite to toughen up the material",
    ],
  },
];

const Education = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-10 py-16">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-8 h-8 text-primary-orange" />
        <h2 className="text-2xl font-medium">Education</h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-orange-200" />

        <div className="space-y-12">
          {educationData.map((item, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-0 overflow-hidden w-12 h-12 bg-white ">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">{item.degree}</h3>
                <div className="text-gray-600">
                  <p className="text-primary-orange">{item.institution}</p>
                  <p className="text-sm">{item.period}</p>
                  {item.subtitle1 && (
                    <p className="text-sm italic font-light">
                      {item.subtitle1}
                    </p>
                  )}
                  {item.subtitle2 && (
                    <p className="text-sm italic font-light">
                      {item.subtitle2}
                    </p>
                  )}
                </div>
                {item.gpa && (
                  <p className="text-sm font-medium text-primary-orange">
                    {item.gpa}
                  </p>
                )}
                <p className="text-sm text-gray-600">{item.description}</p>

                <ul className="list-disc text-sm text-gray-600 space-y-1 pt-2 sm:ml-4">
                  {item.achievements &&
                    item.achievements.map((achievement, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
