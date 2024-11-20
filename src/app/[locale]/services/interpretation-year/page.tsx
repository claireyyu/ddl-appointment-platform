import personalReadingPic from "../../../../../public/service-detail.png";
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('PersonalReading'); // Namespace for translations

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-4 md:mx-16 mt-12 text-foreground">
      <Image
        src={personalReadingPic}
        alt={t('imageAlt')}
        className="col-span-1 md:w-2/3 md:h-auto justify-self-center py-4 md:py-16"
      />
      <div className="flex flex-col col-span-2 px-4 md:px-16 pb-4 md:pb-16">
        <div className="text-justify md:text-lg">
          <p>{t('intro')}</p>
          <br />
          <p>
            <s>{t('price.standard')}</s>
            <br />
            {t('price.promo')}
            <br />
            <br />
            {t('paymentMethod.title')}:
            <br />
            <br />
            {t('paymentMethod.paypal')}
            <br />
            {t('paymentMethod.wechat')}
            <br />
            {t('paymentMethod.alipay')}
          </p>
          <br />
          <p>
            {t('howItWorks.title')}:
            <br />
            <br />
            1. {t('howItWorks.steps.purchase')}
            <br />
            2. {t('howItWorks.steps.email')}
            <br />
            3. {t('howItWorks.steps.prepareQuestion')}
            <br />
            4. {t('howItWorks.steps.restrictions')}
            <br />
            5. {t('howItWorks.steps.receiveAnswer')}
          </p>
          <br />
          <p>{t('note')}</p>
        </div>
      </div>
    </div>
  );
}
