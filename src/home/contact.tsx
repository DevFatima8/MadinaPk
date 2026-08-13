import React from 'react';
import DefaultBanner from '../features/default-banner/DefaultBanner';
import ContactInfo from '../features/contact/ContactInfo';
import ContactMap from '../features/contact/ContactMap';
import ContactForm from '../features/contact/ContactForm';
import WhatsAppFloat from '../components/elements/WhatsAppFloat';

const Contact: React.FC = () => {
    return (
        <>
            <DefaultBanner title="Contact Us" />
            <ContactInfo />
            <ContactMap />
            <ContactForm />
            <WhatsAppFloat />
        </>
    );
};

export default Contact;