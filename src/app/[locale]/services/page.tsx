import ServiceCard from '../../../components/ServiceCard/ServiceCard';
import service1 from '../../../../public/service-1.png';
import service2 from '../../../../public/service-2.png';
import service3 from '../../../../public/service-3.png';
import service4 from '../../../../public/service-4.png';
import styles from './ServicesPage.module.css';
import { useTranslations, useLocale } from 'next-intl'; // Import translations
import PageBar from '../../../components/PageBar/PageBar';


export default function ServicesPage() {
  const t = useTranslations('ServicesPage'); // Specify translation namespace
  const locale = useLocale();

  return (
    <div className="mx-4 md:mx-8 lg:mx-24">
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">{t('title')}</h1>
      </PageBar>
      {/* Services Content */}
      <div className="flex flex-col my-8 lg:my-16">
        <p className="text-justify md:text-lg mb-10">
          {t('description')}
          {t('description2')}
        </p>

        {/* Service Cards Grid */}
        <section className="flex flex-col gap-8 lg:gap-24 px-4 lg:px-24 py-8 lg:py-16 text-foreground">
          <ServiceCard link="personal-reading" pic={service1} imgPosition="left">
            <div className={`absolute ${locale === 'zh' ? 'bottom-4' : 'bottom-0'} right-8 xl:p-4`}>
              {locale === 'en' ? <h1 className={styles.cardText}>{t('services.singleQuestion').split("\n")[0]}<br/>{t('services.singleQuestion').split("\n")[1]}</h1> : <h1 className={styles.cardTextZh}>{t('services.singleQuestion')}</h1>}
            </div>
          </ServiceCard>

          <ServiceCard link="interpretation-year" pic={service2} imgPosition="right">
            <div className={`absolute ${locale === 'zh' ? 'bottom-4' : 'bottom-0'} left-8 xl:p-4`}>
              {locale === 'en' ? <h1 className={styles.cardText}>{t('services.currentYear').split("\n")[0]}<br/>{t('services.currentYear').split("\n")[1]}</h1> : <h1 className={styles.cardTextZh}>{t('services.currentYear')}</h1>}
            </div>
          </ServiceCard>

          <ServiceCard link="interpretation-year" pic={service3} imgPosition="left">
            <div className={`absolute ${locale === 'zh' ? 'bottom-4' : 'bottom-0'} left-8 xl:p-4`}>
              {locale === 'en' ? <h1 className={styles.cardText}>{t('services.lifetime').split("\n")[0]}<br/>{t('services.lifetime').split("\n")[1]}</h1> : <h1 className={styles.cardTextZh}>{t('services.lifetime')}</h1>}
            </div>
          </ServiceCard>

          <ServiceCard link="psychic-reading" pic={service4} imgPosition="right">
            <div className="absolute bottom-4 left-8 xl:p-4">
              <h1 className={styles.cardText}>{t('services.psychic')}</h1>
            </div>
          </ServiceCard>

        </section>
      </div>
    </div>
  );
}