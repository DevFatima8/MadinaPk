import React from 'react';
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { useState } from 'react';
import TextAnimation from '../../components/elements/TextAnimation';
import SectionWrapper from '../../components/elements/SectionWrapper';

// Team Images
import Team21 from '../../assets/images/team/team-2-1.jpg';
import Team22 from '../../assets/images/team/team-2-2.jpg';
import Team23 from '../../assets/images/team/team-2-3.jpg';
import Team24 from '../../assets/images/team/team-2-4.jpg';
import Team25 from '../../assets/images/team/team-2-5.jpg';
import Team26 from '../../assets/images/team/team-2-6.jpg';

interface TeamTwoItem {
    id: number;
    name: string;
    designation: string;
    image: string;
}

const teamDataTwo: TeamTwoItem[] = [
    {
        id: 1,
        name: "Madina International",
        designation: "Founder & CEO",
        image: Team21,
    },
    {
        id: 2,
        name: "Ahmed Khan",
        designation: "Senior Trading Manager",
        image: Team22,
    },
    {
        id: 3,
        name: "Muhammad Ali",
        designation: "Senior Associate",
        image: Team23,
    },
    {
        id: 4,
        name: "Rashid Ahmed",
        designation: "Operations Manager",
        image: Team24,
    },
    {
        id: 5,
        name: "Sana Tariq",
        designation: "Junior Trade Analyst",
        image: Team25,
    },
    {
        id: 6,
        name: "Imran Khan",
        designation: "Logistics Coordinator",
        image: Team26,
    }
];

const TeamTwo: React.FC = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

    return (
        <SectionWrapper className="team-two" id='team'>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">Our Team</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style1">
                            Meet Our <span>Team</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="team-two__carousel owl-carousel owl-theme">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        modules={[Navigation, Autoplay]}
                        onSwiper={setSwiperInstance}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 10 },
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 4, spaceBetween: 30 },
                        }}
                        className="team-one__carousel"
                    >
                        {teamDataTwo.map((member) => (
                            <SwiperSlide className="item" key={member.id}>
                                <div className="team-two__single">
                                    <div className="team-two__img-box">
                                        <div className="team-two__img">
                                            <img src={member.image} alt={member.name} />
                                            <div className="team-two__social">
                                                <Link to="/team-details"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="/team-details"><i className="fab fa-twitter"></i></Link>
                                                <Link to="/team-details"><i className="fab fa-linkedin-in"></i></Link>
                                                <Link to="/team-details"><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="team-two__content">
                                        <h3 className="team-two__name">
                                            <Link to="/team-details">{member.name}</Link>
                                        </h3>
                                        <p className="team-two__sub-title">{member.designation}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="owl-nav">
                        <button type="button" role="presentation" className="owl-prev" onClick={() => swiperInstance?.slidePrev()}>
                            <span className="icon-right-arrow"></span>
                        </button>
                        <button type="button" role="presentation" className="owl-next" onClick={() => swiperInstance?.slideNext()}>
                            <span className="icon-right-arrow"></span>
                        </button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TeamTwo;