'use client';

import { AppProgressBar as NextProgressBar } from 'next-nprogress-bar';

export const ProgressBar = ({ children }: { children: React.ReactNode }) => (
    <>
        {children}
        <NextProgressBar
            color="rgb(156, 163, 175, 0.9)"
            options={{
                showSpinner: false,
                trickleSpeed: 100,
            }}
        />
    </>
);
