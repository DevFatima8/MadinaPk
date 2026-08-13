import React from 'react';
import DefaultBanner from '../../features/default-banner/DefaultBanner';
import BlogRightSidebarMain from '../../features/blog/BlogRightSidebarMain';

const BlogRightSidebar: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Blog Right Sidebar' />
            <BlogRightSidebarMain />
        </>
    );
};

export default BlogRightSidebar;