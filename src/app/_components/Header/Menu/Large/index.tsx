import React from 'react';
import MenuItem from "@/app/_components/Header/Menu/Large/MenuItem";
import IntlMenu from "@/app/_components/Header/Menu/IntlMenu";
import {useTranslations} from "next-intl";

interface ILargeMenuProps {
}

function LargeMenu(props: ILargeMenuProps) {
    const t = useTranslations('Header');
 return (
     <div className={'flex flex-1 flex-row items-center py-4 px-8'}>
         <a
             href={'/'}
             className={'flex flex-1 text-xl font-bold tracking-wide text-dracula-purple hover:text-dracula-pink transition-colors duration-200 origin-left'}
         >
             Stralom
         </a>
         <div className={'flex flex-row items-center ml-5 gap-1'}>
             <IntlMenu/>
             <div className={'flex flex-row items-center ml-5'}>
                 <MenuItem label={t('home')} path={'/'}/>
                 <MenuItem label={t('about')} path={'/about'}/>
                 <MenuItem label={t('skills')} path={'/skills'}/>
                 <MenuItem label={t('projects')} path={'/projects'}/>
                 <MenuItem label={t('contact')} path={'/contact'}/>
             </div>
         </div>
     </div>
 );}

export default LargeMenu;
