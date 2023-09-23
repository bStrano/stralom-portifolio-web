import React from 'react';
import FlashLight from "../FlashLight";

interface IHomeIntroductionProps {

}

function HomeIntroduction(props: IHomeIntroductionProps) {
    return (
        <section className={'p-10 bg-blue-dark flex  h-[calc(100vh-75px)] justify-center items-center'}>
            <FlashLight />

            <article>
                <div>
                    <div>
                        <p>Hello! My name is </p>
                        <h1>
                            <div>
                                {
                                    'Bruno Lombardi Strano'.split('').map((char, index) => (
                                        <span key={index} className={'text-[6vw]'}>
                                      {char}
                                    </span>
                                    ))}
                            </div>
                        </h1>
                        <p>I`m a full stack developer with more than five years of experience in Web and Mobile
                            applications.</p>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HomeIntroduction;
