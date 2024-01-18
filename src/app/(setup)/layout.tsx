import { Metadata } from 'next';

const APP_NAME = process.env.APP_NAME || 'Index';

export const metadata: Metadata = {
    title: 'Setup',
    description: `'${APP_NAME}' One Drive Index Setup`,
};

interface SetupLayoutProps {
    children: React.ReactNode;
}

export default function SkillsLayout({ children }: SetupLayoutProps) {
    return <div className="">{children}</div>;
}
