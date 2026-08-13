import React from 'react';
import { useLocation } from 'react-router';
import SinglePageManuList from './SinglePageManuList';
import MultiPageManuList from './MultiPageManuList';


const MainManuList: React.FC = () => {
    const currentPath = useLocation().pathname;
    const isSinglePage = currentPath.includes("single-page")

    if (isSinglePage) {
        return <SinglePageManuList />
    }

    return <MultiPageManuList />
};

export default MainManuList;