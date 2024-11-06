const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

interface SignupData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

// Function for Email Signup
export async function signup(signupData: SignupData) {
  try {
    const response = await fetch(`${BASE_URL}/v1/auth/email/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signupData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Contains user data and JWT token

  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
}

// Function for Email Login
export async function login(loginData: LoginData) {
  try {
    const response = await fetch(`${BASE_URL}/v1/auth/email/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Contains user data and JWT token

  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}

// Logout Function
export async function logout(token: string) {
  try {
    const response = await fetch(`${BASE_URL}/v1/auth/google/logout`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Success message

  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
}
