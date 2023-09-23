'use client';
import React from 'react';
import {Icon as Iconify, IconProps} from "@iconify/react";

interface IIconButtonProps extends IconProps{
 icon: string;
}

function Icon(props: IIconButtonProps) {
 return (
     <div className={'px-10'}>
      <Iconify className={'text-white'} fontSize={30} {...props} />
     </div>
 );}

export default Icon;
