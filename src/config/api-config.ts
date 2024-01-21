export const apiConfig = {
    /**
     * clientId is used to authenticate users with Microsoft Graph API using the OAuth flow.
     * You would not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
     */
    clientId: '768bfba2-0660-4edf-aaec-af62e7b8b8ff',

    /**
     * encryptedClientSecret is obfuscated version of clientSecret.
     * You would not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
     */
    encryptedClientSecret:
        'd93414778eb2d531c07a86e831d428e5:a366b3f864b38a21c85c9f83aa85bcacee6eb1ceff73c555a00bed3bd02dfac1b149c73424d70dceebbed83f8ee7a648',

    /**
     * hashKey is used to encrypt and decrypt the clientSecret.
     */
    hashKey: 'OmaeWaMouShindeiru',

    /**
     * redirectUri is used to redirect the user to the app after authentication.
     * You would not need to change anything here if you can authenticate with your personal Microsoft account with OneDrive International.
     */
    redirectUri: 'http://localhost',

    /**
     * scopes are the permissions requested by the app.
     * In most cases, you would not need to change anything here.
     */
    scope: 'offline_access files.read.all user.read',

    // /**
    //  * authApi is the URL to authenticate users with Microsoft Graph API using the OAuth flow.
    //  */
    // authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',

    // /**
    //  * driveApi is the URL to get the drive details of the user.
    //  */
    // driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

    // /**
    //  * tokenApi is the URL to get the access token for the user.
    //  */
    // tokenApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',

    /**
     * Cache-Control header, check Vercel documentation for more details. The default settings imply:
     * - max-age=0: no cache for your browser
     * - s-maxage=0: cache is fresh for 60 seconds on the edge, after which it becomes stale
     * - stale-while-revalidate: allow serving stale content while revalidating on the edge
     * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
     */
    cacheControl: 's-maxage=60, stale-while-revalidate',
};
