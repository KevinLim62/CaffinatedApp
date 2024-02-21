'use client';
import { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';

type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
