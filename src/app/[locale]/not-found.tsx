import Link from 'next/link';
import {useTranslations} from 'next-intl';

export default function NotFound() {
    const t = useTranslations('NotFound');

    return (
        <section className="relative overflow-hidden p-5 sm:p-8 md:p-10 flex min-h-[calc(100svh-80px)] flex-col items-center justify-center text-center">
            <p className="select-none font-serif italic text-base sm:text-lg text-dracula-foreground tracking-wide">
                Stralom <span className="text-dracula-purple not-italic">portfolio</span>
            </p>
            <h1 className="select-none mt-6 text-[clamp(4rem,18vw,9rem)] font-bold leading-none bg-gradient-to-r from-purple-400 to-violet-700 bg-clip-text text-transparent">
                404
            </h1>
            <p className="mt-6 max-w-md select-none text-base sm:text-lg text-blue-dark-11 leading-relaxed">
                {t('message')}
            </p>
            <Link
                href="/"
                className="mt-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/[0.04] text-white border border-white/10 hover:bg-white/[0.08] hover:border-dracula-purple transition-colors"
            >
                {t('back')}
            </Link>
        </section>
    );
}
