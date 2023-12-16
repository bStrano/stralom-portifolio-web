'use client'
import React from 'react';
import { Icon } from '@iconify-icon/react';


export interface ISkillCardProps {
    title: string;
    icon: string;
}

function SkillCard({ icon, title }: ISkillCardProps) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div
            data-expanded={expanded}
            className={'flex flex-col justify-center items-center  rounded shadow-lg overflow-hidden w-38 h-36 md:w-40 md:h-40 sm:w-30 max-w-sm bg-blue-dark-6 data-[expanded="true"]:animate-wiggle'}
        onMouseOver={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        >
            <Icon icon={icon} width={50} height={50}/>
            { expanded &&
                <h2 className={'text-white text-lg pt-4 font-medium text-center align-middle'} >
                    {title}
                </h2>
            }
        </div>
    );}

export default SkillCard;
