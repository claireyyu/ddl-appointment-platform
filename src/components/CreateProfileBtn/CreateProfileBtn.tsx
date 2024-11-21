import React from "react";
import { useTranslations } from "next-intl";

export default function CreateProfileBtn({ onClick }) {
  const t = useTranslations("CreateProfile");

  return (
    <button
      className="w-full text-bEnd text-base px-4 py-2 lg:hover:bg-gray-100 cursor-pointer focus:outline-none whitespace-nowrap"
      onClick={onClick}
    >
      {t("createNewProfile")}
    </button>
  );
}
