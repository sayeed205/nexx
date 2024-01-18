'use client';

import Link from 'next/link';
import { Icons, ThemeToggle } from '@/components';

export const Header = () => {
    return (
        <>
            <header className={`sticky w-screen top-0 z-50 `}>
                <div className="flex items-center justify-between px-10 md:px-44 h-10 transition duration-500 ease-in-out bg-background">
                    <Link href="/" aria-label="home">
                        <Icons.home size={'2em'} />
                    </Link>

                    <ThemeToggle />
                </div>
            </header>
        </>
    );
};
