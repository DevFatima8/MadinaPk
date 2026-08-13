import React from 'react';
import { Link } from 'react-router';
import TextAnimation from '../../components/elements/TextAnimation';
import FadeInAdvanced from '../../components/elements/FadeInAdvanced';
import SectionWrapper from '../../components/elements/SectionWrapper';
import Blog21 from '../../assets/images/blog/blog-2-1.jpg';
import Blog22 from '../../assets/images/blog/blog-2-2.jpg';
import Blog23 from '../../assets/images/blog/blog-2-3.jpg';
import BlogOneAuthorImg1 from '../../assets/images/blog/blog-one-author-img-1.jpg';
import BlogOneAuthorImg2 from '../../assets/images/blog/blog-one-author-img-2.jpg';
import BlogOneAuthorImg3 from '../../assets/images/blog/blog-one-author-img-3.jpg';

interface BlogPost {
    id: number;
    image: string;
    category: string;
    date: string;
    title: string;
    authorName: string;
    authorImage: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: Blog21,
        category: "Import & Export",
        date: "January 15, 2025",
        title: "Navigating International Trade Regulations",
        authorName: "Madina Team",
        authorImage: BlogOneAuthorImg1,
        slug: "/blog-details"
    },
    {
        id: 2,
        image: Blog22,
        category: "Industry News",
        date: "January 10, 2025",
        title: "Understanding Machinery Import Procedures",
        authorName: "Madina Team",
        authorImage: BlogOneAuthorImg2,
        slug: "/blog-details"
    },
    {
        id: 3,
        image: Blog23,
        category: "Sourcing Tips",
        date: "January 5, 2025",
        title: "How to Choose the Right Supplier for Your Business",
        authorName: "Madina Team",
        authorImage: BlogOneAuthorImg3,
        slug: "/blog-details"
    }
];

const BlogTwo: React.FC = () => {
    return (
        <SectionWrapper className="blog-two" id='blog'>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-1">
                            <i className="fas fa-plane"></i>
                        </div>
                        <h6 className="section-title__tagline">News & Insights</h6>
                        <span className="section-title__tagline-border"></span>
                        <div className="section-title__shape-2">
                            <i className="fas fa-plane"></i>
                        </div>
                    </div>
                    <h3 className="section-title__title">
                        <TextAnimation animationStyle="style1">
                            Latest News from <span>Global Trade</span>
                        </TextAnimation>
                    </h3>
                </div>
                <div className="row">
                    {blogPosts.map((post, index) => (
                        <div className="col-xl-4 col-lg-6" key={post.id}>
                            <FadeInAdvanced
                                variant={index === 0 ? 'fadeInLeft' : index === 1 ? 'fadeInUp' : 'fadeInRight'}
                                delay={100}
                            >
                                <div className="blog-two__single">
                                    <div className="blog-two__img">
                                        <img src={post.image} alt="blog" />
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
                                                    <span className="fas fa-comments"></span>0 Comments
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
                            </FadeInAdvanced>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default BlogTwo;