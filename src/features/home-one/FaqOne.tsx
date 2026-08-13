import { motion } from 'framer-motion'
import FaqOneImg1 from '../../assets/images/resources/faq-one-img-1.jpg';
import TextAnimation from '../../components/elements/TextAnimation';
import CounterUp from '../../components/elements/CounterUp';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import { useState } from 'react';
import { faqDataOne, type FaqItem } from '../../contents/faqs/Faqs';


export default function FaqOne() {
    const [activeFaq, setActiveFaq] = useState<number>(2)
    return (
        <>
            {/*Faq One Start */}
            <section className="faq-one" style={{ background: 'transparent', paddingTop: '500px' }}>
                <div className="faq-one__shape-1"></div>
                <div className="faq-one__shape-2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="faq-one__left">
                                <div className="section-title text-left sec-title-animation animation-style2">
                                    <div className="section-title__tagline-box">
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-1">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                        <h6 className="section-title__tagline">Our Faqs</h6>
                                        <span className="section-title__tagline-border"></span>
                                        <div className="section-title__shape-2">
                                            <i className="fas fa-plane"></i>
                                        </div>
                                    </div>
                                    <h3 className="section-title__title">
                                        <TextAnimation animationStyle="style2">
                                            Frequently Asking <span>Any Question</span>
                                        </TextAnimation>
                                    </h3>
                                </div>
                                <div className="faq-one__img-box">
                                    <div className="faq-one__img">
                                        <img src="/faq.jpg" alt="FAQ" />
                                    </div>
                                    <div className="faq-one__experience-box">
                                        <div className="faq-one__experience-year">
                                            <h2><CounterUp ending={55} /></h2>
                                        </div>
                                        <p className="faq-one__experience-text">Year of <br /> experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="faq-one__right">
                                <div className="accrodion-grp faq-one-accrodion">
                                    {
                                        faqDataOne.map((item: FaqItem) => (
                                            <FadeInAdvanced
                                                key={item.id}
                                                variant={'fadeInRight'}
                                                delay={item?.id * 50}
                                                duration={100}
                                                className={`accrodion ${activeFaq === item.id ? 'active' : ''}`}
                                            >
                                                <div className="accrodion-title" onClick={() => setActiveFaq(item?.id)}>
                                                    <h4>{item?.question}</h4>
                                                </div>
                                                <motion.div
                                                    initial={{ y: -40, opacity: 0 }}
                                                    whileInView={{ y: 0, opacity: 1 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                    viewport={{ amount: 0.05 }}
                                                    className="accrodion-content"
                                                    style={{ display: `${activeFaq === item.id ? 'block' : 'none'}` }}
                                                >
                                                    <div className="inner">
                                                        <p>{item?.answer}</p>
                                                    </div>
                                                </motion.div>
                                            </FadeInAdvanced>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Faq One End */}
        </>
    );
}