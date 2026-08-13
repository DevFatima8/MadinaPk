import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import AboutOne from '../../features/home-one/AboutOne';
import SlidingTextOne from '../../features/home-one/SlidingTextOne';
import ServicesOne from '../../features/home-one/ServicesOne';
import DownloadAppOne from '../../features/home-one/DownloadAppOne';

const About: React.FC = () => {
    return (
        <>
            <DefaultBanner title="About Us" />
            <AboutOne />
            <SlidingTextOne />
            <ServicesOne />
            <DownloadAppOne />
        </>
    );
};

export default About;