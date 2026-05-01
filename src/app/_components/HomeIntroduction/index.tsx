import React from 'react';
import Aurora from "../Aurora";
import IconShower from "../IconShower";
import MagneticText from "../MagneticText";
import ScrollHint from "../ScrollHint";
import {useTranslations} from "next-intl";

const EXPERIENCE_START_YEAR = 2018;

const SHOWER_ICONS = [
    'logos:react',
    'logos:nodejs',
    'skill-icons:aws-light',
    'skill-icons:typescript',
    'logos:javascript',
    'logos:java',
    'skill-icons:git',
    'logos:c-sharp',
    'logos:flutter',
    'logos:unity',
    'devicon:android',
    'logos:nextjs-icon',
    'logos:nestjs',
];

interface IHomeIntroductionProps {

}

function HomeIntroduction(props: IHomeIntroductionProps) {
    const t = useTranslations('HomeIntroduction');
    const years = new Date().getFullYear() - EXPERIENCE_START_YEAR;

    return (
        <section className={'relative overflow-hidden p-5 sm:p-8 md:p-10 flex min-h-[calc(100svh-80px)] justify-center items-center'}>
            <Aurora/>
            <IconShower items={SHOWER_ICONS}/>
            <article className={'relative z-10'}>
                <div>
                    <div>
                        <p className={'select-none text-base sm:text-lg md:text-xl text-blue-dark-11 bg-text-gradient'}>{t('welcome')}</p>
                        <h1>
                            <div>
                                <MagneticText
                                    text={'Bruno Lombardi Strano'}
                                    radius={420}
                                    strength={0.3}
                                    letterClassName={'select-none text-[clamp(2rem,8vw,5rem)] font-bold text-blue-dark-11 hover:bg-gradient-to-r hover:from-purple-400 hover:to-violet-700 hover:bg-clip-text hover:text-transparent'}
                                />
                            </div>
                        </h1>
                        <p className={'select-none text-base sm:text-lg md:text-xl text-blue-dark-11 bg-text-gradient'}>{t('description', {years})}</p>
                    </div>
                </div>
            </article>
            <ScrollHint/>
        </section>
    );
}

export default HomeIntroduction;
