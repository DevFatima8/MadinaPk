import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

interface ThisBanner {
    title: string;
    titleLink?: string;
    subTitle?: string;
    typingSpeed?: number;
    showCursor?: boolean;
    cursorColor?: string;
    onComplete?: () => void;
}

const DefaultBanner: React.FC<ThisBanner> = ({
    title,
    titleLink = "",
    subTitle = "",
    typingSpeed = 80,
    showCursor = true,
    cursorColor = '#ecac02',
    onComplete
}) => {
    const [displayText, setDisplayText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        setDisplayText('');
        setIsTypingComplete(false);

        // Clean the title - remove any extra spaces
        const cleanTitle = title.replace(/\s+/g, ' ').trim();

        const timer = setInterval(() => {
            if (index < cleanTitle.length) {
                // Use substring to avoid character duplication issues
                setDisplayText(cleanTitle.substring(0, index + 1));
                index++;
            } else {
                setIsTypingComplete(true);
                clearInterval(timer);
                if (onComplete) onComplete();
            }
        }, typingSpeed);

        return () => clearInterval(timer);
    }, [title, typingSpeed, onComplete]);

    return (
        <section className="page-header">
            <div className="page-header__bg"></div>
            <div className="container">
                <div className="page-header__inner">
                    {/* Typing Title */}
                    <h3
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            minHeight: '60px',
                            fontWeight: '700',
                            color: '#ffffff',
                            fontSize: 'clamp(28px, 4vw, 48px)',
                            margin: 0
                        }}
                    >
                        <span>{displayText}</span>
                        {showCursor && (
                            <span
                                className="typing-cursor"
                                style={{
                                    display: 'inline-block',
                                    width: '3px',
                                    height: '1em',
                                    backgroundColor: cursorColor,
                                    marginLeft: '2px',
                                    animation: isTypingComplete ? 'none' : 'blink 0.7s step-end infinite'
                                }}
                            />
                        )}
                    </h3>

                    {/* Breadcrumb Navigation */}
                    <div className="thm-breadcrumb__inner">
                        <ul className="thm-breadcrumb list-unstyled" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <li><Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Home</Link></li>
                            <li><span className="fas fa-angle-right" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}></span></li>
                            {titleLink ? (
                                <li><Link to={titleLink} style={{ color: '#ecac02', textDecoration: 'none' }}>{displayText}</Link></li>
                            ) : (
                                <li style={{ color: '#ffffff' }}>{displayText}</li>
                            )}
                            {subTitle && (
                                <>
                                    <li><span className="fas fa-angle-right" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}></span></li>
                                    <li style={{ color: 'rgba(255,255,255,0.7)' }}>{subTitle}</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                
                .page-header h3 span {
                    letter-spacing: 0.5px;
                }
                
                @media (max-width: 768px) {
                    .page-header h3 {
                        font-size: 24px !important;
                        white-space: normal;
                        word-break: break-word;
                    }
                }
            `}</style>
        </section>
    );
};

export default DefaultBanner;