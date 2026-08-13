import React, { useCallback, useMemo, useRef, useState } from 'react';
import TransportContext from './TransportContext';
import type { contextType } from '../../types/context';


const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    const [isMobileManu, setIsMobileManu] = useState<boolean>(false);
    const [isSidebar, setIsSidebar] = useState(false);
    const [isSearch, setIsSearch] = useState(false)
    const [showVideoPopup, setShowVideoPopup] = useState<boolean>(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
    const [activeSection, setActiveSection] = useState<string>("home");

    

    const registerSection = useCallback((id: string, element: HTMLElement | null): void => {
        sectionRefs.current[id] = element;
    }, [sectionRefs])

    const scrollToSection = useCallback((id: string): void => {
        const element = sectionRefs.current[id];
        if (!element) return;
        const offset = id === 'home' ? 140 : 70;
        const top = element.offsetTop - offset;
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    }, [sectionRefs])

    const handleVideoClick = useCallback((
        e: React.MouseEvent<HTMLAnchorElement>,
        videoUrl: string = "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
    ): void => {
        e.preventDefault();
        setCurrentVideoUrl(videoUrl);
        setShowVideoPopup(true);
    }, [setCurrentVideoUrl, setShowVideoPopup])


    const info: contextType = useMemo(() => (
        {
            isMobileManu, setIsMobileManu,
            isSidebar, setIsSidebar,
            isSearch, setIsSearch,
            showVideoPopup, setShowVideoPopup,
            currentVideoUrl, setCurrentVideoUrl,
            handleVideoClick,
            activeSection, setActiveSection,
            registerSection,
            scrollToSection
        }
    ), [isMobileManu, setIsMobileManu,
        isSidebar, setIsSidebar,
        isSearch, setIsSearch,
        showVideoPopup, setShowVideoPopup,
        currentVideoUrl, setCurrentVideoUrl,
        handleVideoClick,
        activeSection, setActiveSection,
        registerSection,
        scrollToSection])

    return (
        <TransportContext.Provider value={info}>
            {children}
        </TransportContext.Provider>
    );
};

export default ContextProvider;