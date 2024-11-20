// // Note that `app/[locale]/[...rest]/page.tsx`
// // is necessary for this page to render.

// export {default} from '../../components/NotFoundPage';

import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');

  return (
    <div>
      <p>{t('description')}</p>
    </div>
  );
}
