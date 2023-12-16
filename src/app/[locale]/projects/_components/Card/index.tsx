import Image from "next/image";
import {useMemo} from "react";
import {ProjectTag} from "@/app/[locale]/projects/_components/ProjectTag";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";
import {useTranslations} from "next-intl";


export const ProjectCard = (props: ProjectInterface) => {
    const t = useTranslations('Projects');
    const {title, description, image, skills} = props;

    const renderTypeTag = useMemo(() => {
        switch (props.type) {
            case 'CORPORATE':
                return <span
                    className="text-dracula-pink font-thin italic  text-sm me-2 px-2 py-1 rounded-full">{t('types.professional')}</span>;
            case 'PERSONAL':
                return <span
                    className="text-dracula-green font-thin  italic text-sm  me-2 px-2 py-1 rounded-full">{t('types.personal')}</span>;
        }
    }, [props.type]);

    return (
        <>
            <div className="flex  py-4">

                <Image
                    width={300}
                    height={200}
                    style={{width: 300, height: 200, marginTop: 10}}
                    className={'rounded-lg hidden lg:block'}
                    src={image} alt={'Project illustration'}/>
                <div className={'flex-col lg:pl-20 md:px-0 justify-start'}>
                    <div className="flex flex-col justify-start gap-2 mt-3">
                        <div className={'flex flex-row items-center'}>
                            <h2 className="text-2xl font-bold text-white pr-4">{title}</h2>
                            {renderTypeTag}
                        </div>
                        <p className="text-blue-200">{description}</p>
                    </div>
                    <div className={'mt-3'}>
                        {
                            skills.map((skill, index) => {
                                return (
                                    <span key={index} className="inline-block py-1">
                                        <ProjectTag key={index} skill={skill}/>
                                    </span>
                                );
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    );
};
