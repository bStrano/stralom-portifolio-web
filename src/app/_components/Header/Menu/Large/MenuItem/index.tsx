import React from 'react';
import {useTranslations} from "next-intl";

interface IMenuItemProps {
    item: 'home' | 'about' | 'skills' | 'projects' | 'contact'
    path?: string
}

function MenuItem(props: IMenuItemProps) {
    const {item, path} = props;
    const t = useTranslations('Header');

    return (
        <>
            <a href={path}
               className="flex items-center flex-shrink-0 text-white mr-6 italic hover:text-violet-800 hover:font-bold hover:line-clamp-1">{t(item)}</a>
        </>
    );
}

export default MenuItem;
