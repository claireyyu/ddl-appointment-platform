import psychic1 from "../../../../../public/psychic-1.png";
import psychic2 from "../../../../../public/psychic-2.png";
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import generateLocalizedPath from '../../../../utils/PathHelper';

export default function Page() {
  const t = useTranslations('PsychicReading'); // Namespace for translations
  const locale = useLocale();

  return (
    <div className="grid grid-cols-1 mt-12 text-foreground">
      <div className="flex flex-col col-span-2 px-4 md:px-16 pb-4 md:pb-16 mx-4 md:mx-8 lg:mx-24">
        <div className="text-justify md:text-lg">
          <p>{t('header')}</p><br/>
          <p>{t('intro')}</p><br/><br/>
          <p>{t('callToAction')}</p><br/>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-1 flex-col justify-center items-center">
            <Image
              src={psychic1}
              alt={t('imageAlt')}
              className="col-span-1 md:w-2/3 md:h-auto justify-self-center py-4 md:py-16"
            />
            <p>{t('psychics.0.name')}</p>
            <p>{t('psychics.0.rate')}</p>

          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <Image
                src={psychic2}
                alt={t('imageAlt')}
                className="col-span-1 md:w-2/3 md:h-auto justify-self-center py-4 md:py-16"
            />
            <p>{t('psychics.1.name')}</p>
            <p>{t('psychics.1.rate')}</p>
          </div>
        </div>
      </div>
      <div className="bg-serviceBg flex flex-col justify-center items-center px-4 md:px-16 py-8 md:py:16">
        <h1 className="text-xl mb-8">{t('footer.header')}</h1>
        <p className="text-center mb-8">{t('footer.description')}</p>
        <Link href={generateLocalizedPath('/#contact', locale)} className="bg-purpleBtn rounded-custom px-8 py-1">{t('footer.buttonText')}</Link>
        {/* <p className="bg-purpleBtn rounded-custom px-8 py-1">{t('footer.buttonText')}</p> */}
      </div>
    </div>
  );
}

