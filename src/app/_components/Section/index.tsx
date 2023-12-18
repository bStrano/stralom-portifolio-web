import React from 'react';
import SectionTitle from "@/app/_components/Section/Title";

interface ISectionProps {
    children: React.ReactNode
    title: string
}

function Section({children, title}: ISectionProps) {
 return (
     <div className={'flex flex-1 flex-col pt-16 mx-5 md:mx-10 lg:mx-15 xl:mx-24 pb-20'}>
         <SectionTitle title={title}/>
         {children}
     </div>
 );}

export default Section;
