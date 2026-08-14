import React from 'react';
import { Link } from 'react-router';
import FadeInAdvanced from '../elements/FadeInAdvanced';

const FooterOne: React.FC = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer__shape-bg"></div>
            <div className="container">
                {/* Newsletter Section */}
                <div className="site-footer__top">
                    <div className="row">
                        <div className="col-xl-12">
                        </div>
                    </div>
                </div>

                {/* Footer Middle - 3 Columns (Legal removed) */}
                <div className="site-footer__middle">
                    <div className="row">
                        {/* Column 1: About */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={'fadeInUp'} delay={100}>
                                <div className="footer-widget__column footer-widget__about">
                                    <div className="footer-widget__logo">
                                        <Link to="/">
                                            <img src="/logo.png" alt="Madina International" width="150" height="100" />
                                        </Link>
                                    </div>
                                    <p className="footer-widget__about-text">
                                        Madina International Traders Co., Ltd. is an international import-export and trading
                                        company serving business customers in Pakistan, Thailand and international markets.
                                    </p>
                                    <div className="site-footer__social">
                                        <Link to="#" aria-label="Facebook"><i className="icon-facebook-app-symbol"></i></Link>
                                        <Link to="#" aria-label="Twitter"><i className="icon-twitter1"></i></Link>
                                        <Link to="#" aria-label="Instagram"><i className="icon-instagram"></i></Link>
                                        <Link to="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>

                        {/* Column 2: Quick Links - Sirf 5 Pages */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={'fadeInUp'} delay={200}>
                                <div className="footer-widget__column footer-widget__usefull-link">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Quick Links</h3>
                                    </div>
                                    <div className="footer-widget__link-box">
                                        <ul className="footer-widget__link list-unstyled">
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About Us</Link></li>
                                            <li><Link to="/products">Products</Link></li>
                                            <li><Link to="/services">Services</Link></li>
                                            <li><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>

                        {/* Column 3: Contact Info (Previously Column 4) */}
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <FadeInAdvanced variant={'fadeInUp'} delay={400}>
                                <div className="footer-widget__contact-box">
                                    <div className="footer-widget__title-box">
                                        <h3 className="footer-widget__title">Contact Info</h3>
                                    </div>
                                    <ul className="footer-widget__contact list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                            <div className="content">
                                                <p><a href="tel:+92915260004">+92 91 5260004</a></p>
                                                <p><a href="tel:+923339188887">+92 333 9188887</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-email"></span>
                                            </div>
                                            <div className="content">
                                                <p><a href="mailto:madina008@yahoo.com">madina008@yahoo.com</a></p>
                                                <p><a href="mailto:info@madinapk.com">info@madinapk.com</a></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-location1"></span>
                                            </div>
                                            <div className="content">
                                                <p>Pakistan &amp; Thailand</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="fab fa-whatsapp" style={{ color: '#25D366' }}></span>
                                            </div>
                                            <div className="content">
                                                <p>
                                                    <a
                                                        href="https://wa.me/923339188887"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: '#25D366', fontWeight: '600' }}
                                                    >
                                                        Chat on WhatsApp
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom - Simplified */}
            <div className="site-footer__bottom">
                <div className="container">
                    <div className="site-footer__bottom-inner">
                        <p className="site-footer__bottom-text">
                            © 1995 <a href="/">Madina International Traders Co., Ltd.</a> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;