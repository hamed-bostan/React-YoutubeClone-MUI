import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const value = {
        isDrawerOpen, setIsDrawerOpen
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}