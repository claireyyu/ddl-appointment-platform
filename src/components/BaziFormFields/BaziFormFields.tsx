import React, { ChangeEvent } from 'react';
import { type BaziFormFieldsProps } from '../../types/bazi';


const BaziFormFields: React.FC<BaziFormFieldsProps> = ({ formData, timezones, handleChange }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        <label htmlFor="name" className="p-2 text-sm md:text-base xl:text-lg">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        <label htmlFor="sex" className="p-2 text-sm md:text-base xl:text-lg ">Gender</label>
        <select
          name="sex"
          id="sex"
          value={formData.sex}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        <label htmlFor="birthDate" className="p-2 text-sm md:text-base xl:text-lg">Birth Date</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          value={formData.birthDate}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        <label htmlFor="birthTime" className="p-2 text-sm md:text-base xl:text-lg">Birth Time</label>
        <input
          type="time"
          name="birthTime"
          id="birthTime"
          value={formData.birthTime}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
        <label htmlFor="timezone" className="p-2 text-sm md:text-base xl:text-lg">Timezone</label>
        <select
          name="timezone"
          id="timezone"
          value={formData.timezone}
          className="p-2 col-span-1 sm:col-span-2 rounded-custom border-4 border-bStart text-black text-center"
          onChange={handleChange}
        >
          <option value="">Select Timezone</option>
          {timezones.map((tz: { value: string; label: string }) => (
            <option key={tz.value} value={tz.value}>{tz.label}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default BaziFormFields;