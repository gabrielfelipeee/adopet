import { ReactNode, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterContextType {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>
    id: string,
    setId: React.Dispatch<React.SetStateAction<string>>
    password: string,
    setPassword: React.Dispatch<React.SetStateAction<string>>
    samePassword: string,
    setSamePassword: React.Dispatch<React.SetStateAction<string>>
    navigate: (props: string) => void
}

interface RegisterProviderProps {
    children: ReactNode
}

const RegisterContext = createContext<RegisterContextType | null>(null);
RegisterContext.displayName = "Register";

const RegisterProvider = ({ children }: RegisterProviderProps) => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [samePassword, setSamePassword] = useState("");

    return (
        <RegisterContext.Provider value={{
            name,
            setName,
            id,
            setId,
            password,
            setPassword,
            samePassword,
            setSamePassword,
            navigate
        }}>
            {children}
        </RegisterContext.Provider>
    )
}
export { RegisterContext, RegisterProvider }