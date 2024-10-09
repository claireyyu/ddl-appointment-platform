'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export default function Profile() {
  const { user, loading, token } = useAuth();

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          {/* <p>(debug) Token: {token}</p> */}
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
