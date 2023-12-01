import Image from "next/image";
import {useMemo} from "react";
import {ProjectTag} from "@/app/[locale]/projects/_components/ProjectTag";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";


export const ProjectCard = (props:ProjectInterface ) => {
    const { title, description, image, skills } = props;

    const renderTypeTag = useMemo(() => {
        switch (props.type) {
            case 'CORPORATE':
                return <span className="bg-purple-950 text-white text-xs font-medium me-2 px-2.5 py-1 rounded-full">Corporative</span>;
            case 'PERSONAL':
                return <span className="bg-pink-800 text-white text-xs font-medium me-2 px-2.5 py-1 rounded-full">Personal</span>;
        }
    }, [props.type]);

    return (
        <>
            <div className="flex  w-full  p-4 flex-row mx-20">
                <Image
                    width={300}
                    height={200}
                    style={{ width: 300, height: 200, marginTop: 10    }}
                    className={'rounded-lg'}
                    src={image} alt={'Illustrative picture of an cement factory'}/>
                <div className={'flex-col px-20 justify-start'}>
                    {renderTypeTag}
                    <div className="flex flex-col justify-start gap-4 mt-3">
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                        <p className="text-white">{description}</p>
                    </div>
                    {
                        skills.map((skill, index) => {
                            return (
                                <ProjectTag key={index} skill={skill}/>
                            );
                        })
                    }
                </div>

            </div>
        </>
    );
};
