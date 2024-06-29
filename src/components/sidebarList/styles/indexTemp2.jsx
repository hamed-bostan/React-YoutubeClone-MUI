import { Avatar, Box, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material"


// goes here

export const StyledListItemButtons = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'pathname' && prop !== 'path' && prop !== 'isDrawerOpen'
})(({ pathname, path, isDrawerOpen, theme }) => ({
    borderRadius: pathname == path && '0.75rem',
    flexDirection: 'row',
    columnGap: '1.725rem',
    padding: 0,
    paddingRight: isDrawerOpen && '0.8rem',
    paddingLeft: isDrawerOpen && '0.8rem',
    paddingTop: isDrawerOpen ? '0.35rem' : '1rem',
    paddingBottom: isDrawerOpen ? '0.35rem' : '1rem',
    ":hover": {
        borderRadius: '0.75rem',
        // backgroundColor: pathname == path && isDrawerOpen ? theme.palette.secondary.main : theme.palette.secondary.light,
    },
}))

// goes here



export const StyledListItemButton = styled(StyledListItemButtons, {
    shouldForwardProp: (prop) => prop !== 'pathname' && prop !== 'path' && prop !== 'isDrawerOpen'
})(({ pathname, path, isDrawerOpen, theme }) => ({
    backgroundColor: pathname == path && isDrawerOpen && theme.palette.secondary.light,
    flexDirection: isDrawerOpen ? 'row' : 'column',



    ":hover": {
        backgroundColor: pathname == path && isDrawerOpen ? theme.palette.secondary.main : theme.palette.secondary.light,
    },
}))

// show more goes here
export const StyledListItemShowData = styled(StyledListItemButtons)(({ theme }) => ({
    ":hover": {
        backgroundColor: theme.palette.secondary.light,
    },
    ":focus": {
        backgroundColor: theme.palette.secondary.main,
    }
}))
// show more goes here

export const StyledListItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'isDrawerOpen'
})(({ isDrawerOpen, theme }) => ({
    justifyContent: !isDrawerOpen && 'center',
    minWidth: 0,
    color: theme.palette.primary.main
}))

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const TextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    paddingLeft: '0.5rem'
}))

export const StyledTypography = styled(Typography)(() => ({
    fontSize: '1rem',
    fontWeight: '600',
}))

export const StyledAvatar = styled(Avatar)(() => ({
    width: '1.5rem',
    height: '1.5rem'
}))