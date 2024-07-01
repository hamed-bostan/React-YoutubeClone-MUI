import { Avatar, Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material"

export const StyledListContainer = styled(List, {
    shouldForwardProp: (prop) => prop !== 'isDrawerOpen'
})(({ isDrawerOpen }) => ({
    padding: isDrawerOpen && '0.75rem',
}))

export const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'pathname' && prop !== 'path' && prop !== 'isDrawerOpen'
})(({ pathname, path, isDrawerOpen, theme }) => ({
    backgroundColor: pathname == path && isDrawerOpen && theme.palette.secondary.light,
    borderRadius: pathname == path && '0.75rem',
    flexDirection: isDrawerOpen ? 'row' : 'column',
    columnGap: '1.725rem',
    padding: 0,
    minHeight: isDrawerOpen && '2.5rem',
    paddingRight: isDrawerOpen && '0.75rem',
    paddingLeft: isDrawerOpen && '0.75rem',
    paddingTop: !isDrawerOpen && '1rem',
    paddingBottom: !isDrawerOpen && '1rem',
    ":hover": {
        borderRadius: '0.75rem',
        backgroundColor: pathname == path && isDrawerOpen ? theme.palette.secondary.main : theme.palette.secondary.light,
    },
}))

export const StyledListItemButtonShowMore = styled(ListItemButton, { shouldForwardProp: (prop) => prop !== 'isDrawerOpen' })(({ theme, isDrawerOpen }) => ({
    borderRadius: '0.75rem',
    flexDirection: 'row',
    columnGap: '1.725rem',
    padding: 0,
    paddingRight: isDrawerOpen && '0.75rem',
    paddingLeft: isDrawerOpen && '0.75rem',
    minHeight: isDrawerOpen && '2.5rem',
    ":hover": {
        borderRadius: '0.75rem',
        backgroundColor: theme.palette.secondary.light,
    },
    ":focus": {
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const StyledListItemIcon = styled(ListItemIcon, {
    shouldForwardProp: (prop) => prop !== 'isDrawerOpen'
})(({ isDrawerOpen, theme }) => ({
    justifyContent: !isDrawerOpen && 'center',
    minWidth: 0,
    color: theme.palette.primary.main
}))

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.primary.main,
    margin: 0,
}))

export const TextContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    paddingLeft: '0.75rem',
}))

export const StyledTypography = styled(Typography)(() => ({
    fontSize: '1rem',
    fontWeight: '600',
}))

export const StyledAvatar = styled(Avatar)(() => ({
    width: '1.5rem',
    height: '1.5rem'
}))
