import React from 'react';
import {useTranslations} from "next-intl";

interface IMenuItemProps {
    item: 'home' | 'about' | 'skills' | 'projects' | 'contact'
}

function MenuItem(props: IMenuItemProps) {
    const {item} = props;
    const t = useTranslations('Header');

    return (
        <>
            <a href={'/'}
               className="flex items-center flex-shrink-0 text-white mr-6 italic hover:font-black hover:text-blue hover:line-clamp-1">{t(item)}</a>
        </>
    );
}

export default MenuItem;
