import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import BlogStandartMain from '../../features/blog/BlogStandartMain';

const BlogStandart: React.FC = () => {
    return (
        <>
         <DefaultBanner title='Blog & News' />
         <BlogStandartMain />   
        </>
    );
};

export default BlogStandart;