import React from 'react';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import FeatureTwoShape1 from '../../assets/images/shapes/feature-two-shape-1.png';
import { Link } from 'react-router';
import SectionWrapper from '../../components/elements/SectionWrapper';

const FeatureThree: React.FC = () => {
    return (
        <SectionWrapper className="feature-two" id='services'>
            <div className="container">
                <div className="row">
                    {/* Import Services */}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="feature-two__single">
                                <div className="feature-two__single-inner">
                                    <div className="feature-two__shape-1">
                                        <img src={FeatureTwoShape1} alt="" />
                                    </div>
                                    <div className="feature-two__icon-and-title">
                                        <div className="feature-two__icon">
                                            <span className="icon-international-shipping"></span>
                                        </div>
                                        <h3 className="feature-two__title">
                                            <Link to="/services#import">Import Services</Link>
                                        </h3>
                                    </div>
                                    <p className="feature-two__text">
                                        We help businesses import products from international suppliers with complete
                                        commercial coordination and support.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Export Services */}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced variant={'fadeInUp'} delay={200}>
                            <div className="feature-two__single">
                                <div className="feature-two__single-inner">
                                    <div className="feature-two__shape-1">
                                        <img src={FeatureTwoShape1} alt="" />
                                    </div>
                                    <div className="feature-two__icon-and-title">
                                        <div className="feature-two__icon">
                                            <span className="icon-global-services"></span>
                                        </div>
                                        <h3 className="feature-two__title">
                                            <Link to="/services#export">Export Services</Link>
                                        </h3>
                                    </div>
                                    <p className="feature-two__text">
                                        We assist exporters in connecting with international buyers and managing
                                        the export process efficiently.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Sourcing Services */}
                    <div className="col-xl-4 col-lg-4">
                        <FadeInAdvanced variant={'fadeInRight'} delay={300}>
                            <div className="feature-two__single">
                                <div className="feature-two__single-inner">
                                    <div className="feature-two__shape-1">
                                        <img src={FeatureTwoShape1} alt="" />
                                    </div>
                                    <div className="feature-two__icon-and-title">
                                        <div className="feature-two__icon">
                                            <span className="icon-professional-services"></span>
                                        </div>
                                        <h3 className="feature-two__title">
                                            <Link to="/services#sourcing">Sourcing Services</Link>
                                        </h3>
                                    </div>
                                    <p className="feature-two__text">
                                        We source and procure products from reliable international suppliers according
                                        to buyer requirements.
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

export default FeatureThree;