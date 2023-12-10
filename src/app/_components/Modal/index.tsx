'use client'
import React from "react";

export interface ModalProps {
    isVisible: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
    id: string;
}

export function Modal({ isVisible = false, setVisibility, children }: ModalProps) {
    if(!isVisible) return (<></>);
    return (
        <div id="modal"
             onClick={(e) => {
                 e.preventDefault();
                 setVisibility(false);
             }}
             className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full bg-blue-800 md:inset-0 h-[calc(100%-1rem)] max-h-full ">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                {children}
            </div>
        </div>
    )
}
