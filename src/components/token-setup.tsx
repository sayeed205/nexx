'use client';

import { useState } from 'react';

import { extractOAuthCode } from '@/lib/utils';
import { Button, Input, toast } from '@/components/ui';

export const TokenSetup = () => {
    const [authCode, setAuthCode] = useState('');
    const [redirectedURL, setRedirectedURL] = useState('');

    const verifyToken = async () => {
        const res = await fetch('/api/oauth/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code: authCode }),
        });

        const data = await res.json();

        if (!data.success) {
            return toast({
                title: 'Error',
                description: data.error,
                variant: 'destructive',
            });
        }

        return toast({
            title: 'Success',
            description: data.msg,
        });
    };

    return (
        <div className="flex m-4">
            <form action=""></form>
            <Input
                placeholder="http://localhost/?code=M.R3_BAY.c0..."
                type="text"
                value={redirectedURL}
                onChange={(e) => {
                    setRedirectedURL(e.target.value);
                    setAuthCode(extractOAuthCode(e.target.value));
                }}
            />
            <Button onClick={verifyToken}>Verify token</Button>
        </div>
    );
};
