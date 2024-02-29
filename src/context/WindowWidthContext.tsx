import { createContext, useState, ReactNode } from "react";


interface WindowWidthContextType {
    isMobile: boolean,
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>,
    windowWidth: number,
    setWindowWidth: React.Dispatch<React.SetStateAction<number>>,
}
interface WindowWidthProviderProps {
    children: ReactNode,
}


const WindowWidthContext = createContext<WindowWidthContextType | null>(null);
WindowWidthContext.displayName = "WindowWidth";

const WindowWidthProvider = ({ children }: WindowWidthProviderProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    return (
        <WindowWidthContext.Provider value={
            {
                isMobile,
                setIsMobile,
                windowWidth,
                setWindowWidth
            }
        }
        >
            {children}
        </WindowWidthContext.Provider>
    );
}
export {WindowWidthContext, WindowWidthProvider};