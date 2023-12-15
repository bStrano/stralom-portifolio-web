import React from 'react';
import Icon from "@/app/_components/Icon";

interface ITerminalFrameProps {
    title: string;
    children: React.ReactNode;
    icon: string;
}

function TerminalFrame({children, title, icon}: ITerminalFrameProps) {
 return (
    <div className={'m-5'}>
        <div className={'flex justify-between px-6 py-3 bg-dracula-selection w-full rounded-t-2xl'}>
            <span className={'text-white font-medium'}>{title}</span>
            <Icon icon={icon} className={'text-dracula-cyan'}/>
        </div>
        <div className={'flex flex-1 bg-dracula-background rounded-b-2xl py-5'}>
            <div className={'flex flex-1 flex-col'}>
                {children}
            </div>
        </div>
    </div>
 );}

export default TerminalFrame;
