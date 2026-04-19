import React from 'react';
import Aurora from "../Aurora";
import IconShower from "../IconShower";
import MagneticText from "../MagneticText";
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
            <Aurora/>
            <IconShower items={SHOWER_ICONS}/>
            <article className={'relative z-10'}>
                <div>
                    <div>
                        <p className={'select-none text-xl text-blue-dark-11 bg-text-gradient'}>{t('welcome')}</p>
                        <h1>
                            <div>
                                <MagneticText
                                    text={'Bruno Lombardi Strano'}
                                    letterClassName={'select-none text-[6vw] font-bold text-blue-dark-11 hover:bg-text-gradient'}
                                />
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
