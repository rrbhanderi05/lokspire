
// Frontend-only WorkOS AuthKit configuration
const WORKOS_CLIENT_ID = 'client_01JXBZ26B2FV5HNYCRQ5K08D96';
const AUTHKIT_BASE_URL = 'https://upright-dragon-18-staging.authkit.app';

export const workosConfig = {
  clientId: WORKOS_CLIENT_ID,
  authKitUrl: AUTHKIT_BASE_URL,
};

// Helper function to get AuthKit sign-in URL
export const getAuthKitSignInUrl = (returnTo?: string) => {
  const baseUrl = `${workosConfig.authKitUrl}/sign-in`;
  const redirectTo = returnTo || `${window.location.origin}/auth/callback`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    return_to: redirectTo,
  });
  return `${baseUrl}?${params.toString()}`;
};

// Helper function to get AuthKit sign-up URL  
export const getAuthKitSignUpUrl = (returnTo?: string) => {
  const baseUrl = `${workosConfig.authKitUrl}/sign-up`;
  const redirectTo = returnTo || `${window.location.origin}/auth/callback`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    return_to: redirectTo,
  });
  return `${baseUrl}?${params.toString()}`;
};

// Helper function to sign out
export const signOutFromAuthKit = () => {
  const baseUrl = `${workosConfig.authKitUrl}/sign-out`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    return_to: window.location.origin,
  });
  return `${baseUrl}?${params.toString()}`;
};
