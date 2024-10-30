import React from 'react'
import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { AuthContextType } from '../../types/auth'
import { BaziUserResultData } from '../../types/bazi'
import { FaRegTrashAlt } from "react-icons/fa";
import { getUserBaziProfiles, deleteUserBaziProfile } from '../../services/userService'

function ProfileList() {
  const { token } = useAuth() as AuthContextType;
  const [results, setResults] = useState([]);

  useEffect(() => { 

    try {
      getUserBaziProfiles(token).then((data) => {
        setResults(data);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }, [token])

  async function handleDeleteUserResult(id: number, event: React.MouseEvent) {

    event.stopPropagation();

    const confirmed = window.confirm("Are you sure you want to delete this result?");

    if (!confirmed) {
      return;
    }

    try {
      deleteUserBaziProfile(id, token).then((data) => {
        console.log('Result deleted: ', data);
        setResults(results.filter((result: BaziUserResultData) => result.id !== id));
      });
    } catch (error) {
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
          <div key={result.id} className="border-bpStart border-2 p-4 hover:opacity-75" >
            <div className="flex w-full">
              <button className="w-10/12 p-4 flex flex-col items-start space-y-2" onClick={() => handleToResultPage(result.id)}>
                <p>{result.name}</p>
                <p>Birth Date: {result.birth_year}-{result.birth_month}-{result.birth_day}</p>
              </button>
              <div className="w-2/12 flex items-center justify-end">
                <button className="hover:opacity-50 mr-16" onClick={(event) => handleDeleteUserResult(result.id, event)}>
                  <FaRegTrashAlt size="24"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
   );
}
  

export default ProfileList