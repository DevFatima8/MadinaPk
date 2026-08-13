
import SlidingTextIcon1 from '../../assets/images/icon/sliding-text-icon-1.png';
import MarqueeSlider from '../../components/elements/MarqueeSlider';

export default function SlidingTextOne() {
    return (
        <section className="sliding-text-one">
            <div className="sliding-text-one__wrap">
                <MarqueeSlider className="sliding-text__list list-unstyled marquee_mode" >
                    <li className="sliding-text-one__item">
                        <h2 className="sliding-text__title">100% TRUSTED TRANSPORT <img src={SlidingTextIcon1} alt='Image' /></h2>
                    </li>
                    <li className="sliding-text-one__item">
                        <h2 className="sliding-text__title">Tracking <img src={SlidingTextIcon1} alt='Image' /></h2>
                    </li>
                    <li className="sliding-text-one__item">
                        <h2 className="sliding-text__title">Delivery Service <img src={SlidingTextIcon1} alt='Image' /></h2>
                    </li>
                    <li className="sliding-text-one__item">
                        <h2 className="sliding-text__title">Logistics <img src={SlidingTextIcon1} alt='Image' /></h2>
                    </li>
                    <li className="sliding-text-one__item">
                        <h2 className="sliding-text__title">Warehouse <img src={SlidingTextIcon1} alt='Image' /></h2>
                    </li>
                </MarqueeSlider>
            </div>
        </section>

    );
}
