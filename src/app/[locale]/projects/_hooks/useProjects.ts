import {useMemo} from "react";
import {useTranslations} from "next-intl";
import {ProjectInterface} from "@/app/[locale]/projects/_types/ProjectInterface";
import {ProjectTypeEnum} from "@/app/[locale]/projects/_enums/ProjectTypeEnum";

export function useProjects() {
    const t = useTranslations('Projects.data');

    const projects: ProjectInterface[] = useMemo(() => {
        return [
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('privatePension.title'),
                description: t('privatePension.description'),
                year: 2023,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/pension.jpeg'
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t("portfolio.title"),
                description: t('portfolio.description'),
                year: 2023,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/portifolio.jpg'
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('stoneEcommerce.title'),
                description: t('stoneEcommerce.description'),
                year: 2022,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/pedreira.avif'
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: 'Keychain - Shareable Passwords',
                year: 2022,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a euismod diam. Curabitur aliquam euismod finibus. Duis quam massa, tristique interdum viverra pulvinar, sodales a neque. Donec malesuada vehicula urna eu imperdiet. Duis eu metus risus. Integer molestie ligula ut velit posuere dignissim. Praesent diam sem, semper ac blandit ut, fermentum vitae risus. Nullam eget sem ut velit venenatis placerat.',
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/password.jpg'
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('cementEcommerce.title'),
                description: t('cementEcommerce.description'),
                year: 2021,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/cement.png'
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('seedSales.title'),
                description: t('seedSales.description'),
                year: 2022,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/farm.jpeg'
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('timeTracker.title'),
                description: t('timeTracker.description'),
                year: 2022,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/clock.webp'
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('financial.title'),
                description: t('financial.description'),
                year: 2021,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/financial.webp'
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('seriousGames.title'),
                description: t('seriousGames.description'),
                year: 2018,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/cement.png'
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('medicineTracker.title'),
                description: t('medicineTracker.description'),
                year: 2018,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/tracking.jpeg'
            },
            {
                type: ProjectTypeEnum.CORPORATE,
                title: t('shipping.title'),
                description: t('shipping.description'),
                year: 2019,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/shipping.webp'
            },
            {
                type: ProjectTypeEnum.PERSONAL,
                title: t('marketList.title'),
                description: t('marketList.description'),
                year: 2018,
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/shipping.webp'
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
