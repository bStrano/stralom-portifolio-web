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
        <nav className="flex flex-1 flex-row bg-black sticky top-0">
            <div className={'sm:hidden md:block flex-1'}>
                <LargeMenu/>
            </div>

            <div className={'md:hidden sm:block'}>
                <SmallMenu/>
            </div>
        </nav>
    );
}

export default Header;
