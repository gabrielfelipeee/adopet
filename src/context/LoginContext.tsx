import { createContext, useState, ReactNode } from "react";


interface LoginContextType {
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
    showPassword: boolean,
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
}

interface LoginProviderProps {
    children: ReactNode,
}


const LoginContext = createContext<LoginContextType | null>(null);
LoginContext.displayName = "Login";

const LoginProvider = ({ children }: LoginProviderProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    return (
        <LoginContext.Provider value={
            {
                showPassword,
                setShowPassword,
                password,
                setPassword,
            }
        }
        >
            {children}
        </LoginContext.Provider>
    );
}
export {LoginContext, LoginProvider};