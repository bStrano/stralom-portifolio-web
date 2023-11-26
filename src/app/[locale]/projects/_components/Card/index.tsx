import Image from "next/image";
import {useMemo} from "react";

export interface ProjectCardProps {
    type: 'PERSONAL' | 'CORPORATE';
    title: string;
    description: string;
    image: string;
}

export const ProjectCard = (props:ProjectCardProps ) => {
    const { title, description, image } = props;

    const renderTypeTag = useMemo(() => {
        switch (props.type) {
            case 'CORPORATE':
                return <span className="bg-purple text-white text-xs font-medium me-2 px-2.5 py-1 rounded-full">Corporative</span>;
            case 'PERSONAL':
                return <span className="bg-pink text-white text-xs font-medium me-2 px-2.5 py-1 rounded-full">Personal</span>;
        }
    }, [props.type]);

    return (
        <>
            <div className="flex  w-full h-full p-4 flex-row mx-20">
                <Image
                    width={300}
                    height={300}
                    src={image} alt={'Illustrative picture of an cement factory'}>
                </Image>
                <div className={'flex-col px-20 justify-start'}>
                    {renderTypeTag}
                    <div className="flex flex-col justify-start gap-4 mt-3">
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                        <p className="text-white">{description}</p>
                    </div>
                </div>

            </div>
        </>
    );
};
