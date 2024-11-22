'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { type AuthContextType } from '../types/auth';
import { getUser } from '../services/userService';
import { signup as signupService, login as loginService } from '../services/accountService';
import { useLocale } from 'next-intl';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const {locale} = useLocale();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check if token exists in localStorage on page load
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  // Extract token from URL if present
  useEffect(() => {
    const extractTokenFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        localStorage.setItem('token', token);
        setToken(token);
        window.history.replaceState({}, document.title, window.location.pathname); // Clear query params from the URL
      }
    };

    extractTokenFromUrl();
  }, []);

  // Handle invalid token (remove it and log out the user)
  const handleInvalidToken = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  // Fetch user profile data from the backend
  useEffect(() => {
    const getUserProfile = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await getUser(token);
        if (data) {
          setUser(data);
        } else {
          console.log('Token is invalid or expired. Logging out...');
          handleInvalidToken();
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, [token]);

  // Function to handle Google login (redirects to backend)
  const loginWithGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/google/redirect`;
  };


  // Function to handle email signup
  const signup = async (name, email, password) => {
    
    try {
      const data = await signupService({ name, email, password });
      localStorage.setItem('token', data.authorisation.token); // Store token
      setToken(data.authorisation.token);
      setUser(data.user);
      router.push(`/${locale}`); // Redirect to homepage or desired page
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    }
  };

  // Function to handle email login
  const login = async (email, password) => {
    try {
      const data = await loginService({ email, password });
      localStorage.setItem('token', data.authorisation.token); // Store token
      setToken(data.authorisation.token);
      setUser(data.user);
      router.push('/'); // Redirect to homepage or desired page
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      try {
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/google/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${storedToken}`,
          },
        });

        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        router.push('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };

  const sendResetPasswordEmail = async (email) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/email/password/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error('Failed to send reset password email');
    }

    return response.json();
  };

  const verifyCode = async (email, token) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/email/password/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, token }),
    });

    if (!response.ok) {
      throw new Error('Failed to verify code');
    }

    return response.json();
  };

  const resetPassword = async (email, token, password, password_confirmation) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/email/password/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, token, password, password_confirmation }),
    });

    if (!response.ok) {
      throw new Error('Failed to reset password');
    }

    return response.json();
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, loginWithGoogle, signup, login, logout, sendResetPasswordEmail, verifyCode, resetPassword}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
