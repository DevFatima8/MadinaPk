
import CtaOneImg1 from '../../assets/images/resources/cta-one-img-1.png';
import CtaOneShape2 from '../../assets/images/shapes/cta-one-shape-2.png';
import CtaOneShape3 from '../../assets/images/shapes/cta-one-shape-3.png';
import CtaOneShape1 from '../../assets/images/shapes/cta-one-shape-1.png';
import CtaOneShapeBg from '../../assets/images/shapes/cta-one-shape-bg.png';
import { Link } from 'react-router';

export default function CtaOne() {
    return (
        <section className="cta-one">
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__img">
                        <img src={CtaOneImg1} />
                    </div>
                    <div className="cta-one__content">
                        <div className="cta-one__shape-1"
                            style={{ backgroundImage: `url(${CtaOneShape1})` }}></div>
                        <div className="cta-one__shape-bg"
                            style={{ backgroundImage: `url(${CtaOneShapeBg})` }}></div>
                        <div className="cta-one__shape-2 float-bob-y">
                            <img src={CtaOneShape2} />
                        </div>
                        <div className="cta-one__shape-3 float-bob-x">
                            <img src={CtaOneShape3} />
                        </div>
                        <h2>Recognized as One of The <br /> Leading <span>Company!</span></h2>
                        <p>Logistic service provider company plays a pivotal <br />
                            role in the global supply chain ecosystem.</p>
                        <div className="cta-one__btn-box">
                            <Link to="/about" className="thm-btn">Read More<span><i
                                className="icon-right-arrow"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
