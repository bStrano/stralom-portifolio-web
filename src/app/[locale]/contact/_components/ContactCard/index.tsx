import React from "react";
import Icon from "@/app/_components/Icon";
import ScrollReveal from "@/app/_components/ScrollReveal";

export interface ContactCardProps {
    title: string;
    description: string;
    icon: string;
    href: string;
    accentRgb?: string;
    index?: number;
}

const DEFAULT_ACCENT = '189, 147, 249';

export default function ContactCard({
                                        title,
                                        description,
                                        icon,
                                        href,
                                        accentRgb = DEFAULT_ACCENT,
                                        index = 0,
                                    }: ContactCardProps) {
    const isExternal = href.startsWith('http');

    return (
        <ScrollReveal
            delayMs={Math.min(index, 4) * 90}
            style={{['--accent' as never]: accentRgb}}
        >
            <a
                href={href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="group relative flex flex-row items-center gap-4 md:gap-5 p-4 md:p-5 rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] shadow-[0_0_24px_-8px_rgba(var(--accent),0.18)] transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/[0.05] hover:border-[color:rgba(var(--accent),0.4)] hover:shadow-[0_0_32px_-6px_rgba(var(--accent),0.45),0_0_60px_-16px_rgba(var(--accent),0.28)]"
            >
                <span
                    aria-hidden
                    className="pointer-events-none absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-transparent via-[color:rgba(var(--accent),0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl bg-[color:rgba(var(--accent),0.08)] border border-[color:rgba(var(--accent),0.18)] transition-transform duration-500 ease-out group-hover:scale-110">
                    <Icon icon={icon}/>
                </div>

                <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-blue-dark-11">
                        {title}
                    </span>
                    <span className="mt-1 text-sm md:text-[0.95rem] text-white/90 truncate">
                        {description}
                    </span>
                </div>

                <Icon
                    icon="lucide:arrow-up-right"
                    className="shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-300"
                    style={{color: `rgb(${accentRgb})`}}
                    width={20}
                    height={20}
                />
            </a>
        </ScrollReveal>
    )
}
