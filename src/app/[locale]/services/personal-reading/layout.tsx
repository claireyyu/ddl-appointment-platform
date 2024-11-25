import type { ReactNode } from "react";
import PageBar from "../../../../components/PageBar/PageBar";
import { useTranslations } from "next-intl";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('PersonalReading'); // Specify translation namespace

  return (
    <div>
      <div>
        <PageBar>
          <h1 className="text-2xl md:text-3xl font-bold">{t('header')}</h1>
        </PageBar>
        <div className="mx-4 md:mx-8 lg:mx-24">
          {children}
        </div>
      </div>
    </div>
  );
}