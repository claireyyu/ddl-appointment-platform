import { useState, useEffect } from 'react';

export default function BaziCalculator() {
    const URL = 'http://localhost:8000/v1/paipan'; // Ensure this URL is correct
    
    // State to store form fields
    const [formData, setFormData] = useState({
        name: '',
        sex: '',
        birthDate: '',
        birthTime: ''
    });

    // State to store response data
    const [result, setResult] = useState('');

    // Update state on input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const date = new Date(formData.birthDate);
        const [hours, minutes] = formData.birthTime.split(':');

        // Adjust the sex value based on the selection
        const sexValue = formData.sex === 'female' ? 2 : 1;

        const bodyData = {
            name: formData.name,
            sex: sexValue,
            type: '1', // Set type to 1 by default
            year: date.getFullYear(),
            month: date.getMonth() + 1, // getMonth is zero-based, so add 1
            day: date.getDate(),
            hours,
            minute: minutes
        };

        try {
            const response = await fetch(URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bodyData)
            });

            if (response.ok) {
                const data = await response.json();
                setResult(data);
            } else {
                const errorData = await response.text();
                setResult(`Failed to fetch data: ${errorData}`);
            }
        } catch (error) {
            setResult(`Error: ${error.message || 'Failed to fetch'}`);
        }
    };

    return (
        <div>
            <form className="flex flex-col gap-6 p-4 m-12 text-slate-900" onSubmit={handleSubmit}>
                <div className="flex gap-2">
                    <label htmlFor="name" className="p-2">Name</label>
                    <input type="text" name="name" id="name" className="p-2 rounded-3xl" onChange={handleChange} />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="sex" className="p-2">Gender</label>
                    <select name="sex" id="sex" className="p-2 rounded-3xl" onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex gap-2">
                    <label htmlFor="birthDate" className="p-2">Birth Date</label>
                    <input type="date" name="birthDate" id="birthDate" className="p-2 rounded-3xl" onChange={handleChange} />
                </div>
                <div className="flex gap-2">
                    <label htmlFor="birthTime" className="p-2">Birth Time</label>
                    <input type="time" name="birthTime" id="birthTime" className="p-2 rounded-3xl" onChange={handleChange} />
                </div>
                <div className="flex justify-center mt-4">
                    <button type="submit" className="bg-sky-600 text-white px-10 py-2 rounded-2xl font-bold">Generate</button>
                </div>
            </form>
            {result && <p className="text-center text-lg mt-4">{result}</p>}
        </div>
    );
}

