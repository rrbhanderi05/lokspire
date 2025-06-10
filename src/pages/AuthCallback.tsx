
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing your login...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');

        if (!code) {
          throw new Error('No authorization code received');
        }

        // In a real app, you'd send this to your backend to exchange for user info
        // For now, we'll simulate a successful login
        console.log('Authorization code:', code);
        console.log('State:', state);

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Mock user data - in production, this would come from WorkOS
        const mockUser = {
          id: 'user_123',
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'Doe',
          organizationId: 'org_123'
        };

        localStorage.setItem('workos_user', JSON.stringify(mockUser));
        
        setStatus('success');
        setMessage('Login successful! Redirecting...');
        
        setTimeout(() => {
          navigate('/');
        }, 1500);
        
      } catch (error) {
        console.error('Auth callback error:', error);
        setStatus('error');
        setMessage('Login failed. Please try again.');
        
        setTimeout(() => {
          navigate('/auth');
        }, 3000);
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <img 
          src="https://raw.githubusercontent.com/rrbhanderi05/FileHosting/refs/heads/main/Lokspire.png" 
          alt="Lokspire" 
          className="h-12 mx-auto"
        />
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl max-w-md mx-auto">
          <div className="flex flex-col items-center space-y-4">
            {status === 'loading' && (
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            )}
            {status === 'success' && (
              <CheckCircle className="w-12 h-12 text-green-600" />
            )}
            {status === 'error' && (
              <XCircle className="w-12 h-12 text-red-600" />
            )}
            
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {status === 'loading' && 'Signing you in...'}
              {status === 'success' && 'Welcome back!'}
              {status === 'error' && 'Oops!'}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
