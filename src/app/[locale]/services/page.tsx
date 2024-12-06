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
        <section className="flex flex-col px-4 lg:px-24 text-foreground">
          <ServiceCard link="personal-reading" content="services.singleQuestion" pic={service1} imgPosition="left" />
          <ServiceCard link="psychic-reading" content="services.psychic" pic={service2} imgPosition="right" />
          <ServiceCard link="interpretation-life" content="services.lifetime" pic={service3} imgPosition="left" />
          <ServiceCard link="interpretation-year" content="services.currentYear" pic={service4} imgPosition="right" />
        </section>
      </div>
    </div>
  );
}