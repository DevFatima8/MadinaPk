import React from 'react';
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';
import ServicesOne11 from '../../assets/images/services/services-one-1-1.jpg';
import ServicesOne12 from '../../assets/images/services/services-one-1-2.jpg';
import ServicesOne13 from '../../assets/images/services/services-one-1-3.jpg';
import ServicesOne14 from '../../assets/images/services/services-one-1-4.jpg';
import ServicesOne15 from '../../assets/images/services/services-one-1-5.jpg';
import ServicesOne16 from '../../assets/images/services/services-one-1-6.jpg';

interface ServiceItem {
    id: number;
    count: string;
    title: string;
    link: string;
    image: string;
    iconClass: string;
    text: string;
}

const servicesData: ServiceItem[] = [
    {
        id: 1,
        title: "Machinery",
        link: "/products",
        image: "/machinary.jpg",
        iconClass: "icon-truck",
        count: "01",
        text: "Used textile machinery, new textile machinery, agricultural machinery, industrial and commercial machinery, machinery sourcing and procurement."
    },
    {
        id: 2,
        title: "Auto Parts & Vehicles",
        link: "/products",
        image: "/Auto-Parts-&-Vehicles.jpg",
        iconClass: "icon-shipment",
        count: "02",
        text: "Used auto parts, new auto parts, used vehicles, vehicle and parts sourcing, export and import support."
    },
    {
        id: 3,
        title: "Textiles",
        link: "/products",
        image: "/Textiles.jpg",
        iconClass: "icon-delivery-man",
        count: "03",
        text: "Textile fabrics, second-hand textile materials and cut pieces, garments, new and used textile equipment, textile sourcing from international suppliers."
    },
    {
        id: 4,
        title: "Electronics",
        link: "/products",
        image: "/Electronics.jpg",
        iconClass: "icon-global-services",
        count: "04",
        text: "Commercial electronics, electrical and electronic components, new and used electronic products subject to availability and lawful trade."
    },
    {
        id: 5,
        title: "Food & Agriculture",
        link: "/products",
        image: "/Food&Agriculture.jpg",
        iconClass: "icon-shipment",
        count: "05",
        text: "Food products, agricultural commodities, agricultural raw materials, agricultural machinery and equipment."
    },
    {
        id: 6,
        title: "Used Vehicles",
        link: "/products",
        image: "/Used-Vehicles.jpg",
        iconClass: "icon-delivery-man",
        count: "06",
        text: "Well-maintained used vehicles for commercial and personal use. Available for export with complete documentation."
    },
    {
        id: 7,
        title: "Stones & Gems",
        link: "/products",
        image: "/Stones-and-Gems.jpg",
        iconClass: "icon-global-services",
        count: "07",
        text: "Precious and semi-precious natural gemstones, cut & polished gems, rough mineral stones, quartz, decorative minerals, export and import sourcing."
    }
];

const ServicesOne: React.FC = () => {
    return (
        <SectionWrapper className="services-one" id='services'>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">What We Trade</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style1">
                            Our Trading <span>Categories</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {servicesData.map((service) => (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={service.id}>
                            <div className="services-one__single">
                                <div className="services-one__img-box">
                                    <div className="services-one__img">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                    <div className="services-one__icon">
                                        <span className={service.iconClass}></span>
                                    </div>
                                </div>
                                <div className="services-one__content">
                                    <div className="services-one__count">{service.count}</div>
                                    <h4 className="services-one__title">
                                        <Link to={service.link}>{service.title}</Link>
                                    </h4>
                                    <p className="services-one__text">{service.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row" style={{ marginTop: '30px' }}>
                    <div className="col-12 text-center">
                        <p style={{ fontSize: '16px', color: '#585b6b' }}>
                            We also source and supply other products according to buyer requirements, market availability
                            and applicable import-export regulations.
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ServicesOne;