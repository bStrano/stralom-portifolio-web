'use client'
import React from 'react';
import Link from "next/link";
import {Modal} from "@/app/_components/Modal";
import Icon from "@/app/_components/Icon";

interface ISmallMenuProps {
    drawer: React.ReactNode
    logoSuffix: string
}

function SmallMenuClientComponent(props: ISmallMenuProps) {
    const [open, setOpen] = React.useState(false);

    const onOpen = () => {
        setOpen(true);
    }

    return (
        <>

            <div className={'flex-1 flex flex-row items-center px-5 py-5 justify-between'}>
                <Link href={'/'} className={'flex items-baseline gap-1 hover:opacity-80 transition-opacity'}>
                    <span className={'font-serif text-lg font-semibold text-dracula-foreground italic'}>
                        Stralom
                    </span>
                    <span className={'font-serif text-lg text-dracula-purple font-normal'}>
                        {props.logoSuffix}
                    </span>
                </Link>
                <Icon icon={'mingcute:menu-fill'} onClick={onOpen}/>
                <Modal id={'menu'} isVisible={open} setVisibility={setOpen}>
                    {props.drawer}
                </Modal>
            </div>
        </>
    );
}

export default SmallMenuClientComponent;
