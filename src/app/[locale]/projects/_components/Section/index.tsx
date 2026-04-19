import {useTranslations} from "next-intl";
import {ProjectCard} from "@/app/[locale]/projects/_components/Card";
import {useProjects} from "@/app/[locale]/projects/_hooks/useProjects";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";
import ScrollReveal from "@/app/_components/ScrollReveal";

interface IYearGroupProps {
    year: string;
    projects: ProjectInterface[];
}

function YearGroup({year, projects}: IYearGroupProps) {
    const t = useTranslations('Projects');
    const count = projects.length;
    const countLabel = count === 1 ? t('project') : t('projects');

    return (
        <section className="flex flex-col gap-5">
            <ScrollReveal
                className="relative flex items-end gap-5 md:gap-7 pt-2"
                threshold={0.2}
            >
                <div className="relative">
                    <span
                        className="relative block text-[3.5rem] md:text-[6rem] font-black leading-none tracking-tight bg-gradient-to-br from-white/25 via-white/15 to-white/5 bg-clip-text text-transparent select-none">
                        {year}
                    </span>
                </div>
                <div className="flex-1 flex flex-col gap-2 pb-3">
                    <span
                        aria-hidden
                        className="h-px w-full bg-gradient-to-r from-white/25 via-white/10 to-transparent"
                    />
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] text-blue-dark-11">
                        {count.toString().padStart(2, '0')} · {countLabel}
                    </span>
                </div>
            </ScrollReveal>

            <div className="flex flex-col gap-5 md:gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={`${year}-${index}`} {...project} index={index}/>
                ))}
            </div>
        </section>
    );
}

export function ProjectsSection() {
    const {data} = useProjects();

    return (
        <div className="w-full flex flex-col gap-14 md:gap-16">
            {Array.from(data).map(([year, projects]) => (
                <YearGroup key={year} year={year} projects={projects}/>
            ))}
        </div>
    );
}
