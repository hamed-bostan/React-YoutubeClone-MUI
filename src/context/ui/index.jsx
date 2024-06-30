import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, useContext, useState } from "react";

export const UIContext = createContext();
export const useUIContext = () => useContext(UIContext)

export const UIProvider = ({ children }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const [isSearchBarFocused, setIsSearchBarFocused] = useState(false)

    
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const theme = useTheme()
    const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'))
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

    const [storedData, setStoredData] = useState(initialData)


    const value = {
        isSearchBarFocused, setIsSearchBarFocused,
        isDrawerOpen, setIsDrawerOpen,
        anchorEl, setAnchorEl, open,
        isDesktopScreen, isMobileScreen,
        storedData, setStoredData
    }
    return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}


const initialData = [
    { id: "1", textInformation: 'react JS tutorial' },
    { id: "2", textInformation: 'learn react with traversy media' },
    { id: "3", textInformation: 'big bang theory best scenes' },
    { id: "4", textInformation: 'jean-luc godard best films' },
    { id: "5", textInformation: "typescript crash course" },
    { id: "6", textInformation: "hamed" },
]