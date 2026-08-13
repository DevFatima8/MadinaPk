import React from 'react';
import { Link } from 'react-router';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';

const ServicesThree: React.FC = () => {
    return (
        <SectionWrapper className="services-three" id="services">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
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
                        <TextAnimation animationStyle="style1">
                            Comprehensive Import, Export & <br />
                            <span>Trading Services</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {/* Import Services */}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-international-shipping"></span>
                                    </div>
                                    <h3><Link to="/services#import">Import Services</Link></h3>
                                    <p>
                                        We help businesses import products from international suppliers across various
                                        categories including machinery, auto parts, textiles, electronics, and more.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Export Services */}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInUp'} delay={200}>
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-global-services"></span>
                                    </div>
                                    <h3><Link to="/services#export">Export Services</Link></h3>
                                    <p>
                                        We connect exporters with international buyers and assist with the export process
                                        for various products including used and new machinery, auto parts, and vehicles.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Sourcing Services */}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={300}>
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-professional-services"></span>
                                    </div>
                                    <h3><Link to="/services#sourcing">Sourcing Services</Link></h3>
                                    <p>
                                        We source and procure quality products from reliable international suppliers
                                        based on buyer requirements, specifications, and budget considerations.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Trading Services */}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={400}>
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-shipment"></span>
                                    </div>
                                    <h3><Link to="/services#trading">Trading Services</Link></h3>
                                    <p>
                                        We facilitate international trade between buyers and suppliers with transparent
                                        communication and long-term business relationship development.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Commercial Coordination */}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInUp'} delay={500}>
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-quote"></span>
                                    </div>
                                    <h3><Link to="/services#coordination">Commercial Coordination</Link></h3>
                                    <p>
                                        We provide support with product information, quotations, and commercial coordination
                                        to facilitate smooth business transactions.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Global Network */}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={600}>
                            <div className="services-three__single">
                                <div className="services-three__single-inner text-center">
                                    <div className="services-three__single-icon">
                                        <span className="icon-worldwide-shipping"></span>
                                    </div>
                                    <h3><Link to="/services#network">Global Network</Link></h3>
                                    <p>
                                        With presence in Pakistan and Thailand, we maintain a global network of suppliers
                                        and buyers across international markets.
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

export default ServicesThree;