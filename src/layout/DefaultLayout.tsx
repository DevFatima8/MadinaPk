import React from 'react';
import { Outlet } from 'react-router';
import HeaderOne from '../components/headers/HeaderOne';
import FooterOne from '../components/footers/FooterOne';
import SuspenseWrapper from '../components/elements/SuspenseWrapper';

const MainLayout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderOne />
            <SuspenseWrapper>
                <Outlet />
            </SuspenseWrapper>
            <FooterOne />
        </div>
    );
};

export default MainLayout;