import React, { ReactNode } from 'react';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
            }}
        >
            <div>
                <AppHeader></AppHeader>
            </div>
            <div>{children}</div>
            <div style={{ marginTop: 'auto', zIndex: 10 }}>
                <AppFooter></AppFooter>
            </div>
        </div>
    );
};

export default AppLayout;
