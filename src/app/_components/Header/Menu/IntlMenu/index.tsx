import React from 'react';
import FlagButton from "@/app/_components/Header/FlagButton";

interface IIntlMenuProps {

}

function IntlMenu(props: IIntlMenuProps) {
 return (
     <div className={'flex flex-row gap-4 mr-3'}>
         <FlagButton icon={'emojione-v1:flag-for-brazil'} fontSize={30}
                     locale={'pt'} {...props} />
         <FlagButton icon={'twemoji:flag-united-states'} fontSize={30}
                     locale={'en'} {...props} />
     </div>
 );}

export default IntlMenu;
