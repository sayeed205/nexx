import { driveApi } from '.';
import { AccountInfo } from '../types';

export const getAccountInfo = async (accessToken: string) => {
    const response = await driveApi.get('/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    return response.data as AccountInfo;
};
