'use client';
import React from 'react';
import {usePathname} from "next/navigation";
import {twMerge} from "tailwind-merge";

interface IMenuItemProps {
    label: string;
    path: string;
}

const LOCALES = ['en', 'pt'];

function stripLocale(pathname: string): string {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length && LOCALES.includes(segments[0])) {
        segments.shift();
    }
    return '/' + segments.join('/');
}

function MenuItem({label, path}: IMenuItemProps) {
    const pathname = usePathname();

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const current = stripLocale(pathname ?? '/');
    const isActive = normalizedPath === '/'
        ? current === '/'
        : current === normalizedPath || current.startsWith(normalizedPath + '/');

    return (
        <a
            href={path}
            className={twMerge(
                "relative flex items-center flex-shrink-0 mr-6 transition-colors duration-200",
                "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:bg-gradient-to-r after:from-mPink after:to-mYellow after:transition-transform after:duration-300",
                isActive
                    ? "text-mYellow after:scale-x-100"
                    : "text-white hover:text-mYellow after:scale-x-0 hover:after:scale-x-100"
            )}
        >
            {label}
        </a>
    );
}

export default MenuItem;
