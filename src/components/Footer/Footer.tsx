import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';
import {useLocale, useTranslations} from 'next-intl';


export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <div>
      <footer className="bg-background text-foreground p-4"> 
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0 text-center md:text-left">
          <div>
            {t('description')}
          </div>
        </div>
      </footer> 
    </div>
  );
}
