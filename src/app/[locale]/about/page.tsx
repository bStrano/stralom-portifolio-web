import React from "react";
import {CodeTag} from "@/app/[locale]/about/_components/CodeTag";
import {useTranslations} from "next-intl";
import TerminalFrame from "@/app/[locale]/about/_components/TerminalFrame";
import Section from "@/app/_components/Section";


export default function AboutPage() {
    const labels = useTranslations('About.Labels');
    const values = useTranslations('About.Values');
    const about = useTranslations('About');
    const words = useTranslations('Words');

    return (
        <Section title={about('title')}>
            <div
                className={'grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 min-h-screen gap-7'}>
                <div className={'flex flex-col gap-7'}>
                    <TerminalFrame title={labels('generalInformation')} icon={'ic:twotone-info'}>
                        <div className={'flex flex-1 flex-col'}>
                            <CodeTag name={labels('name')} description={'Bruno Lombardi Strano'}/>
                            <CodeTag name={labels('birthDate')} description={'03/07/1995'}/>
                            <CodeTag name={labels('nationality1')} description={words('brazilian')}
                            />
                            <CodeTag name={labels('nationality2')} description={words('italian')}
                            />
                            <CodeTag name={labels('residence')} >
                                <CodeTag name={labels('country')} description={words('brazil')}/>
                                <CodeTag name={labels('state')} description={words('saoPaulo')}/>
                                <CodeTag name={labels('city')} description={words('saoPaulo')}/>
                            </CodeTag>
                            <CodeTag name={labels('contact')} >
                                <CodeTag name={labels('email')} description={'bruno_strano@hotmail.com'}
                                />
                                <CodeTag name={labels('phone')} description={'+55 (11) 9992985401'}
                                />
                                <CodeTag name={'Linkedin'} description={'www.linkedin.com/in/bruno-strano-9b96552a4'}
                                />
                                <CodeTag name={'Github'} href={'https://github.com/bStrano'}
                                         description={'https://github.com/bStrano'}/>
                            </CodeTag>
                            <CodeTag name={labels('description')}
                                     description={values('description')} />
                        </div>
                    </TerminalFrame>
                    <TerminalFrame title={labels('academyFormation')} icon={'ic:twotone-school'}>
                        <CodeTag name={labels('institution')} description={'Mackenzie'} />
                        <CodeTag name={labels('course')} description={words('computerScience')} />
                        <CodeTag name={labels('conclusionYear')} description={'2019'} />
                        <CodeTag name={words('local')} description={words('saoPaulo')} />
                    </TerminalFrame>
                </div>
                <div className={'flex flex-col gap-7'}>
                    <TerminalFrame title={labels('professionalExperience')} icon={'ic:twotone-work'}>
                        <CodeTag name={labels('experience')} >
                            <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                            />
                            <CodeTag name={labels('role')}
                                     description={`${words('techLead')}`}
                            />
                            <CodeTag name={labels('duration')} description={`2 ${words('years')}`}
                            />
                        </CodeTag>
                        <CodeTag name={labels('experience')} >
                            <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                            />
                            <CodeTag name={labels('role')}
                                     description={`${words('developer')} ${words('pleno')} FullStack Mobile/Web`}
                            />
                            <CodeTag name={labels('duration')} description={`2 ${words('years')}`}
                            />
                        </CodeTag>
                        <CodeTag name={labels('experience')} >
                            <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                            />
                            <CodeTag name={labels('role')}
                                     description={`${words('developer')} ${words('junior')} Fullstack Mobile`}
                            />
                            <CodeTag name={labels('duration')} description={`1 ${words('years')}`}
                            />
                        </CodeTag>
                        <CodeTag name={labels('experience')} >
                            <CodeTag name={labels('company')} description={'HitCode Tecnologia'}
                            />
                            <CodeTag name={labels('role')}
                                     description={`${words('developer')} ${words('internship')} Mobile`}
                            />
                            <CodeTag name={labels('duration')} description={`3 ${words('months')}`}
                            />
                        </CodeTag>
                    </TerminalFrame>
                    <TerminalFrame title={labels('skills')} icon={'ph:wrench-duotone'}>
                        <CodeTag name={labels('linguistic')} >
                            <CodeTag name={labels('portuguese')} description={words('native')}
                            />
                            <CodeTag name={labels('english')} description={words('intermediate')}
                            />
                        </CodeTag>
                        <CodeTag name={labels('techniques')} >
                            <CodeTag name={labels('showSkills')} href={'skills'} />
                        </CodeTag>
                    </TerminalFrame>
                </div>
            </div>
        </Section>
    )
}
