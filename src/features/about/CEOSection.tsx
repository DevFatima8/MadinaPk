import React from 'react';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

const CEOSection: React.FC = () => {
    return (
        <section className="ceo-section" style={{ padding: '80px 0', background: '#f8f9fa' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* CEO Image - Left Side */}
                    <div className="col-xl-5 col-lg-5">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="ceo-image-wrapper" style={{
                                borderRadius: '20px',
                                overflow: 'hidden',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                                height: '100%',
                                minHeight: '500px',
                                background: '#e9ecef',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* Placeholder Image - Direct URL */}
                                <img
                                    src="/CEO.png"
                                    alt="CEO - Madina International"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* CEO Message - Right Side */}
                    <div className="col-xl-7 col-lg-7">
                        <FadeInAdvanced variant={'fadeInRight'} delay={200}>
                            <div className="ceo-message-wrapper" style={{ padding: '20px 0 20px 40px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: '#ecac02',
                                    color: '#fff',
                                    padding: '6px 20px',
                                    borderRadius: '30px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    marginBottom: '20px',
                                    textTransform: 'uppercase'
                                }}>
                                    Founder's Message
                                </div>

                                <h2 style={{
                                    fontSize: '36px',
                                    fontWeight: '700',
                                    color: '#062f3a',
                                    marginBottom: '15px',
                                    lineHeight: '1.2'
                                }}>
                                    Leading with Vision & <br />
                                    <span style={{ color: '#ecac02' }}>Commitment to Excellence</span>
                                </h2>

                                <div style={{
                                    width: '60px',
                                    height: '4px',
                                    background: '#ecac02',
                                    marginBottom: '25px',
                                    borderRadius: '2px'
                                }}></div>

                                <p style={{
                                    fontSize: '18px',
                                    color: '#585b6b',
                                    lineHeight: '1.8',
                                    marginBottom: '20px'
                                }}>
                                    "Madina International Traders Co., Ltd. was founded with a vision to bridge the gap
                                    between international suppliers and buyers. Our journey began with a commitment to
                                    integrity, transparency, and excellence in every transaction we undertake.
                                </p>

                                <p style={{
                                    fontSize: '18px',
                                    color: '#585b6b',
                                    lineHeight: '1.8',
                                    marginBottom: '20px'
                                }}>
                                    Over the years, we have built strong relationships with partners across Pakistan,
                                    Thailand, and global markets. Our success is driven by our dedicated team and the
                                    trust our clients place in us.
                                </p>

                                <p style={{
                                    fontSize: '18px',
                                    color: '#585b6b',
                                    lineHeight: '1.8',
                                    marginBottom: '30px'
                                }}>
                                    We remain committed to providing reliable import-export and trading solutions that
                                    create value for our customers and contribute to global trade development."
                                </p>

                                {/* CEO Signature and Details */}
                                <div>
                                    <h4 style={{
                                        fontSize: '22px',
                                        fontWeight: '700',
                                        color: '#062f3a',
                                        marginBottom: '2px'
                                    }}>
                                        Ayaz Khan Momand
                                    </h4>
                                    <p style={{
                                        fontSize: '16px',
                                        color: '#ecac02',
                                        fontWeight: '500'
                                    }}>
                                        Founder & CEO
                                    </p>
                                    <p style={{
                                        fontSize: '14px',
                                        color: '#585b6b'
                                    }}>
                                        Madina International Traders Co., Ltd.
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

export default CEOSection;