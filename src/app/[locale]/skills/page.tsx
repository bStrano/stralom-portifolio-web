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
                <SkillSection title={'Frontend'} skills={[
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
                    {
                        title: 'Unity',
                        icon: 'logos:unity'
                    },
                    {
                        title: 'Tailwind',
                        icon: 'devicon:tailwindcss'
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
                    {
                        title: 'Firebase',
                        icon: 'logos:firebase'
                    },
                    {
                        title: 'Swagger',
                        icon: 'logos:swagger'
                    },
                    {
                        title: 'Dotnet',
                        icon: 'skill-icons:dotnet'
                    },
                    {
                        title: 'Expo',
                        icon: 'cib:expo'
                    },
                ]}/>
                <SkillSection title={'Others'} skills={[
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
                    {
                        title: 'React',
                        icon: 'skill-icons:docker'
                    },
                    {
                        title: 'Jest',
                        icon: 'skill-icons:jest'
                    },
                ]}/>
            </div>
        </div>
    )
}
