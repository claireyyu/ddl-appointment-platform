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
    // closeModal();
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
      const URL1 = 'http://127.0.0.1:8000/v1/paipan';
      const URL2 = 'http://127.0.0.1:8000/v1/cesuan';
      const URL3 = 'http://127.0.0.1:8000/v1/jingpan';

      const [response1, response2, response3] = await Promise.all([
        fetch(URL1, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyData)
        }),
        fetch(URL2, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyData)
        }),
        fetch(URL3, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(bodyData)
        })
      ]);

      if (response1.ok && response2.ok && response3.ok) {
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        const combinedData: BaziResultData = {
          baziSizhu: data1.original.baziSizhu,
          baziDayun: data1.original.baziDayun,
          baziCesuan: data2.original.baziCesuan,
          baziLiuyue: data3.original.baziLiuyue
        };
        console.log(combinedData);

        setResult(JSON.stringify(combinedData));
      } else {
        const errorData1 = await response1.text();
        const errorData2 = await response2.text();
        const errorData3 = await response3.text();
        setResult(`Failed to fetch data: ${errorData1}, ${errorData2}, ${errorData3}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message || 'Failed to fetch'}`);
    } finally {
      setIsSubmitting(false); // Enable button and change text
    }
  };

  useEffect(() => {
    if (result) {
      const storeUserBaziResult = async (baziRequestData: BaziRequestData, result: string) => {

        const URL = 'http://localhost:8000/v1/user/results';
        try {
          const response = await fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ ...baziRequestData, result })
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          console.log(data);
          return data;
        } catch (error) {
          console.error("Error posting Bazi result:", error);
        }
      };

      const bodyData: BaziRequestData = {
        name: formData.name,
        sex: formData.sex,
        year: moment(formData.birthDate).year(),
        month: moment(formData.birthDate).month() + 1,
        day: moment(formData.birthDate).date(),
        hours: parseInt(formData.birthTime.split(':')[0]),
        minute: parseInt(formData.birthTime.split(':')[1])
      };

      storeUserBaziResult(bodyData, result);
    }
  }, [result]);


  return (
    <div>
      {openMobileForm && (
        <form  className = "flex flex-col border-bEnd border-2 rounded-custom w-full p-8" onSubmit = { handleSaveUserProfile } >
        <BaziFormFields formData={formData} handleChange={handleChange} timezones={timezones} />
        <div className="flex flex-col space-y-4 justify-center mt-4">
          <button
            type="submit"
            className={`w-full sm:w-2/3 md:w-1/2 xl:w-3/5 cursor-pointer text-white px-4 py-2 rounded-custom font-bold transition-colors flex items-center justify-center ${isSubmitting ? 'cursor-not-allowed bg-gradient-to-r from-bStart to-bEnd' : 'bg-gradient-to-r from-bStart to-bEnd hover:opacity-90'}`}
            disabled={isSubmitting}>
            {isSubmitting ? (
              <LoadingAnimation />
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