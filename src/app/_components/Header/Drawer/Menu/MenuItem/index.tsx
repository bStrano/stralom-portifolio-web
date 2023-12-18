import React from 'react';
import Divider from "@/app/_components/Divider";
import Link from "next/link";

interface IMenuItemProps {
    title: string;
    href: string;
}

function MenuItem({title, href}: IMenuItemProps) {
 return (
  <>
      <Link className={'w-full text-white inline-block p-5 hover:font-bold hover:bg-text-gradient'} href={href}>{title}</Link>
      <Divider/>
  </>
 );}

export default MenuItem;
