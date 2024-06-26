import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme()
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'))
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

    const value = {
        isDrawerOpen, setIsDrawerOpen,
        anchorEl, setAnchorEl, open,
        isDesktopScreen, isMobileScreen
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}