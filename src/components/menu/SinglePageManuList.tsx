import React from 'react';
import { Link, useLocation } from 'react-router';
import useTransportContext from '../context/useTransportContext';
interface SinglePageMenuItem {
    id: number;
    linkId: string;
    value: string;
}
const singlePageMenuListHomeOne: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "about", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "projects", value: "Projects" },
    { id: 5, linkId: "contact", value: "Contact" },
    { id: 6, linkId: "team", value: "Team" },
    { id: 7, linkId: "blog", value: "Blog" }
]
const singlePageMenuListHomeThree: SinglePageMenuItem[] = [
    { id: 1, linkId: "home", value: "Home" },
    { id: 2, linkId: "aboutThree", value: "About" },
    { id: 3, linkId: "services", value: "Services" },
    { id: 4, linkId: "projects", value: "Projects" },
    { id: 5, linkId: "contactThree", value: "Contact" },
    { id: 6, linkId: "team", value: "Team" },
    { id: 7, linkId: "blog", value: "Blog" }
]
 

const SinglePageManuList: React.FC = () => {
    const { activeSection, setIsMobileManu, scrollToSection } = useTransportContext();
    const currentPath = useLocation().pathname;
    return (
        <ul className="main-menu__list one-page-scroll-menu">
            {
                (currentPath === "/single-page-home-three" ? singlePageMenuListHomeThree : singlePageMenuListHomeOne).map((item: SinglePageMenuItem) => (
                    <li key={item?.id} className={`scrollToLink ${activeSection === item?.linkId ? "current" : ""}`}>
                        <Link to={`#${item?.linkId}`} onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.linkId);
                            setIsMobileManu(false)
                        }}>{item?.value}</Link>
                    </li>
                ))
            }
        </ul>
    );
};

export default SinglePageManuList;