import {ProjectCard} from "@/app/[locale]/projects/_components/Card";
import {useProjects} from "@/app/[locale]/projects/_hooks/useProjects";

export function ProjectsSection () {
  const {data} = useProjects();

  return (
      <div className={'flex flex-col justify-center items-center'}>
        {data?.map((project, index) => (
          <ProjectCard
            key={index}
            type={project.type as 'PERSONAL' | 'CORPORATE'}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
  );
}
