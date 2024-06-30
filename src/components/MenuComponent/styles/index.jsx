import { ListItemIcon, Menu, MenuItem, styled } from "@mui/material";

export const StyledMenu = styled(Menu)(() => ({
    '.MuiMenu-paper': {
        boxShadow: '0px 0px 0.7px rgba(0,0,0,0.1)',
        borderRadius: '0.725rem',
    }
}))

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.primary.main,
    padding: 0,
    paddingRight: '0.75rem',
    paddingLeft: '1rem',
    minHeight: 0,
    height: '2.25rem',
    fontSize: '0.875rem',
    ":hover": {
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.primary.main
}))