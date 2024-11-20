import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function HomeAbout() {
  const t = useTranslations('HomeAbout');

  return (
    <div>
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">{t('title')}</h1>
      <p className="text-sm md:text-base xl:text-lg text-justify mb-4 lg:mb-8">
        {t('paragraph1')}
      </p>
      <p className="text-sm md:text-base xl:text-lg text-justify mb-4 lg:mb-8">
        {t('paragraph2')}
      </p>
      <Link href="/services" className="font-semibold text-sm md:text-base xl:text-lg underline">
        {t('learnMore')}
      </Link>
    </div>
  );
}
