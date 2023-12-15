import React from 'react';
import MenuItem from "@/app/_components/Header/Menu/Large/MenuItem";
import IntlMenu from "@/app/_components/Header/Menu/IntlMenu";

interface ILargeMenuProps {
}

function LargeMenu(props: ILargeMenuProps) {
 return (
     <div className={'flex flex-1 flex-row p-10'}>
         <span className={'flex flex-1 text-white'}>Stralom</span>
         <div className={'flex flex-row ml-5'}>
             <IntlMenu/>
             <MenuItem item={'home'} path={'/'}/>
             <MenuItem item={'about'} path={'/about'}/>
             <MenuItem item={'skills'} path={'/skills'}/>
             <MenuItem item={'projects'} path={'projects'}/>
             <MenuItem item={'contact'} path={'contact'}/>
         </div>
     </div>
 );}

export default LargeMenu;
