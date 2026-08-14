import React from 'react';
import { Link, useLocation } from 'react-router';
import useTransportContext from '../context/useTransportContext';

// ✅ Route paths - NOT file paths
const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
];

const HeaderOne: React.FC = () => {
    const { setIsSearch, setIsMobileManu } = useTransportContext();
    const location = useLocation();

    return (
        <header className="main-header">
            {/* Top Bar - Contact Info */}
            <div className="main-menu__top">
                <div className="main-menu__top-inner">
                    <ul className="list-unstyled main-menu__contact-list">
                        <li>
                            <div className="icon">
                                <i className="icon-phone-call"></i>
                            </div>
                            <div className="text">
                                <p><a href="tel:+92915260004">+92 91 5260004</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-email"></i>
                            </div>
                            <div className="text">
                                <p><a href="mailto:info@madinapk.com">info@madinapk.com</a></p>
                            </div>
                        </li>
                        <li>
                            <div className="icon">
                                <i className="icon-location1"></i>
                            </div>
                            <div className="text">
                                <p>Pakistan &amp; Thailand</p>
                            </div>
                        </li>
                    </ul>
                    <p className="main-menu__top-welcome-text">Madina International Traders Co., Ltd.</p>
                    <div className="main-menu__top-right">
                        <div className="main-menu__top-time">
                            <div className="main-menu__top-time-icon">
                                <span className="fas fa-clock"></span>
                            </div>
                            <p className="main-menu__top-text">Mon - Fri: 09:00 - 05:00</p>
                        </div>
                        <div className="main-menu__social">
                            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="main-menu__wrapper-inner">
                        {/* Logo */}
                        <div className="main-menu__left">
                            <div className="main-menu__logo">
                                <Link to="/">
                                    <img src="/logo.png" alt="Madina International" style={{ objectFit: 'contain', height: '65px', width: 'auto', display: 'block' }} />
                                </Link>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="main-menu__main-menu-box">
                            <a
                                href="#"
                                className="mobile-nav__toggler"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsMobileManu((pre: boolean) => !pre);
                                }}
                                aria-label="Toggle mobile menu"
                            >
                                <i className="fa fa-bars"></i>
                            </a>
                            <ul className="main-menu__list">
                                {menuItems.map((item) => (
                                    <li
                                        key={item.path}
                                        className={location.pathname === item.path ? 'current' : ''}
                                    >
                                        <Link to={item.path}>{item.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side - Search */}
                        <div className="main-menu__right">
                            {/* Search */}
                            <div className="main-menu__search-cart-box">
                                <div
                                    className="main-menu__search-box"
                                    onClick={() => setIsSearch((pre: boolean) => !pre)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <a
                                        href="#"
                                        className="main-menu__search searcher-toggler-box"
                                        aria-label="Search"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="" style={{ fontSize: '20px', color: 'var(--tanspot-black)' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeaderOne;