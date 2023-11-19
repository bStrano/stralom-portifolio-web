import React from "react";
import SkillSection from "@/app/[locale]/skills/_components/Section";

export default function Home() {
    return (
        <div
            className={'py-10 bg-gradient-to-r from-blue-dark to-blue-dark-4 flex flex-1 justify-center items-center gap-10 overflow-auto'}>
            <div className={'flex flex-col gap-10'}>
                <SkillSection title={'Linguagens'} skills={[
                    {
                        title: 'React',
                        icon: 'skill-icons:typescript'
                    },
                    {
                        title: 'React',
                        icon: 'skill-icons:javascript'
                    },
                    {
                        title: 'React',
                        icon: 'skill-icons:java-dark'
                    },
                    {
                        title: 'React',
                        icon: 'logos:c-sharp'
                    },
                    {
                        title: 'React',
                        icon: 'tabler:sql'
                    },
                ]}/>
                <SkillSection title={'Web/Mobile Development - Frameworks'} skills={[
                    {
                        title: 'React',
                        icon: 'devicon:react-wordmark'
                    },
                    {
                        title: 'Nextjs',
                        icon: 'cib:next-js'
                    },
                    {
                        title: 'React',
                        icon: 'logos:react-query-icon'
                    },
                    {
                        title: 'React',
                        icon: 'devicon:android'
                    },
                    {
                        title: 'React',
                        icon: 'logos:material-ui'
                    },
                    {
                        title: 'Prisma',
                        icon: 'logos:flutter'
                    },
                ]}/>
                <SkillSection title={'Backend'} skills={[
                    {
                        title: 'React',
                        icon: 'logos:nodejs'
                    },
                    {
                        title: 'React',
                        icon: 'logos:typeorm'
                    },
                    {
                        title: 'Prisma',
                        icon: 'skill-icons:prisma'
                    },
                    {
                        title: 'Prisma',
                        icon: 'logos:nestjs'
                    },
                ]}/>
                <SkillSection title={'Infraestrutura'} skills={[
                    {
                        title: 'Nextjs',
                        icon: 'skill-icons:aws-light'
                    },
                    {
                        title: 'React',
                        icon: 'devicon:oracle'
                    },
                    {
                        title: 'React',
                        icon: 'skill-icons:mongodb'
                    },
                    {
                        title: 'React',
                        icon: 'skill-icons:git'
                    },
                ]}/>
            </div>
        </div>
    )
}
