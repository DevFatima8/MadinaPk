
import Project11 from '../../assets/images/project/project-1-1.jpg';
import Project12 from '../../assets/images/project/project-1-2.jpg';
import Project13 from '../../assets/images/project/project-1-3.jpg';
import Project14 from '../../assets/images/project/project-1-4.jpg';
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import SectionWrapper from '../../components/elements/SectionWrapper';

type AnimationVariant =
    | 'fadeIn'
    | 'fadeInLeft'
    | 'fadeInRight'
    | 'fadeInUp'
    | 'fadeInDown'
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInUp'
    | 'slideInDown'
    | 'zoomIn'
    | 'zoomOut'
    | 'bounceIn'
    | 'flipInX'
    | 'flipInY';

interface ProjectItem {
    id: number;
    variant: AnimationVariant | undefined;
    delay: number;
    img: string;
    subTitle: string;
    title: string;
    linkUrl: string;
}

const projectsData: ProjectItem[] = [
    {
        id: 10,
        variant: "fadeInLeft",
        delay: 100,
        img: Project11,
        subTitle: 'Logistics',
        title: 'Quality Equipment',
        linkUrl: '/project-details'
    },
    {
        id: 20,
        variant: "fadeInLeft",
        delay: 300,
        img: Project12,
        subTitle: 'Logistics',
        title: 'International Shipping',
        linkUrl: '/project-details'
    },
    {
        id: 30,
        variant: "fadeInRight",
        delay: 600,
        img: Project13,
        subTitle: 'Logistics',
        title: 'Safety Gurranted',
        linkUrl: '/project-details'
    },
    {
        id: 40,
        variant: "fadeInRight",
        delay: 900,
        img: Project14,
        subTitle: 'Logistics',
        title: 'Product Distribution',
        linkUrl: '/project-details'
    },
]

export default function ProjectOne() {
    const [openLightBox, setOpenLightBox] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const images: string[] = projectsData.map(project => project.img);
    return (
        <SectionWrapper className="project-one" id='projects'>
            <div className="project-one__bg-color">

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
                        {
                            projectsData.map((project: ProjectItem, idx) => (
                                <div className="col-xl-3 col-lg-6 col-md-6" key={project?.id}>
                                    <FadeInAdvanced
                                        variant={project?.variant}
                                        delay={project?.delay}
                                    >
                                        <div className="project-one__single">
                                            <div className="project-one__img-box">
                                                <div className="project-one__img">
                                                    <img src={project?.img} alt={project?.subTitle} />
                                                </div>
                                                <div className="project-one__content">
                                                    <div className="project-one__title-box">
                                                        <p className="project-one__sub-title">{project?.subTitle}</p>
                                                        <h3 className="project-one__title"><Link to={project?.linkUrl}>{project?.title}</Link></h3>
                                                    </div>
                                                    <div className="project-one__arrow">
                                                        <Link to="#" className="img-popup" onClick={() => { setIndex(idx); setOpenLightBox(true) }}><span className="icon-right-arrow"></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </FadeInAdvanced>
                                </div>
                            ))
                        }
                        {/*Project One Single End*/}
                    </div>
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
}
