'use client'
import React from 'react';
import { Icon } from '@iconify-icon/react';


export interface ISkillCardProps {
    title: string;
    icon: string;
}

function SkillCard({ icon }: ISkillCardProps) {
    return (
        <div className={'flex flex-col justify-center items-center  rounded shadow-lg overflow-hidden w-40 h-40 max-w-sm bg-blue-dark-6 '}>
            <Icon icon={icon} width={50} height={50}/>
        </div>
    );}

export default SkillCard;
