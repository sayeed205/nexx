export const siteConfig = {
    /**
     * This is what we use to identify who you are when you are initializing the website for the first time.
     * Make sure this is exactly the same as the email you use to login to your OneDrive account.
     */
    userPrincipalName: process.env.USER_PRINCIPAL_NAME,

    /**
     * This is the name of your website. It will be used as the title of your website.
     */
    title: process.env.TITLE || 'Index',

    /**
     * The folder that you are to share publicly with onedrive-cf-index-ng. Use '/' if you want to share your root folder.
     */
    baseDirectory: process.env.BASE_DIRECTORY || '/',

    /**
     * The maximum number of items to show per page. [Default: 100] [WARNING: limited up to 200]
     */
    maxItems: process.env.MAX_ITEMS || 100,

    /**
     * This is a Date Time format string that will be used to show in the app.
     */
    dateTimeFormat: process.env.DATE_TIME_FORMAT || 'YYYY-MM-DD HH:mm:ss',
};
