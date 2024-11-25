import React, { useEffect, useState } from "react";
import moment from "moment-timezone";
import { useAuth } from "../../contexts/AuthContext";
import { BaziRequestData, BaziResultData } from "../../types/bazi";
import { getPaipan, getCesuan, getJingpan } from "../../services/baziService";
import { createUserBaziResult } from "../../services/resultService";
import BaziFormFields from "../BaziFormFields/BaziFormFields";
import { timezones } from "../../utils/TimezoneData";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import { useTranslations, useLocale } from "next-intl";

function CreateProfileMobile({ openMobileForm, toggleMobileForm }) {
  const t = useTranslations("CreateProfileMobile");
  const locale = useLocale();
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    birthDate: "",
    birthTime: "",
    timezone: "",
  });

  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting && result) {
      alert(t("refreshToSeeProfile"));
    }
  }, [isSubmitting, result]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.sex || !formData.birthDate || !formData.birthTime || !formData.timezone) {
      setError(t("fillAllFields"));
      return;
    }

    setIsSubmitting(true);

    const birthDateTime = moment.tz(`${formData.birthDate} ${formData.birthTime}`, formData.timezone);
    const beijingTime = birthDateTime.clone().tz("Asia/Shanghai");

    const bodyData: BaziRequestData = {
      name: formData.name,
      sex: formData.sex,
      type: 1,
      year: beijingTime.year(),
      month: beijingTime.month() + 1,
      day: beijingTime.date(),
      hours: beijingTime.hours(),
      minute: beijingTime.minutes(),
      locale: locale === 'en' ? 'en' : 'zh'
    };

    try {
      const [paipanData, cesuanData, jingsuanData] = await Promise.all([
        getPaipan(bodyData),
        getCesuan(bodyData),
        getJingpan(bodyData),
      ]);

      const combinedData: BaziResultData = {
        baziSizhu: paipanData.original.baziSizhu,
        baziDayun: paipanData.original.baziDayun,
        baziCesuan: cesuanData.original.baziCesuan,
        baziLiuyue: jingsuanData.original.baziLiuyue,
      };
      setResult(JSON.stringify(combinedData));
    } catch (error) {
      setResult(`Error: ${error.message || t("fetchFailed")}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {openMobileForm && (
        <form className="flex flex-col border-bEnd border-2 rounded-custom w-full p-8">
          <BaziFormFields formData={formData} handleChange={handleChange} timezones={timezones} />
          <div className="flex flex-col space-y-4 justify-center items-center mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className={`w-full sm:w-2/3 md:w-1/2 xl:w-3/5 cursor-pointer text-white px-4 py-2 rounded-custom font-bold transition-colors ${
                isSubmitting ? "cursor-not-allowed" : "hover:opacity-90"
              }`}
            >
              {isSubmitting ? <LoadingAnimation title={t("decoding")} /> : t("save")}
            </button>
            <button
              className="w-full sm:w-2/3 md:w-1/2 xl:w-3/5 cursor-pointer text-white px-4 py-2 rounded-custom font-bold transition-colors bg-gradient-to-r hover:opacity-90"
              onClick={toggleMobileForm}
            >
              {t("close")}
            </button>
          </div>
          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>
      )}
    </div>
  );
}

export default CreateProfileMobile;
