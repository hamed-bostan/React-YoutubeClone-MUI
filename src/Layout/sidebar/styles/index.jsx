import { Box, styled } from "@mui/material";
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
    paddingRight: !isDrawerOpen && '0.25rem',
    paddingLeft: !isDrawerOpen && '0.25rem',
}))
