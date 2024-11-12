"use client";

import { Cog } from "lucide-react";
import React from "react";
import { FaJava, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiSpringboot,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    icon?: React.ReactNode;
    color?: string;
  }[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "Java",
        icon: <FaJava className="w-8 h-8" />,
        color: "#007396",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-8 h-8" />,
        color: "#3178C6",
      },
      {
        name: "SQL",
        icon: <FaDatabase className="w-8 h-8" />,
        color: "#336791",
      },
    ],
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="w-8 h-8" />,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="w-8 h-8" />,
        color: "#000000",
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="w-8 h-8" />,
        color: "#6DB33F",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-8 h-8" />,
        color: "#336791",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-8 h-8" />,
        color: "#06B6D4",
      },
      {
        name: "Git",
        icon: <FaGitAlt className="w-8 h-8" />,
        color: "#F05032",
      },
    ],
  },
  {
    title: "Engineering & Technical",
    skills: [
      { name: "Manufacturing Process for MLP, WOL, HIB" },
      { name: "Hydrogen Embrittlement on Steels" },
      { name: "Technical Documentation" },
      { name: "Problem Analysis" },
      { name: "Research & Development" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Analytical Thinking" },
      { name: "Problem Solving" },
      { name: "Interpersonal" },
      { name: "Project Management" },
    ],
  },
];

const Skill = () => {
  return (
    <div className="max-w-[1536px] mx-auto px-4 sm:px-10 py-16">
      <div className="flex items-center gap-3 mb-8">
        <Cog className="w-8 h-8 text-primary-orange" />
        <h2 className="text-2xl font-medium">Skills</h2>
      </div>

      <div className="grid gap-8">
        {skillsData.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-xl font-medium text-primary-orange">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow
                           border border-gray-100 flex flex-col items-center justify-center gap-2"
                >
                  {skill.icon && (
                    <div className="" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                  )}
                  <span className="text-sm text-center font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
