import Image from "next/image";
import {useMemo} from "react";
import {ProjectTag} from "@/app/[locale]/projects/_components/ProjectTag";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";
import {ProjectTypeEnum} from "@/app/[locale]/projects/_enums/ProjectTypeEnum";
import {useTranslations} from "next-intl";
import ScrollReveal from "@/app/_components/ScrollReveal";

interface IProjectCardProps extends ProjectInterface {
    index?: number;
}

const ACCENTS: Record<ProjectTypeEnum, string> = {
    [ProjectTypeEnum.CORPORATE]: '255, 121, 198',
    [ProjectTypeEnum.PERSONAL]: '80, 250, 123',
};

export const ProjectCard = (props: IProjectCardProps) => {
    const t = useTranslations('Projects');
    const {title, description, image, skills, year, type, index = 0} = props;

    const accent = ACCENTS[type];

    const typeLabel = useMemo(() => {
        return type === ProjectTypeEnum.CORPORATE ? t('types.professional') : t('types.personal');
    }, [t, type]);

    return (
        <ScrollReveal
            as="article"
            delayMs={Math.min(index, 4) * 90}
            style={{['--accent' as never]: accent}}
            className="group relative flex flex-col md:flex-row gap-5 md:gap-7 p-5 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_0_24px_-8px_rgba(var(--accent),0.18)] hover:-translate-y-1 hover:border-[color:rgba(var(--accent),0.4)] hover:bg-white/[0.05] hover:shadow-[0_0_40px_-8px_rgba(var(--accent),0.38),0_0_80px_-20px_rgba(var(--accent),0.22)]"
        >
            <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-6 bottom-6 w-[2px] rounded-full bg-gradient-to-b from-transparent via-[color:rgba(var(--accent),0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="relative overflow-hidden rounded-xl md:w-[300px] shrink-0 aspect-video md:aspect-[4/3] ring-1 ring-white/5">
                <Image
                    width={600}
                    height={400}
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-dracula-background/75 via-dracula-background/10 to-transparent"
                />
                <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(var(--accent),0.22),transparent_60%)]"
                />
                <span
                    className="absolute top-3 left-3 text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-md bg-black/50 backdrop-blur-md text-white/80 border border-white/10">
                    {year}
                </span>
            </div>

            <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-2xl md:text-[1.7rem] font-bold text-white tracking-tight leading-tight">
                        {title}
                    </h2>
                    <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-[color:rgba(var(--accent),0.1)] text-[color:rgb(var(--accent))] border border-[color:rgba(var(--accent),0.28)]">
                        <span
                            className="w-1.5 h-1.5 rounded-full bg-[color:rgb(var(--accent))] shadow-[0_0_8px_rgba(var(--accent),0.9)]"/>
                        {typeLabel}
                    </span>
                </div>
                <p className="mt-3 text-blue-dark-11 leading-relaxed text-sm md:text-[0.95rem]">
                    {description}
                </p>
                <div className="mt-4 flex flex-wrap gap-y-1.5">
                    {skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="inline-block">
                            <ProjectTag skill={skill}/>
                        </span>
                    ))}
                </div>
            </div>
        </ScrollReveal>
    );
};
