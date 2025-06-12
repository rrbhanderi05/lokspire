
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@clerk/clerk-react';
import { User, Calendar, Mail, Shield } from 'lucide-react';

const UserProfile = () => {
  const { user } = useUser();

  if (!user) {
    return null;
  }

  const getDisplayName = () => {
    return user.fullName || user.emailAddresses[0]?.emailAddress || 'User';
  };

  const getInitials = () => {
    if (user.fullName) {
      return user.fullName.split(' ').map(name => name.charAt(0)).join('').toUpperCase();
    }
    return user.emailAddresses[0]?.emailAddress?.charAt(0).toUpperCase() || 'U';
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
            {user.imageUrl ? (
              <img 
                src={user.imageUrl} 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              getInitials()
            )}
          </div>
        </div>
        <CardTitle className="mt-4">{getDisplayName()}</CardTitle>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Lokspire User
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
            <Mail className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</div>
              <div className="text-gray-900 dark:text-white">
                {user.emailAddresses[0]?.emailAddress}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
            <User className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</div>
              <div className="text-gray-900 dark:text-white">
                {user.fullName || 'Not set'}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
            <Calendar className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Member Since</div>
              <div className="text-gray-900 dark:text-white">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
            <Shield className="w-5 h-5 text-gray-500" />
            <div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">User ID</div>
              <div className="text-gray-900 dark:text-white font-mono text-sm">
                {user.id}
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Manage your account settings and profile information through Clerk's user management system.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
