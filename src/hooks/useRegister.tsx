import { FormEvent, useContext } from "react"

import { RegisterContext } from "../context/RegisterContext";



const useRegister = () => {
    const context = useContext(RegisterContext);
    if (!context) {
        throw new Error("useWindowWidth must be used within a WindowWidthProvider");
    }
    const {
        name,
        setName,
        id,
        setId,
        password,
        setPassword,
        samePassword,
        setSamePassword,
        navigate
    } = context;


    const validatePassword = () => {
        if (samePassword === password) {
            return true
        } else {
            alert("As senhas não são iguais");
        }
    };

    async function userSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newUser = { id, name, password };
        if (validatePassword()) {
            try {
                const response = await fetch('http://localhost:3000/user', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser)
                });

                if (response.ok) {
                    navigate('/login');
                } else {
                    throw new Error('Erro ao criar usuário');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    return {
        name,
        setName,
        id,
        setId,
        password,
        setPassword,
        samePassword,
        setSamePassword,
        userSubmit
    }
}
export default useRegister;