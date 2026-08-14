import React from 'react';

const ContactMap: React.FC = () => {
    return (
        <section className="contact-page">
            <div className="container">
                <div className="contact-page__inner">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="contact-page__left">
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#062f3a' }}>
                                    Pakistan Office Location
                                </h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479836.31427181!2d60.8734262!3d30.375321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sPakistan!5e0!3m2!1sen!2s!4v1700000000000"
                                    className="google-map__one"
                                    style={{ border: 'none', height: '523px', width: '100%', borderRadius: '20px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Pakistan Office Location"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-page__left">
                                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#062f3a' }}>
                                    Thailand Office Location
                                </h3>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.724729183893!2d100.6059263!3d13.7304518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f0d2e5f8b7d%3A0x8f8f8f8f8f8f8f8f!2sSamut%20Prakan%2C%20Thailand!5e0!3m2!1sen!2s!4v1700000000000"
                                    className="google-map__one"
                                    style={{ border: 'none', height: '523px', width: '100%', borderRadius: '20px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    title="Thailand Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMap;