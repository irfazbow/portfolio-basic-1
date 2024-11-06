import React from "react";
import Image from "next/image";

const TechStack = () => {
  const technologies = [
    {
      name: "Java",
      logoPath: "/projects/logo-java.webp",
    },
    {
      name: "Spring Boot",
      logoPath: "/projects/logo-springboot.webp",
    },
    {
      name: "PostgreSQL",
      logoPath: "/projects/logo-postgresql.webp",
    },
    {
      name: "Supabase",
      logoPath: "/projects/logo-supabase.webp",
    },
    {
      name: "Redis",
      logoPath: "/projects/logo-redis.webp",
    },
    {
      name: "TypeScript",
      logoPath: "/projects/logo-typescript.webp",
    },
    {
      name: "Tailwind CSS",
      logoPath: "/projects/logo-tailwindcss.webp",
    },
    {
      name: "Next.js",
      logoPath: "/projects/logo-nextjs.webp",
    },
  ];

  return (
    <>
      <div className="p-4 lg:p-8">
        <div className="py-4">
          <div className="mb-4 text-primary-orange font-medium">
            Tech Stack for the Project
          </div>
          <div className="flex flex-wrap items-start gap-8 ">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center w-[100px]"
              >
                <div className="h-[60px] w-[60px] relative flex items-center justify-center">
                  <Image
                    src={tech.logoPath}
                    alt={`${tech.name} logo`}
                    width={500}
                    height={500}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-center mt-2">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 mt-8">
          <div>
            <p className="text-primary-orange font-medium mb-4">
              Notable Mention
            </p>
          </div>
          <div>
            <ul className="list-disc space-y-2 pl-5">
              <li className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                Redis was used to store and blacklist expired JWT, or blacklisting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
