import axios from 'axios';

export const authApiBaseURL =
    'https://login.microsoftonline.com/common/oauth2/v2.0';
export const graphApiBaseURL = 'https://graph.microsoft.com/v1.0';

export const driveApi = axios.create({
    baseURL: graphApiBaseURL,
});

export const authApi = axios.create({
    baseURL: authApiBaseURL,
});
