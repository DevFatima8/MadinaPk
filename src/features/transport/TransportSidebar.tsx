import React from 'react';
import { Link, useLocation } from 'react-router';
import ServiceDetailsSidebarImg from '../../assets/images/services/service-details-sidebar-img.png';

type ServiceList = {
    id: number,
    linkUrl: string,
    text: string
}
const serviceList: ServiceList[] = [
    { id: 1, linkUrl: "/international-transport", text: "International Transport" },
    { id: 2, linkUrl: "/track-transport", text: "Local Track Transport" },
    { id: 3, linkUrl: "/personal-delivery", text: "Fast Personal Delivery" },
    { id: 4, linkUrl: "/ocean-transport", text: "Safe Ocean Transport" },
    { id: 5, linkUrl: "/warehouse-facility", text: "Safe Ocean Transport" },
    { id: 6, linkUrl: "/emergency-transport", text: "Emergency Transport" },
]
const TransportSidebar: React.FC = () => {
    const currentPath: string = useLocation().pathname;
    return (
        <div className="col-xl-4 col-lg-5">
            <div className="service-details__sidebar">
                <div className="service-details__services-box">
                    <h3 className="service-details__services-title">Our Services</h3>
                    <ul className="service-details__services-list list-unstyled">
                        {
                            serviceList.map((item) => (
                                <li key={item?.id} className={currentPath === item?.linkUrl ? "active" : ""}>
                                    <Link to={item?.linkUrl}>{item?.text}<span className="icon-next"></span></Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="service-details__sidebar-contact">
                    <div className="service-details__sidebar-contact-img">
                        <div className="inner">
                            <img src={ServiceDetailsSidebarImg} />
                        </div>
                    </div>

                    <div className="service-details__sidebar-contact-content">
                        <div className="icon">
                            <span className="icon-phone-call"></span>
                        </div>
                        <h2><a href="tel:585858575084">+58 585 857 5084</a></h2>
                        <p>If You Need Any Help <br />
                            Contact With Us</p>
                    </div>
                </div>
                <div className="service-details__sidebar-download-box">
                    <h3 className="service-details__services-title">Download</h3>
                    <div className="service-details__sidebar-single-download">

                        <ul className="clearfix list-unstyled">
                            <li>
                                <div className="content-box">
                                    <div className="icon">
                                        <span className="far fa-file-pdf"></span>
                                    </div>
                                    <div className="text-box">
                                        <h2><Link to="#">Pdf Download</Link></h2>
                                        <p><Link to="#">Download</Link></p>
                                    </div>
                                </div>

                                <div className="btn-box">
                                    <Link to="#"><span className="far fa-cloud-download"></span></Link>
                                </div>
                            </li>

                            <li>
                                <div className="content-box">
                                    <div className="icon">
                                        <span className="far fa-file-pdf"></span>
                                    </div>
                                    <div className="text-box">
                                        <h2><Link to="#">Pdf Download</Link></h2>
                                        <p><Link to="#">Download</Link></p>
                                    </div>
                                </div>

                                <div className="btn-box">
                                    <Link to="#"><span className="far fa-cloud-download"></span></Link>
                                </div>
                            </li>

                            <li>
                                <div className="content-box">
                                    <div className="icon">
                                        <span className="far fa-file-pdf"></span>
                                    </div>
                                    <div className="text-box">
                                        <h2><Link to="#">Pdf Download</Link></h2>
                                        <p><Link to="#">Download</Link></p>
                                    </div>
                                </div>

                                <div className="btn-box">
                                    <Link to="#"><span className="far fa-cloud-download"></span></Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportSidebar;