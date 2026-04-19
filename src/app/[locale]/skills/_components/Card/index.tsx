'use client'
import React from 'react';
import {Icon} from '@iconify-icon/react';

export interface ISkillCardProps {
    title: string;
    icon: string;
    /** RGB triplet (sem alpha) usado nos glows. Ex.: "189, 147, 249". */
    accentRgb?: string;
}

const DEFAULT_ACCENT = '189, 147, 249';

function SkillCard({icon, title, accentRgb = DEFAULT_ACCENT}: ISkillCardProps) {
    return (
        <div
            style={{['--accent' as any]: accentRgb}}
            className="group relative flex flex-col justify-center items-center rounded-2xl w-38 h-36 md:w-40 md:h-40 sm:w-30 max-w-sm p-5 cursor-pointer bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_0_24px_-8px_rgba(var(--accent),0.18)] transition-[background-color,border-color,box-shadow] duration-300 ease-out hover:bg-white/[0.06] hover:border-[color:rgba(var(--accent),0.45)] hover:shadow-[inset_0_0_0_1px_rgba(var(--accent),0.35),0_0_28px_-4px_rgba(var(--accent),0.45),0_0_60px_-12px_rgba(var(--accent),0.3)] hover:animate-wiggle"
        >
            <Icon icon={icon} width={52} height={52}/>
            <h2 className="absolute bottom-3 left-0 right-0 px-3 text-white text-xs text-center leading-tight tracking-wide opacity-100 translate-y-0 md:opacity-0 md:translate-y-1 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-[opacity,transform] duration-300 ease-out">
                {title}
            </h2>
        </div>
    );
}

export default SkillCard;
