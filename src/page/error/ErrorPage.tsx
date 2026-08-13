import React from 'react';
import HeaderOne from '../../components/headers/HeaderOne';
import FooterOne from '../../components/footers/FooterOne';
import ErrorPageImg1 from '../../assets/images/resources/error-page-img1.png';
import { Link } from 'react-router';

const ErrorPage: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderOne />
            <section className="error-page">
                <div className="container">
                    <div className="error-page__inner text-center">
                        <div className="error-page__img float-bob-y">
                            <img src={ErrorPageImg1} alt="404 Error" />
                        </div>

                        <div className="error-page__content">
                            <h2>Oops! Page Not Found!</h2>
                            <p>The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <div className="btn-box">
                                <Link to="/" className="thm-btn">
                                    Back To Home
                                    <span><i className="icon-right-arrow"></i></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterOne />
        </div>
    );
};

export default ErrorPage;