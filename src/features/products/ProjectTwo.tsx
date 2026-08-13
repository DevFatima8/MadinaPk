import React, { useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import SectionWrapper from '../../components/elements/SectionWrapper';

// Product Images
import Product1 from '../../assets/images/project/project-1-1.jpg';
import Product2 from '../../assets/images/project/project-1-2.jpg';
import Product3 from '../../assets/images/project/project-1-3.jpg';
import Product4 from '../../assets/images/project/project-1-4.jpg';
import Product5 from '../../assets/images/project/project-1-5.jpg';
import Product6 from '../../assets/images/project/project-1-6.jpg';
import Product7 from '../../assets/images/project/project-1-7.jpg';
import Product8 from '../../assets/images/project/project-1-8.jpg';

export interface ProductShowcaseItem {
    id: number;
    title: string;
    subTitle: string;
    image: string;
    link: string;
}

const products: ProductShowcaseItem[] = [
    { id: 1, title: "Textile Machinery", subTitle: "Machinery", image: Product1, link: "/quote" },
    { id: 2, title: "Auto Parts", subTitle: "Auto Parts & Vehicles", image: Product2, link: "/quote" },
    { id: 3, title: "Agricultural Machinery", subTitle: "Machinery", image: Product3, link: "/quote" },
    { id: 4, title: "Textile Fabrics", subTitle: "Textiles", image: Product4, link: "/quote" },
    { id: 5, title: "Electronics", subTitle: "Electronics", image: Product5, link: "/quote" },
    { id: 6, title: "Used Vehicles", subTitle: "Auto Parts & Vehicles", image: Product6, link: "/quote" },
    { id: 7, title: "Agricultural Products", subTitle: "Food & Agriculture", image: Product7, link: "/quote" },
    { id: 8, title: "Industrial Machinery", subTitle: "Machinery", image: Product8, link: "/quote" },
];

const ProjectTwo: React.FC = () => {
    const [openLightBox, setOpenLightBox] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const images: string[] = products.map(product => product.image);

    return (
        <SectionWrapper className="project-one project-two" id='showcase'>
            {/* <div className="project-one__bg-color">
                <FadeInAdvanced variant={'slideInRight'} delay={100} duration={2500} />
            </div> */}
            <div className="container">
                <div className="project-one__top">
                    <div className="section-title text-left sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-1">
                                <i className="fas fa-plane"></i>
                            </div>
                            <h6 className="section-title__tagline">Product Showcase</h6>
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-2">
                                <i className="fas fa-plane"></i>
                            </div>
                        </div>
                        <h3 className="section-title__title">
                            <TextAnimation animationStyle="style1">
                                Featured <span>Products</span>
                            </TextAnimation>
                        </h3>
                    </div>
                </div>
            </div>
            <div className="project-one__bottom">
                <div className="container">
                    <Swiper
                        slidesPerView={4}
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
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1200: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                    >
                        {products.map((product, idx) => (
                            <SwiperSlide className="item" key={product.id}>
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">{product.subTitle}</p>
                                                <h3 className="project-one__title">
                                                    <Link to={product.link}>{product.title}</Link>
                                                </h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <Link to="#" className="img-popup" onClick={() => { setIndex(idx); setOpenLightBox(true); }}>
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <Lightbox
                open={openLightBox}
                close={() => setOpenLightBox(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />
        </SectionWrapper>
    );
};

export default ProjectTwo;