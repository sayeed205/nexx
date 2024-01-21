import Link from 'next/link';
import { apiConfig } from '@/config';

import { Button } from '@/components/ui';

export default function SetupPage() {
    const configData = [
        {
            name: 'CLIENT_ID',
            value: apiConfig.clientId,
        },
        {
            name: 'CLIENT_SECRET',
            value: apiConfig.encryptedClientSecret,
        },
        {
            name: 'REDIRECT_URI',
            value: process.env.REDIRECT_URI,
        },
        {
            name: 'API Scope',
            value: apiConfig.scope,
        },
    ];

    return (
        <main className="flex flex-col items-center justify-center px-20 text-center">
            <h1 className="text-3xl font-bold">Preparation</h1>
            <p className="text-sm mx-5">
                Authorization is required to access your OneDrive{' '}
                <code className="font-mono underline decoration-red-600 decoration-wavy">
                    access_token
                </code>{' '}
                or{' '}
                <code className="font-mono text-sm underline decoration-green-600 decoration-wavy">
                    refresh_token
                </code>{' '}
                is missing or invalid.
            </p>

            <p className="mt-3 text-xl">
                Make sure you have the following configurations before
                proceeding with authorizing Nexx with your OneDrive account.
            </p>
            {/** todo)) add proper sub header */}
            <div className="flex flex-col items-center justify-around max-w-7xl m-6">
                {configData.map(({ name, value }) => (
                    <div
                        key={name}
                        className="p-6 mt-6 text-left border w-96 md:w-[calc(100%-400px)] lg:w-[calc(100%-200px)] xl:w-full rounded-xl hover:text-primary focus:text-primary"
                    >
                        <h3 className="text-2xl font-bold">{name} &rarr;</h3>
                        <p className="mt-4 text-xl">
                            <code className="font-mono text-sm text-wrap">
                                {value}
                            </code>
                        </p>
                    </div>
                ))}
            </div>

            <Link href="/oauth">
                <Button size="lg" className="m-6">
                    Authorize &rarr;
                </Button>
            </Link>
        </main>
    );
}
