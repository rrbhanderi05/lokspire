
import { WorkOS } from '@workos-inc/node';

// WorkOS configuration
const WORKOS_API_KEY = '551f10d9be2f79795cc4049f9e92ea539e0d2da6c5d22e6266e04ba4eedcf0cd';
const WORKOS_CLIENT_ID = 'client_01JXBZ26B2FV5HNYCRQ5K08D96';

export const workos = new WorkOS(WORKOS_API_KEY);

export const workosConfig = {
  clientId: WORKOS_CLIENT_ID,
  apiKey: WORKOS_API_KEY,
  authKitUrl: 'https://upright-dragon-18-staging.authkit.app',
};

// Helper function to get AuthKit sign-in URL
export const getAuthKitSignInUrl = (returnTo?: string) => {
  const baseUrl = `${workosConfig.authKitUrl}/sign-in`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    return_to: returnTo || `${window.location.origin}/auth/callback`,
  });
  return `${baseUrl}?${params.toString()}`;
};

// Helper function to get AuthKit sign-up URL
export const getAuthKitSignUpUrl = (returnTo?: string) => {
  const baseUrl = `${workosConfig.authKitUrl}/sign-up`;
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    return_to: returnTo || `${window.location.origin}/auth/callback`,
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
