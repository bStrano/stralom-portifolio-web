import React from "react";
import ContactCard from "@/app/[locale]/contact/_components/ContactCard";
import MailForm from "@/app/[locale]/contact/_components/MailForm";
import {useTranslations} from "next-intl";
import Section from "@/app/_components/Section";


export default function ContactPage() {
    const t = useTranslations('Words');
    const contact = useTranslations('Contact');

    return (
        <Section title={contact('title')}>
            <div
                className={'grid '}>
                <div className={'grid flex-1 lg:grid-cols-2 md:grid-cols-1 '}>
                    <div >
                        <ContactCard icon={'line-md:email-twotone'} title={'Email'} description={'bruno_strano@hotmail.com'} href={'mailto:bruno_strano@hotmail.com'}/>
                        <ContactCard icon={'icon-park:github'} title={'Github'} description={'https://github.com/bStrano'} href={'https://github.com/bStrano'}/>
                        <ContactCard icon={'logos:whatsapp-icon'} title={'Whatsapp'} description={'https://wa.me/5511992985401'} href={'https://wa.me/5511992985401'}/>
                        <ContactCard icon={'skill-icons:linkedin'} title={'Linkedin'} description={'https://linkedin.com/in/bruno-strano-9b96552a4'} href={'https://linkedin.com/in/bruno-strano-9b96552a4'}/>
                    </div>
                    <div>
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
            </div>
        </Section>
    )
}
