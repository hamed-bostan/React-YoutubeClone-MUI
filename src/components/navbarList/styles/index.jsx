import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { Avatar, Badge, Box, IconButton, Typography, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const MenuANDLogoContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isDrawerOpen' && prop !== 'isMobileScreen'
})
    (({ isDrawerOpen, isMobileScreen }) => ({
        display: 'flex',
        alignItems: 'center',
        columnGap: '1rem',
        paddingLeft: isDrawerOpen && isMobileScreen && '1rem',
        paddingTop: isDrawerOpen && isMobileScreen && '0.25rem',
        paddingBottom: isDrawerOpen && isMobileScreen && '0.25rem',
    }))

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
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

export const SearchWraper = styled(Box, { shouldForwardProp: (prop) => prop !== 'isDesktopScreen' })(({ isDesktopScreen }) => ({
    width: isDesktopScreen ? '40%' : '82%'
}))

export const SearchContainer = styled(Box,
    { shouldForwardProp: (prop) => prop !== 'isDesktopScreen' && prop !== 'isMobileScreen' && prop !== 'isSearchBarFocused' })
    (({ isDesktopScreen, isSearchBarFocused }) => ({
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 'auto',
        alignItems: 'center',
        gap: '1rem',
        width: isDesktopScreen && isSearchBarFocused ? '100%'
            : isDesktopScreen ? '95%'
                : '100%',
    }))

export const MicIconButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'isDesktopScreen' })
    (({ theme, isDesktopScreen }) => ({
        width: 40,
        height: 40,
        backgroundColor: isDesktopScreen && theme.palette.secondary.light,
        ":hover": {
            backgroundColor: theme.palette.secondary.main,
        }
    }))

export const MicIcon = styled(MicOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const AutoCompleteContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: 40,
    minHeight: '2.5rem',
    boxShadow: 'inset 1px 1px 1px 0.05px #eee',
    width: '100%',
}))

export const IconsContainer = styled(Box, { shouldForwardProp: (prop) => prop !== 'isMobileScreen' })(({ isMobileScreen }) => ({
    gap: isMobileScreen ? '0' : '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
}))

export const StyledIconsButton = styled(IconButton)(({ theme }) => ({
    ":hover": {
        width: 40,
        height: 40,
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const CameraIcon = styled(VideocamOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        top: 5,
        border: `2px solid ${theme.palette.primary.light}`,
        padding: '0 5px',
    },
}))

export const NotificationIcon = styled(NotificationsNoneOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const StyledAvatar = styled(Avatar, { shouldForwardProp: (prop) => prop !== 'isMobileScreen' })(({ src, isMobileScreen }) => ({
    src: `url(${src})`,
    width: '2rem',
    height: '2rem',
    cursor: 'pointer',
    marginLeft: isMobileScreen && '0.8rem'
}))

export const SubmitSearchIconMobile = styled(SearchIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))