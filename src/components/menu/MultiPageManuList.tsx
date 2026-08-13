import React from 'react';
import { Link, useLocation } from 'react-router';
import type { MenuItem } from '../../contents/navmenu/navType';
import { blogList, homeList, pagesList, servicesList, shopList } from '../../contents/navmenu/navItem';

const MultiPageManuList: React.FC = () => {
    const currentPath = useLocation().pathname;
    const findLocation = (array: MenuItem[]): boolean => {
        return array.some(item => item?.url === currentPath);
    };
    return (
        <ul className="main-menu__list">
            <li className={`dropdown ${findLocation(homeList) ? "current" : ""}`}>
                <a href="#">Home </a>
                <ul className="shadow-box">
                    {
                        homeList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link to={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/about" ? "current" : ""}>
                <Link to="/about">About</Link>
            </li>
            <li className={`dropdown ${findLocation(pagesList) ? "current" : ""}`}>
                <a href="#">Pages</a>
                <ul className="shadow-box">
                    {
                        pagesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link to={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(servicesList) ? "current" : ""}`}>
                <a href="#">Services</a>
                <ul className="shadow-box">
                    {
                        servicesList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link to={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(shopList) ? "current" : ""}`}>
                <a href="#">Shop</a>
                <ul className="shadow-box">
                    {
                        shopList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link to={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={`dropdown ${findLocation(blogList) ? "current" : ""}`}>
                <a href="#">Blog</a>
                <ul className="shadow-box">
                    {
                        blogList.map((item: MenuItem) => (
                            <li key={item?.id} className={currentPath === item?.url ? "current" : ""}><Link to={item?.url}>{item?.text}</Link></li>
                        ))
                    }
                </ul>
            </li>
            <li className={currentPath === "/contact" ? "current" : ""}>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    );
};

export default MultiPageManuList;