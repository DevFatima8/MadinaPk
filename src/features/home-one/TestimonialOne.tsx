import React from 'react';
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';

interface TestimonialItem {
    id: number;
    name: string;
    message: string;
    rating: number;
}

const testimonialsData: TestimonialItem[] = [
    {
        id: 1,
        name: "Raza Textiles",
        message: "Madina International provided excellent sourcing support for our textile machinery needs. Their team was professional and responsive throughout the process. We look forward to continuing our partnership.",
        rating: 5,
    },
    {
        id: 2,
        name: "Pattana Trading Co., Ltd.",
        message: "We have worked with Madina International on multiple auto parts orders. They are reliable and understand the international market well. Their communication is always clear and transparent.",
        rating: 5,
    },
    {
        id: 3,
        name: "Usman & Sons",
        message: "Their product knowledge and sourcing capabilities helped us find quality agricultural machinery at competitive prices. We appreciate their commitment to customer satisfaction.",
        rating: 5,
    },
];

const TestimonialOne: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const goToPrev = () => {
        setActiveIndex(prev => prev === 0 ? testimonialsData.length - 1 : prev - 1);
    };

    const goToNext = () => {
        setActiveIndex(prev => prev === testimonialsData.length - 1 ? 0 : prev + 1);
    };

    return (
        <section style={{
            padding: '80px 0',
            background: '#0a1628',
            position: 'relative'
        }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '15px',
                        marginBottom: '10px'
                    }}>
                        <span style={{
                            width: '40px',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, #ecac02)'
                        }}></span>
                        <span style={{
                            color: '#ecac02',
                            fontSize: '14px',
                            fontWeight: '600',
                            letterSpacing: '3px',
                            textTransform: 'uppercase'
                        }}>Client Testimonials</span>
                        <span style={{
                            width: '40px',
                            height: '2px',
                            background: 'linear-gradient(270deg, transparent, #ecac02)'
                        }}></span>
                    </div>
                    <h2 style={{
                        fontSize: 'clamp(32px, 4.5vw, 52px)',
                        fontWeight: '700',
                        color: '#ffffff',
                        margin: '10px 0 0 0',
                        lineHeight: 1.2
                    }}>
                        <TextAnimation animationStyle="style1">
                            What Our <span style={{ color: '#ecac02' }}>Clients Say</span>
                        </TextAnimation>
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: '16px',
                    padding: '50px 60px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    position: 'relative',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {/* Quote Icon */}
                    <div style={{
                        position: 'absolute',
                        top: '30px',
                        right: '40px',
                        fontSize: '60px',
                        color: 'rgba(236,172,2,0.08)',
                        fontFamily: 'Georgia, serif',
                        lineHeight: 1
                    }}>
                        "
                    </div>

                    {/* Testimonial Text */}
                    <p style={{
                        fontSize: 'clamp(17px, 1.3vw, 21px)',
                        lineHeight: '1.9',
                        color: 'rgba(255,255,255,0.85)',
                        marginBottom: '30px',
                        paddingRight: '30px',
                        fontStyle: 'italic'
                    }}>
                        "{testimonialsData[activeIndex].message}"
                    </p>

                    {/* Client Info & Rating */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '15px',
                        paddingTop: '25px',
                        borderTop: '1px solid rgba(255,255,255,0.06)'
                    }}>
                        <div>
                            <h3 style={{
                                fontSize: 'clamp(18px, 1.2vw, 22px)',
                                fontWeight: '600',
                                color: '#ffffff',
                                margin: 0
                            }}>
                                <Link to="/testimonials" style={{
                                    color: '#ffffff',
                                    textDecoration: 'none',
                                    transition: 'color 0.3s ease'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#ecac02'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
                                >
                                    {testimonialsData[activeIndex].name}
                                </Link>
                            </h3>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '5px',
                            color: '#ecac02',
                            fontSize: 'clamp(16px, 1vw, 20px)'
                        }}>
                            {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                                <span key={i} className="fas fa-star"></span>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginTop: '30px',
                        justifyContent: 'center'
                    }}>
                        <button
                            onClick={goToPrev}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '48px',
                                height: '48px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                color: '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '16px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(236,172,2,0.15)';
                                e.currentTarget.style.borderColor = '#ecac02';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>

                        <span style={{
                            color: 'rgba(255,255,255,0.3)',
                            fontSize: '14px',
                            letterSpacing: '1px',
                            minWidth: '45px',
                            textAlign: 'center'
                        }}>
                            {String(activeIndex + 1).padStart(2, '0')} / {String(testimonialsData.length).padStart(2, '0')}
                        </span>

                        <button
                            onClick={goToNext}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '48px',
                                height: '48px',
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '50%',
                                color: '#ffffff',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '16px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(236,172,2,0.15)';
                                e.currentTarget.style.borderColor = '#ecac02';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                            }}
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    section {
                        padding: 50px 0 !important;
                    }
                    .testimonial-card {
                        padding: 30px 25px !important;
                    }
                    .testimonial-text {
                        padding-right: 0 !important;
                    }
                    .quote-icon {
                        right: 20px !important;
                        font-size: 40px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    section {
                        padding: 40px 0 !important;
                    }
                    .testimonial-card {
                        padding: 25px 20px !important;
                    }
                    .testimonial-text {
                        font-size: 15px !important;
                    }
                    .client-info {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 10px !important;
                    }
                    .navigation {
                        gap: 8px !important;
                    }
                    .nav-button {
                        width: 40px !important;
                        height: 40px !important;
                        font-size: 14px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TestimonialOne;