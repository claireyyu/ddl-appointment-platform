import { BaziPublicResultData, BaziRequestData, BaziResultData } from '../types/bazi';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getBaziResult = async (isAuthenticated: boolean, token: string, resultId: string) => {
  try {
    let response;

    if (isAuthenticated && token) {
      console.log('Fetching user result by id with token:', token);
      // Authenticated request
      response = await fetch(`${BASE_URL}/v1/user/result/${resultId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Attach token in Authorization header
        },
      });
    } else {
      // Public request
      response = await fetch(`${BASE_URL}/v1/result/${resultId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Result fetched by id: ', data);
    return data;
    // setFetchedResult(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const createPublicBaziResult = async (baziRequestData: BaziRequestData, result: string) => {

  const URL = `${BASE_URL}/v1/results`;
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

export const createUserBaziResult = async (baziRequestData: BaziRequestData, result: string, token: string) => {

  const URL = `${BASE_URL}/v1/user/results`;
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
