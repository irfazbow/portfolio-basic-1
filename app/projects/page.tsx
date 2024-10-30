import Link from "next/link";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {[
          {
            title: "Outer Wilds Ventures - Company Profile",
            description:
              "A company profile of Outer Wilds Ventures inspired and based on the Outer Wilds video game. The website showcases the overall of the company, more on the historical of the company, products, services, and team members.",
            tags: ["TypeScript", "Next.js", "Tailwind CSS"],
            projectUrl: "https://owventures-cpy-profile.vercel.app/",
          },
          {
            title: "Nginep - Property Renting Management",
            description:
              "Comprehensive system for managing property rentals, emphasized on the dashboard for analytics/sales, flow of transaction, and reviews of the rentals.",
            tags: [
              "Java",
              "TypeScript",
              "Next.js",
              "Spring Boot",
              "PostgreSQL",
            ],
            projectUrl: "https://nginep-frontend.vercel.app/",
          },
        ].map((project) => (
          <div key={project.title} className="p-6 bg-gray-50 rounded-lg">
            <Link href={project.projectUrl} target="_blank">
              <h3 className="text-[#ff6b00]">{project.title}</h3>
            </Link>
            <p className="text-gray-600 mb-4 text-justify">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
