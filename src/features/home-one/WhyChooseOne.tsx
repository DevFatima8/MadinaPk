import React from 'react';
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import SectionWrapper from '../../components/elements/SectionWrapper';

const WhyChooseOne: React.FC = () => {
    return (
        <SectionWrapper className="why-choose-one" id="why-choose">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="why-choose-one__left" style={{ textAlign: 'center' }}>
                            <div className="section-title text-center sec-title-animation animation-style1">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-1">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                    <h6 className="section-title__tagline">Why Work With Us</h6>
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-2">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                </div>
                                <h3 className="section-title__title">
                                    <TextAnimation animationStyle="style1">
                                        Your Trusted Partner in <br />
                                        <span>Global Trading</span>
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="why-choose-one__text" style={{ maxWidth: '800px', margin: '0 auto 40px' }}>
                                Madina International Traders Co., Ltd. is an international import-export and trading company 
                                serving business customers in Pakistan, Thailand and international markets. We source, supply 
                                and trade used and new machinery, auto parts, textiles, electronics, food products, agricultural 
                                goods, agricultural machinery, used vehicles and other commercially demanded products.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-worldwide-shipping"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">International Sourcing</h3>
                                    <p className="feature-one__text">
                                        We source products from reliable suppliers across global markets with transparent 
                                        communication and competitive pricing.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <FadeInAdvanced variant={'fadeInUp'} delay={200}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-professional-services"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Quality Products</h3>
                                    <p className="feature-one__text">
                                        We supply quality used and new machinery, auto parts, textiles, electronics, 
                                        agricultural goods and other commercial products.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={300}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-24-hours-service"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Buyer-Focused Service</h3>
                                    <p className="feature-one__text">
                                        We provide buyer-focused quotations, product information support, and commercial 
                                        coordination for smooth business transactions.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={400}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-courier-services"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Global Presence</h3>
                                    <p className="feature-one__text">
                                        With business presence in Pakistan and Thailand, we maintain a global network of 
                                        suppliers and buyers across international markets.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <FadeInAdvanced variant={'fadeInUp'} delay={500}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-delivery-man"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Long-Term Partnerships</h3>
                                    <p className="feature-one__text">
                                        We focus on developing reliable international partnerships through clear 
                                        communication and trustworthy business practices.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={600}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-professional-services"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">Flexible Sourcing</h3>
                                    <p className="feature-one__text">
                                        We offer flexible sourcing solutions according to customer requirements, market 
                                        availability and import-export regulations.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WhyChooseOne;