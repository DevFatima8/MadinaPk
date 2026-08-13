import React from 'react';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

const ContactInfo: React.FC = () => {
    // WhatsApp click handler
    const handleWhatsAppClick = (phone: string, message?: string) => {
        const encodedMessage = message ? encodeURIComponent(message) : '';
        const url = `https://wa.me/${phone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
        window.open(url, '_blank');
    };

    return (
        <section className="contact-info">
            <div className="container">
                <div className="row">
                    {/* Pakistan Office */}
                    <div className="col-xl-3 col-lg-6">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location1"></span>
                                </div>
                                <p>Pakistan Office</p>
                                <h5 style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    Office, 2nd Floor, Rasheed Building<br />
                                    1091 Saddar Road, Opposite Cantt G.P.O.<br />
                                    Peshawar, Khyber Pakhtunkhwa, Pakistan
                                </h5>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Thailand Office */}
                    <div className="col-xl-3 col-lg-6">
                        <FadeInAdvanced variant={'fadeInUp'} delay={200}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-location1"></span>
                                </div>
                                <p>Thailand Office</p>
                                <h5 style={{ fontSize: '14px', lineHeight: '1.6' }}>
                                    2 Bang Na--Bang Phli--Trat<br />
                                    Samut Prakan, Thailand
                                </h5>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Phone & WhatsApp Pakistan */}
                    <div className="col-xl-3 col-lg-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={300}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-phone-call"></span>
                                </div>
                                <p>Call / WhatsApp Pakistan</p>
                                <h5>
                                    <a href="tel:+92915260004">+92 91 5260004</a>
                                </h5>
                                <h5>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleWhatsAppClick('923339188887', 'Hello! I would like to inquire about your products and services.');
                                        }}
                                        style={{ color: '#25D366', fontWeight: '600' }}
                                    >
                                        <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                                        +92 333 9188887
                                    </a>
                                </h5>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Phone & WhatsApp Thailand */}
                    <div className="col-xl-3 col-lg-6">
                        <FadeInAdvanced variant={'fadeInRight'} delay={400}>
                            <div className="contact-info__single">
                                <div className="contact-info__icon">
                                    <span className="icon-phone-call"></span>
                                </div>
                                <p>Call / WhatsApp Thailand</p>
                                <h5>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleWhatsAppClick('66835140234', 'Hello! I would like to inquire about your products and services.');
                                        }}
                                        style={{ color: '#25D366', fontWeight: '600' }}
                                    >
                                        <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                                        +66 83 514 0234
                                    </a>
                                </h5>
                                <h5>
                                    <a href="tel:+66835140234">+66 83 514 0234</a>
                                </h5>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;