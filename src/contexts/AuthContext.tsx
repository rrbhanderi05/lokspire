
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Legacy compatibility - redirect to WorkOS AuthKit
  const signInWithGoogle = () => {
    window.location.href = '/auth';
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('workos_user');
    window.location.href = '/';
  };

  useEffect(() => {
    // Check for WorkOS user in localStorage for compatibility
    const storedUser = localStorage.getItem('workos_user');
    if (storedUser) {
      try {
        const workosUser = JSON.parse(storedUser);
        setUser({
          id: workosUser.id,
          email: workosUser.email,
          displayName: workosUser.firstName ? `${workosUser.firstName} ${workosUser.lastName || ''}`.trim() : undefined,
          photoURL: undefined
        });
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('workos_user');
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
