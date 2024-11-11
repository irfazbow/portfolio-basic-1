import React from "react";
import { Briefcase } from "lucide-react";
import Image from "next/image";

type ExperienceItem = {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  logo: string;
};

const experienceData: ExperienceItem[] = [
  {
    position: "Material Engineer",
    company: "PT Cladtek Bi-Metal Manufacturing",
    location: "Batam",
    period: "November 2023 - March 2024",
    logo: "/about/experience-cladtek.webp",
    achievements: [
      "Analyzed and resolved technical issues by providing deviation/query requests and formal letter confirmations",
      "Managed to handle engineering and technical documents for 4 mechanically lined pipe (MLP) projects simultaneously, along with 3 future projects and sub-projects (weld overlay pipes and hot induction bends)",
      "Specialized in mechanically lined pipe manufacturing processes and standards",
      "Collaborated with project teams to ensure compliance with related standards, such as the client specifications, API 5L, 5LD, 5LC, ASME B16.49, and ISO 15590-1",
      "Redefined the manufacturing procedure specification (MPS) for MLP manufacturing, through collaborative communication with Brazil's engineering and production team",
      "Communicated with the software engineering team to further optimize the digitalization of the manufacturing processes, emphasized on the technical documents",
    ],
  },
  {
    position: "Assistant Material Engineer",
    company: "PT Cladtek Bi-Metal Manufacturing",
    location: "Batam",
    period: "October 2022 - November 2023",
    logo: "/about/experience-cladtek.webp",
    achievements: [
      "Prepared technical documents including MPS, ITP, BOM, PDL, and technical queries",
      "Provided technical advice and support for manufacturing processes",
      "Developed expertise in weld overlay and hot induction bends manufacturing",
      "Successfully managed critical mechanically lined pipe projects",
      "Ensured compliance with international standards and specifications",
    ],
  },
  {
    position: "Research Assistant",
    company: "Yeungnam University",
    location: "Gyeongsan",
    period: "September 2020 - August 2022",
    logo: "/about/education-yeungnam.webp",
    achievements: [
      "Managed 4 key projects: differential speed rolling, hydrogen embrittlement, aerosol deposition, and atomic layer deposition",
      "Created and maintained efficient systems for research data organization and analysis",
      "Generated representative graphs and charts for research presentations",
      "Collaborated with 5 different laboratories on various research initiatives",
      "Contributed to research publications and technical presentations",
    ],
  },
  {
    position: "Machine Learning Data Entry Intern",
    company: "PT Pitjarus Teknologi",
    location: "Bekasi",
    period: "December 2019 - May 2020",
    logo: "/about/experience-pitjarus.webp",
    achievements: [
      "Collected and identified training data for image recognition systems",
      "Analyzed and corrected data train errors",
      "Improved detection accuracy from approximately 60% to 95%",
      "Contributed to the development of machine learning models",
      "Collaborated with the data science team to optimize data quality",
    ],
  },
];

const Experience = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-10 py-16">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-8 h-8 text-primary-orange" />
        <h2 className="text-2xl font-medium">Professional Experience</h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-orange-200" />

        <div className="space-y-12">
          {experienceData.map((item, index) => (
            <div key={index} className="relative pl-20">
              <div className="absolute left-0 overflow-hidden w-12 h-12 bg-white">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">{item.position}</h3>
                <div className="text-gray-600">
                  <p className="text-primary-orange">{item.company}</p>
                  <p className="text-sm">
                    {item.location} | {item.period}
                  </p>
                </div>

                <ul className="list-disc text-sm text-gray-600 space-y-1 pt-2 sm:ml-4">
                  {item.achievements.map((achievement, idx) => (
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

export default Experience;
