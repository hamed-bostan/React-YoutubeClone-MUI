import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const value = {
        isDrawerOpen, setIsDrawerOpen,
        anchorEl, setAnchorEl, open
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}