import type { ReactNode } from "react";
import PageBar from "../../../../components/PageBar/PageBar";
import { useTranslations } from "next-intl";

export default function ServicesLayout({ children }: { children: ReactNode }) {
  const t = useTranslations('LifeInterpretation'); // Specify translation namespace

  return (
    <div>
      <div>
        <PageBar>
          <h1 className="text-2xl md:text-3xl font-bold">{t('header')}</h1>
        </PageBar>
        {children}
      </div>
    </div>
  );
}