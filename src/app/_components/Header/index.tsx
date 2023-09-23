import React from 'react';
import Icon from "../Icon";
import {useTranslations} from "next-intl";
import FlagButton from "@/app/_components/Header/FlagButton";
interface IHeaderProps {
    backgroundColor?: string
}

function Header(props: IHeaderProps) {

    const t = useTranslations('Header');


    const renderThemeSwitcher = () => {
        return (
            <Icon icon={'line-md:light-dark-loop'} className={'text-white mr-10'} fontSize={30} {...props} />
        )
    }

    const renderIntlFlags = () => {
        return (
            <div className={'flex flex-row gap-4 mr-3'}>
                <FlagButton icon={'emojione-v1:flag-for-brazil'} className={'text-white'} fontSize={30} locale={'pt'} {...props} />
                <FlagButton icon={'twemoji:flag-united-states'} className={'text-white'} fontSize={30}  locale={'en'} {...props} />
            </div>
        )
    }

    const renderLargeSizeMenu = () => {
        return <div className={'flex flex-row ml-5'}>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6 italic">{t('home')}</a>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6 italic">{t('about')}</a>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6 italic">{t('skills')}</a>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6 italic">{t('contact')}</a>
        </div>
    }


    const renderSmallSizeMenu = () => {
        return (
                <Icon icon={'ic:round-menu'}/>
        )
    }

 return (
     <nav className="flex flex-row bg-black py-6 sticky top-0">
         <span className={'flex-1 text-white pr-20 pl-10'}>Stralom</span>
            {renderThemeSwitcher()}
            {renderIntlFlags()}
            {renderLargeSizeMenu()}

         {/*{renderSmallSizeMenu()}*/}
     </nav>
 );}

export default Header;
