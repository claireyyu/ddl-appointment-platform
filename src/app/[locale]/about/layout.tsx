import PageBar from "../../../components/PageBar/PageBar";
import { type ReactNode } from "react";
import { useTranslations } from 'next-intl'; // Import translations

export default function AboutLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('AboutPage'); // Specify translation namespace

  return (
    <div>
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">{t('title')}</h1>
      </PageBar>
      <div className="mx-4 md:mx-8 lg:mx-24 my-8 lg:my-16">
        {children}
      </div>
    </div>
  );
}