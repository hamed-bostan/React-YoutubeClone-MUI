import { Stack, Toolbar, styled } from "@mui/material";

import MuiAppBar from '@mui/material/AppBar';


export const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'isDesktopScreen'
})(({ theme, open, isDesktopScreen }) => ({
    backgroundColor: theme.palette.primary.light,
    position: 'fixed',
    zIndex: isDesktopScreen && theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const StyledToolbar = styled(Toolbar)(() => ({
    padding: '0',
}))

export const StackContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingRight: '1rem',
    paddingLeft: '1rem'
}))

