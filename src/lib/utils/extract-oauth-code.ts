export const extractOAuthCode = (url: string) => {
    const code = url.match(/code=([^&]*)/);
    if (!code) {
        return '';
    }
    return code[1];
};
