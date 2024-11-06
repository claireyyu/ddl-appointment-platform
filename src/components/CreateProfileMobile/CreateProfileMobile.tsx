import React, { useEffect } from 'react'
import BaziFormFields from '../BaziFormFields/BaziFormFields';
import { useState } from 'react';
import { FormData } from '../../types/bazi';
import { ChangeEvent } from 'react';
import { timezones } from '../../utils/TimezoneData';
import moment from 'moment-timezone';
import { BaziRequestData, BaziResultData } from '../../types/bazi';
import { useAuth } from '../../contexts/AuthContext';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import { getPaipan, getCesuan, getJingpan } from '../../services/baziService';
import { createUserBaziResult } from '../../services/resultService';

function CreateProfileMobile({ openMobileForm, toggleMobileForm }) {
  const { token } = useAuth();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    sex: '',
    birthDate: '',
    birthTime: '',
    timezone: ''
  });

  const [error, setError] = useState('');
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close modal after submission is done
  useEffect(() => {
    if (!isSubmitting && result) {
      window.alert("Refresh to see your profile!");
    }
  }, [isSubmitting, result]);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // // Clear the error for the field being updated
    setError('');
  };

  const handleSaveUserProfile = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = async () => {
    // Clear error message at the beginning of each submit attempt
    setError('');

    // Validate form fields
    if (!formData.name || !formData.sex || !formData.birthDate || !formData.birthTime || !formData.timezone) {
      setError('Please make sure to fill all fields');
      return;
    }

    setIsSubmitting(true); // Disable button and change text

    // Combine birth date and time, and convert to Beijing time
    const birthDateTime = moment.tz(`${formData.birthDate} ${formData.birthTime}`, formData.timezone);
    const beijingTime = birthDateTime.clone().tz('Asia/Shanghai');

    const bodyData: BaziRequestData = {
      name: formData.name,
      sex: formData.sex,
      type: 1, // Assuming type is always 1 (gongli)
      year: beijingTime.year(),
      month: beijingTime.month() + 1, // getMonth is zero-based, so add 1
      day: beijingTime.date(),
      hours: beijingTime.hours(),
      minute: beijingTime.minutes()
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
        baziLiuyue: jingsuanData.original.baziLiuyue
      };
      setResult(JSON.stringify(combinedData));
    } catch (error) {
      setResult(`Error: ${error.message || 'Failed to fetch'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (result) {
      const bodyData: BaziRequestData = {
        name: formData.name,
        sex: formData.sex,
        year: moment(formData.birthDate).year(),
        month: moment(formData.birthDate).month() + 1,
        day: moment(formData.birthDate).date(),
        hours: parseInt(formData.birthTime.split(':')[0]),
        minute: parseInt(formData.birthTime.split(':')[1])
      };

      createUserBaziResult(bodyData, result, token);
    }
  }, [result]);


  return (
    <div>
      {openMobileForm && (
        <form  className = "flex flex-col border-bEnd border-2 rounded-custom w-full p-8" onSubmit = { handleSaveUserProfile } >
        <BaziFormFields formData={formData} handleChange={handleChange} timezones={timezones} />
        <div className="flex flex-col space-y-4 justify-center items-center mt-4">
          <button
            type="submit"
            className={`w-full sm:w-2/3 md:w-1/2 xl:w-3/5 cursor-pointer text-white px-4 py-2 rounded-custom font-bold transition-colors flex items-center justify-center ${isSubmitting ? 'cursor-not-allowed bg-gradient-to-r from-bStart to-bEnd' : 'bg-gradient-to-r from-bStart to-bEnd hover:opacity-90'}`}
            disabled={isSubmitting}>
            {isSubmitting ? (
              <LoadingAnimation title="Decoding"/>
            ) : 'Save'}
        </button>
          <button
          className='w-full sm:w-2/3 md:w-1/2 xl:w-3/5 cursor-pointer text-white px-4 py-2 rounded-custom font-bold transition-colors flex items-center justify-center bg-gradient-to-r border-foreground border-2 hover:opacity-90'
          onClick={toggleMobileForm}
        >
          Close
          </button>
        </div>
        { error && <p className="text-red-500 mt-2 text-center">{error}</p> }
        </form >
      )}
    </div>

    );
  }

export default CreateProfileMobile;