import React from "react";
import {ProjectsSection} from "@/app/[locale]/projects/_components/Section";




export default function Home() {
    return (
        <main className={'flex-1 py-10 bg-gradient-to-r from-blue-dark to-blue-dark-4 '}>
            <ProjectsSection/>
        </main>
    )
}
