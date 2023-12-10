import React from 'react';
import Divider from "@/app/_components/Divider";
import Icon from "@/app/_components/Icon";
import {useTranslations} from "next-intl";
import MenuItem from "@/app/_components/Header/Drawer/Menu/MenuItem";

interface IDrawerProps {

}

function Drawer(props: IDrawerProps) {
    const t = useTranslations('Header');

    return (
        <menu className={'bg-black  w-full divide-y-0.5 h-full fixed inset-0 overflow-y-auto'}>
            <div className={'flex-1 flex flex-row px-10 py-10 justify-between'}>
                <button data-modal-targe='menu' data-modal-hide="menu" type="button">
                    <Icon icon={'mingcute:menu-fill'}/>
                </button>
                <button data-modal-hide="menu" type="button">
                    <Icon icon={'mdi:close'} className={'text-white'}/>
                </button>
            </div>
            <Divider/>
            <MenuItem title={t('home')} href={'/'}/>
            <MenuItem title={t('about')} href={'about'}/>
            <MenuItem title={t('skills')} href={'skills'}/>
            <MenuItem title={t('projects')} href={'projects'}/>
            <MenuItem title={t('contact')} href={'contact'}/>
        </menu>
    );
}

export default Drawer;
