import {useMemo} from "react";
import {useTranslations} from "next-intl";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";
import {ProjectTypeEnum} from "@/app/[locale]/projects/_enums/ProjectTypeEnum";
import {SkillsEnums} from "@/constants/SkillsEnums";

export function useProjects() {
    const t = useTranslations('Projects.data');

    const projects: ProjectInterface[] = useMemo(() => {
        return [
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('privatePension.title'),
                description: t('privatePension.description'),
                year: 2023,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/pension.jpeg',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.REACT, SkillsEnums.NODE, SkillsEnums.NEST, SkillsEnums.TYPEORM, SkillsEnums.ORACLE_DATABASE, SkillsEnums.REDIS, SkillsEnums.MONGODB,SkillsEnums.ORACLE_OBJECT_STORAGE, SkillsEnums.DOCKER, SkillsEnums.GIT]
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t("portfolio.title"),
                description: t('portfolio.description'),
                year: 2023,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/portifolio.jpg',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.REACT, SkillsEnums.NEXT, SkillsEnums.TAILWIND, SkillsEnums.VERCEL, SkillsEnums.DOCKER, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('stoneEcommerce.title'),
                description: t('stoneEcommerce.description'),
                year: 2022,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/pedreira.avif',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.REACT,  SkillsEnums.REACT_NATIVE, SkillsEnums.FIREBASE, SkillsEnums.NODE, SkillsEnums.NEXT, SkillsEnums.NEST, SkillsEnums.TYPEORM, SkillsEnums.ORACLE_DATABASE, SkillsEnums.REDIS, SkillsEnums.S3, SkillsEnums.EC2, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('keychain.title'),
                year: 2023,
                description: t('keychain.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/password.jpeg',
                skills: [SkillsEnums.C_SHARP, SkillsEnums.DART, SkillsEnums.DOTNET, SkillsEnums.FLUTTER, SkillsEnums.EC2, SkillsEnums.DOCKER, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('cementEcommerce.title'),
                description: t('cementEcommerce.description'),
                year: 2021,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/cement.png',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.JAVASCRIPT, SkillsEnums.NODE, SkillsEnums.EXPRESS, SkillsEnums.TYPEORM, SkillsEnums.REACT, SkillsEnums.REACT_NATIVE, SkillsEnums.ORACLE_DATABASE, SkillsEnums.REDIS, SkillsEnums.MONGODB, SkillsEnums.S3, SkillsEnums.FIREBASE, SkillsEnums.GIT, SkillsEnums.EC2, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('seedSales.title'),
                description: t('seedSales.description'),
                year: 2022,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/farm.jpeg',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.NODE, SkillsEnums.EXPRESS, SkillsEnums.TYPEORM, SkillsEnums.REACT_NATIVE, SkillsEnums.ORACLE_DATABASE, SkillsEnums.GIT, SkillsEnums.EC2, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('timeTracker.title'),
                description: t('timeTracker.description'),
                year: 2022,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/time.jpeg',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.DART, SkillsEnums.FLUTTER, SkillsEnums.NODE, SkillsEnums.NEST, SkillsEnums.EXPRESS, SkillsEnums.POSTGRES, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('financial.title'),
                description: t('financial.description'),
                year: 2021,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/financial.webp',
                skills: [SkillsEnums.TYPESCRIPT, SkillsEnums.REACT_NATIVE, SkillsEnums.REACT, SkillsEnums.NEXT, SkillsEnums.NODE, SkillsEnums.NEST, SkillsEnums.TYPEORM, SkillsEnums.POSTGRES, SkillsEnums.DOCKER, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('seriousGames.title'),
                description: t('seriousGames.description'),
                year: 2018,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/tcc.jpg',
                skills: [SkillsEnums.C_SHARP, SkillsEnums.UNITY, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('medicineTracker.title'),
                description: t('medicineTracker.description'),
                year: 2018,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/tracking.jpeg',
                skills: [SkillsEnums.JAVA, SkillsEnums.ANDROID, SkillsEnums.GIT, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('shipping.title'),
                description: t('shipping.description'),
                year: 2020,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/shipping.webp',
                skills: [SkillsEnums.JAVASCRIPT, SkillsEnums.REACT_NATIVE, SkillsEnums.NODE, SkillsEnums.EXPRESS, SkillsEnums.ORACLE_DATABASE, SkillsEnums.GIT, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('eventManager.title'),
                description: t('eventManager.description'),
                year: 2020,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/eventManagement.jpg',
                skills: [SkillsEnums.JAVASCRIPT, SkillsEnums.REACT_NATIVE, SkillsEnums.FIREBASE, SkillsEnums.SQLITE, SkillsEnums.GIT, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('activesMonitoring.title'),
                description: t('activesMonitoring.description'),
                year: 2019,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/activeMonitoring.jpg',
                skills: [SkillsEnums.JAVASCRIPT, SkillsEnums.REACT_NATIVE, SkillsEnums.FIREBASE, SkillsEnums.GIT, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('seedSales2.title'),
                description: t('seedSales2.description'),
                year: 2019,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/farm2.jpeg',
                skills: [SkillsEnums.JAVASCRIPT, SkillsEnums.REACT_NATIVE, SkillsEnums.NODE, SkillsEnums. EXPRESS, SkillsEnums.SQLITE, SkillsEnums.ORACLE_DATABASE, SkillsEnums.GIT, SkillsEnums.GIT],
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('marketList.title'),
                description: t('marketList.description'),
                year: 2018,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/shipping.webp',
                skills: [SkillsEnums.JAVA, SkillsEnums.ANDROID, SkillsEnums.SQLITE, SkillsEnums.FIREBASE, SkillsEnums.GIT, SkillsEnums.GIT],
            }
        ].sort((a, b) => {
            return b.year-a.year;
        });
    }, [t]);

    const projectsGroupedByYear = useMemo(() => {
        const projectsGroupedByYear = new Map<string, ProjectInterface[]>();
        projects.forEach((project) => {
            if (projectsGroupedByYear.has(project.year.toString())) {
                const currentProject = projectsGroupedByYear.get(project.year.toString());
                if (currentProject) {
                    projectsGroupedByYear.set(project.year.toString(),
                        [
                            ...currentProject,
                            project
                        ]
                    );
                }
            } else {
                projectsGroupedByYear.set(project.year.toString(),[project]);
            }
        });
        return projectsGroupedByYear;
    }, [projects]);

    // TODO - Non Critical: Bring data from API instead of using mock data
    return {
        data: projectsGroupedByYear
    };
}
