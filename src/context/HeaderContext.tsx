import { createContext, useState, ReactNode } from "react";


interface HeaderContextType {
    displayMenu: string,
    setDisplayMenu: React.Dispatch<React.SetStateAction<string>>,
    showHome: boolean,
    setShowHome: React.Dispatch<React.SetStateAction<boolean>>
}


interface HeaderProviderProps {
    children: ReactNode,
}


const HeaderContext = createContext<HeaderContextType | null>(null);
HeaderContext.displayName = "Login";

const HeaderProvider = ({ children }: HeaderProviderProps) => {
    const [showHome, setShowHome] = useState(false);

    const [displayMenu, setDisplayMenu] = useState("none")


    return (
        <HeaderContext.Provider value={
            {
                displayMenu,
                setDisplayMenu,
                showHome,
                setShowHome
            }
        }
        >
            {children}
        </HeaderContext.Provider>
    );
}
export {HeaderContext, HeaderProvider};