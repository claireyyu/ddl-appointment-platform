"use client";
import React, { useState } from 'react';

const Page = () => {
    const [result, setResult] = useState('');

    const fetchData = async () => {
        try {
            // Hardcoded test data
            const name = 'Lily';
            const sexValue = 1;
            const date = new Date();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            const hardcodedData = {
                name: name,
                sex: sexValue,
                type: '1', // Set type to 1 by default
                year: date.getFullYear(),
                month: date.getMonth() + 1, // getMonth is zero-based, so add 1
                day: date.getDate(),
                hours,
                minute: minutes
            };

            // Make a POST request with the hardcoded data
            const response = await fetch('http://127.0.0.1:8000/v1/paipan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(hardcodedData)
            });

            if (response.ok) {
                const data = await response.json();
                setResult(`POST successful: ${JSON.stringify(data)}`);
            } else {
                setResult(`POST failed: ${response.statusText}`);
            }
        } catch (error) {
            setResult(`Error: ${error.message || 'Failed to fetch data'}`);
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            <p>{result}</p>
        </div>
    );
};

export default Page;