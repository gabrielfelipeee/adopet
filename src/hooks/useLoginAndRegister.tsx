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
    } = context;



    return {
        password,
        setPassword,
        logoBlue,
        paws
    }
}
export default useLoginAndRegister;
