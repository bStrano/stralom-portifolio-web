'use client'
import React from 'react';
import {Icon, IconProps} from "@iconify/react";
import {useRouter} from "next-intl/client";

interface IFlagButtonProps  extends IconProps{
    locale: string
}

function FlagButton(props: IFlagButtonProps) {
    const router = useRouter();


    const switchLocale = (locale: string) => {
        router.replace('/', {locale});
    }

 return (
     <a>
         <Icon className={'hover:scale-125 cursor-pointer'}  onClick={() => switchLocale(props.locale) } {...props} />
     </a>
 )
}

export default FlagButton;
