import React from 'react';
import SectionWrapper from '../../components/elements/SectionWrapper';
import TypingEffect from '../../components/elements/TypingEffect';
import CounterUp from '../../components/elements/CounterUp';

const BannerOne: React.FC = () => {
    return (
        <SectionWrapper className="banner-one" id='home'>
            <div className="banner-one__pattern"></div>
            <div className="container">
                <div className="banner-one__inner">
                    <div className="banner-one__content-box">
                        <p className="banner-one__sub-title">International Import, Export and Trading Solutions</p>
                        <h2 className="banner-one__title">
                            Connecting Reliable Products, <br />
                            <TypingEffect strings={["Suppliers", "Buyers", "Partners"]} /> Worldwide
                        </h2>
                        <p className="banner-one__text">
                            Madina International Traders Co., Ltd. connects buyers and suppliers for machinery, auto parts,
                            textiles, electronics, stones & gems, food products, agricultural goods, vehicles and other products.
                        </p>
                        <div className="banner-one__btn-and-review-box">
                            <div className="banner-one__review-box">
                                <ul className="clearfix">
                                    <li>
                                        <div className="img-box">
                                            <img src="/hero1.jpg" alt="Client" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src="/hero2.jpg" alt="Client" />
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src="/hero3.jpg" alt="Client" />
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-box">
                                    <h2>Global Partners</h2>
                                    <p>4.8 (<CounterUp ending={15} />k+ Trusted)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default BannerOne;