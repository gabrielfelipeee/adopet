import { useContext, useEffect } from "react"


import { WindowWidthContext } from "../context/WindowWidthContext"



const useWindowWidth = () => {
    const context = useContext(WindowWidthContext);

    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    }

    const {
        isMobile,
        setIsMobile,
        windowWidth,
        setWindowWidth
    } = context;

    const handleResize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        setIsMobile(width < 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isMobile,
        windowWidth
    }
}
export default useWindowWidth;
