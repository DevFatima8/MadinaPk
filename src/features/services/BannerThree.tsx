import React, { useState } from 'react';
import BannerTwoMap1 from '../../assets/images/shapes/banner-two-map-1.png';
import SectionWrapper from '../../components/elements/SectionWrapper';
import TypingEffect from '../../components/elements/TypingEffect';

const BannerThree: React.FC = () => {
    const [serviceType, setServiceType] = useState<string>("import");

    return (
        <SectionWrapper className="banner-two" id='home'>
            <div className="banner-two__pattern"></div>
            <div className="banner-two__map-1">
                <img src={BannerTwoMap1} className="img-bounce" alt="Global Trade" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="banner-two__left">
                            <p className="banner-two__sub-title">Import, Export & Global Trading Solutions</p>
                            <h2 className="banner-two__title">
                                Connecting Global <br />
                                <TypingEffect strings={["Importers", "Exporters", "Suppliers", "Buyers"]} />
                            </h2>
                            <p className="banner-two__text">
                                Madina International Traders Co., Ltd. provides comprehensive import and export services
                                including sourcing, procurement, supplier communication, and commercial coordination for
                                machinery, auto parts, textiles, electronics, and other products.
                            </p>
                            <div className="banner-two__tab-box tabs-box">
                                <ul className="tab-buttons clearfix list-unstyled">
                                    <li className={`tab-btn ${serviceType === "import" ? "active-btn" : ""}`} onClick={() => setServiceType("import")}>
                                        <p>Import Services</p>
                                    </li>
                                    <li className={`tab-btn ${serviceType === "export" ? "active-btn" : ""}`} onClick={() => setServiceType("export")}>
                                        <p>Export Services</p>
                                    </li>
                                    <li className={`tab-btn ${serviceType === "sourcing" ? "active-btn" : ""}`} onClick={() => setServiceType("sourcing")}>
                                        <p>Sourcing Services</p>
                                    </li>
                                </ul>
                                <div className="tabs-content">
                                    {serviceType === "import" && <ImportServicesForm />}
                                    {serviceType === "export" && <ExportServicesForm />}
                                    {serviceType === "sourcing" && <SourcingServicesForm />}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

// Import Services Form
const ImportServicesForm: React.FC = () => {
    return (
        <div className="tab" style={{ display: "block" }}>
            <div className="banner-two__tab-form-box">
            </div>
        </div>
    );
};

// Export Services Form
const ExportServicesForm: React.FC = () => {
    return (
        <div className="tab" style={{ display: "block" }}>
            <div className="banner-two__tab-form-box">
            </div>
        </div>
    );
};

// Sourcing Services Form
const SourcingServicesForm: React.FC = () => {
    return (
        <div className="tab" style={{ display: "block" }}>
            <div className="banner-two__tab-form-box">
            </div>
        </div>
    );
};

export default BannerThree;