import React from 'react';
import SmallMenu from "@/app/_components/Header/Menu/Small";
import LargeMenu from "@/app/_components/Header/Menu/Large";

interface IHeaderProps {
    backgroundColor?: string
}

function Header(props: IHeaderProps) {


    //
    // const renderThemeSwitcher = () => {
    //     return (
    //         <Icon icon={'line-md:light-dark-loop'} className={'text-white mr-10 hover:scale-125 hover:text-yellow cursor-pointer'} fontSize={30} {...props} />
    //     )
    // }

    return (
        <nav className="flex flex-1 flex-row sticky top-0 z-50 bg-blue-dark/60 backdrop-blur-md border-b border-white/5">
            <div className={'hidden md:block flex-1'}>
                <LargeMenu/>
            </div>

            <div className={'md:hidden sm:block'}>
                <SmallMenu/>
            </div>
        </nav>
    );
}

export default Header;
