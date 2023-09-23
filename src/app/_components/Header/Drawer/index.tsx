import React from 'react';
import Divider from "@/app/_components/Divider";

interface IDrawerProps {

}

function Drawer(props: IDrawerProps) {
 return (
  <menu className={'bg-black absolute w-full h-[calc(100vh-75px)] top-30 divide-y-0.5'}>
   <span className={'text-white p-5 flex'}>Home</span>
   <span className={'text-white p-5 flex'}>Home</span>
   <span className={'text-white p-5 flex'}>Home</span>
   <span className={'text-white p-5 flex'}>Home</span>
  </menu>
 );}

export default Drawer;
