import React from "react";
import Icon from "@/app/_components/Icon";


export interface ContactCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
}

export default function ContactCard({title, description, icon, href}: ContactCardProps) {
    return (
        <a href={href} className={'flex flex-1 flex-row bg-blue-dark-6 shadow-blue-400 rounded m-10 h-24 items-center p-10'}>
            <Icon icon={icon}/>
            <div className={'pl-10'}>
                <span className={'font-bold text-gray-300'}>{title}</span>
                <br/>
                <span className={'font-thin text-gray-300'}>{description}</span>
            </div>
        </a>
    )
}
