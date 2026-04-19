import React from "react";
import ContactCard from "@/app/[locale]/contact/_components/ContactCard";
import MailForm from "@/app/[locale]/contact/_components/MailForm";
import {useTranslations} from "next-intl";
import Section from "@/app/_components/Section";

const CONTACT_CHANNELS = [
    {
        icon: 'line-md:email-twotone',
        title: 'Email',
        description: 'bruno_strano@hotmail.com',
        href: 'mailto:bruno_strano@hotmail.com',
        accent: '189, 147, 249',
    },
    {
        icon: 'icon-park:github',
        title: 'Github',
        description: 'github.com/bStrano',
        href: 'https://github.com/bStrano',
        accent: '255, 121, 198',
    },
    {
        icon: 'logos:whatsapp-icon',
        title: 'Whatsapp',
        description: 'wa.me/5511992985401',
        href: 'https://wa.me/5511992985401',
        accent: '80, 250, 123',
    },
    {
        icon: 'skill-icons:linkedin',
        title: 'Linkedin',
        description: 'linkedin.com/in/bruno-strano',
        href: 'https://linkedin.com/in/bruno-strano-9b96552a4',
        accent: '139, 233, 253',
    },
];

export default function ContactPage() {
    const t = useTranslations('Words');
    const contact = useTranslations('Contact');

    return (
        <Section title={contact('title')}>
            <p className="text-blue-dark-11 max-w-2xl mb-10 md:mb-14 text-sm md:text-base leading-relaxed">
                {contact('subtitle')}
            </p>

            <div className="grid flex-1 gap-8 lg:gap-12 lg:grid-cols-5">
                <div className="flex flex-col gap-4 lg:col-span-2">
                    {CONTACT_CHANNELS.map((channel, index) => (
                        <ContactCard
                            key={channel.title}
                            icon={channel.icon}
                            title={channel.title}
                            description={channel.description}
                            href={channel.href}
                            accentRgb={channel.accent}
                            index={index}
                        />
                    ))}
                </div>

                <div className="lg:col-span-3">
                    <MailForm labels={{
                        firstName: t('firstName'),
                        lastName: t('lastName'),
                        phone: t('phone'),
                        email: t('email'),
                        description: t('description'),
                        submit: t('submit'),
                        sending: t('sending'),
                    }}/>
                </div>
            </div>
        </Section>
    )
}
