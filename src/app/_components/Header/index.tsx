import React from 'react';
import Icon from "../Icon";
import FlagButton from "@/app/_components/Header/FlagButton";
import MenuItem from "@/app/_components/Header/MenuItem";

interface IHeaderProps {
    backgroundColor?: string
}

function Header(props: IHeaderProps) {



    const renderThemeSwitcher = () => {
        return (
            <Icon icon={'line-md:light-dark-loop'} className={'text-white mr-10 hover:scale-125 hover:text-yellow cursor-pointer'} fontSize={30} {...props} />
        )
    }

    const renderIntlFlags = () => {
        return (
            <div className={'flex flex-row gap-4 mr-3'}>
                <FlagButton icon={'emojione-v1:flag-for-brazil'} fontSize={30}
                            locale={'pt'} {...props} />
                <FlagButton icon={'twemoji:flag-united-states'} fontSize={30}
                            locale={'en'} {...props} />
            </div>
        )
    }

    const renderLargeSizeMenu = () => {
        return <div className={'flex flex-row ml-5'}>
            <MenuItem item={'home'}/>
            <MenuItem item={'about'}/>
            <MenuItem item={'skills'}/>
            <MenuItem item={'projects'}/>
            <MenuItem item={'contact'}/>
        </div>
    }


    const renderSmallSizeMenu = () => {
        return (
            <Icon icon={'ic:round-menu'}/>
        )
    }

    return (
        <nav className="flex flex-row bg-black py-6 sticky top-0 z-20">
            <span className={'flex-1 text-white pr-20 pl-10'}>Stralom</span>
            {renderThemeSwitcher()}
            {renderIntlFlags()}
            {renderLargeSizeMenu()}

            {/*{renderSmallSizeMenu()}*/}
        </nav>
    );
}

export default Header;
