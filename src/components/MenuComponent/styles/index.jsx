import { ListItemIcon, Menu, MenuItem, styled } from "@mui/material";

export const StyledMenu = styled(Menu)(() => ({
    '.MuiMenu-paper': {
        boxShadow: '0px 0px 0.7px rgba(0,0,0,0.1)',
        borderRadius: '0.725rem'
    }
}))

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontSize: '0.875rem',
    ":hover": {
        backgroundColor: theme.palette.secondary.main
    }
}))

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.primary.main
}))