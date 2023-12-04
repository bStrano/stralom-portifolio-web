import React from "react";
import {CodeTag} from "@/app/[locale]/about/_components/CodeTag";
import {useTranslations} from "next-intl";


export default function AboutPage() {
    const labels = useTranslations('About.Labels');
    const words = useTranslations('Words');

    return (
        <main
            className={'justify-center  py-10 bg-gradient-to-r from-blue-dark to-blue-dark-4 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-h-screen'}>
            <div>
                <CodeTag name={labels('generalInformation')} className={'text-violet-600'}>
                    <CodeTag name={labels('name')} description={'Bruno Lombardi Strano'} className={'text-violet-500'}/>
                    <CodeTag name={labels('birthDate')} description={'03/07/1995'} className={'text-violet-500'}/>
                    <CodeTag name={labels('nationality1')} description={words('brazilian')}
                             className={'text-violet-500'}/>
                    <CodeTag name={labels('nationality2')} description={words('italian')}
                             className={'text-violet-500'}/>
                    <CodeTag name={labels('residence')} className={'text-violet-500'}>
                        <CodeTag name={labels('country')} description={words('brazil')} className={'text-violet-400'}/>
                        <CodeTag name={labels('state')} description={words('saoPaulo')} className={'text-violet-400'}/>
                        <CodeTag name={labels('city')} description={words('saoPaulo')} className={'text-violet-400'}/>
                    </CodeTag>
                    <CodeTag name={labels('contact')} className={'text-violet-500'}>
                        <CodeTag name={labels('email')} description={'bruno_strano@hotmail.com'}
                                 className={'text-violet-400'}/>
                        <CodeTag name={labels('phone')} description={'+55 (11) 9992985401'}
                                 className={'text-violet-400'}/>
                        <CodeTag name={'Github'} href={'https://github.com/bStrano'}
                                 description={'https://github.com/bStrano'} className={'text-violet-400'}/>
                    </CodeTag>
                    <CodeTag name={labels('description')}
                             description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate commodo vestibulum. Donec consequat viverra leo, ut blandit odio scelerisque at. Etiam quis diam non urna pretium efficitur. Curabitur varius sollicitudin nunc, sed pretium ex condimentum eget. Curabitur tincidunt augue sit amet augue sollicitudin, et imperdiet diam tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu velit nulla. Maecenas efficitur lorem nec ante blandit, at venenatis erat interdum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vulputate eleifend sollicitudin.\n' +
                                 '\n'} className={'text-violet-500'}/>

                </CodeTag>
                <CodeTag name={labels('academyFormation')} className={'text-violet-600'}>
                    <CodeTag name={words('formation')} className={'text-violet-500'}>
                        <CodeTag name={labels('institution')} description={'Mackenzie'} className={'text-violet-400'}/>
                        <CodeTag name={labels('course')} description={words('computerScience')} className={'text-violet-400'}/>
                        <CodeTag name={labels('conclusionYear')} description={'2019'} className={'text-violet-400'}/>
                        <CodeTag name={words('local')} description={words('saoPaulo')} className={'text-violet-400'}/>
                    </CodeTag>
                </CodeTag>

            </div>

            <div>
                <CodeTag name={labels('professionalExperience')} className={'text-sky-600'}>
                    <CodeTag name={labels('experience')} className={'text-sky-500'}>
                        <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('role')}
                                 description={`${words('developer')} ${words('senior')} FullStack Mobile/Web\``}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('duration')} description={`2 ${words('years')}`}
                                 className={'text-sky-400'}/>
                    </CodeTag>
                    <CodeTag name={labels('experience')} className={'text-sky-500'}>
                        <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('role')}
                                 description={`${words('developer')} ${words('pleno')} FullStack Mobile/Web`}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('duration')} description={`2 ${words('years')}`}
                                 className={'text-sky-400'}/>
                    </CodeTag>
                    <CodeTag name={labels('experience')} className={'text-sky-500'}>
                        <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('role')}
                                 description={`${words('developer')} ${words('junior')} Fullstack Mobile`}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('duration')} description={`1 ${words('years')}`}
                                 className={'text-sky-400'}/>
                    </CodeTag>
                    <CodeTag name={labels('experience')} className={'text-sky-500'}>
                        <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('role')}
                                 description={`${words('developer')} ${words('internship')} Mobile`}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('duration')} description={`3 ${words('months')}`}
                                 className={'text-sky-400'}/>
                    </CodeTag>
                </CodeTag>
                <CodeTag name={labels('skills')} className={'text-sky-600'}>
                    <CodeTag name={labels('linguistic')} className={'text-sky-500'}>
                        <CodeTag name={labels('portuguese')} description={words('native')}
                                 className={'text-sky-400'}/>
                        <CodeTag name={labels('english')} description={words('intermediate')}
                                 className={'text-sky-400'}/>
                    </CodeTag>
                    <CodeTag name={labels('techniques')} className={'text-sky-500'}>
                        <CodeTag name={labels('showSkills')} href={'skills'} className={'text-sky-400'}/>
                    </CodeTag>
                </CodeTag>
            </div>
        </main>
    )
}
