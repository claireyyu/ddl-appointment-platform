'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { type AuthContextType } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Function to handle Google login (redirects to backend)
  const loginWithGoogle = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/google/redirect`;
  };

  // Handle invalid token (remove it and log out the user)
  const handleInvalidToken = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token'); // Clear token from localStorage
  };

  const logout = async () => {
    const storedToken = localStorage.getItem('token');
    
    if (storedToken) {
      try {
        // Call the backend to invalidate the JWT token
        await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/google/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${storedToken}`,
          },
        });

        // Clear user data and token from state and localStorage
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');

        // Redirect to login page or home
        router.push('/');
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  };

  useEffect(() => {
    if (!loading && user) {
      console.log('User:', user);
      console.log('Token:', token);
    }
  }, [loading, user]);

  useEffect(() => {
    // Extract the token from the URL query parameter and store it
    const extractTokenFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token'); // Get token from URL query (?token=xxxxxx)
  
      if (token) {
        localStorage.setItem('token', token); // Store token in localStorage
        setToken(token); // Store token in state
        // Clear token from URL
        window.history.replaceState({}, document.title, window.location.pathname); // Clear query params from the URL
      }
    };
  
    extractTokenFromUrl(); // Extract the token from the URL when the page loads
  }, []);
  
  useEffect(() => {
    // Only fetch the profile if the token is set
    const fetchUserProfile = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
  
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/profile`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Attach token in Authorization header
          },
        });
  
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else if (res.status === 401) {
          console.log('Token is invalid or expired. Logging out...');
          handleInvalidToken(); // Handle invalid token scenario
        } else {
          console.error('Failed to fetch user profile');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserProfile(); // Fetch user data with the extracted token
  }, [token]); // Run fetchUserProfile whenever token changes
  

  // // Fetch token and user data on app load (after redirect from Google)
  // useEffect(() => {
  //   // Extract the token from the URL query parameter and store it
  //   const extractTokenFromUrl = () => {
  //     const urlParams = new URLSearchParams(window.location.search);
  //     const token = urlParams.get('token'); // Get token from URL query (?token=xxxxxx)

  //     if (token) {
  //       localStorage.setItem('token', token); // Store token in localStorage
  //       setToken(token); // Store token in state
  //       // Clear token from URL
  //       window.history.replaceState({}, document.title, window.location.pathname); // Clear query params from the URL
  //     }
  //   };
    
  //   // Fetch user data using the stored JWT token
  //   const fetchUserProfile = async () => {
  //     const storedToken = localStorage.getItem('token');
  //     if (!storedToken) {
  //       setLoading(false);
  //       return;
  //     }
      
  //     try {
  //       const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/profile`, {
  //         method: 'GET',
  //         headers: {
  //           'Authorization': `Bearer ${storedToken}`, // Attach token in Authorization header
  //         },
  //       });

  //       if (res.ok) {
  //         const data = await res.json();
  //         setUser(data);
  //       } else if (res.status === 401) {
  //         console.log('Token is invalid or expired. Logging out...');
  //         handleInvalidToken(); // Handle invalid token scenario
  //       } else {
  //         console.error('Failed to fetch user profile');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
    
  //   extractTokenFromUrl(); // Extract the token from the URL when the page loads
  //   fetchUserProfile(); // Fetch user data with the extracted token
  // }, []);

  return (
    <AuthContext.Provider value={{ user, token, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

// 'use client';

// import { createContext, useState, useEffect, useContext } from 'react';
// import { useRouter } from 'next/navigation';
// import { type AuthContextType } from '../types/auth';

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   // Function to handle Google login (redirects to backend)
//   const loginWithGoogle = () => {
//     window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/google/redirect`;
//   };

//   // Handle invalid token (remove it and log out the user)
//   const handleInvalidToken = () => {
//     setUser(null);
//     setToken(null);
//     localStorage.removeItem('token'); // Clear token from localStorage
//   };

//   const logout = async () => {
//     const storedToken = localStorage.getItem('token');
    
//     if (storedToken) {
//       try {
//         // Call the backend to invalidate the JWT token
//         await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/auth/google/logout`, {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${storedToken}`,
//           },
//         });

//         // Clear user data and token from state and localStorage
//         setUser(null);
//         setToken(null);
//         localStorage.removeItem('token');

//         // Redirect to login page or home
//         router.push('/');
//       } catch (error) {
//         console.error('Error logging out:', error);
//       }
//     }
//   };

//   // Load token from localStorage on initial load
//   useEffect(() => {
//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       setToken(storedToken); // Set the token from localStorage if available
//     }
//   }, []); // Run only on initial load

//   useEffect(() => {
//     // Only fetch the profile if the token is set
//     const fetchUserProfile = async () => {
//       if (!token) {
//         setLoading(false);
//         return;
//       }
  
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/user/profile`, {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`, // Attach token in Authorization header
//           },
//         });
  
//         if (res.ok) {
//           const data = await res.json();
//           setUser(data);
//         } else if (res.status === 401) {
//           console.log('Token is invalid or expired. Logging out...');
//           handleInvalidToken(); // Handle invalid token scenario
//         } else {
//           console.error('Failed to fetch user profile');
//         }
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     fetchUserProfile(); // Fetch user data with the extracted token
//   }, [token]); // Run fetchUserProfile whenever token changes

//   return (
//     <AuthContext.Provider value={{ user, token, loading, loginWithGoogle, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
