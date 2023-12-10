import React from 'react';
import Drawer from "@/app/_components/Header/Drawer";
import SmallMenuClientComponent from "@/app/_components/Header/Menu/Small/SmallMenuClientComponent";


function SmallMenu() {
    return (
        <SmallMenuClientComponent drawer={<Drawer/>}/>
    );
}

export default SmallMenu;
