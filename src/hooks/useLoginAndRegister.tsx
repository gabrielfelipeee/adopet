import { useContext } from "react"
import { LoginContext } from "../context/LoginAndRegisterContext";

import logoBlue from '../assets/logo-blue.svg';
import paws from '../assets/paws.svg';



const useLoginAndRegister = () => {
    const context = useContext(LoginContext);

    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    }


    const {
        password,
        setPassword,
        showPassword,
        setShowPassword,
    } = context;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return {
        togglePasswordVisibility,
        password,
        setPassword,
        showPassword,
        logoBlue,
        paws
    }
}
export default useLoginAndRegister;