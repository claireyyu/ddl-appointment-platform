import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { AuthContextType } from '../../types/auth'
import { BaziUserResultData } from '../../types/bazi'
import { FaRegTrashAlt } from "react-icons/fa";


function ProfileList() {
  const { token } = useAuth() as AuthContextType;
  const [results, setResults] = useState([]);

  useEffect(() => { 
    async function fetchProfileList() { 
      try {
        const response = await fetch('http://localhost:8000/v1/user/results', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Attach token in Authorization header
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const data = await response.json();
        setResults(data);
        console.log('Profile list fetched: ', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchProfileList();
  }, [token])

  async function handleDeleteUserResult(id: number) {

    const confirmed = window.confirm("Are you sure you want to delete this result?");

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/v1/user/result/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application / json',
          'Authorization': `Bearer ${token}`, // Attach token in Authorization header
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Result deleted: ', data);
      setResults(results.filter((result: BaziUserResultData) => result.id !== id));
    }
    catch (error) {
      console.error('Error deleting data:', error);
    }
  }
  
  function handleToResultPage(id:number) {
    const query = new URLSearchParams({
      auth: '1',
      id: id.toString(),
    }).toString();
    const resultUrl = `/result?${query}`;
    window.open(resultUrl, '_blank');
  }

   return (
    <div>
      <div className="flex flex-col space-y-4">
        {results.map((result: BaziUserResultData) => (
          <button key={result.id} className="border-bpStart border-2 p-4 hover:opacity-75" onClick={() => handleToResultPage(result.id)}>
            <div className="flex w-full">
              <div className="flex-1 p-4 flex flex-col items-start space-y-2">
                <p>{result.id} {result.name}</p>
                <p>Birth Date: {result.birth_year}-{result.birth_month}-{result.birth_day}</p>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <button className="hover:opacity-50 mr-16" onClick={() => handleDeleteUserResult(result.id)}>
                  <FaRegTrashAlt size="24"/>
                </button>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
   );
}
  

export default ProfileList