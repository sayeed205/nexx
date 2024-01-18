'use client';

import { AppProgressBar as NextProgressBar } from 'next-nprogress-bar';

export const ProgressBar = ({ children }: { children: React.ReactNode }) => {
    // then current theme mode using next-themes
    return (
        <>
            {children}
            <NextProgressBar
                color="#4fd1c5"
                options={{
                    showSpinner: false,
                    trickleSpeed: 100,
                }}
            />
        </>
    );
};
