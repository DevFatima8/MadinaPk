import React from 'react';
import { Link, useLocation } from 'react-router';
import useTransportContext from '../context/useTransportContext';

const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
];

const MobileManuList: React.FC = () => {
    const { setIsMobileManu } = useTransportContext();
    const location = useLocation();

    const closeMenu = () => {
        setIsMobileManu(false);
    };

    return (
        <ul className="main-menu__list mobileManulist">
            {menuItems.map((item) => (
                <li
                    key={item.path}
                    className={location.pathname === item.path ? 'current' : ''}
                    onClick={closeMenu}
                >
                    <Link to={item.path}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );
};

export default MobileManuList;