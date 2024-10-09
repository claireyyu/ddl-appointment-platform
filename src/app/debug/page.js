"use client";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const [token, setToken] = useState('');

  useEffect(() => {
    // Get the JWT from query params
    const result = searchParams.get('token');
    if (result) {
      const decodedToken = decodeURIComponent(result);
      setToken(decodedToken);
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Debug Page</h1>
      <p className="bg-foreground text-background p-4 m-8 rounded-md break-words">JWT Token: {token ? token : 'No token found'}</p>
    </div>
  );
}
