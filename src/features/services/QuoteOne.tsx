import React, { useState } from 'react';
import QuoteShapeBg from '../../assets/images/shapes/quote-shape-bg.png';
import CustomSelect from '../../components/elements/CustomSelect';
import SectionWrapper from '../../components/elements/SectionWrapper';

const QuoteOne: React.FC = () => {
    const [activeService, setActiveService] = useState<string>("import");

    return (
        <SectionWrapper className="quote-one" id='contactThree'>
            <div className="quote-one-shape__bg" style={{ backgroundImage: `url(${QuoteShapeBg})` }}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center sec-title-animation animation-style1">
                            <div className="section-title__tagline-box">
                                <span className="section-title__tagline-border"></span>
                                <div className="section-title__shape-1">
                                    <i className="fas fa-plane"></i>
                                </div>
                                <h6 className="section-title__tagline">Get Started</h6>
                                <span className="section-title__tagline-border"></span>
                                <div className="section-title__shape-2">
                                    <i className="fas fa-plane"></i>
                                </div>
                            </div>
                        </div>

                        <div className="quote-tab">
                            <div className="quote-tab__button">
                                <ul className="tabs-button-box clearfix">
                                    <li className={`tab-btn-item ${activeService === "import" ? "active-btn-item" : ""}`} onClick={() => setActiveService("import")}>
                                        <div className="quote-tab__button-inner">
                                            <h3>Import Quote</h3>
                                        </div>
                                    </li>
                                    <li className={`tab-btn-item ${activeService === "export" ? "active-btn-item" : ""}`} onClick={() => setActiveService("export")}>
                                        <div className="quote-tab__button-inner">
                                            <h3>Export Quote</h3>
                                        </div>
                                    </li>
                                    <li className={`tab-btn-item ${activeService === "sourcing" ? "active-btn-item" : ""}`} onClick={() => setActiveService("sourcing")}>
                                        <div className="quote-tab__button-inner">
                                            <h3>Sourcing Quote</h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="tabs-content-box">
                                <div className={`tab-content-box-item ${activeService === "import" ? "tab-content-box-item-active" : ""}`}>
                                    <ImportQuoteForm />
                                </div>
                                <div className={`tab-content-box-item ${activeService === "export" ? "tab-content-box-item-active" : ""}`}>
                                    <ExportQuoteForm />
                                </div>
                                <div className={`tab-content-box-item ${activeService === "sourcing" ? "tab-content-box-item-active" : ""}`}>
                                    <SourcingQuoteForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

// Import Quote Form
const ImportQuoteForm: React.FC = () => {
    return (
        <div className="quote-tab-content-box-item">
            <div className="tab-content-box-item-img"></div>
            <div className="quotes-wrapper">
                <div className="quotes-wrapper-inner">
                    <div className="title-box">
                        <h2>Import Quote Request</h2>
                    </div>
                    <div className="quotes-weight">
                        <form className="contact-form-validated quote-one__form" onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Full Name</label>
                                        <input type="text" name="name" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Company Name</label>
                                        <input type="text" name="company" placeholder="Company name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Email Address</label>
                                        <input type="email" name="email" placeholder="Email address" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" placeholder="WhatsApp/Telephone" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Country</label>
                                        <input type="text" name="country" placeholder="Your country" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Product Category</label>
                                        <div className="select-box">
                                            <CustomSelect
                                                optionArray={[
                                                    { id: 1, value: "Select Category", label: "Select Category" },
                                                    { id: 2, value: "Machinery", label: "Machinery" },
                                                    { id: 3, value: "Auto Parts", label: "Auto Parts" },
                                                    { id: 4, value: "Textiles", label: "Textiles" },
                                                    { id: 5, value: "Electronics", label: "Electronics" },
                                                    { id: 6, value: "Food & Agriculture", label: "Food & Agriculture" },
                                                    { id: 7, value: "Stones & Gems", label: "Stones & Gems" },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>New or Used</label>
                                        <div className="select-box">
                                            <CustomSelect
                                                optionArray={[
                                                    { id: 1, value: "Select Condition", label: "Select Condition" },
                                                    { id: 2, value: "New", label: "New" },
                                                    { id: 3, value: "Used", label: "Used" },
                                                    { id: 4, value: "Refurbished", label: "Refurbished" },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Quantity</label>
                                        <input type="text" name="quantity" placeholder="Quantity required" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Destination Port/Country</label>
                                        <input type="text" name="destination" placeholder="Destination" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="input-box">
                                        <label>Product Specifications</label>
                                        <textarea name="specifications" placeholder="Describe product specifications, model numbers, or requirements..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="quote-two__btn">
                                        <button type="submit" className="thm-btn">
                                            Submit Import Request
                                            <span><i className="icon-right-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Export Quote Form
const ExportQuoteForm: React.FC = () => {
    return (
        <div className="quote-tab-content-box-item">
            <div className="tab-content-box-item-img bg_2"></div>
            <div className="quotes-wrapper">
                <div className="quotes-wrapper-inner">
                    <div className="title-box">
                        <h2>Export Quote Request</h2>
                    </div>
                    <div className="quotes-weight">
                        <form className="contact-form-validated quote-one__form" onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Full Name</label>
                                        <input type="text" name="name" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Company Name</label>
                                        <input type="text" name="company" placeholder="Company name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Email Address</label>
                                        <input type="email" name="email" placeholder="Email address" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" placeholder="WhatsApp/Telephone" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Origin Country</label>
                                        <input type="text" name="origin" placeholder="Export from" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Product to Export</label>
                                        <input type="text" name="product" placeholder="Product to export" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="input-box">
                                        <label>Quantity Available</label>
                                        <input type="text" name="quantity" placeholder="Quantity for export" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="input-box">
                                        <label>Target Markets</label>
                                        <input type="text" name="markets" placeholder="Target countries/markets" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="input-box">
                                        <label>Product Details</label>
                                        <textarea name="details" placeholder="Describe your product for export..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="quote-two__btn">
                                        <button type="submit" className="thm-btn">
                                            Submit Export Request
                                            <span><i className="icon-right-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Sourcing Quote Form
const SourcingQuoteForm: React.FC = () => {
    return (
        <div className="quote-tab-content-box-item">
            <div className="tab-content-box-item-img bg_2"></div>
            <div className="quotes-wrapper">
                <div className="quotes-wrapper-inner">
                    <div className="title-box">
                        <h2>Sourcing Quote Request</h2>
                    </div>
                    <div className="quotes-weight">
                        <form className="contact-form-validated quote-one__form" onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Full Name</label>
                                        <input type="text" name="name" placeholder="Enter your name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Company Name</label>
                                        <input type="text" name="company" placeholder="Company name" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Email Address</label>
                                        <input type="email" name="email" placeholder="Email address" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Phone Number</label>
                                        <input type="text" name="phone" placeholder="WhatsApp/Telephone" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Product Required</label>
                                        <input type="text" name="product" placeholder="Product to source" />
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="input-box">
                                        <label>Target Price</label>
                                        <input type="text" name="price" placeholder="Target price (if available)" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="input-box">
                                        <label>New or Used</label>
                                        <div className="select-box">
                                            <CustomSelect
                                                optionArray={[
                                                    { id: 1, value: "Select Condition", label: "Select Condition" },
                                                    { id: 2, value: "New", label: "New" },
                                                    { id: 3, value: "Used", label: "Used" },
                                                    { id: 4, value: "Refurbished", label: "Refurbished" },
                                                ]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="input-box">
                                        <label>Quantity</label>
                                        <input type="text" name="quantity" placeholder="Quantity required" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="input-box">
                                        <label>Specifications</label>
                                        <textarea name="specs" placeholder="Describe product specifications, model numbers, or requirements..."></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="quote-two__btn">
                                        <button type="submit" className="thm-btn">
                                            Submit Sourcing Request
                                            <span><i className="icon-right-arrow"></i></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteOne;