export type MSAuthResponse = {
    token_type: string;
    scope: string;
    expires_in: number;
    ext_expires_in: string;
    access_token: string;
    refresh_token: string;
};
