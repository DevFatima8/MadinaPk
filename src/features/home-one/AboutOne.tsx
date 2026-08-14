import React from 'react';
import { Link } from 'react-router';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';
import CounterUp from '../../components/elements/CounterUp';
import AboutOneAuthorSign from '../../assets/images/resources/about-one-author-sign.png';
import useTransportContext from '../../components/context/useTransportContext';

const AboutOne: React.FC = () => {
    const { handleVideoClick } = useTransportContext();

    return (
        <SectionWrapper className="about-one" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-one__left">
                            <FadeInAdvanced variant={'slideInLeft'} delay={100} duration={2500}>
                                <div className="about-one__img-box">
                                    <div className="about-one__img">
                                        <img src="/abouthero.jpg" alt="Madina International" />
                                    </div>
                                    <div className="about-one__review-and-experience-box">
                                        <div className="about-one__review-box">
                                            <ul className="list-unstyled about-one__review-list">
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src="/hero1.jpg" alt="Client" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src="/hero2.jpg" alt="Client" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src="/hero3.jpg" alt="Client" />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="about-one__review-img">
                                                        <img src="/hero4.jpg" alt="Client" />
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="about-one__review-star">
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                                <span className="fas fa-star"></span>
                                            </div>
                                            <p className="about-one__review-text">Global Partners 4.8 (3,567 Reviews)</p>
                                        </div>
                                        <div className="about-one__experience-box">
                                            <div className="about-one__experience-count">
                                                <h3><CounterUp ending={25} /></h3>
                                                <span>+</span>
                                            </div>
                                            <p className="about-one__experience-count-text">Years Of <br /> Experience</p>
                                        </div>
                                    </div>
                                    <div className="about-one__circle-text">
                                        <div className="about-one__round-text-box">
                                            <div className="inner">
                                                <div className="about-one__curved-circle rotate-me">
                                                    {"MADINA INTERNATIONAL TRADERS CO. LTD. GLOBAL TRADING SINCE 2002".split("").map((char, index) => (
                                                        <span key={index}
                                                            style={{
                                                                transform: `rotate(${index * 8.5}deg)`,
                                                                position: 'absolute',
                                                                transformOrigin: "center 7.33333em",
                                                                left: '50%',
                                                                marginLeft: "-0.4em"
                                                            }}>
                                                            {char}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="overlay-icon-box">
                                                <Link to="/about"><i className="icon-plane"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-one__right">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-1">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                    <h6 className="section-title__tagline">About Our Company</h6>
                                    <span className="section-title__tagline-border"></span>
                                    <div className="section-title__shape-2">
                                        <i className="fas fa-plane"></i>
                                    </div>
                                </div>
                                <h3 className="section-title__title">
                                    <TextAnimation animationStyle="style2">
                                        Connecting Reliable Products, <br />
                                        Suppliers and <span>Buyers Worldwide</span>
                                    </TextAnimation>
                                </h3>
                            </div>
                            <p className="about-one__text">
                                Madina International Traders Co., Ltd. is an international import-export and trading company
                                serving business customers in Pakistan, Thailand and international markets. We source, supply
                                and trade used and new machinery, auto parts, textiles, electronics, stones & gems, food products, agricultural
                                goods, agricultural machinery, used vehicles and other commercially demanded products.
                            </p>
                            <p className="about-one__text" style={{ marginTop: '15px' }}>
                                Our focus is to connect reliable suppliers and buyers through transparent communication,
                                competitive sourcing, practical logistics support and long-term business relationships.
                            </p>
                            <div className="about-one__point-box">
                                <ul className="about-one__point">
                                    <li>
                                        <div className="about-one__point-icon">
                                            <span className="icon-worldwide-shipping-1"></span>
                                        </div>
                                        <div className="about-one__point-content">
                                            <h4>International Sourcing</h4>
                                            <p>We source products from reliable suppliers across global markets</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="about-one__point-icon">
                                            <span className="icon-professional-services"></span>
                                        </div>
                                        <div className="about-one__point-content">
                                            <h4>Transparent Communication</h4>
                                            <p>Clear and honest communication with all business partners</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-one__point-box-two">
                                <ul className="about-one__point-two">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Pakistan and Thailand business presence</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Long-term trading relationships</p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="about-one__point-two about-one__point-two--three">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>Flexible sourcing according to customer requirements</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <div className="text">
                                            <p>New and used product procurement</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-one__btn-and-author-box">
                                <div className="about-one__author-box">
                                    <div className="about-one__author-details">
                                        <div className="about-one__author-img-box">
                                            <div className="about-one__author-img">
                                                <img src="/madinapk.jpeg" alt="Team" />
                                            </div>
                                        </div>
                                        <div className="about-one__author-content">
                                            <h4>Madina International</h4>
                                            <p>Global Trading</p>
                                        </div>
                                    </div>
                                    <div className="about-one__author-sign">
                                        <img src={AboutOneAuthorSign} alt="Signature" />
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

export default AboutOne;