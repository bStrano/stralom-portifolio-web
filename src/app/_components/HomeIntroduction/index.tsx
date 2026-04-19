import React from 'react';
import FlashLight from "../FlashLight";
import IconShower from "../IconShower";
import {useTranslations} from "next-intl";

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

    return (
        <section className={'relative overflow-hidden p-10 flex h-[calc(100vh-80px)] justify-center items-center'}>
            <IconShower items={SHOWER_ICONS}/>
            <FlashLight />
            <article className={'relative z-10'}>
                <div>
                    <div>
                        <p className={'select-none text-xl text-blue-dark-11 bg-text-gradient'}>{t('welcome')}</p>
                        <h1>
                            <div>
                                {
                                    'Bruno Lombardi Strano'.split('').map((char, index) => (
                                        <span key={index} className={'select-none text-[6vw] font-bold text-blue-dark-11 inline-block hover:animate-wiggle whitespace-break-spaces hover:bg-text-gradient'}>
                                      {char}
                                    </span>
                                    ))}
                            </div>
                        </h1>
                        <p className={'select-none text-xl text-blue-dark-11 bg-text-gradient'}>{t('description')}</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HomeIntroduction;
