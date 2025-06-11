
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuthKitSignInUrl, getAuthKitSignUpUrl, signOutFromAuthKit } from '@/lib/workos';

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
  signIn: () => void;
  signUp: () => void;
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
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('workos_user');
      }
    }
    setLoading(false);
  }, []);

  const signIn = () => {
    const signInUrl = getAuthKitSignInUrl();
    window.location.href = signInUrl;
  };

  const signUp = () => {
    const signUpUrl = getAuthKitSignUpUrl();
    window.location.href = signUpUrl;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('workos_user');
    const signOutUrl = signOutFromAuthKit();
    window.location.href = signOutUrl;
  };

  return (
    <WorkOSContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </WorkOSContext.Provider>
  );
};
