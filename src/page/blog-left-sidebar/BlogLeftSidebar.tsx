import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import BlogLeftSidebarMain from '../../features/blog/BlogLeftSidebarMain';

const BlogLeftSidebar: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog Left Sidebar' />
            <BlogLeftSidebarMain />
        </>
    );
};

export default BlogLeftSidebar;