import { useContext, FormEvent } from "react"
import { LoginContext } from "../context/LoginContext";

import logoBlue from '../assets/logo-blue.svg';
import paws from '../assets/paws.svg';
import { useNavigate } from "react-router-dom";



const useLogin = () => {
    const navigate = useNavigate();
    const context = useContext(LoginContext);

    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    }

    const {
        password,
        setPassword,
        email,
        setEmail
    } = context;


    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validate = () => {
            let result = true;
            if (email === '' || email === null) {
                result = false;
                alert('Digite um email válido');
            }
            if (password === '' || password === null) {
                result = false;
                alert('Digite sua senha');
            }
            return result;
        }

        if (validate()) {
            try {
                const response = await fetch(`http://localhost:3000/user/${email}`);
                const userData = await response.json();

                if (Object.keys(userData).length === 0) {
                    alert('Usuário não encontrado');
                    return;
                }

                if (userData.password === password) {
                    sessionStorage.setItem('email', email);
                    navigate('/');
                } else {
                    alert('Credenciais inválidas');
                }
            } catch (error) {
                console.error('Erro ao fazer login:', error);
                alert('Erro ao fazer login');
            } finally {
            }
        }
    }





    return {
        password,
        setPassword,
        email,
        setEmail,
        logoBlue,
        paws,
        login
    }
}
export default useLogin;
