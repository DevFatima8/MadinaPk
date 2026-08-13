import React from 'react';
import WhyChooseTwoImg1 from '../../assets/images/resources/why-choose-two-img-1.png';
import WhyChooseTwoReviewImg11 from '../../assets/images/resources/why-choose-two-review-img-1-1.jpg';
import WhyChooseTwoReviewImg12 from '../../assets/images/resources/why-choose-two-review-img-1-2.jpg';
import WhyChooseTwoReviewImg13 from '../../assets/images/resources/why-choose-two-review-img-1-3.jpg';
import WhyChooseTwoReviewImg14 from '../../assets/images/resources/why-choose-two-review-img-1-4.jpg';
import CounterUp from '../../components/elements/CounterUp';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';

const WhyChooseTwo: React.FC = () => {
    return (
        <section className="why-choose-two">
            <div className="why-choose-two__pattern"></div>
            <div className="why-choose-two__bg-box">
                <div className="why-choose-two__shape-bg"></div>
            </div>
            <FadeInAdvanced className='why-choose-two__img'>
                <img src={WhyChooseTwoImg1} alt="Products" />
            </FadeInAdvanced>
            <div className="why-choose-two__client-box">
                <ul className="why-choose-two__review-list">
                    <li>
                        <div className="why-choose-two__review-img">
                            <img src={WhyChooseTwoReviewImg11} alt="Client" />
                        </div>
                    </li>
                    <li>
                        <div className="why-choose-two__review-img">
                            <img src={WhyChooseTwoReviewImg12} alt="Client" />
                        </div>
                    </li>
                    <li>
                        <div className="why-choose-two__review-img">
                            <img src={WhyChooseTwoReviewImg13} alt="Client" />
                        </div>
                    </li>
                    <li>
                        <div className="why-choose-two__review-img">
                            <img src={WhyChooseTwoReviewImg14} alt="Client" />
                        </div>
                    </li>
                </ul>
                <div className="why-choose-two__client-content">
                    <div className="why-choose-two__client-count">
                        <h3><CounterUp ending={2500} /></h3>
                        <span>+</span>
                    </div>
                    <p className="why-choose-two__client-text">Happy Clients</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8">
                        <div className="why-choose-two__left">
                            <div className="why-choose-two__title-box">
                                <div className="section-title text-left sec-title-animation animation-style1">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-1">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                        <h6 className="section-title__tagline">Why Choose Our Products</h6>
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-2">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                    </div>
                                    <h3 className="section-title__title">
                                        <TextAnimation animationStyle="style1">
                                            Quality Products from <br />
                                            <span>Reliable Suppliers Worldwide</span>
                                        </TextAnimation>
                                    </h3>
                                </div>
                                <p className="why-choose-two__text">
                                    Madina International Traders Co., Ltd. sources and supplies products from reliable
                                    international suppliers. We focus on quality, competitive pricing, and transparent
                                    communication to ensure the best outcomes for our business partners.
                                </p>
                            </div>
                            <div className="why-choose-two__point-box">
                                <ul className="why-choose-two__point">
                                    <li>
                                        <div className="why-choose-two__icon">
                                            <span className="icon-international-shipping"></span>
                                        </div>
                                        <div className="why-choose-two__content">
                                            <h4>International <br /> Sourcing</h4>
                                            <p>We source products from reliable suppliers across global markets</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="why-choose-two__icon">
                                            <span className="icon-professional-services"></span>
                                        </div>
                                        <div className="why-choose-two__content">
                                            <h4>Quality <br /> Assurance</h4>
                                            <p>Products are verified and inspected to meet buyer specifications</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="why-choose-two__point why-choose-two__point--two">
                                    <li>
                                        <div className="why-choose-two__icon">
                                            <span className="icon-protection"></span>
                                        </div>
                                        <div className="why-choose-two__content">
                                            <h4>Competitive <br /> Pricing</h4>
                                            <p>We offer competitive pricing through direct supplier relationships</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="why-choose-two__icon">
                                            <span className="icon-tracking"></span>
                                        </div>
                                        <div className="why-choose-two__content">
                                            <h4>Flexible <br /> Sourcing</h4>
                                            <p>Flexible sourcing solutions according to customer requirements</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseTwo;