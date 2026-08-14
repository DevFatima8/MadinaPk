import React from 'react';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import CounterUp from '../../components/elements/CounterUp';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';

const AboutThree: React.FC = () => {
    return (
        <SectionWrapper className="about-three" id='aboutThree'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-three__left">
                            <FadeInAdvanced variant={'slideInLeft'} delay={100} duration={2500}>
                                <div className="about-three__img-box">
                                    <div className="about-three__img">
                                        <img src="/service2.jpg" alt="Import Export Services" />
                                    </div>
                                    <div className="about-three__img-2">
                                        <img src="/service3.jpg" alt="Global Trade" />
                                    </div>
                                    <div className="about-three__shape-2 float-bob-y">
                                        <img src="/service4.jpg" alt="" />
                                    </div>
                                    <div className="about-three__experience-box">
                                        <div className="about-three__count-box">
                                            <h3><CounterUp ending={25} /></h3>
                                            <span>+</span>
                                        </div>
                                        <p className="about-three__experience-text">Years of Trading Experience</p>
                                    </div>
                                    <div className="about-three__shape-1 float-bob-x"></div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-three__right">
                            <FadeInAdvanced variant={'fadeInRight'} delay={300}>
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-1">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                        <h6 className="section-title__tagline">Our Services</h6>
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-2">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                    </div>
                                    <h3 className="section-title__title">
                                        <TextAnimation animationStyle="style2">
                                            Comprehensive Import & Export <br />
                                            <span>Solutions Worldwide</span>
                                        </TextAnimation>
                                    </h3>
                                </div>
                                <p className="about-three__text">
                                    Madina International Traders Co., Ltd. provides comprehensive import, export and trading
                                    services for businesses in Pakistan, Thailand and international markets. We facilitate
                                    communication between buyers and suppliers for machinery, auto parts, textiles, electronics,
                                    stones & gems, and other commercial products.
                                </p>
                                <div className="about-three__points-box">
                                    <ul className="about-three__points list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-international-shipping"></span>
                                            </div>
                                            <div className="content">
                                                <h4>Import Services</h4>
                                                <p>We help import products from international suppliers</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-global-services"></span>
                                            </div>
                                            <div className="content">
                                                <h4>Export Services</h4>
                                                <p>We connect exporters with international buyers</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="about-three__points-two list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>International sourcing and supplier communication</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Buyer-focused quotations and product information support</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Pakistan and Thailand business presence</p>
                                    </li>
                                </ul>
                            </FadeInAdvanced>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutThree;