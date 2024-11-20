import React from 'react';
import Image from 'next/image';
import aboutPic from '../../../../public/about.png';
import styles from './AboutPage.module.css';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('AboutPage'); // Namespace for translations

  return (
    <div className="bg-background text-foreground text-justify flex flex-col">
      <p className="text-lg">{t('intro')}</p>
      <p className={styles.paragraph}>{t('baziExplanation')}</p>
      <p className={styles.paragraph}>{t('birthChartIntro')}</p>

      <div className="my-8 flex items-center justify-center">
        <div className="bg-gradient-to-r from-bStart to-bEnd rounded-custom p-1">
          <Image
            src={aboutPic}
            alt={t('imageAlt')}
            className="cursor-pointer rounded-custom"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div>
        <p className={styles.title}>{t('fourPillarsTitle')}</p>
        <p className={styles.paragraph}>
          {t('yearPillar.title')}:
          <br />
          {t('yearPillar.description')}
        </p>
        <p className={styles.paragraph}>
          {t('monthPillar.title')}:
          <br />
          {t('monthPillar.description')}
        </p>
        <p className={styles.paragraph}>
          {t('dayPillar.title')}:
          <br />
          {t('dayPillar.description')}
        </p>
        <p className={styles.paragraph}>
          {t('hourPillar.title')}:
          <br />
          {t('hourPillar.description')}
        </p>
        <p className={`${styles.paragraph} mb-4`}>{t('fourPillarsSummary')}</p>
        <p className={styles.title}>{t('missionTitle')}</p>
        <p className={`${styles.paragraph} mb-4`}>{t('missionDescription1')}</p>
        <p className={`${styles.paragraph} mb-4`}>{t('missionDescription2')}</p>
      </div>
    </div>
  );
}
