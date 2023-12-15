import React from 'react';
import SectionTitle from "@/app/_components/Section/Title";

interface ISectionProps {
    children: React.ReactNode
    title: string
}

function Section({children, title}: ISectionProps) {
 return (
     <div className={'flex flex-1 flex-col pt-16 mx-24'}>
         <SectionTitle title={title}/>
         {children}
     </div>
 );}

export default Section;
