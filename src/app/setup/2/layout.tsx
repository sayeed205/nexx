interface SetupLayoutProps {
    children: React.ReactNode;
}

export const metadata = {
    title: 'Setup - 2',
    description: 'Setting up One Drive oauth',
};

export default function SkillsLayout({ children }: SetupLayoutProps) {
    return <>{children}</>;
}
