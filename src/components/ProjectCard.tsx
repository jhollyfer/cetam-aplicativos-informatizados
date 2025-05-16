
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-tech-800/70 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-tech-500/10 transition-all duration-300 flex flex-col animate-float-in">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <span className="text-xs font-medium py-1 px-2 rounded bg-tech-500/80 text-white">
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex-grow p-4 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.categories.map((category) => (
              <span
                key={category}
                className="text-xs py-1 px-2 bg-tech-700 text-tech-200 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>

          <p className="text-tech-200 text-sm mb-4">{project.description}</p>
        </div>

        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-tech-700 hover:bg-tech-600 text-white py-2 px-4 rounded-md transition-colors w-full"
        >
          Visitar Projeto <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
