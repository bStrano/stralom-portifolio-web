import React from 'react';
import Divider from "@/app/_components/Divider";

interface IMenuItemProps {

}

function MenuItem(props: IMenuItemProps) {
 return (
  <>
      <Divider/>
      <span className={'text-white inline-block p-5'}>Home</span>
      <Divider/>
  </>
 );}

export default MenuItem;
