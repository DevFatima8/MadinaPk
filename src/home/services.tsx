import React from 'react';
import DefaultBanner from '../features/default-banner/DefaultBanner';
import BannerThree from '../features/services/BannerThree';
import FeatureThree from '../features/services/FeatureThree';
import SlidingTextOne from '../features/home-one/SlidingTextOne';
import ServicesThree from '../features/services/ServicesThree';
import WhyChooseOne from '../features/home-one/WhyChooseOne';
import ProcessOne from '../features/home-one/ProcessOne';
import CounterOne from '../features/home-one/CounterOne';
import DownloadAppOne from '../features/home-one/DownloadAppOne';
import FaqOne from '../features/home-one/FaqOne';
import AboutThree from '../features/services/AboutThree';
import WhatsAppFloat from '../components/elements/WhatsAppFloat';

const Services: React.FC = () => {
    return (
        <>
            <DefaultBanner title="Import & Export Services" />
            <BannerThree />
            <FeatureThree />
            <AboutThree />
            <SlidingTextOne />
            <ServicesThree />
            <WhyChooseOne />
            <ProcessOne />
            <CounterOne />
            <DownloadAppOne />
            <FaqOne />
            <WhatsAppFloat />
        </>
    );
};

export default Services;