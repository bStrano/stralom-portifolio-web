'use client';
import React, {useEffect, useRef, useState} from 'react';
import SkillCard, {ISkillCardProps} from "@/app/[locale]/skills/_components/Card";

interface ISkillSectionProps {
    title: string;
    skills: ISkillCardProps[];
}

const ACCENT_PALETTE = [
    '189, 147, 249', // dracula-purple
    '255, 121, 198', // dracula-pink
    '139, 233, 253', // dracula-cyan
    '80, 250, 123',  // dracula-green
    '255, 184, 108', // dracula-orange
    '255, 200, 44',  // mYellow
    '255, 73, 219',  // mPink
];

function SkillSection({title, skills}: ISkillSectionProps) {
    const rootRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    obs.disconnect();
                }
            },
            {threshold: 0.15, rootMargin: '0px 0px -10% 0px'}
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={rootRef} className={'flex flex-1 flex-col pb-10'}>
            <h1 className={'text-white text-lg pb-3'}>
                {title}
            </h1>
            <div className={'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-10 justify-start'}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-card-fade"
                        data-visible={visible}
                        style={{transitionDelay: `${index * 60}ms`}}
                    >
                        <SkillCard
                            {...skill}
                            accentRgb={skill.accentRgb ?? ACCENT_PALETTE[index % ACCENT_PALETTE.length]}
                        />
                    </div>
                ))}
            </div>

            <style jsx>{`
                .skill-card-fade {
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 600ms ease-out, transform 600ms ease-out;
                }

                .skill-card-fade[data-visible="true"] {
                    opacity: 1;
                    transform: translateY(0);
                }

                @media (prefers-reduced-motion: reduce) {
                    .skill-card-fade {
                        opacity: 1;
                        transform: none;
                        transition: none;
                    }
                }
            `}</style>
        </div>
    );
}

export default SkillSection;
