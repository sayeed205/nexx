import { Metadata } from 'next';

const APP_NAME = process.env.APP_NAME || 'Index';

const metadata: Metadata = {
    title: {
        default: APP_NAME,
        template: APP_NAME + ' | %s',
    },
    description: `'${APP_NAME}' One Drive Index`,
};

export default metadata;
