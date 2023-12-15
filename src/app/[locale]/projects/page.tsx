import React from "react";
import {ProjectsSection} from "@/app/[locale]/projects/_components/Section";
import Section from "@/app/_components/Section";
import {useTranslations} from "next-intl";




export default function Projects() {
    const t = useTranslations('Projects');
    return (
        <Section title={t('title')}>
            <ProjectsSection/>
        </Section>
    )
}
