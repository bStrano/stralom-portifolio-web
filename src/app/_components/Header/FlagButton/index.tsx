'use client'
import React from 'react';
import {Icon, IconProps} from "@iconify/react";
import {useRouter} from "next-intl/client";

interface IFlagButtonProps extends IconProps{
    locale: string
}

function FlagButton(props: IFlagButtonProps) {
    const router = useRouter();


    const switchLocale = (locale: string) => {
        router.replace('/', {locale});
    }

 return (
     <Icon onClick={() => switchLocale(props.locale) } {...props} />
 );}

export default FlagButton;
