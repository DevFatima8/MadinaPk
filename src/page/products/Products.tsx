import React, { useState } from 'react';
import { Link } from 'react-router';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import Lightbox from 'yet-another-react-lightbox';

// Product Images
import MachineryImg1 from '../../assets/images/products/machinery-1.jpg';
import MachineryImg2 from '../../assets/images/products/machinery-2.jpg';
import AutoPartsImg1 from '../../assets/images/products/autoparts-1.jpg';
import AutoPartsImg2 from '../../assets/images/products/autoparts-2.jpg';
import TextileImg1 from '../../assets/images/products/textile-1.jpg';
import TextileImg2 from '../../assets/images/products/textile-2.jpg';
import ElectronicsImg1 from '../../assets/images/products/electronics-1.jpg';
import ElectronicsImg2 from '../../assets/images/products/electronics-2.jpg';
import AgricultureImg1 from '../../assets/images/products/agriculture-1.jpg';
import VehiclesImg1 from '../../assets/images/products/vehicles-1.jpg';

// Types
interface ProductItem {
    id: number;
    category: string;
    categoryIcon: string;
    title: string;
    description: string;
    image: string;
    condition: string[];
    features: string[];
    link: string;
}

// Product Data
const productsData: ProductItem[] = [
    // Machinery
    {
        id: 1,
        category: "Machinery",
        categoryIcon: "icon-truck",
        title: "Used Textile Machinery",
        description: "High-quality used textile machinery from leading manufacturers. Available for various textile production needs including spinning, weaving, and finishing.",
        image: MachineryImg1,
        condition: ["Used", "Refurbished"],
        features: ["Reliable performance", "Competitive pricing", "Inspection available", "Worldwide shipping"],
        link: "/quote"
    },
    {
        id: 2,
        category: "Machinery",
        categoryIcon: "icon-truck",
        title: "Agricultural Machinery",
        description: "New and used agricultural machinery including tractors, harvesters, and farming equipment from reputable international suppliers.",
        image: AgricultureImg1,
        condition: ["New", "Used"],
        features: ["Modern technology", "Fuel efficient", "Easy maintenance", "Global support"],
        link: "/quote"
    },
    {
        id: 3,
        category: "Machinery",
        categoryIcon: "icon-truck",
        title: "Industrial Machinery",
        description: "Industrial and commercial machinery for various manufacturing and processing applications. Custom sourcing available.",
        image: MachineryImg2,
        condition: ["New", "Used"],
        features: ["Industrial grade", "High efficiency", "Durable construction", "Custom options"],
        link: "/quote"
    },
    // Auto Parts & Vehicles
    {
        id: 4,
        category: "Auto Parts & Vehicles",
        categoryIcon: "icon-shipment",
        title: "Used Auto Parts",
        description: "Quality used auto parts for various vehicle makes and models. Thoroughly inspected and tested for reliability.",
        image: AutoPartsImg1,
        condition: ["Used", "Refurbished"],
        features: ["Quality tested", "Wide selection", "Competitive prices", "Fast shipping"],
        link: "/quote"
    },
    {
        id: 5,
        category: "Auto Parts & Vehicles",
        categoryIcon: "icon-shipment",
        title: "New Auto Parts",
        description: "Brand new auto parts from OEM and trusted aftermarket manufacturers. Full warranty and quality assurance.",
        image: AutoPartsImg2,
        condition: ["New"],
        features: ["OEM quality", "Full warranty", "Latest models", "International standards"],
        link: "/quote"
    },
    {
        id: 6,
        category: "Auto Parts & Vehicles",
        categoryIcon: "icon-shipment",
        title: "Used Vehicles",
        description: "Well-maintained used vehicles for commercial and personal use. Available for export with complete documentation.",
        image: VehiclesImg1,
        condition: ["Used"],
        features: ["Well maintained", "Complete papers", "Export ready", "Competitive pricing"],
        link: "/quote"
    },
    // Textiles
    {
        id: 7,
        category: "Textiles",
        categoryIcon: "icon-delivery-man",
        title: "Textile Fabrics",
        description: "High-quality textile fabrics in various types and designs. Available for bulk orders with competitive pricing.",
        image: TextileImg1,
        condition: ["New"],
        features: ["Various types", "Bulk orders", "Quality assured", "Competitive rates"],
        link: "/quote"
    },
    {
        id: 8,
        category: "Textiles",
        categoryIcon: "icon-delivery-man",
        title: "Second-Hand Textile Materials",
        description: "Quality second-hand textile materials and cut pieces for recycling and manufacturing purposes.",
        image: TextileImg2,
        condition: ["Used"],
        features: ["Recyclable", "Cost effective", "Regular supply", "Various grades"],
        link: "/quote"
    },
    {
        id: 9,
        category: "Textiles",
        categoryIcon: "icon-delivery-man",
        title: "Garments & Textile Products",
        description: "Ready-made garments and textile products from reliable manufacturers. Custom orders available.",
        image: TextileImg1,
        condition: ["New"],
        features: ["Quality fabric", "Custom orders", "Bulk quantities", "International standards"],
        link: "/quote"
    },
    // Electronics
    {
        id: 10,
        category: "Electronics",
        categoryIcon: "icon-global-services",
        title: "Commercial Electronics",
        description: "Commercial electronics for business and industrial applications. Available subject to availability and lawful trade.",
        image: ElectronicsImg1,
        condition: ["New", "Used"],
        features: ["Commercial grade", "Brand options", "Wide selection", "Trade compliant"],
        link: "/quote"
    },
    {
        id: 11,
        category: "Electronics",
        categoryIcon: "icon-global-services",
        title: "Electrical Components",
        description: "Electrical and electronic components for various applications. Sourced from reputable international suppliers.",
        image: ElectronicsImg2,
        condition: ["New"],
        features: ["Quality components", "International standards", "Various types", "Competitive pricing"],
        link: "/quote"
    },
    // Food & Agriculture
    {
        id: 12,
        category: "Food & Agriculture",
        categoryIcon: "icon-shipment",
        title: "Food Products",
        description: "Quality food products and agricultural commodities sourced from reliable producers and suppliers.",
        image: AgricultureImg1,
        condition: ["New"],
        features: ["Quality assured", "Commodities", "Bulk supply", "International standards"],
        link: "/quote"
    },
    // Stones & Gems
    {
        id: 13,
        category: "Stones & Gems",
        categoryIcon: "icon-global-services",
        title: "Precious & Semi-Precious Gemstones",
        description: "High-grade natural cut and polished gemstones including rubies, sapphires, emeralds, topazes, and aquamarines sourced internationally.",
        image: "/Stones-and-Gems.jpg",
        condition: ["Natural", "Certified"],
        features: ["Certified authenticity", "Custom cut & polish", "Bulk & specimen orders", "Global export compliance"],
        link: "/contact"
    },
    {
        id: 14,
        category: "Stones & Gems",
        categoryIcon: "icon-global-services",
        title: "Rough & Decorative Mineral Stones",
        description: "Natural rough gemstone minerals, quartz crystals, lapidary rough, and decorative stones for jewelry artisans and commercial buyers.",
        image: "/Stones-and-Gems.jpg",
        condition: ["Natural", "Raw"],
        features: ["Ethically sourced", "Assorted grades", "Worldwide shipping", "Custom procurement"],
        link: "/contact"
    }
];

// Category List for Filter
const categories = ["All", "Machinery", "Auto Parts & Vehicles", "Textiles", "Electronics", "Food & Agriculture", "Stones & Gems"];

const Products: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>("All");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [openLightBox, setOpenLightBox] = useState<boolean>(false);
    const [index] = useState<number>(0);
    const images: string[] = productsData.map(product => product.image);

    // Filter products based on category and search
    const filteredProducts = productsData.filter(product => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <>
            <DefaultBanner title="Products & Trading Categories" />

            <section className="products-page" style={{ padding: '80px 0' }}>
                <div className="container">
                    {/* Category Filter */}
                    <div className="products-filter" style={{ marginBottom: '40px' }}>
                        <div className="row">
                            <div className="col-md-8">
                                <ul className="category-filter list-unstyled" style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                    marginBottom: '20px'
                                }}>
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => setActiveCategory(cat)}
                                                style={{
                                                    padding: '10px 25px',
                                                    background: activeCategory === cat ? '#fdc603' : 'transparent',
                                                    color: activeCategory === cat ? '#fff' : '#062f3a',
                                                    border: activeCategory === cat ? '1px solid #fdc603' : '1px solid #e6e6e6',
                                                    borderRadius: '30px',
                                                    cursor: 'pointer',
                                                    fontSize: '15px',
                                                    fontWeight: activeCategory === cat ? '600' : '400',
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 20px',
                                        border: '1px solid #e6e6e6',
                                        borderRadius: '30px',
                                        fontSize: '15px',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="row">
                        {filteredProducts.map((product, idx) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={product.id}>
                                <FadeInAdvanced
                                    variant={idx % 3 === 0 ? 'fadeInLeft' : idx % 3 === 1 ? 'fadeInUp' : 'fadeInRight'}
                                    delay={100 + (idx % 3) * 100}
                                >
                                    <div className="product-card" style={{
                                        background: '#fff',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 60px rgba(0,0,0,0.07)',
                                        marginBottom: '30px',
                                        transition: 'transform 0.3s ease',
                                        height: '100%'
                                    }}>
                                        {/* Image */}
                                        <div className="product-card__image" style={{ position: 'relative', overflow: 'hidden' }}>
                                            <img
                                                src={product.image}
                                                alt={product.title}
                                                style={{
                                                    width: '100%',
                                                    height: '250px',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '15px',
                                                left: '15px',
                                                display: 'flex',
                                                gap: '8px',
                                                flexWrap: 'wrap'
                                            }}>
                                                {product.condition.map((cond, i) => (
                                                    <span key={i} style={{
                                                        background: cond === 'New' ? '#198754' : '#fdc603',
                                                        color: '#fff',
                                                        padding: '4px 12px',
                                                        borderRadius: '20px',
                                                        fontSize: '12px',
                                                        fontWeight: '600'
                                                    }}>
                                                        {cond}
                                                    </span>
                                                ))}
                                            </div>
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '15px',
                                                right: '15px',
                                                background: 'rgba(253, 198, 3, 0.9)',
                                                padding: '6px 14px',
                                                borderRadius: '20px',
                                                fontSize: '13px',
                                                color: '#fff',
                                                fontWeight: '600'
                                            }}>
                                                {product.category}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div style={{ padding: '25px 25px 30px' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                                <span className={product.categoryIcon} style={{ color: '#fdc603', fontSize: '24px' }}></span>
                                                <span style={{ fontSize: '14px', color: '#585b6b' }}>{product.category}</span>
                                            </div>
                                            <h4 style={{
                                                fontSize: '20px',
                                                fontWeight: '600',
                                                color: '#062f3a',
                                                marginBottom: '12px',
                                                lineHeight: '1.3'
                                            }}>
                                                {product.title}
                                            </h4>
                                            <p style={{
                                                fontSize: '15px',
                                                color: '#585b6b',
                                                lineHeight: '1.6',
                                                marginBottom: '15px'
                                            }}>
                                                {product.description}
                                            </p>

                                            {/* Features */}
                                            <ul style={{
                                                listStyle: 'none',
                                                padding: 0,
                                                marginBottom: '20px'
                                            }}>
                                                {product.features.map((feature, i) => (
                                                    <li key={i} style={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '8px',
                                                        padding: '4px 0',
                                                        fontSize: '14px',
                                                        color: '#062f3a'
                                                    }}>
                                                        <span style={{ color: '#fdc603' }}>✓</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                        </div>
                                    </div>
                                </FadeInAdvanced>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '60px 0' }}>
                            <h3 style={{ color: '#062f3a', marginBottom: '15px' }}>No Products Found</h3>
                            <p style={{ color: '#585b6b' }}>Try adjusting your search or filter criteria.</p>
                        </div>
                    )}

                    {/* Note about other products */}
                    <div style={{
                        textAlign: 'center',
                        marginTop: '40px',
                        padding: '30px',
                        background: '#f4f5f9',
                        borderRadius: '20px'
                    }}>
                        <p style={{ fontSize: '16px', color: '#585b6b', marginBottom: '10px' }}>
                            We also source and supply other products according to buyer requirements, market availability
                            and applicable import-export regulations.
                        </p>
                        <Link to="/quote" className="thm-btn">
                            Contact Us for Sourcing
                            <span><i className="icon-right-arrow"></i></span>
                        </Link>
                    </div>
                </div>
            </section>

            <Lightbox
                open={openLightBox}
                close={() => setOpenLightBox(false)}
                index={index}
                slides={images.map((src) => ({ src }))}
            />
        </>
    );
};

export default Products;