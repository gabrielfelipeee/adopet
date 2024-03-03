import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <header className="ly-header-mobile sticky top-0 md:ly-header-desktop">
            {children}
        </header>
    )
}
export default Layout;
