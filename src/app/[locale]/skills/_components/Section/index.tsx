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
      <div className={'grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-10 justify-start ' }>
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
