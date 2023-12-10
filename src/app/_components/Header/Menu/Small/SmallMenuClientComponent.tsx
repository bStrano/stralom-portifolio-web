'use client'
import React from 'react';
import {Modal} from "@/app/_components/Modal";
import Icon from "@/app/_components/Icon";

interface ISmallMenuProps {
    drawer: React.ReactNode
}

function SmallMenuClientComponent(props: ISmallMenuProps) {
    const [open, setOpen] = React.useState(false);

    const onOpen = () => {
        setOpen(true);
    }

    return (
        <>

            <div className={'flex-1 flex flex-row px-10 py-10 justify-between'}>
                <Icon icon={'mingcute:menu-fill'} onClick={onOpen}/>
                <Modal id={'menu'} isVisible={open} setVisibility={setOpen}>
                    {props.drawer}
                </Modal>
            </div>
        </>
    );
}

export default SmallMenuClientComponent;
