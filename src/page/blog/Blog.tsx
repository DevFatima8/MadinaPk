import React, { useState } from 'react';
import { Link } from 'react-router';

import DefaultBanner from '../../features/default-banner/DefaultBanner';
import { blogData } from '../../contents/blog/blogData';


const Blog: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    // Calculate paginated product
    const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentProducts = blogData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    return (
        <>
            <DefaultBanner title='Blog' />
            <section className="blog-page">
                <div className="container">
                    <div className="row">
                        {currentProducts.map((post) => (
                            <div className="col-xl-4 col-lg-6 col-md-6" key={post.id}>
                                <div className="blog-two__single">
                                    <div className="blog-two__img">
                                        <img src={post.image} alt="blog" />
                                        <div className="blog-two__plus">
                                            <Link to={post.slug}><i className="icon-plus"></i></Link>
                                        </div>
                                        <div className="blog-two__tag">
                                            <Link to={post.slug}>{post.category}</Link>
                                        </div>
                                    </div>
                                    <div className="blog-two__content">
                                        <ul className="blog-two__meta list-unstyled">
                                            <li>
                                                <Link to={post.slug}>
                                                    <span className="fas fa-calendar-alt"></span>{post.date}
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to={post.slug}>
                                                    <span className="fas fa-comments"></span>Comment
                                                </Link>
                                            </li>
                                        </ul>
                                        <h3 className="blog-two__title">
                                            <Link to={post.slug}>{post.title}</Link>
                                        </h3>
                                        <div className="blog-two__author-and-btn">
                                            <div className="blog-two__author-info">
                                                <div className="blog-two__author-img-box">
                                                    <div className="blog-two__author-img">
                                                        <img src={post.authorImage} alt="author" />
                                                    </div>
                                                </div>
                                                <div className="blog-two__author-content">
                                                    <h5>{post.authorName}</h5>
                                                    <p>{post.date}</p>
                                                </div>
                                            </div>
                                            <div className="blog-two__arrow-box">
                                                <Link to={post.slug} className="blog-two__arrow">
                                                    <span className="icon-right-arrow"></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <ul className="styled-pagination text-center clearfix list-unstyled">
                            <li className="arrow prev">
                                <button
                                    onClick={(e) => { handlePageChange(currentPage - 1); e.preventDefault() }}
                                    disabled={currentPage === 1}
                                ><span className="fas fa-angle-left"></span> </button>
                            </li>
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <li
                                    key={index}
                                    className={`count ${currentPage === index + 1 ? "active" : ""}`}
                                >
                                    <button
                                        onClick={() => handlePageChange(index + 1)}
                                        className="pg-btn"
                                    >
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className="arrow next">
                                <button aria-label="Next"
                                    onClick={(e) => { handlePageChange(currentPage + 1); e.preventDefault() }}
                                    disabled={currentPage === totalPages}
                                >
                                    <span className="fas fa-angle-right"></span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;