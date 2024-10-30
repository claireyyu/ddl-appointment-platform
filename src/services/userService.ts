const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;


export async function getUser(token) {
  try {
    const response = await fetch(`${BASE_URL}/v1/user/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application / json',
        'Authorization': `Bearer ${token}`, // Attach token in Authorization header
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function getUserBaziProfiles(token) { 
  try {
    const response = await fetch(`${BASE_URL}/v1/user/results`, {
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
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export async function deleteUserBaziProfile(id, token) {
  try {
    const response = await fetch(`${BASE_URL}/v1/user/result/${id}`, {
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
    return data;

  } catch (error) {
    console.error('Error deleting data:', error);
  }
}