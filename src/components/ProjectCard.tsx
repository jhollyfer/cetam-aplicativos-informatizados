
import { Project } from "@/types/project";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden bg-tech-800/70 border-tech-700 hover:border-tech-500 hover:shadow-xl hover:shadow-tech-500/10 transition-all duration-300 flex flex-col animate-float-in">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tech-900 via-tech-900/50 to-transparent opacity-70"></div>
        </AspectRatio>
        
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-xs font-medium py-1 px-2 rounded bg-tech-500/80 text-white backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>

      <CardContent className="flex-grow p-5 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-tech-300 transition-colors">
            {project.name}
          </h3>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.categories.map((category) => (
              <span
                key={category}
                className="text-xs py-1 px-2 bg-tech-700 text-tech-200 rounded-full hover:bg-tech-600 transition-colors"
              >
                {category}
              </span>
            ))}
          </div>

          <p className="text-tech-200 text-sm mb-4">{project.description}</p>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <a 
          href={project.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-center gap-2 bg-tech-700 hover:bg-tech-600 text-white py-2 px-4 rounded-md transition-colors w-full group-hover:bg-tech-500"
        >
          Visitar Projeto <ExternalLink size={16} />
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
