import React from 'react';
import { Link, useLocation } from 'react-router';
import useTransportContext from '../context/useTransportContext';
import Logo from "../../assets/images/resources/logo-3.png";
import MobileManuList from './MobileManuList';

const MobileNav: React.FC = () => {
    const { isMobileManu, setIsMobileManu } = useTransportContext();
    const currentPath = useLocation().pathname;
    const isOnePage = currentPath.includes("single-page");

    return (
        <div className={`mobile-nav__wrapper ${isMobileManu ? "expanded" : ""}`}>
            <div
                className="mobile-nav__overlay mobile-nav__toggler"
                onClick={() => setIsMobileManu((pre) => !pre)}
            ></div>

            <div className="mobile-nav__content">
                <span
                    className="mobile-nav__close mobile-nav__toggler"
                    onClick={() => setIsMobileManu((pre) => !pre)}
                >
                    <i className="fa fa-times"></i>
                </span>

                <div className="logo-box">
                    <Link to="/" aria-label="logo image" onClick={() => setIsMobileManu(false)}>
                        <img src="/logo.png" alt="Madina International" width="130" style={{ maxHeight: '60px', objectFit: 'contain' }} />
                    </Link>
                </div>

                <div className="mobile-nav__container">
                    <MobileManuList />
                </div>

                <ul className="mobile-nav__contact list-unstyled">
                    <li>
                        <i className="fa fa-envelope"></i>
                        <a href="mailto:info@madinapk.com">info@madinapk.com</a>
                    </li>
                    <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:+92915260004">+92 91 5260004</a>
                    </li>
                    <li>
                        <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
                        <a href="https://wa.me/923339188887" target="_blank" rel="noopener noreferrer">
                            +92 333 9188887
                        </a>
                    </li>
                </ul>

                <div className="mobile-nav__top">
                    <div className="mobile-nav__social">
                        <a href="#" className="fab fa-twitter"></a>
                        <a href="#" className="fab fa-facebook-square"></a>
                        <a href="#" className="fab fa-linkedin-in"></a>
                        <a href="#" className="fab fa-instagram"></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;