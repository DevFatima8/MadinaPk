
import TextAnimation from '../../components/elements/TextAnimation';

export default function ProcessOne() {
    return (
        <>
            {/*Process One Start */}
            <section className="process-one" >
                <div className="process-one__map"> </div>
                <div className="container">
                    <div className="section-title text-center sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-1">
                                <i className="fas fa-plane"></i>
                            </div>
                            <h6 className="section-title__tagline">Working Process</h6>
                            <span className="section-title__tagline-border"></span>
                            <div className="section-title__shape-2">
                                <i className="fas fa-plane"></i>
                            </div>
                        </div>
                        <h3 className="section-title__title">
                            <TextAnimation animationStyle="style2">
                                We Aim to Contribute Well
                                <br /> to <span>Your Company</span>
                            </TextAnimation>
                        </h3>
                    </div>
                    <div className="process-one__inner">
                        <ul className="process-one__list list-unstyled">
                            <li>
                                <div className="process-one__icon">
                                    <span className="icon-phone-call"></span>
                                    <div className="process-one__count"></div>
                                </div>
                                <h4 className="process-one__title">discovery call</h4>
                                <p className="process-one__text">This process is dedicated to enhancing overall business
                                    efficiency and effectiveness.</p>
                                <div className="process-one__shpae-1"></div>
                            </li>
                            <li>
                                <div className="process-one__icon">
                                    <span className="icon-box1"></span>
                                    <div className="process-one__count"></div>
                                </div>
                                <h4 className="process-one__title">Replenishment & Picking</h4>
                                <p className="process-one__text">This process is dedicated to enhancing overall business
                                    efficiency and effectiveness.</p>
                                <div className="process-one__shpae-1"></div>
                            </li>
                            <li>
                                <div className="process-one__icon">
                                    <span className="icon-packaging"></span>
                                    <div className="process-one__count"></div>
                                </div>
                                <h4 className="process-one__title">Packaging & Distribution</h4>
                                <p className="process-one__text">This process is dedicated to enhancing overall business
                                    efficiency and effectiveness.</p>
                                <div className="process-one__shpae-1"></div>
                            </li>
                            <li>
                                <div className="process-one__icon">
                                    <span className="icon-truck"></span>
                                    <div className="process-one__count"></div>
                                </div>
                                <h4 className="process-one__title">Transportation Process</h4>
                                <p className="process-one__text">This process is dedicated to enhancing overall business
                                    efficiency and effectiveness.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*Process Steps One End */}
        </>

    );
}
