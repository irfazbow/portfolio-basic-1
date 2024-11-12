import React from "react";
import Hero from "./_components/Hero";
import Education from "./_components/Education";
import Experience from "./_components/Experience";
import DraggableNavButton from "@/components/DraggableNavButton";
import Skill from "./_components/Skill";

const About = () => {
  const aboutNavigationItems = [
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Skill", href: "#skill" },
  ];

  return (
    <>
      <div className="pt-20" />
      <DraggableNavButton
        navigationItems={aboutNavigationItems}
        navigationName="About"
      />
      <Hero />

      <div id="education">
        <Education />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="skill">
        <Skill />
      </div>
    </>
  );
};

export default About;
