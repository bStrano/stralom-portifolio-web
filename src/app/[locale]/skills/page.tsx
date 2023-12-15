import React from "react";
import SkillSection from "@/app/[locale]/skills/_components/Section";
import {useTranslations} from "next-intl";
import Section from "@/app/_components/Section";

export default function SkillsPage() {
    const t = useTranslations('Skills');

    return (
        <Section title={t('title')}>
            <div
                className={'gap-10 overflow-auto'}>
                <div className={'flex flex-col gap-10'}>
                    <SkillSection title={t('sections.languages')} skills={[
                        {
                            title: 'Typescript',
                            icon: 'skill-icons:typescript'
                        },
                        {
                            title: 'Javascript',
                            icon: 'skill-icons:javascript'
                        },
                        {
                            title: 'Java',
                            icon: 'skill-icons:java-dark'
                        },
                        {
                            title: 'C#',
                            icon: 'logos:c-sharp'
                        },
                        {
                            title: 'SQL',
                            icon: 'tabler:sql'
                        },
                    ]}/>
                    <SkillSection title={t('sections.frontend')} skills={[
                        {
                            title: 'React',
                            icon: 'devicon:react-wordmark'
                        },
                        {
                            title: 'Next.js',
                            icon: 'cib:next-js'
                        },
                        {
                            title: 'React Query',
                            icon: 'logos:react-query-icon'
                        },
                        {
                            title: 'Android',
                            icon: 'devicon:android'
                        },
                        {
                            title: 'MUI',
                            icon: 'logos:material-ui'
                        },
                        {
                            title: 'Flutter',
                            icon: 'logos:flutter'
                        },
                        {
                            title: 'Unity',
                            icon: 'logos:unity'
                        },
                        {
                            title: 'Tailwind',
                            icon: 'devicon:tailwindcss'
                        },
                    ]}/>
                    <SkillSection title={t('sections.backend')} skills={[
                        {
                            title: 'Nodejs',
                            icon: 'logos:nodejs'
                        },
                        {
                            title: 'Typeorm',
                            icon: 'logos:typeorm'
                        },
                        {
                            title: 'Prisma',
                            icon: 'skill-icons:prisma'
                        },
                        {
                            title: 'Nestjs',
                            icon: 'logos:nestjs'
                        },
                        {
                            title: 'Firebase',
                            icon: 'logos:firebase'
                        },
                        {
                            title: 'Swagger',
                            icon: 'logos:swagger'
                        },
                        {
                            title: '.NET',
                            icon: 'skill-icons:dotnet'
                        },
                        {
                            title: 'EXPO',
                            icon: 'cib:expo'
                        },
                    ]}/>
                    <SkillSection title={t('sections.others')} skills={[
                        {
                            title: 'Amazon Web Services',
                            icon: 'skill-icons:aws-light'
                        },
                        {
                            title: 'Oracle Database',
                            icon: 'devicon:oracle'
                        },
                        {
                            title: 'Mongodb',
                            icon: 'skill-icons:mongodb'
                        },
                        {
                            title: 'Git',
                            icon: 'skill-icons:git'
                        },
                        {
                            title: 'Docker',
                            icon: 'skill-icons:docker'
                        },
                        {
                            title: 'Jest',
                            icon: 'skill-icons:jest'
                        },
                    ]}/>
                </div>
            </div>
        </Section>
    )
}
