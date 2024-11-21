'use client';

import {useParams} from 'next/navigation';
import {ChangeEvent, ReactNode, useTransition} from 'react';
import {Locale, usePathname, useRouter} from '../../i18n/routing';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      style={{
        position: 'relative',
        color: '#9CA3AF', // Equivalent to text-gray-400
        opacity: isPending ? 0.3 : 1,
        transition: 'opacity 0.3s ease',
      }}
    >
      <p style={{position: 'absolute', width: '1px', height: '1px', overflow: 'hidden'}}>
        {label}
      </p>
      <select
        style={{
          appearance: 'none',
          backgroundColor: 'transparent',
          padding: '12px 24px 12px 8px', // py-3 pl-2 pr-6 in Tailwind
          cursor: isPending ? 'not-allowed' : 'pointer',
        }}
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          right: '8px',
          top: '8px',
          fontSize: '1rem',
        }}
      >
        ⌄
      </span>
    </label>
  );
}
