import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { timezones } from '../../utils/TimezoneData';
import moment from 'moment-timezone';
import "../../app/globals.css";
import { useAuth } from "../../contexts/AuthContext";
import { AuthContextType } from '../../types/auth';
import { type FormData, type BaziRequestData, type BaziResultData } from '../../types/bazi';
import BaziFormFields from '../BaziFormFields/BaziFormFields';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

export default function BaziCalculator() {
  const { token, user } = useAuth() as AuthContextType;
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    sex: '',
    birthDate: '',
    birthTime: '',
    timezone: ''
  });

  const [result, setResult] = useState('');

  useEffect(() => {
    setError('');
  }, []);

  useEffect(() => {
    if (result) {
      const storePublicBaziResult = async (baziRequestData: BaziRequestData, result: string) => {

        const URL = 'http://localhost:8000/v1/results';
        try {
          const response = await fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...baziRequestData, result })
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error posting Bazi result:", error);
        }
      };

      const handleToResultPage = async () => {
        // Create body data for posting to backend
        const bodyData: BaziRequestData = {
          name: formData.name,
          sex: formData.sex,
          year: moment(formData.birthDate).year(),
          month: moment(formData.birthDate).month() + 1,
          day: moment(formData.birthDate).date(),
          hours: parseInt(formData.birthTime.split(':')[0]),
          minute: parseInt(formData.birthTime.split(':')[1])
        };

        try {
          const resultData = await storePublicBaziResult(bodyData, result);
          console.log('resultData:', resultData);
          const resultId = resultData.resultId;
          console.log('resultId:', resultId);
          const query = new URLSearchParams({
            id: resultId
          }).toString();
          const resultUrl = `/result?${query}`;
          window.open(resultUrl, '_blank');
        } catch (error) {
          console.error("Error:", error);
        }
      };

      handleToResultPage();
    }
  }, [result]);

  // Update state on input change
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear the error for the field being updated
    setError('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  return (
    <div>
      <h1 className="text-sm md:text-base xl:text-lg text-center p-2 font-bold">Try the Bazi calculator and get your life decoded.</h1>
      <form className="flex flex-col p-4 sm:p-6 md:p-8" onSubmit={handleSubmit}>
        <BaziFormFields formData={formData} handleChange={handleChange} timezones={timezones} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
          <div className="p-2"></div>
          <div className="p-2 col-span-1 sm:col-span-2 rounded-custom text-black flex justify-center">
            <button
              type="submit"
              className={`w-full sm:w-2/3 md:w-1/2 xl:w-3/5 cursor-pointer text-white px-4 py-2 rounded-custom font-bold transition-colors flex items-center justify-center ${isSubmitting ? 'cursor-not-allowed bg-gradient-to-r from-bStart to-bEnd' : 'bg-gradient-to-r from-bStart to-bEnd hover:opacity-90'
                }`}
              disabled={isSubmitting}
            >

              {isSubmitting ? (
                <LoadingAnimation />
              ) : 'Decode'}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      </form>
    </div>
  );
}