'use client';
import React, {useEffect, useState} from 'react';
import {Icon} from "@iconify/react";

interface ITerminalFrameProps {
    title: string;
    children: React.ReactNode;
    icon: string;
    /** Atraso (ms) na animação de entrada para criar efeito cascata. Default 0. */
    delayMs?: number;
}

function TerminalFrame({children, title, icon, delayMs = 0}: ITerminalFrameProps) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Garante que o estado inicial (opacity-0) é pintado antes de transicionar
        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(() => setVisible(true));
            return () => cancelAnimationFrame(raf2);
        });
        return () => cancelAnimationFrame(raf1);
    }, []);

    return (
        <div
            data-visible={visible}
            style={{transitionDelay: `${delayMs}ms`}}
            className="terminal-frame opacity-0 translate-y-6 transition-[opacity,transform,box-shadow] duration-700 ease-out data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_0_24px_-8px_rgba(189,147,249,0.18)] hover:shadow-[0_0_32px_-6px_rgba(189,147,249,0.32)]"
        >
            <div className="relative flex items-center px-4 py-3 bg-white/[0.04] border-b border-white/[0.08]">
                <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]"/>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"/>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]"/>
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 text-sm text-blue-dark-11 font-medium select-none">
                    {title}
                </span>
                <Icon icon={icon} className="ml-auto text-dracula-cyan" width={22} height={22}/>
            </div>
            <div className="flex flex-1 py-5">
                <div className="flex flex-1 flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default TerminalFrame;
