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


import Script from 'next/script';
import FirebaseConfig from "@/app/[locale]/firebase-config";

const clairtyCode = `
(function (c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${process.env.CLARITY_ID}")`;

export default function RootLayout({
                                       children,
    params,
                                   }: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html lang="en" className={'z-20'}>
        {
            process.env.NODE_ENV === 'production' && (
                <Script id="ms-clarity" strategy="afterInteractive">
                    {clairtyCode}
                </Script>
            )
        }
        <body className={twMerge('bg-gradient-to-r from-blue-dark to-blue-dark-4 ', inter.className)}>
            <Header/>
            <FirebaseConfig/>
            {children}
        </body>
        </html>
    )
}
