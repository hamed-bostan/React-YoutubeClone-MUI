import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
    // const [open, setOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const value = {
        // open, setOpen,
        isDrawerOpen, setIsDrawerOpen
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}