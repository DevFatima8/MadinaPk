import React from 'react';
import { Link } from 'react-router';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

const FeatureTwo: React.FC = () => {
    return (
        <section className="feature-one">
            <div className="container">
                <div className="row">
                    {/* Machinery */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-truck"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <Link to="/products#machinery">Machinery</Link>
                                    </h3>
                                    <p className="feature-one__text">
                                        Used and new textile machinery, agricultural machinery, industrial and commercial machinery.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Auto Parts & Vehicles */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={300}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-shipment"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <Link to="/products#autoparts">Auto Parts & Vehicles</Link>
                                    </h3>
                                    <p className="feature-one__text">
                                        Used and new auto parts, used vehicles, vehicle and parts sourcing, export and import support.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Textiles */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={500}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-delivery-man"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <Link to="/products#textiles">Textiles</Link>
                                    </h3>
                                    <p className="feature-one__text">
                                        Textile fabrics, second-hand materials, garments, new and used textile equipment.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Electronics */}
                    <div className="col-xl-3 col-lg-6 col-md-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={700}>
                            <div className="feature-one__single">
                                <div className="feature-one__icon">
                                    <span className="icon-global-services"></span>
                                </div>
                                <div className="feature-one__content">
                                    <h3 className="feature-one__title">
                                        <Link to="/products#electronics">Electronics</Link>
                                    </h3>
                                    <p className="feature-one__text">
                                        Commercial electronics, electrical components, new and used electronic products.
                                    </p>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(FeatureTwo);