import { Nunito } from 'next/font/google';
import {
    Analytics,
    ProgressBar,
    TailwindIndicator,
    ThemeProvider,
} from '@/components';

import { Header, Toaster } from '@/components/ui';

import './globals.css';

import { cn } from '@/lib/utils';

import metadata from './metadata';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'h-screen max-h-screen min-h-screen bg-background antialiased',
                    nunito.className,
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <ProgressBar>
                        <Header />
                        {children}
                    </ProgressBar>
                    <Analytics />
                    <Toaster />
                    <TailwindIndicator />
                </ThemeProvider>
            </body>
        </html>
    );
}

export { metadata };
