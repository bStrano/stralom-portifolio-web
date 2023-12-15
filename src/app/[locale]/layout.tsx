import '../globals.css'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import React from "react";
import Header from "@/app/_components/Header";
import {twMerge} from "tailwind-merge";

const inter = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Stralom Portifolio',
    description: 'Bruno Lombardi Strano - Portifolio',
}

export default function RootLayout({
                                       children,
    params,
                                   }: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html lang="en" className={'z-20'}>
        <body className={twMerge('bg-gradient-to-r from-blue-dark to-blue-dark-4 ', inter.className)}>
            <Header/>
            {children}
        </body>
        </html>
    )
}
