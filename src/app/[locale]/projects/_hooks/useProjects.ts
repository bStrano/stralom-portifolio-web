import {useMemo} from "react";
import {useTranslations} from "next-intl";

export function useProjects() {
    const t = useTranslations('Projects.data');

    const projects = useMemo(() => {
        return [
            {
                type: 'CORPORATE',
                title: t('privatePension.title'),
                description: t('privatePension.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/pension.jpeg'
            },
            {
                type: 'PERSONAL',
                title: t("portfolio.title"),
                description: t('portfolio.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/portifolio.jpg'
            },
            {
                type: 'CORPORATE',
                title: t('stoneEcommerce.title'),
                description: t('stoneEcommerce.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/pedreira.avif'
            },
            {
                type: 'PERSONAL',
                title: 'Keychain - Shareable Passwords',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a euismod diam. Curabitur aliquam euismod finibus. Duis quam massa, tristique interdum viverra pulvinar, sodales a neque. Donec malesuada vehicula urna eu imperdiet. Duis eu metus risus. Integer molestie ligula ut velit posuere dignissim. Praesent diam sem, semper ac blandit ut, fermentum vitae risus. Nullam eget sem ut velit venenatis placerat.',
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/password.jpg'
            },
            {
                type: 'CORPORATE',
                title: t('cementEcommerce.title'),
                description: t('cementEcommerce.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/cement.png'
            },
            {
                type: 'CORPORATE',
                title: t('seedSales.title'),
                description: t('seedSales.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/farm.jpeg'
            },
            {
                type: 'PERSONAL',
                title: t('timeTracker.title'),
                description: t('timeTracker.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/clock.webp'
            },
            {
                type: 'PERSONAL',
                title: t('financial.title'),
                description: t('financial.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/financial.webp'
            },
            {
                type: 'PERSONAL',
                title: t('seriousGames.title'),
                description: t('seriousGames.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/cement.png'
            },
            {
                type: 'CORPORATE',
                title: t('medicineTracker.title'),
                description: t('medicineTracker.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/tracking.jpeg'
            },
            {
                type: 'PERSONAL',
                title: 'Controle de Estoque',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a euismod diam. Curabitur aliquam euismod finibus. Duis quam massa, tristique interdum viverra pulvinar, sodales a neque. Donec malesuada vehicula urna eu imperdiet. Duis eu metus risus. Integer molestie ligula ut velit posuere dignissim. Praesent diam sem, semper ac blandit ut, fermentum vitae risus. Nullam eget sem ut velit venenatis placerat.',
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/cement.png'
            },
            {
                type: 'CORPORATE',
                title: t('shipping.title'),
                description: t('shipping.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/shipping.webp'
            },
            {
                type: 'PERSONAL',
                title: t('marketList.title'),
                description: t('marketList.description'),
                image: 'https://stralom-portifolio.s3.us-east-2.amazonaws.com/public/projects/shipping.webp'
            }
        ]
    }, [t]);

    // TODO - Non Critical: Bring data from API instead of using mock data
    return {
        data: projects
    };
}
