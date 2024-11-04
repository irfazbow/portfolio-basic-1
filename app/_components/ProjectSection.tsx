import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  category: string;
  image: string;
}

const ProjectItem = ({ title, category, image }: ProjectItemProps) => {
  return (
    <div className="pb-2 border-b border- border-orange-400">
      <Link href="/projects">
        <div className="group cursor-pointer h-64 overflow-visible mb-4 relative">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </Link>

      <h3 className="text-lg font-light mb-1">{title}</h3>
      <p className="text-sm text-zinc-500">{category}</p>
    </div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "Outer Wilds Ventures",
      category: "Company Profile",
      image: "/home/project-outerwildsventures.webp",
    },
    {
      title: "Nginep",
      category: "Property Renting Management",
      image: "/home/project-nginep.webp",
    },
  ];

  return (
    <section id="project" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="border-b border-primary-orange mb-4">
          <h2 className="text-3xl lg:text-4xl mb-4">
            <span className="text-primary-orange">Projects</span> in Short
          </h2>
          <p className="font-light mb-4">
            Discover more about them and observe the deployed version
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
