import React from 'react';
import OfficeLocationMap from '../../assets/images/shapes/office-location-map.png';
import OfficeLocation11 from '../../assets/images/resources/office-location-1-1.png';

const OfficeLocation: React.FC = () => {
    return (
        <section className="office-location">
            <div className="container">
                <div className="office-location__inner">
                    <div className="office-location__location clearfix">
                        <div className="office-location__map">
                            <img src={OfficeLocationMap} alt="Global Locations" />
                        </div>

                        {/* Pakistan */}
                        <div className="office-location__location-single style1">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <img src={OfficeLocation11} alt="Location" />
                                </div>
                                <div className="text-box">
                                    <h4>Pakistan</h4>
                                    <p>Pakistan</p>
                                </div>
                            </div>
                        </div>

                        {/* Thailand */}
                        <div className="office-location__location-single style3">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <img src={OfficeLocation11} alt="Location" />
                                </div>
                                <div className="text-box">
                                    <h4>Thailand</h4>
                                    <p>Thailand</p>
                                </div>
                            </div>
                        </div>

                        {/* Global Sourcing */}
                        <div className="office-location__location-single style5">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <img src={OfficeLocation11} alt="Location" />
                                </div>
                                <div className="text-box">
                                    <h4>Global Sourcing</h4>
                                    <p>International Suppliers<br />Worldwide Network</p>
                                </div>
                            </div>
                        </div>

                        {/* International Markets */}
                        <div className="office-location__location-single style7">
                            <div className="round-box">
                                <div className="bdr"></div>
                            </div>
                            <div className="content-box">
                                <div className="img-box">
                                    <img src={OfficeLocation11} alt="Location" />
                                </div>
                                <div className="text-box">
                                    <h4>International</h4>
                                    <p>Global Markets<br />Worldwide Trade</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfficeLocation;