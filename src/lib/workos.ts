
import { WorkOS } from '@workos-inc/node';

// WorkOS configuration
const WORKOS_API_KEY = '551f10d9be2f79795cc4049f9e92ea539e0d2da6c5d22e6266e04ba4eedcf0cd';
const WORKOS_CLIENT_ID = 'client_01JXBZ26B2FV5HNYCRQ5K08D96';

export const workos = new WorkOS(WORKOS_API_KEY);

export const workosConfig = {
  clientId: WORKOS_CLIENT_ID,
  apiKey: WORKOS_API_KEY,
  redirectUri: `${window.location.origin}/auth/callback`,
};

// Helper function to get authorization URL for SSO
export const getAuthorizationUrl = (organizationId?: string, connectionId?: string) => {
  const params = new URLSearchParams({
    client_id: workosConfig.clientId,
    redirect_uri: workosConfig.redirectUri,
    response_type: 'code',
    state: Math.random().toString(36).substring(7),
  });

  if (organizationId) {
    params.append('organization_id', organizationId);
  }

  if (connectionId) {
    params.append('connection_id', connectionId);
  }

  return `https://api.workos.com/sso/authorize?${params.toString()}`;
};
