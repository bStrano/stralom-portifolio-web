import React from 'react';
import FlashLight from "../FlashLight";
import {useTranslations} from "next-intl";
import Shower from "../Shower";

interface IHomeIntroductionProps {

}

function HomeIntroduction(props: IHomeIntroductionProps) {
    const t = useTranslations('HomeIntroduction');

    return (
        <section className={'p-10 bg-gradient-to-r from-blue-dark to-blue-dark-4 flex  h-[calc(100vh-75px)] justify-center items-center'}>
            <FlashLight />
            {/*<Shower items={[*/}
            {/*    'logos:react',*/}
            {/*    'logos:nodejs',*/}
            {/*    'skill-icons:aws-light',*/}
            {/*    'skill-icons:typescript',*/}
            {/*    'logos:javascript',*/}
            {/*    'logos:java',*/}
            {/*    'skill-icons:git',*/}
            {/*    'logos:c-sharp',*/}
            {/*    'logos:flutter',*/}
            {/*    'logos:unity',*/}
            {/*    'devicon:android',*/}
            {/*    'logos:nextjs-icon',*/}
            {/*    'logos:nestjs'*/}
            {/*]}/>*/}
            <article>
                <div className={'z-50'}>
                    <div>
                        <p className={'text-xl text-blue-dark-11 bg-text-gradient'}>{t('welcome')}</p>
                        <h1>
                            <div>
                                {
                                    'Bruno Lombardi Strano'.split('').map((char, index) => (
                                        <span key={index} className={'text-[6vw] font-bold text-blue-dark-11 inline-block hover:animate-wiggle whitespace-break-spaces hover:bg-text-gradient'}>
                                      {char}
                                    </span>
                                    ))}
                            </div>
                        </h1>
                        <p className={'text-xl text-blue-dark-11 bg-text-gradient'}>{t('description')}</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HomeIntroduction;
