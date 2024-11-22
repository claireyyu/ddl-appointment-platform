import Link from 'next/link';
import styles from './HomeTraits.module.css';
import { useTranslations } from 'next-intl';
import generateLocalizedPath from '../../utils/PathHelper';
import { useLocale } from 'next-intl';

export default function HomeTraits() {
    const t = useTranslations('HomeTraits');
    const locale = useLocale();

    return (
        <div>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-4 lg:mb-8">{t('title')}</h1>
            <div className="h-8" />
            <p className={styles.listText}>· {t('metal')}</p>
            <p className={styles.listText}>· {t('wood')}</p>
            <p className={styles.listText}>· {t('water')}</p>
            <p className={styles.listText}>· {t('fire')}</p>
            <p className={styles.listText}>· {t('earth')}</p>
            <div className="h-8"></div>
            <p className={styles.listText}>
                {t('findOut')}{' '}
                <Link href={generateLocalizedPath('/', locale)} className="font-semibold text-sm md:text-base xl:text-lg underline">
                    {t('baziCalculator')}
                </Link>
                .
            </p>
        </div>
    );
}
