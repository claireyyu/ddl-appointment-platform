import React, { ChangeEvent } from 'react';
import { type BaziFormFieldsProps } from '../../types/bazi';
import {useLocale, useTranslations} from 'next-intl';

const BaziFormFields: React.FC<BaziFormFieldsProps> = ({ formData, timezones, handleChange, hasTitle }) => {
  const t = useTranslations('BaziCalculator');
  const locale = useLocale();

  return (
    <div className="flex flex-col justify-between">
      {hasTitle && <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <div className="p-2 text-sm md:text-base xl:text-lg" />
        <h1
          className="p-2 col-span-1 sm:col-span-2 text-sm md:text-base xl:text-lg text-center font-bold"
        >
          {t('title')}
        </h1>
      </div>}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <label htmlFor="name" className="p-2 text-sm md:text-base xl:text-lg">{t('name')}</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          autoComplete="name"
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <label htmlFor="sex" className="p-2 text-sm md:text-base xl:text-lg ">{t('gender')}</label>
        <select
          name="sex"
          id="sex"
          value={formData.sex}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        >
          <option value="">{t('selectGender')}</option>
          <option value="female">{t('female')}</option>
          <option value="male">{t('male')}</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <label htmlFor="birthDate" className="p-2 text-sm md:text-base xl:text-lg">{t('birthDate')}</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          value={formData.birthDate}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <label htmlFor="birthTime" className="p-2 text-sm md:text-base xl:text-lg">{t('birthTime')}</label>
        <input
          type="time"
          name="birthTime"
          id="birthTime"
          value={formData.birthTime}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        <label htmlFor="timezone" className="p-2 text-sm md:text-base xl:text-lg">{t('timezone')}</label>
        <select
          name="timezone"
          id="timezone"
          value={formData.timezone}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        >
          <option value="">{t('selectTimezone')}</option>
          {locale == 'en' ? timezones[0].data.map((tz: { value: string; label: string }) => (
            <option key={tz.value} value={tz.value}>{tz.label}</option>
          )) : timezones[1].data.map((tz: { value: string; label: string }) => (
            <option key={tz.value} value={tz.value}>{tz.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default BaziFormFields;