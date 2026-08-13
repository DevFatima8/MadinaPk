import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import BlogDetailsMain from '../../features/blog/BlogDetailsMain';

const BlogDetails: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog Details'/>
            <BlogDetailsMain />
        </>
    );
};

export default BlogDetails;