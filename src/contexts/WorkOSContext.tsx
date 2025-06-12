
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuthKitSignInUrl, getAuthKitSignUpUrl, signOutFromAuthKit } from '@/lib/workos';

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  organizationId?: string;
  profilePicture?: string;
}

interface WorkOSContextType {
  user: User | null;
  loading: boolean;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
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
    const checkStoredUser = () => {
      try {
        const storedUser = localStorage.getItem('workos_user');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          console.log('Found stored user:', userData);
          setUser(userData);
        }
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('workos_user');
      } finally {
        setLoading(false);
      }
    };

    checkStoredUser();
  }, []);

  const signIn = () => {
    console.log('Redirecting to WorkOS sign-in...');
    setLoading(true);
    const signInUrl = getAuthKitSignInUrl();
    console.log('Sign-in URL:', signInUrl);
    window.location.assign(signInUrl);
  };

  const signUp = () => {
    console.log('Redirecting to WorkOS sign-up...');
    setLoading(true);
    const signUpUrl = getAuthKitSignUpUrl();
    console.log('Sign-up URL:', signUpUrl);
    window.location.assign(signUpUrl);
  };

  const signOut = () => {
    console.log('Signing out user...');
    setUser(null);
    localStorage.removeItem('workos_user');
    const signOutUrl = signOutFromAuthKit();
    console.log('Sign-out URL:', signOutUrl);
    window.location.assign(signOutUrl);
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('workos_user', JSON.stringify(updatedUser));
      console.log('User updated:', updatedUser);
    }
  };

  return (
    <WorkOSContext.Provider value={{ user, loading, signIn, signUp, signOut, updateUser }}>
      {children}
    </WorkOSContext.Provider>
  );
};
