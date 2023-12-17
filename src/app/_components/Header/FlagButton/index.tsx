'use client'
import React from 'react';
import {Icon, IconProps} from "@iconify/react";
import {useRouter} from "next-intl/client";
import {usePathname} from "next/navigation";
import {useLocale} from "next-intl";

interface IFlagButtonProps  extends IconProps{
    locale: string
}

function FlagButton(props: IFlagButtonProps) {
    const router = useRouter();
    const pathname = usePathname()
    const currentLocale = useLocale();



    const switchLocale = (locale: string) => {
        let newPathname = pathname;
        if(currentLocale !== 'en') {
            const regex = new RegExp(`/${currentLocale}`, 'g');
            newPathname = newPathname.replace(regex, '')
        }
        router.replace(newPathname, {locale});
    }

 return (
     <a>
         <Icon className={'hover:scale-125 cursor-pointer'}  onClick={() => switchLocale(props.locale) } {...props} />
     </a>
 )
}

export default FlagButton;
