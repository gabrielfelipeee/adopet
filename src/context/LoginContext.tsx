import { createContext, useState, ReactNode } from "react";


interface LoginContextType {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
    email: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>
}

interface LoginProviderProps {
    children: ReactNode,
}


const LoginContext = createContext<LoginContextType | null>(null);
LoginContext.displayName = "Login";

const LoginProvider = ({ children }: LoginProviderProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginContext.Provider value={
            {
                password,
                setPassword,
                email,
                setEmail
            }
        }
        >
            {children}
        </LoginContext.Provider>
    );
}
export {LoginContext, LoginProvider};