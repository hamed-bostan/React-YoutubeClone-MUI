import { Avatar, Badge, Box, IconButton, Stack, Toolbar, Tooltip, Typography, styled } from "@mui/material";
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MuiAppBar from '@mui/material/AppBar';


export const StyledAppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    // backgroundColor: '#fff',
    backgroundColor: theme.palette.primary.light,
    position: 'fixed',
    zIndex: theme.zIndex.drawer + 1,
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
    // backgroundColor: '#fff',
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


export const MenuANDLogoContainer = styled(Box)(() => ({
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    // columnGap: 2,
    columnGap: '1rem'
}))

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
    // color: '#0f0f0f',
    color: theme.palette.primary.main,
    ":hover": {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
}))

export const LogoIconButton = styled(IconButton)(() => ({
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    minWidth: 0,
    minHeight: 0,
    ":hover": { backgroundColor: 'none' }
}))

export const YoutubeIcon = styled(SmartDisplayIcon)(() => ({
    color: 'red',
    fontSize: '1.8rem'
}))

export const YoutubeText = styled(Typography)(() => ({
    fontWeight: '700'
}))






export const SearchContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    flex: 3,
    alignItems: 'center',
    // gap: { 2}
    gap: '1rem',
}))

export const MicIconButton = styled(IconButton)(({ theme }) => ({
    width: 40,
    height: 40,
    // backgroundColor: 'rgba(0,0,0,0.05)',
    backgroundColor: theme.palette.secondary.light,
    ":hover": {
        // backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundColor: theme.palette.secondary.main,

    }
}))

export const MicIcon = styled(MicOutlinedIcon)(({ theme }) => ({
    // color: "#0f0f0f",
    color: theme.palette.primary.main,
}))

export const AutoCompleteContainer = styled('div')(({ isFocus }) => ({
    width: isFocus ? '85%' : '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: 40,
    minHeight: '2.5rem',
    boxShadow: 'inset 1px 1px 1px 0.05px #eee',
}))







export const IconsContainer = styled(Box)(() => ({
    // gap={ 3}
    gap: '1.5rem',
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'end'
}))

export const CameraIconButton = styled(IconButton)(({ theme }) => ({
    ":hover": {
        width: 40,
        height: 40,
        // backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const CameraIcon = styled(VideocamOutlinedIcon)(({ theme }) => ({
    // color: "#0f0f0f",
    color: theme.palette.primary.main,
}))


export const NotificationIconButton = styled(IconButton)(({ theme }) => ({
    ":hover": {
        width: 40,
        height: 40,
        // backgroundColor: 'rgba(0,0,0,0.1)',
        backgroundColor: theme.palette.secondary.main,
    }
}))


export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 5,
        border: `2px solid ${theme.palette.primary.light}`,
        padding: '0 5px',
    },
}))



export const NotificationIcon = styled(NotificationsNoneOutlinedIcon)(({ theme }) => ({
    // color: "#0f0f0f",
    color: theme.palette.primary.main,
}))


export const StyledAvatar = styled(Avatar)(({ src }) => ({
    src: `url(${src})`,
    width: 35,
    height: 35,
    cursor: 'pointer'
}))


export const StyledTooltip = styled(Tooltip)(() => ({

}))
