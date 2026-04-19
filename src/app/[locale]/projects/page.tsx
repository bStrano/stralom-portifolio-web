import React from "react";
import {useTranslations} from "next-intl";
import {ProjectsSection} from "@/app/[locale]/projects/_components/Section";
import Section from "@/app/_components/Section";
import Aurora from "@/app/_components/Aurora";

export default function Projects() {
    const t = useTranslations('Projects');

    return (
        <Section title={t('title')}>
            <div className="pointer-events-none fixed inset-0 -z-10">
                <Aurora intensity={30} opacity={0.18}/>
            </div>
            <p className="max-w-2xl -mt-2 mb-10 md:mb-14 text-blue-dark-11 text-sm md:text-base leading-relaxed">
                {t('subtitle')}
            </p>
            <ProjectsSection/>
        </Section>
    )
}
