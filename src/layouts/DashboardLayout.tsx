import React, { ReactNode } from 'react';
import NavigationBarDashboard from '../components/NavigationBarDashboard';

interface MainLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            <NavigationBarDashboard />
            <main>{children}</main>
        </>
    );
};

export default DashboardLayout;