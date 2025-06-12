
// Frontend-only WorkOS AuthKit configuration
const WORKOS_CLIENT_ID = 'client_01JXBZ26B2FV5HNYCRQ5K08D96';
const AUTHKIT_BASE_URL = 'https://upright-dragon-18-staging.authkit.app';

export const workosConfig = {
  clientId: WORKOS_CLIENT_ID,
  authKitUrl: AUTHKIT_BASE_URL,
};

// Helper function to get AuthKit sign-in URL
export const getAuthKitSignInUrl = (returnTo?: string) => {
  const redirectTo = returnTo || `${window.location.origin}/auth/callback`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    redirect_uri: redirectTo,
    response_type: 'code',
    state: 'signin'
  });
  return `${workosConfig.authKitUrl}/sso/authorize?${params.toString()}`;
};

// Helper function to get AuthKit sign-up URL  
export const getAuthKitSignUpUrl = (returnTo?: string) => {
  const redirectTo = returnTo || `${window.location.origin}/auth/callback`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    redirect_uri: redirectTo,
    response_type: 'code',
    state: 'signup'
  });
  return `${workosConfig.authKitUrl}/sso/authorize?${params.toString()}`;
};

// Helper function to sign out
export const signOutFromAuthKit = () => {
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    redirect_uri: window.location.origin,
  });
  return `${workosConfig.authKitUrl}/sso/logout?${params.toString()}`;
};
