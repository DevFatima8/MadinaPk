import VideoTwoShape1 from '../../assets/images/shapes/video-two-shape-1.png';
import useTransportContext from '../../components/context/useTransportContext';

export default function VideoTwo() {
    const { handleVideoClick } = useTransportContext();
    return (
        <section className="video-two">
            <div className="container">
                <div className="video-two__inner">
                    <div className="video-two__inner-bg jarallax"></div>
                    <div className="video-two__shape-1">
                        <img src={VideoTwoShape1} />
                    </div>
                    <h3 className="video-two__title">We Are The Leader of
                        <br /> Transportation</h3>
                    <div className="video-two__video-link">
                        <a href="#" className="video-popup" onClick={(e) => handleVideoClick(e, "https://www.youtube.com/watch?v=rbFoRH2deeY")}>
                            <div className="video-two__video-icon">
                                <span className="fas fa-play"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
