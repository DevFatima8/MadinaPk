import React from 'react';
import DefaultBanner from '../features/default-banner/DefaultBanner';
import AboutOne from '../features/home-one/AboutOne';
import ServicesOne from '../features/home-one/ServicesOne';
import WhyChooseOne from '../features/home-one/WhyChooseOne';
import CounterOne from '../features/home-one/CounterOne';
import TestimonialOne from '../features/home-one/TestimonialOne';
import WhatsAppFloat from '../components/elements/WhatsAppFloat';

const Products: React.FC = () => {
    return (
        <>
            <DefaultBanner title="Products & Trading Categories" />
            <AboutOne />
            <ServicesOne />
            <WhyChooseOne />
            <CounterOne />
            <TestimonialOne />
            <WhatsAppFloat />
        </>
    );
};

export default Products;