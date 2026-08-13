import React, { useState } from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import TestimonialThree11 from '../../assets/images/testimonial/testimonial-three-1-1.png';
import TestimonialThree12 from '../../assets/images/testimonial/testimonial-three-1-2.png';
import TestimonialThree13 from '../../assets/images/testimonial/testimonial-three-1-3.png';
import TestimonialThreeThamb11 from '../../assets/images/testimonial/testimonial-three-thamb-1-1.jpg';
import TestimonialThreeThamb12 from '../../assets/images/testimonial/testimonial-three-thamb-1-2.jpg';
import TestimonialThreeThamb13 from '../../assets/images/testimonial/testimonial-three-thamb-1-3.jpg';

export interface TestimonialItem {
    id: number;
    name: string;
    designation: string;
    text: string;
    image: string;
    rating: number;
}

const testimonialData: TestimonialItem[] = [
    {
        id: 1,
        name: "Ahmed Raza",
        designation: "CEO, Raza Textiles",
        image: TestimonialThree11,
        rating: 5,
        text: "Madina International has been our trusted partner for textile machinery sourcing. Their professional approach and transparent communication have made them our preferred trading partner."
    },
    {
        id: 2,
        name: "Somchai Pattana",
        designation: "Managing Director, Pattana Trading Co., Ltd.",
        image: TestimonialThree12,
        rating: 5,
        text: "We have worked with Madina International on multiple auto parts orders. They are reliable and understand the international market well. Their team is always responsive and helpful."
    },
    {
        id: 3,
        name: "Muhammad Usman",
        designation: "Import Manager, Usman & Sons",
        image: TestimonialThree13,
        rating: 5,
        text: "Their product knowledge and sourcing capabilities helped us find quality agricultural machinery at competitive prices. We appreciate their commitment to customer satisfaction."
    }
];

interface ThumbItem {
    id: number;
    image: string;
}

const thumbItems: ThumbItem[] = [
    { id: 10, image: TestimonialThreeThamb11 },
    { id: 20, image: TestimonialThreeThamb12 },
    { id: 30, image: TestimonialThreeThamb13 },
    { id: 40, image: TestimonialThreeThamb11 },
    { id: 50, image: TestimonialThreeThamb12 },
    { id: 60, image: TestimonialThreeThamb13 },
];

const TestimonialThree: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <section className="testimonial-three">
            <div className="container">
                <div className="testimonial-three__inner">
                    <div className="testimonial-two-shape__bg bg_testimonials_three"></div>
                    <div className="testimonial-three__main-content">
                        <div className="swiper-container" id="testimonial-three__carousel">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                modules={[Navigation, Autoplay]}
                                onSwiper={setSwiperInstance}
                            >
                                {testimonialData.map((item) => (
                                    <SwiperSlide className="swiper-slide" key={item.id}>
                                        <div className="testimonial-three__main-content-inner">
                                            <div className="testimonial-three__main-content-box">
                                                <div className="testimonial-three__quote">
                                                    <i className="fas fa-quote-left"></i>
                                                </div>
                                                <p className="testimonial-three__text">{item.text}</p>
                                                <div className="testimonial-three__client-info-box">
                                                    <div className="testimonial-three__client-info">
                                                        <h3><Link to="/testimonials">{item.name}</Link></h3>
                                                        <p>{item.designation}</p>
                                                    </div>
                                                    <div className="testimonial-three__ratting">
                                                        {[...Array(item.rating)].map((_, index) => (
                                                            <span key={index} className="fas fa-star"></span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="testimonial-three__img">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className="testimonial-three__nav">
                            <div className="swiper-button-next" id="testimonial-three__swiper-button-prev" onClick={() => swiperInstance?.slidePrev()}>
                                <i className="icon-next"></i>
                            </div>
                            <div className="swiper-button-prev" id="testimonial-three__swiper-button-next" onClick={() => swiperInstance?.slideNext()}>
                                <i className="icon-next"></i>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-three__thumb-box">
                        <div className="swiper-container" id="testimonial-three__thumb">
                            <div className="swiper-wrapper">
                                <Swiper
                                    direction="vertical"
                                    slidesPerView={3}
                                    spaceBetween={5}
                                    loop={true}
                                    speed={1000}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                >
                                    {thumbItems.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="swiper-slide">
                                                <div className="testimonial-three__img-holder-box">
                                                    <div className="testimonial-three__img-holder">
                                                        <img src={item.image} alt="Client" />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialThree;