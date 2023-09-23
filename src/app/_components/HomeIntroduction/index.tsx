import React from 'react';
import FlashLight from "../FlashLight";

interface IHomeIntroductionProps {

}

function HomeIntroduction(props: IHomeIntroductionProps) {
    return (
        <section className={'p-10 bg-gradient-to-r from-blue-dark to-blue-dark-4 flex  h-[calc(100vh-75px)] justify-center items-center'}>
            <FlashLight />

            <article>
                <div>
                    <div>
                        <p className={'text-xl text-blue-dark-11'}>Hello! My name is </p>
                        <h1>
                            <div>
                                {
                                    'Bruno Lombardi Strano'.split('').map((char, index) => (
                                        <span key={index} className={'text-[6vw] font-bold text-blue-dark-11'}>
                                      {char}
                                    </span>
                                    ))}
                            </div>
                        </h1>
                        <p className={'text-xl text-blue-dark-11'}>I`m a full stack developer with more than five years of experience in Web and Mobile
                            applications.</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HomeIntroduction;
