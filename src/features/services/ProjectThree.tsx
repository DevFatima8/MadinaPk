
import { Link } from 'react-router';
import Project11 from '../../assets/images/project/project-1-1.jpg';
import Project12 from '../../assets/images/project/project-1-2.jpg';
import Project13 from '../../assets/images/project/project-1-3.jpg';
import Project14 from '../../assets/images/project/project-1-4.jpg';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

export default function ProjectThree() {
    return (
        <section className="project-one project-three">
            <div className="project-one__bg-color">
                <FadeInAdvanced
                    variant={'slideInRight'}
                    delay={100}
                    duration={2500}
                >                        </FadeInAdvanced>
            </div>
            <div className="container">
                <div className="project-one__top">
                    <div className="section-title text-left sec-title-animation animation-style1">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-1">
                                <i className="fas fa-plane"></i>
                            </div>
                            <h6 className="section-title__tagline">SEE OUR PORTFOLIO</h6>
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-2">
                                <i className="fas fa-plane"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-one__bottom">
                <div className="container">
                    <div className="row">
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInLeft'}
                                delay={100}
                            >
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src={Project11} />
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link to="/project-details">Quality
                                                    Equipment</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <a href="assets/images/project/project-1-1.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Project One Single End*/}
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInLeft'}
                                delay={300}
                            >
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src={Project12} />
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link to="/project-details">International
                                                    Shipping</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <a href="assets/images/project/project-1-2.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Project One Single End*/}
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={600}
                            >
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src={Project13} />
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link to="/project-details">Safety
                                                    Gurranted</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <a href="assets/images/project/project-1-3.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Project One Single End*/}
                        {/*Project One Single Start*/}
                        <div className="col-xl-3 col-lg-6 col-md-6">
                            <FadeInAdvanced
                                variant={'fadeInRight'}
                                delay={900}
                            >
                                <div className="project-one__single">
                                    <div className="project-one__img-box">
                                        <div className="project-one__img">
                                            <img src={Project14} />
                                        </div>
                                        <div className="project-one__content">
                                            <div className="project-one__title-box">
                                                <p className="project-one__sub-title">Logistics</p>
                                                <h3 className="project-one__title"><Link to="/project-details">Product
                                                    Distribution</Link></h3>
                                            </div>
                                            <div className="project-one__arrow">
                                                <a href="assets/images/project/project-1-4.jpg" className="img-popup"><span
                                                    className="icon-right-arrow"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInAdvanced>
                        </div>
                        {/*Project One Single End*/}
                    </div>
                </div>
            </div>
        </section>
    );
}
