
import { Link } from 'react-router';
import DownloadAppImg1 from '../../assets/images/icon/download-app-img1.png';
import DownloadAppImg2 from '../../assets/images/icon/download-app-img2.png';
import DownloadAppTrackImg1 from '../../assets/images/resources/download-app-track-img-1.png';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';

export default function DownloadAppOne() {
    return (
        <section className="download-app-one">
            <div className="download-app-one__shape-bg" ></div>
            <div className="download-app-one__shape-bg-two" ></div>
            <div className="container">
                <div className="download-app-one__inner">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7">
                            <div className="download-app-one__content sec-title-animation animation-style2">
                                <p className="download-app-one__sub-title">Import</p>
                                <h2 className="download-app-one__title">
                                    <TextAnimation animationStyle="style2">
                                        & Export <br /> <span>Every
                                            Type</span>
                                    </TextAnimation>
                                </h2>
                                <p className="download-app-one__text">Get our latest updates on Whatsapp</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5">
                            <div className="download-app-one__right">
                                <div className="download-app-one-car__img float-bob-x">
                                    <img src="/download.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
