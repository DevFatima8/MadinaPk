import React from 'react';
import BannerOne from '../features/home-one/BannerOne';
import AboutOne from '../features/home-one/AboutOne';
import ServicesOne from '../features/home-one/ServicesOne';
import WhyChooseOne from '../features/home-one/WhyChooseOne';
import TestimonialOne from '../features/home-one/TestimonialOne';
import SlidingTextOne from '../features/home-one/SlidingTextOne';
import ProcessOne from '../features/home-one/ProcessOne';
import CounterOne from '../features/home-one/CounterOne';
import FaqOne from '../features/home-one/FaqOne';
import DownloadAppOne from '../features/home-one/DownloadAppOne';
import WhatsAppFloat from '../components/elements/WhatsAppFloat';

const HomeOne: React.FC = () => {
    return (
        <>
            <BannerOne />
            <AboutOne />
            <ServicesOne />
            <WhyChooseOne />
            <TestimonialOne />
            <SlidingTextOne />
            <ProcessOne />
            <CounterOne />
            <FaqOne />
            <DownloadAppOne />
            <WhatsAppFloat />
        </>
    );
};

export default HomeOne;