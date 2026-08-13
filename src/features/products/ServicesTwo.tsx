import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SectionWrapper from '../../components/elements/SectionWrapper';

// Product Images
import MachineryImg1 from '../../assets/images/services/services-two-2-1.jpg';
import AutoPartsImg1 from '../../assets/images/services/services-two-2-2.jpg';
import TextileImg1 from '../../assets/images/services/services-two-2-3.jpg';
import ElectronicsImg1 from '../../assets/images/services/services-two-2-4.jpg';
import AgricultureImg1 from '../../assets/images/services/services-two-2-5.jpg';
import VehiclesImg1 from '../../assets/images/services/services-two-2-6.jpg';

interface ProductCategoryItem {
    id: number;
    image: string;
    iconClass: string;
    title: string;
    path: string;
    text: string;
}

const productCategories: ProductCategoryItem[] = [
    {
        id: 1,
        image: MachineryImg1,
        iconClass: "icon-truck",
        title: "Machinery",
        path: "/products#machinery",
        text: "Used textile machinery, new textile machinery, agricultural machinery, industrial and commercial machinery, machinery sourcing and procurement."
    },
    {
        id: 2,
        image: AutoPartsImg1,
        iconClass: "icon-shipment",
        title: "Auto Parts & Vehicles",
        path: "/products#autoparts",
        text: "Used auto parts, new auto parts, used vehicles, vehicle and parts sourcing, export and import support."
    },
    {
        id: 3,
        image: TextileImg1,
        iconClass: "icon-delivery-man",
        title: "Textiles",
        path: "/products#textiles",
        text: "Textile fabrics, second-hand textile materials and cut pieces, garments, new and used textile equipment."
    },
    {
        id: 4,
        image: ElectronicsImg1,
        iconClass: "icon-global-services",
        title: "Electronics",
        path: "/products#electronics",
        text: "Commercial electronics, electrical and electronic components, new and used electronic products."
    },
    {
        id: 5,
        image: AgricultureImg1,
        iconClass: "icon-shipment",
        title: "Food & Agriculture",
        path: "/products#agriculture",
        text: "Food products, agricultural commodities, agricultural raw materials, agricultural machinery and equipment."
    },
    {
        id: 6,
        image: VehiclesImg1,
        iconClass: "icon-delivery-man",
        title: "Used Vehicles",
        path: "/products#vehicles",
        text: "Well-maintained used vehicles for commercial and personal use. Available for export with complete documentation."
    },
];

const ServicesTwo: React.FC = () => {
    return (
        <SectionWrapper className="services-two" id='products'>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Product Categories</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                </div>
                <div className="services-two__carousel owl-theme owl-carousel">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay, Pagination]}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        {productCategories.map((category) => (
                            <SwiperSlide className="item" key={category.id}>
                                <div className="services-two__single">
                                    <div className="services-two__img">
                                        <img src={category.image} alt={category.title} />
                                    </div>
                                    <div className="services-two__content">
                                        <div className="services-two__icon">
                                            <span className={category.iconClass}></span>
                                        </div>
                                        <div className="services-two__title">
                                            <h3>
                                                <Link to={category.path}>{category.title}</Link>
                                            </h3>
                                        </div>
                                        <p className="services-two__text">{category.text}</p>
                                        <ul className="services-two__point">
                                            <li>
                                                <div className="icon"><span className="fas fa-check"></span></div>
                                                <div className="text"><p>Quality Products</p></div>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="fas fa-check"></span></div>
                                                <div className="text"><p>International Sourcing</p></div>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="fas fa-check"></span></div>
                                                <div className="text"><p>Competitive Pricing</p></div>
                                            </li>
                                        </ul>
                                        <div className="services-two__btn">
                                            <Link to={category.path}>
                                                View Products <span className="icon-next"></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ServicesTwo;