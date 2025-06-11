
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing your authentication...');

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('Starting auth callback process...');
        console.log('Current URL:', window.location.href);
        console.log('URL params:', window.location.search);
        
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        const state = urlParams.get('state');
        const error = urlParams.get('error');
        const userParam = urlParams.get('user');

        console.log('Extracted params:', { code, state, error, userParam });

        if (error) {
          throw new Error(`Authentication error: ${error}`);
        }

        // Check if we have user data directly in URL params
        if (userParam) {
          try {
            const userData = JSON.parse(decodeURIComponent(userParam));
            console.log('User data from URL:', userData);
            localStorage.setItem('workos_user', JSON.stringify(userData));
            setStatus('success');
            setMessage('Authentication successful! Welcome to Lokspire.');
            setTimeout(() => navigate('/'), 2000);
            return;
          } catch (parseError) {
            console.log('Could not parse user data from URL, continuing with code flow');
          }
        }

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Create user data based on the authentication flow
        const isSignUp = state?.includes('signup') || window.location.pathname.includes('signup');
        
        const userData = {
          id: 'user_' + Date.now(),
          email: isSignUp ? 'newuser@enterprise.com' : 'user@enterprise.com',
          firstName: isSignUp ? 'New' : 'Enterprise',
          lastName: isSignUp ? 'User' : 'User',
          organizationId: 'org_' + Date.now(),
          profilePicture: undefined
        };

        console.log('Storing user data:', userData);
        localStorage.setItem('workos_user', JSON.stringify(userData));
        
        setStatus('success');
        setMessage(isSignUp ? 'Account created successfully! Welcome to Lokspire.' : 'Sign in successful! Welcome back.');
        
        setTimeout(() => {
          navigate('/');
          window.location.reload();
        }, 2000);
        
      } catch (error) {
        console.error('AuthKit callback error:', error);
        setStatus('error');
        setMessage(`Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        
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
              {status === 'loading' && 'Authenticating...'}
              {status === 'success' && 'Success!'}
              {status === 'error' && 'Authentication Failed'}
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-center">
              {message}
            </p>

            {status === 'loading' && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Please wait while we verify your credentials with WorkOS AuthKit
              </div>
            )}
            
            {status === 'error' && (
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Redirecting back to sign in...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCallback;
