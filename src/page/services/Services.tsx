import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import { Link } from 'react-router';
import { servicesData, type ServiceItem } from '../../contents/services/serviceData';

const Services: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Services' />
            <section className="services-one services-page">
                <div className="container">
                    <div className="row">
                        {servicesData.map((service: ServiceItem) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={service.id}>
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
                                        <div className="services-one__btn-box">
                                            <Link to={service.link}>
                                                Read More <span className="icon-right-arrow"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;