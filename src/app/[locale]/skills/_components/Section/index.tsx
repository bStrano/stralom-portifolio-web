import React from 'react';
import SkillCard, {ISkillCardProps} from "@/app/[locale]/skills/_components/Card";

interface ISkillSectionProps {
    title: string;
    skills: ISkillCardProps[];
}

function SkillSection({title, skills}: ISkillSectionProps) {
 return (
  <div className={'flex flex-1 flex-col'}>
    <h1 className={'text-white text-lg pb-3'}>
        {title}
    </h1>
      <div className={'flex-row  gap-10 justify-start grid grid-rows-8 grid-flow-col' }>
            {skills.map((skill, index) => {
                return (
                    <SkillCard key={index} {...skill}/>
                )
            })
            }
      </div>
  </div>
 );}

export default SkillSection;
