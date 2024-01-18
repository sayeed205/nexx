import { apiConfig } from '@/config';

export const genAuthUrl = () => {
    const { authApi, clientId, redirectUri, scope } = apiConfig;

    // Construct URL parameters for OAuth2
    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('redirect_uri', redirectUri!);
    params.append('response_type', 'code');
    params.append('scope', scope!);
    params.append('response_mode', 'query');

    return `${authApi}?${params.toString()}`;
};
