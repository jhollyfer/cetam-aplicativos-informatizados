
import ProjectCard from "./ProjectCard";
import { Project } from "@/types/project";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => {
  return (
    <ScrollArea className="h-full w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ProjectGrid;
