import React, { useState } from 'react';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
        type: null,
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const response = await fetch('https://formspree.io/f/xqpzbjol', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully. We will contact you shortly.'
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                const errorData = await response.json();
                setSubmitStatus({
                    type: 'error',
                    message: errorData.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsAppClick = (phone: string, message?: string) => {
        const encodedMessage = message ? encodeURIComponent(message) : '';
        const url = `https://wa.me/${phone}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
        window.open(url, '_blank');
    };

    return (
        <section className="contact-page" style={{ padding: '80px 0' }}>
            <div className="container">
                <div className="row g-4">
                    {/* Form Column */}
                    <div className="col-xl-7 col-lg-7">
                        <FadeInAdvanced variant={'fadeInLeft'} delay={100}>
                            <div className="contact-page__form-wrapper" style={{
                                background: '#ffffff',
                                padding: '50px 45px',
                                borderRadius: '20px',
                                boxShadow: '0 10px 60px rgba(0,0,0,0.06)',
                                height: '100%'
                            }}>
                                <h3 className="contact-page__form-title" style={{
                                    fontSize: '28px',
                                    fontWeight: '700',
                                    color: '#062f3a',
                                    marginBottom: '10px'
                                }}>
                                    Send Us a Message
                                </h3>
                                <p style={{
                                    marginBottom: '30px',
                                    color: '#585b6b',
                                    fontSize: '15px',
                                    lineHeight: '1.6'
                                }}>
                                    Fill out the form below and our team will respond to your inquiry as soon as possible.
                                </p>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Full Name *"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '15px 20px',
                                                        border: '1px solid #e8e8e8',
                                                        borderRadius: '10px',
                                                        fontSize: '14px',
                                                        transition: 'all 0.3s ease',
                                                        background: '#f8f9fa',
                                                        color: '#062f3a'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.currentTarget.style.borderColor = '#fdc603';
                                                        e.currentTarget.style.background = '#ffffff';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.currentTarget.style.borderColor = '#e8e8e8';
                                                        e.currentTarget.style.background = '#f8f9fa';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address *"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '15px 20px',
                                                        border: '1px solid #e8e8e8',
                                                        borderRadius: '10px',
                                                        fontSize: '14px',
                                                        transition: 'all 0.3s ease',
                                                        background: '#f8f9fa',
                                                        color: '#062f3a'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.currentTarget.style.borderColor = '#fdc603';
                                                        e.currentTarget.style.background = '#ffffff';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.currentTarget.style.borderColor = '#e8e8e8';
                                                        e.currentTarget.style.background = '#f8f9fa';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    style={{
                                                        width: '100%',
                                                        padding: '15px 20px',
                                                        border: '1px solid #e8e8e8',
                                                        borderRadius: '10px',
                                                        fontSize: '14px',
                                                        transition: 'all 0.3s ease',
                                                        background: '#f8f9fa',
                                                        color: '#062f3a'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.currentTarget.style.borderColor = '#fdc603';
                                                        e.currentTarget.style.background = '#ffffff';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.currentTarget.style.borderColor = '#e8e8e8';
                                                        e.currentTarget.style.background = '#f8f9fa';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6">
                                            <div className="contact-page__input-box">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    style={{
                                                        width: '100%',
                                                        padding: '15px 20px',
                                                        border: '1px solid #e8e8e8',
                                                        borderRadius: '10px',
                                                        fontSize: '14px',
                                                        transition: 'all 0.3s ease',
                                                        background: '#f8f9fa',
                                                        color: '#062f3a'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.currentTarget.style.borderColor = '#fdc603';
                                                        e.currentTarget.style.background = '#ffffff';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.currentTarget.style.borderColor = '#e8e8e8';
                                                        e.currentTarget.style.background = '#f8f9fa';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div className="contact-page__input-box">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message *"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    style={{
                                                        width: '100%',
                                                        padding: '15px 20px',
                                                        border: '1px solid #e8e8e8',
                                                        borderRadius: '10px',
                                                        fontSize: '14px',
                                                        resize: 'vertical',
                                                        transition: 'all 0.3s ease',
                                                        background: '#f8f9fa',
                                                        color: '#062f3a',
                                                        minHeight: '120px'
                                                    }}
                                                    onFocus={(e) => {
                                                        e.currentTarget.style.borderColor = '#fdc603';
                                                        e.currentTarget.style.background = '#ffffff';
                                                    }}
                                                    onBlur={(e) => {
                                                        e.currentTarget.style.borderColor = '#e8e8e8';
                                                        e.currentTarget.style.background = '#f8f9fa';
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                                <button
                                                    type="submit"
                                                    className="thm-btn"
                                                    disabled={isSubmitting}
                                                    style={{
                                                        padding: '15px 35px',
                                                        background: '#fdc603',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '10px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '10px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#e6b202';
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(253, 198, 3, 0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = '#fdc603';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    <span><i className="icon-right-arrow"></i></span>
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => handleWhatsAppClick(
                                                        '923339188887',
                                                        `Hello! My name is ${formData.name || 'Customer'}.\nI would like to inquire about your products and services.\n\nSubject: ${formData.subject || 'General Inquiry'}\n${formData.message ? `\nMessage: ${formData.message}` : ''}`
                                                    )}
                                                    style={{
                                                        padding: '15px 30px',
                                                        background: '#25D366',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '10px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#1da851';
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = '#25D366';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <i className="fab fa-whatsapp"></i>
                                                    WhatsApp PK
                                                    <span><i className="icon-right-arrow"></i></span>
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => handleWhatsAppClick(
                                                        '66835140234',
                                                        `Hello! My name is ${formData.name || 'Customer'}.\nI would like to inquire about your products and services.\n\nSubject: ${formData.subject || 'General Inquiry'}\n${formData.message ? `\nMessage: ${formData.message}` : ''}`
                                                    )}
                                                    style={{
                                                        padding: '15px 30px',
                                                        background: '#25D366',
                                                        color: '#fff',
                                                        border: 'none',
                                                        borderRadius: '10px',
                                                        fontSize: '15px',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        transition: 'all 0.3s ease',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '8px'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = '#1da851';
                                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.3)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = '#25D366';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    <i className="fab fa-whatsapp"></i>
                                                    WhatsApp TH
                                                    <span><i className="icon-right-arrow"></i></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {submitStatus.type && (
                                        <div style={{
                                            marginTop: '25px',
                                            padding: '15px 20px',
                                            borderRadius: '10px',
                                            background: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                                            color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                                            border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                                        }}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                </form>
                            </div>
                        </FadeInAdvanced>
                    </div>

                    {/* Contact Info Column - Same as before */}
                    <div className="col-xl-5 col-lg-5">
                        <FadeInAdvanced variant={'fadeInRight'} delay={200}>
                            <div style={{
                                background: '#f4f5f9',
                                padding: '50px 40px',
                                borderRadius: '20px',
                                height: '100%'
                            }}>
                                <h3 style={{
                                    fontSize: '26px',
                                    fontWeight: '700',
                                    marginBottom: '30px',
                                    color: '#062f3a'
                                }}>
                                    Quick Contact
                                </h3>

                                <div style={{ marginBottom: '28px' }}>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#062f3a',
                                        marginBottom: '8px'
                                    }}>
                                        <i className="fas fa-phone" style={{ color: '#fdc603', marginRight: '10px', width: '18px' }}></i>
                                        Pakistan Office
                                    </h4>
                                    <p style={{ color: '#585b6b', marginLeft: '28px', marginBottom: '4px' }}>
                                        <a href="tel:+92915260004" style={{ color: '#585b6b', textDecoration: 'none' }}>
                                            +92 91 5260004
                                        </a>
                                    </p>
                                    <p style={{ color: '#585b6b', marginLeft: '28px' }}>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleWhatsAppClick('923339188887', 'Hello! I would like to inquire about your products and services.');
                                            }}
                                            style={{ color: '#25D366', fontWeight: '600', textDecoration: 'none' }}
                                        >
                                            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                                            +92 333 9188887
                                        </a>
                                    </p>
                                </div>

                                <div style={{ marginBottom: '28px' }}>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#062f3a',
                                        marginBottom: '8px'
                                    }}>
                                        <i className="fas fa-phone" style={{ color: '#fdc603', marginRight: '10px', width: '18px' }}></i>
                                        Thailand Office
                                    </h4>
                                    <p style={{ color: '#585b6b', marginLeft: '28px' }}>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleWhatsAppClick('66835140234', 'Hello! I would like to inquire about your products and services.');
                                            }}
                                            style={{ color: '#25D366', fontWeight: '600', textDecoration: 'none' }}
                                        >
                                            <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i>
                                            +66 83 514 0234
                                        </a>
                                    </p>
                                </div>

                                <div style={{ marginBottom: '28px' }}>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#062f3a',
                                        marginBottom: '8px'
                                    }}>
                                        <i className="fas fa-envelope" style={{ color: '#fdc603', marginRight: '10px', width: '18px' }}></i>
                                        Email Addresses
                                    </h4>
                                    <p style={{ color: '#585b6b', marginLeft: '28px', marginBottom: '4px' }}>
                                        <a href="mailto:madina008@yahoo.com" style={{ color: '#585b6b', textDecoration: 'none' }}>
                                            madina008@yahoo.com
                                        </a>
                                    </p>
                                    <p style={{ color: '#585b6b', marginLeft: '28px' }}>
                                        <a href="mailto:info@madinapk.com" style={{ color: '#585b6b', textDecoration: 'none' }}>
                                            info@madinapk.com
                                        </a>
                                    </p>
                                </div>

                                <div style={{ marginBottom: '30px' }}>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#062f3a',
                                        marginBottom: '8px'
                                    }}>
                                        <i className="fas fa-clock" style={{ color: '#fdc603', marginRight: '10px', width: '18px' }}></i>
                                        Working Hours
                                    </h4>
                                    <p style={{ color: '#585b6b', marginLeft: '28px', marginBottom: '2px' }}>
                                        Monday - Friday: 09:00 AM - 05:00 PM
                                    </p>
                                    <p style={{ color: '#585b6b', marginLeft: '28px' }}>
                                        Saturday - Sunday: Closed
                                    </p>
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleWhatsAppClick('923339188887', 'Hello! I would like to inquire about your products and services.');
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            background: '#25D366',
                                            color: '#fff',
                                            padding: '14px 25px',
                                            borderRadius: '30px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '15px',
                                            transition: 'all 0.3s ease',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(37, 211, 102, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
                                        Chat on WhatsApp (Pakistan)
                                    </a>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleWhatsAppClick('66835140234', 'Hello! I would like to inquire about your products and services.');
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            background: '#25D366',
                                            color: '#fff',
                                            padding: '14px 25px',
                                            borderRadius: '30px',
                                            textDecoration: 'none',
                                            fontWeight: '600',
                                            fontSize: '15px',
                                            transition: 'all 0.3s ease',
                                            border: 'none',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(37, 211, 102, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <i className="fab fa-whatsapp" style={{ fontSize: '20px' }}></i>
                                        Chat on WhatsApp (Thailand)
                                    </a>
                                </div>
                            </div>
                        </FadeInAdvanced>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;