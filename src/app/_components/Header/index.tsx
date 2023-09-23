import React from 'react';
import Icon from "../Icon";
import Drawer from "@/app/_components/Header/Drawer";
interface IHeaderProps {
    backgroundColor?: string
}

function Header(props: IHeaderProps) {

    const renderLargeSizeMenu = () => {
        return <div className={'flex flex-row'}>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6">ABOUT</a>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6">EXPERIENCE</a>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6">PROJECTS</a>
            <a href={'/'} className="flex items-center flex-shrink-0 text-white mr-6">CONTACT</a>
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
         {/*{renderLargeSizeMenu()}*/}

         {renderSmallSizeMenu()}
     </nav>
 );}

export default Header;
