import React, { useState } from 'react';
import Project11 from '../../assets/images/project/project-1-1.jpg';
import Project12 from '../../assets/images/project/project-1-2.jpg';
import Project13 from '../../assets/images/project/project-1-3.jpg';
import Project14 from '../../assets/images/project/project-1-4.jpg';
import Project15 from '../../assets/images/project/project-1-5.jpg';
import Project16 from '../../assets/images/project/project-1-6.jpg';
import Project17 from '../../assets/images/project/project-1-7.jpg';
import Project18 from '../../assets/images/project/project-1-8.jpg';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import { Link } from 'react-router';
import Lightbox from 'yet-another-react-lightbox';
import DefaultBanner from '../../features/default-banner/DefaultBanner';

type Project = {
    id: number;
    title: string;
    subTitle: string;
    image: string; // Imported variable (e.g., Project11) 
    animation: 'fadeInLeft' | 'fadeInRight';
    delay: number;
};

const projectsData: Project[] = [
    { id: 1, subTitle: "Logistics", title: "Quality Equipment", image: Project11, animation: 'fadeInLeft', delay: 100 },
    { id: 2, subTitle: "Logistics", title: "International Shipping", image: Project12, animation: 'fadeInLeft', delay: 300 },
    { id: 3, subTitle: "Logistics", title: "Safety Guaranteed", image: Project13, animation: 'fadeInRight', delay: 500 },
    { id: 4, subTitle: "Logistics", title: "Product Distribution", image: Project14, animation: 'fadeInRight', delay: 700 },
    { id: 5, subTitle: "Logistics", title: "Quality Equipment", image: Project15, animation: 'fadeInLeft', delay: 900 },
    { id: 6, subTitle: "Logistics", title: "International Shipping", image: Project16, animation: 'fadeInLeft', delay: 1100 },
    { id: 7, subTitle: "Logistics", title: "Safety Guaranteed", image: Project17, animation: 'fadeInRight', delay: 1200 },
    { id: 8, subTitle: "Logistics", title: "Product Distribution", image: Project18, animation: 'fadeInRight', delay: 1300 },
];
const Projects: React.FC = () => {
    const [openLightBox, setOpenLightBox] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const images: string[] = projectsData.map(project => project.image);
    return (
        <>
            <DefaultBanner title='Projects' />
            <section className="project-one">
                <div className="project-one__bg-color">
                    <FadeInAdvanced
                        variant={'slideInRight'}
                        delay={100}
                        duration={2500}
                    >                        </FadeInAdvanced>
                </div>
                <div className="project-one__bottom">
                    <div className="container">
                        <div className="row">
                            {projectsData.map((project, idx) => (
                                <div key={project.id} className="col-xl-3 col-lg-6 col-md-6">
                                    <FadeInAdvanced
                                        variant={project.animation}
                                        delay={project.delay}
                                    >
                                        <div className="project-one__single">
                                            <div className="project-one__img-box">
                                                <div className="project-one__img">
                                                    <img src={project.image} alt={project.title} />
                                                </div>
                                                <div className="project-one__content">
                                                    <div className="project-one__title-box">
                                                        <p className="project-one__sub-title">{project.subTitle}</p>
                                                        <h3 className="project-one__title">
                                                            <Link to="/project-details">{project.title}</Link>
                                                        </h3>
                                                    </div>
                                                    <div className="project-one__arrow">
                                                        <Link to="#" className="img-popup" onClick={() => { setIndex(idx); setOpenLightBox(true) }}>
                                                            <span className="icon-right-arrow"></span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Lightbox
                    open={openLightBox}
                    close={() => setOpenLightBox(false)}
                    index={index}
                    slides={images.map((src) => ({ src }))}
                />
            </section>
        </>
    );
};

export default Projects;