import { metadata } from './metadata';

interface SetupLayoutProps {
    children: React.ReactNode;
}

export default function SkillsLayout({ children }: SetupLayoutProps) {
    return <div className="">{children}</div>;
}

export { metadata };
