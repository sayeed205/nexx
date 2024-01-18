'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { extractOAuthCode } from '@/lib/utils';

import { Input } from './ui';

export const CodeInput = () => {
    const [authCode, setAuthCode] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);
    const [oAuthRedirectedUrl, setOAuthRedirectedUrl] = useState('');
    const router = useRouter();

    return (
        <>
            <Input
                className={`my-2 w-full flex-1 rounded border bg-gray-50 p-2 font-mono text-sm font-medium focus:outline-none focus:ring dark:bg-gray-800 dark:text-white ${
                    authCode
                        ? 'border-green-500/50 focus:ring-green-500/30 dark:focus:ring-green-500/40'
                        : 'border-red-500/50 focus:ring-red-500/30 dark:focus:ring-red-500/40'
                }`}
                autoFocus
                type="text"
                placeholder="http://localhost/?code=M.R3_BAY.c0..."
                value={oAuthRedirectedUrl}
                onChange={(e) => {
                    setOAuthRedirectedUrl(e.target.value);
                    setAuthCode(extractOAuthCode(e.target.value));
                }}
            />
            <p className="py-1">The authorisation code extracted is:</p>
            <p className="my-2 overflow-hidden truncate rounded border border-gray-400/20 bg-gray-50 p-2 font-mono text-sm opacity-80 dark:bg-gray-800">
                {authCode ?? (
                    <span className="animate-pulse">Waiting for code...</span>
                )}
            </p>

            <p>
                {authCode
                    ? '✅ You can now proceed onto the next step: requesting your access token and refresh token.'
                    : '❌ No valid code extracted.'}
            </p>

            <div className="mb-2 mt-6 text-right">
                <button
                    className="rounded-lg bg-gradient-to-br from-green-500 to-cyan-400 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 disabled:cursor-not-allowed disabled:grayscale dark:focus:ring-green-800"
                    disabled={authCode === ''}
                    onClick={() => {
                        setButtonLoading(true);
                        // router.push({
                        //     pathname: '/onedrive-vercel-index-oauth/step-3',
                        //     query: { authCode },
                        // });
                        router.push('/setup/3?authCode=' + authCode);
                    }}
                >
                    {buttonLoading ? (
                        <>
                            <span>Requesting tokens</span>
                            {/* <LoadingIcon className="ml-1 inline h-4 w-4 animate-spin" /> */}
                        </>
                    ) : (
                        <>
                            <span>Get tokens</span>
                            {/* <FontAwesomeIcon icon="arrow-right" /> */}
                        </>
                    )}
                </button>
            </div>
        </>
    );
};
