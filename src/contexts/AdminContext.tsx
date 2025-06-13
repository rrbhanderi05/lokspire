import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';

interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'super_admin';
  lastLogin: Date;
  permissions: string[];
}

interface AdminContextType {
  isAdmin: boolean;
  adminUser: AdminUser | null;
  loading: boolean;
  checkAdminStatus: () => Promise<boolean>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

// Admin email whitelist - in production, this would be in a secure database
const ADMIN_EMAILS = [
  'admin@lokspire.com',
  'rushikeshpatel05@gmail.com',
  'shravytech@proton.me'
];

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  const checkAdminStatus = async (): Promise<boolean> => {
    if (!user || !isLoaded) {
      setIsAdmin(false);
      setAdminUser(null);
      setLoading(false);
      return false;
    }

    const userEmail = user.emailAddresses[0]?.emailAddress;
    const isAdminUser = ADMIN_EMAILS.includes(userEmail || '');

    if (isAdminUser) {
      const adminUserData: AdminUser = {
        id: user.id,
        email: userEmail || '',
        role: userEmail === 'admin@lokspire.com' ? 'super_admin' : 'admin',
        lastLogin: new Date(),
        permissions: ['read', 'write', 'delete', 'moderate']
      };
      
      setAdminUser(adminUserData);
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
      setAdminUser(null);
    }

    setLoading(false);
    return isAdminUser;
  };

  useEffect(() => {
    checkAdminStatus();
  }, [user, isLoaded]);

  return (
    <AdminContext.Provider value={{ isAdmin, adminUser, loading, checkAdminStatus }}>
      {children}
    </AdminContext.Provider>
  );
};