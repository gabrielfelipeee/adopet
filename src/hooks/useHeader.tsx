import { useContext, useEffect } from "react"

import { useLocation, useNavigate } from "react-router-dom";
import { HeaderContext } from "../context/HeaderContext";



const useHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const context = useContext(HeaderContext);

    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    }

    const {
        showHome,
        setShowHome,
        displayMenu,
        setDisplayMenu
    } = context;


    useEffect(() => {
        if (location.pathname === '/inicio' || location.pathname === '/login' || location.pathname === '/cadastro') {
            sessionStorage.removeItem('email');
            setShowHome(false);
        } else {
            setShowHome(true);
            let email = sessionStorage.getItem('email');
            if (email === "" || email === null || email === undefined) {
                navigate('/inicio');
            }
        }
    }, [location]);

    const toggleMenu = () => {
        setDisplayMenu(prevDisplayMenu => prevDisplayMenu === "none" ? "block" : "none");
    }

    const logout = () => {
        sessionStorage.removeItem('email');
        setDisplayMenu("none");
        navigate('/inicio');
    }


    return {
        displayMenu,
        setDisplayMenu,
        logout,
        toggleMenu,
        showHome
    }
}
export default useHeader;
