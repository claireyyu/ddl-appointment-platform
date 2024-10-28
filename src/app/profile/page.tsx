'use client';

import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from 'react';
import { AuthContextType } from "../../types/auth";

export default function ProfilePage() {
  const { user, loading, logout } = useAuth() as AuthContextType;

  useEffect(() => {
    if (!loading && !user) {
      console.log("User is not logged in.");
    }
  }, [loading, user]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
          <div>
            <h1>Welcome, {user.name}!</h1>
            <p>Email: {user.email}</p>
            <button onClick={logout} className="bg-gradient-to-r from-bpStart to-bpEnd border-none text-foreground text-base px-4 py-2 rounded-custom">Logout</button>
        </div>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
