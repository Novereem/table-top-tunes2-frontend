import React, { ReactNode } from 'react';
import NavigationBar from '../components/NavigationBar';

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <main>{children}</main>
        </>
    );
};

export default MainLayout;