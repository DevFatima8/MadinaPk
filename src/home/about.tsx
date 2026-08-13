import React from 'react';
import DefaultBanner from '../features/default-banner/DefaultBanner';
import AboutOne from '../features/home-one/AboutOne';
import WhyChooseOne from '../features/home-one/WhyChooseOne';
import ServicesOne from '../features/home-one/ServicesOne';
import WhatsAppFloat from '../components/elements/WhatsAppFloat';
import CEOSection from '../features/about/CEOSection';

const About: React.FC = () => {
    return (
        <>
            <DefaultBanner title="About Us" />
            <AboutOne />
            <CEOSection />
            <WhyChooseOne />
            <ServicesOne />
            <WhatsAppFloat />
        </>
    );
};

export default About;