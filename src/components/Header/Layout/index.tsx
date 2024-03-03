import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <header className="ly-header-mobile relative md:ly-header-desktop">
            {children}
        </header>
    )
}
export default Layout;