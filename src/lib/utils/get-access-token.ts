import { apiConfig } from '@/config';
import { ODToken } from '@prisma/client';

import prisma from '@/config/db';

import { authApi, decrypt } from '.';
import { MSAuthResponse } from '../types';

const { clientId, encryptedClientSecret, hashKey, redirectUri } = apiConfig;

export const getAccessToken = async (filter: Partial<ODToken>) => {
    let oDToken = await prisma.oDToken.findFirst({
        where: filter,
    });

    if (!oDToken && Object.keys(filter).includes('code') && filter.code)
        return await getTokenFromCode(filter.code);

    if (!oDToken) throw new Error('No token found');

    const expires = new Date(oDToken.expires);
    const now = new Date();
    if (expires < now)
        return await getTokenFromRefreshToken(oDToken.refreshToken);

    console.log('Returning access token from database');
    return oDToken;
};

const getTokenFromCode = async (code: string) => {
    console.log('Trying to get access token from oauth code');
    const clientSecret = decrypt(encryptedClientSecret, hashKey);
    if (!clientSecret) {
        throw new Error('Error decrypting client secret');
    }

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('redirect_uri', redirectUri);
    params.append('client_secret', clientSecret);
    params.append('code', code);
    params.append('grant_type', 'authorization_code');

    const response = await authApi.post('/token', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const data = response.data as MSAuthResponse;
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + data.expires_in);

    return await prisma.oDToken.create({
        data: {
            code,
            tokenType: data.token_type,
            expires,
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
        },
    });
};

const getTokenFromRefreshToken = async (refreshToken: string) => {
    console.log('Trying to get access token from refresh token');
    const clientSecret = decrypt(encryptedClientSecret, hashKey);
    if (!clientSecret) {
        throw new Error('Error decrypting client secret');
    }

    const params = new URLSearchParams();
    params.append('client_id', clientId);
    params.append('client_secret', clientSecret);
    params.append('redirect_uri', redirectUri);
    params.append('refresh_token', refreshToken);
    params.append('grant_type', 'refresh_token');

    const response = await authApi.post('/token', params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    });
    const data = response.data as MSAuthResponse;
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + data.expires_in);

    return await prisma.oDToken.update({
        where: { refreshToken },
        data: {
            tokenType: data.token_type,
            expires,
            accessToken: data.access_token,
            refreshToken: data.refresh_token,
        },
    });
};
