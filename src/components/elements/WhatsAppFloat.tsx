import React from 'react';

interface WhatsAppFloatProps {
    phoneNumber?: string;
    message?: string;
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
    phoneNumber = '923339188887', // Default: Pakistan number
    message = 'Hello! I would like to inquire about your products and services.',
    position = 'bottom-right'
}) => {
    const getPositionStyles = () => {
        switch (position) {
            case 'bottom-right':
                return { bottom: '30px', right: '30px' };
            case 'bottom-left':
                return { bottom: '30px', left: '30px' };
            case 'top-right':
                return { top: '30px', right: '30px' };
            case 'top-left':
                return { top: '30px', left: '30px' };
            default:
                return { bottom: '30px', right: '30px' };
        }
    };

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div
            onClick={handleClick}
            style={{
                position: 'fixed',
                ...getPositionStyles(),
                zIndex: 999,
                width: '60px',
                height: '60px',
                background: '#25D366',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                border: 'none',
                outline: 'none'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 30px rgba(37, 211, 102, 0.6)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
            }}
            aria-label="Chat on WhatsApp"
        >
            <i className="fab fa-whatsapp" style={{ fontSize: '32px', color: 'white' }}></i>
        </div>
    );
};

export default React.memo(WhatsAppFloat);