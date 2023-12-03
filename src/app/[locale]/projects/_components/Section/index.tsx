import {ProjectCard} from "@/app/[locale]/projects/_components/Card";
import {useProjects} from "@/app/[locale]/projects/_hooks/useProjects";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";

export function ProjectsSection() {
    const {data} = useProjects();

    const renderProjects = (projects: ProjectInterface[]) => {
        return projects.map((project: ProjectInterface, index: number) => {
            return <ProjectCard key={index} {...project} />
        })
    }

    return (
        <div className={'flex flex-1 w-full flex-col justify-center items-center'}>
            {
                Array.from(data).map(([key, value]) => {
                        return <div key={key}>
                            <h1 className={'text-3xl font-bold mx-24 my-5 text-blue-dark-11'}>{key}</h1>
                            {renderProjects(value)}
                        </div>
                    }
                )
            }
        </div>
    );
}
