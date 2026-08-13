import React from 'react';
import { Link } from 'react-router';
import AboutTwoImg1 from '../../assets/images/resources/about-two-img-1.jpg';
import AboutTwoImg2 from '../../assets/images/resources/about-two-img-2.jpg';
import AboutTwoShape1 from '../../assets/images/shapes/about-two-shape-1.png';
import AboutTwoShape2 from '../../assets/images/shapes/about-two-shape-2.png';
import AboutTwoShape3 from '../../assets/images/shapes/about-two-shape-3.png';
import AboutTwoShape4 from '../../assets/images/shapes/about-two-shape-4.png';
import AboutOneAuthorImg1 from '../../assets/images/resources/about-one-author-img-1.jpg';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import CounterUp from '../../components/elements/CounterUp';
import TextAnimation from '../../components/elements/TextAnimation';
import useTransportContext from '../../components/context/useTransportContext';
import CirculaProgressOnView from '../../components/elements/CirculaProgressOnView';
import SectionWrapper from '../../components/elements/SectionWrapper';

const AboutTwo: React.FC = () => {
    const { handleVideoClick } = useTransportContext();
    return (
        <SectionWrapper className="about-two" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-two__left">
                            <FadeInAdvanced variant={'slideInLeft'} delay={100} duration={2500}>
                                <div className="about-two__img-box">
                                    <div className="about-two__img">
                                        <img src={AboutTwoImg1} alt="Products" />
                                    </div>
                                    <div className="about-two__img-two">
                                        <img src={AboutTwoImg2} alt="Products" />
                                    </div>
                                    <div className="about-two__counter">
                                        <div className="shape1"><img src={AboutTwoShape1} alt="Shape" /></div>
                                        <div className="count-text-box count-box">
                                            <h2><CounterUp ending={25} duration={1500} /></h2>
                                            <span className="plus">+</span>
                                        </div>
                                        <p>Years Of <br /> Experience</p>
                                    </div>
                                    <div className="about-two__shape-2 float-bob-x">
                                        <img src={AboutTwoShape2} alt="Shape" />
                                    </div>
                                    <div className="about-two__shape-3">
                                        <img src={AboutTwoShape3} alt="Shape" />
                                    </div>
                                    <div className="about-two__shape-4 float-bob-y">
                                        <img src={AboutTwoShape4} alt="Shape" />
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-two__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-1">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                    <h6 className="section-title__tagline">Our Products</h6>
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-2">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                </div>
                                <h3 className="section-title__title">
                                    <TextAnimation animationStyle="style2">
                                        Quality Products Sourced <br />
                                        <span>From Reliable Suppliers</span>
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="about-two__text">
                                Madina International Traders Co., Ltd. sources and supplies used and new machinery, auto parts,
                                textiles, electronics, food products, agricultural goods, agricultural machinery, used vehicles
                                and other commercially demanded products.
                            </p>
                            <div className="about-two__progress-box-outer">
                                <div className="about-two__progress-single">
                                    <div className="about-two__progress-box">
                                        <CirculaProgressOnView endValue={95} size={100} />
                                    </div>
                                    <div className="about-two__progress-content">
                                        <p>Supplier <br /> Network</p>
                                    </div>
                                </div>
                                <div className="about-two__progress-single">
                                    <div className="about-two__progress-box">
                                        <CirculaProgressOnView endValue={97} size={100} />
                                    </div>
                                    <div className="about-two__progress-content">
                                        <p>Quality <br /> Assurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-two__point-box-one">
                                <ul className="about-two__point-one">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>International Sourcing</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Competitive Pricing</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="about-two__point-one about-two__point-one--two">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Quality Products</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Reliable Suppliers</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-two__btn-and-author-box">
                                <div className="about-two__author-box">
                                    <div className="about-two__author-details">
                                        <div className="about-two__author-img-box">
                                            <div className="about-two__author-img">
                                                <img src={AboutOneAuthorImg1} alt="Team" />
                                            </div>
                                        </div>
                                        <div className="about-two__author-content">
                                            <h4>Madina International</h4>
                                            <p>Global Trading</p>
                                        </div>
                                    </div>
                                    <div className="about-two__video-link">
                                        <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=rbFoRH2deeY")}>
                                            <div className="about-two__video-icon">
                                                <span className="fa fa-play"></span>
                                                <i className="ripple"></i>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutTwo;