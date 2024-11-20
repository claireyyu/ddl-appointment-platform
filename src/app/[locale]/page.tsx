import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';
import PageLayout from '../../components/PageLayout';

type Props = {
  params: {locale: string};
};

export default function HomePage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  const t = useTranslations('HomePage');

  return (
    <p>{t('title')}</p>
  );
}
