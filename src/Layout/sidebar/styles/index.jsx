import { Avatar, Box, ListItemButton, ListItemIcon, ListItemText, Typography, styled } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const StyledDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),

        "& ::-webkit-scrollbar": {
            width: "8px",
            minWidth: "unset"
        },
        "& ::-webkit-scrollbar-track": {
            background: "#fff",
        },
        "& ::-webkit-scrollbar-thumb": {
            background: "#CCCCCC",
            borderRadius: "1px",
        },
        "& ::-webkit-scrollbar-thumb:hover": {
            background: "#C1C1C1",
        },
    }),
);

export const BoxContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isDrawerOpen'
})(({ isDrawerOpen }) => ({
    paddingRight: isDrawerOpen ? '0.7rem' : '0.25rem',
    paddingLeft: isDrawerOpen ? '0.7rem' : '0.25rem',
}))

export const StyledListItemButton = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== 'pathname' && prop !== 'path' && prop !== 'isDrawerOpen'
})(({ pathname, path, isDrawerOpen, theme }) => ({
    backgroundColor: pathname == path && isDrawerOpen && theme.palette.secondary.light,
    borderRadius: pathname == path && '0.75rem',
    flexDirection: isDrawerOpen ? 'row' : 'column',
    columnGap: '1.725rem',
    padding: 0,
    paddingRight: isDrawerOpen && '0.8rem',
    paddingLeft: isDrawerOpen && '0.8rem',
    paddingTop: isDrawerOpen ? '0.35rem' : '1rem',
    paddingBottom: isDrawerOpen ? '0.35rem' : '1rem',
    ":hover": {
        borderRadius: '0.75rem',
        backgroundColor: pathname == path && isDrawerOpen ? theme.palette.secondary.main : theme.palette.secondary.light,
    },
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