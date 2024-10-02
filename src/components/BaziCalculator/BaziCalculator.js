import { useState, useEffect } from 'react';
import {majorTimezones} from './TimezoneData';
import moment from 'moment-timezone';
import BaziResult from './BaziResult';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import "../../app/globals.css";



export default function BaziCalculator() {
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate list of major timezones with UTC offset
  const timezones = majorTimezones.map((tz) => {
      const offset = moment.tz(tz.value).format('Z');
      return { label: `${tz.label} (UTC${offset})`, value: tz.value };
  });

  // State to store form fields
  const [formData, setFormData] = useState({
      name: '',
      sex: '',
      birthDate: '',
      birthTime: '',
      timezone: '' // Added timezone here
  });

  // State to store response data
  const [result, setResult] = useState('');

  // Update state on input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));

    // Clear the error for the field being updated
    setError('');
  };

  useEffect(() => {
    setError('');
  }, []);

  const handleSubmit = async (e) => {
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

    const bodyData = {
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

        const [response1, response2] = await Promise.all([
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
            })
        ]);

        if (response1.ok && response2.ok) {
            const data1 = await response1.json();
            const data2 = await response2.json();

            const combinedData = {
                debug: data1.original.debug,
                nianzhu: data1.original.nianzhu,
                yuezhu: data1.original.yuezhu,
                rizhu: data1.original.rizhu,
                shizhu: data1.original.shizhu,
                big_start_year: data1.original.big_start_year,
                personality_detail: data2.original.personality_detail,
                rizhu_detail: data2.original.rizhu_detail,
            };

          setResult(JSON.stringify(combinedData));
            
        } else {
            const errorData1 = await response1.text();
            const errorData2 = await response2.text();
            setResult(`Failed to fetch data: ${errorData1}, ${errorData2}`);
        }
    } catch (error) {
        setResult(`Error: ${error.message || 'Failed to fetch'}`);
    } finally {
        setIsSubmitting(false); // Enable button and change text
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-lg text-center p-2 md:text-lg font-bold">Try the Bazi calculator and get your life decoded.</h1>
      <form className="flex flex-col gap-4 md:p-8 bg-background mx-4 md:mx-8" onSubmit={handleSubmit}>
        
        <div className="grid grid-cols-3 gap-4">
          <label htmlFor="name" className="p-2">Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            className="p-2 col-span-2 rounded border-4 border-bStart text-black text-center"
            onChange={handleChange} 
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <label htmlFor="sex" className="p-2">Gender</label>
          <select 
            name="sex" 
            id="sex" 
            value={formData.sex}
            className="p-2 col-span-2 rounded border-4 border-bStart text-black text-center" 
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <label htmlFor="birthDate" className="p-2">Birth Date</label>
          <input 
            type="date" 
            name="birthDate" 
            id="birthDate" 
            value={formData.birthDate}
            className="p-2 col-span-2 rounded border-4 border-bStart text-black text-center" 
            onChange={handleChange} 
          />
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <label htmlFor="birthTime" className="p-2">Birth Time</label>
          <input 
            type="time" 
            name="birthTime" 
            id="birthTime" 
            value={formData.birthTime}
            className="p-2 col-span-2 rounded border-4 border-bStart text-black text-center" 
            onChange={handleChange} 
          />
        </div>
  
        <div className="grid grid-cols-3 gap-4">
          <label htmlFor="timezone" className="p-2">Timezone</label>
          <select 
            name="timezone" 
            id="timezone" 
            value={formData.timezone}
            className="p-2 col-span-2 rounded border-4 border-bStart text-black text-center" 
            onChange={handleChange}
          >
            <option value="">Select Timezone</option>
            {timezones.map((tz) => (
              <option key={tz.value} value={tz.value}>{tz.label}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div></div>
          <div className="p-2 col-span-2 flex justify-center">
            <button 
              type="submit" 
              className={`w-full md:max-w-xs cursor-pointer text-white px-10 py-2 rounded font-bold transition-colors ${
                isSubmitting ? 'cursor-not-allowed bg-gradient-to-r from-bStart to-bEnd' : 'bg-gradient-to-r from-bStart to-bEnd'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <span>Decoding</span>
                  <span className="dot-flashing"></span>
                  <span className="dot-flashing"></span>
                  <span className="dot-flashing"></span>
                </div>
              ) : 'Decode'}
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}


        {result && (
          <Link href={{
            pathname: '/result',
            query: { 
              inputName: formData.name,
              birthLocalYear: moment(formData.birthDate).year(),
              birthLocalMonth: moment(formData.birthDate).month() + 1, // month is zero-indexed
              birthLocalDay: moment(formData.birthDate).date(),
              birthLocalHour: formData.birthTime.split(':')[0],
              birthLocalMinute: formData.birthTime.split(':')[1],
              result: result
             }
        }}
        className="mt-4 mx-auto text-center bg-gradient-to-r from-bpEnd to-bpStart text-white font-semibold py-2 px-4 rounded-full md:text-lg sm:text-base text-sm">View Your Result Report!</Link>
      )}
      </form>

    </div>
  );
}
