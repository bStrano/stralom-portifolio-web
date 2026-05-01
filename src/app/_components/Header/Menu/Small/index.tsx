import React from 'react';
import {useTranslations} from "next-intl";
import Drawer from "@/app/_components/Header/Drawer";
import SmallMenuClientComponent from "@/app/_components/Header/Menu/Small/SmallMenuClientComponent";


function SmallMenu() {
    const t = useTranslations('Header');
    return (
        <SmallMenuClientComponent drawer={<Drawer/>} logoSuffix={t('logoSuffix')}/>
    );
}

export default SmallMenu;
