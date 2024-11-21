import PageBar from "../../../components/PageBar/PageBar";
import { type ReactNode } from "react";
import { useTranslations } from "next-intl";

export default function ProfileLayout({ children }: { children: ReactNode }) {
  const t = useTranslations("ProfileLayout");

  return (
    <div>
      <PageBar>
        <h1 className="text-2xl md:text-3xl font-bold">{t("myAccount")}</h1>
      </PageBar>
      <div className="mx-4 md:mx-8 lg:mx-24 my-8 lg:my-16">{children}</div>
    </div>
  );
}
