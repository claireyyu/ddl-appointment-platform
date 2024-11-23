'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, ReactNode, useTransition, useState } from 'react';
import { Locale, usePathname, routing, useRouter } from '../../i18n/routing';
import { useTranslations } from 'next-intl';
import { Globe } from 'react-feather';
import generateLocalizedPath from '../../utils/PathHelper';
import Link from 'next/link';
import {useSearchParams} from 'next/navigation';

export function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams(); // Query parameters
  const params = useParams(); // Path parameters

  // Combine path and query parameters
  const queryParams = Object.fromEntries(searchParams.entries());
  const pageParams: Record<string, string> = Object.fromEntries(
    Object.entries({ ...params, ...queryParams }).map(([key, value]) => [key, Array.isArray(value) ? value.join(',') : value])
  );


  const t = useTranslations('LocaleSwitcher');

  // Function to toggle dropdown visibility
  function onToggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="hidden xl:block">
      {/* Button to toggle dropdown */}
      <button
        className="cursor-pointer flex items-center text-foreground border-none focus:bg-transparent"
        onClick={onToggle}
      >
        <Globe className="m-1" />
      </button>

      {/* Dropdown for selecting locales */}
      {isOpen && (
        <ul className="absolute bg-foreground text-bEnd rounded-custom flex flex-col mt-2">
          {routing.locales.slice(0, 2).map((locale: string) => (
            <Link href={generateLocalizedPath(pathname, locale, pageParams)}>
            <li
              key={locale}
              // onClick={() => onLocaleChange(locale)}
              className="cursor-pointer p-2 text-center text-base hover:opacity-50"
            >
              {t('locale', { locale })}
              </li>
            </Link>))}
        </ul>)}
    </div>
  );
}

export function LocaleSwitcherMobile() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations('LocaleSwitcher');

  // Function to toggle dropdown visibility
  function onToggle() {
    setIsOpen((prev) => !prev);
  }

  function onLocaleChange(locale: string) {
    router.replace(
      { pathname, query: params },
      { locale }
    );
    setIsOpen(false); // Close the dropdown after selection
  }

  return (
    <div className="relative">
      {/* Button to toggle dropdown */}
      <button
        className="cursor-pointer items-center text-foreground border-none focus:bg-transparent"
        onClick={onToggle}
      >
        <Globe className="m-1" />
      </button>

      {/* Dropdown for selecting locales */}
      {isOpen && (
        <ul className="absolute bg-foreground text-background border rounded mt-2 shadow-lg">
          {routing.locales.slice(0, 2).map((locale: string) => (
            <li
              key={locale}
              onClick={() => onLocaleChange(locale)}
              className="cursor-pointer p-2 text-center hover:opacity-50"
            >
              {t('locale', { locale })}
            </li>))}
        </ul>)}
    </div>
  );
}
