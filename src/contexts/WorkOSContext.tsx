
import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  organizationId?: string;
}

interface WorkOSContextType {
  user: User | null;
  loading: boolean;
  signIn: (organizationId?: string) => void;
  signOut: () => void;
}

const WorkOSContext = createContext<WorkOSContextType | undefined>(undefined);

export const useWorkOS = () => {
  const context = useContext(WorkOSContext);
  if (!context) {
    throw new Error('useWorkOS must be used within a WorkOSProvider');
  }
  return context;
};

export const WorkOSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem('workos_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signIn = (organizationId?: string) => {
    const params = new URLSearchParams({
      client_id: 'client_01JXBZ26B2FV5HNYCRQ5K08D96',
      redirect_uri: `${window.location.origin}/auth/callback`,
      response_type: 'code',
      state: Math.random().toString(36).substring(7),
    });

    if (organizationId) {
      params.append('organization_id', organizationId);
    }

    const authUrl = `https://api.workos.com/sso/authorize?${params.toString()}`;
    window.location.href = authUrl;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('workos_user');
    window.location.href = '/';
  };

  return (
    <WorkOSContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </WorkOSContext.Provider>
  );
};
