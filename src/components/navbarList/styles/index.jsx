import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import { Avatar, Badge, Box, IconButton, Typography, styled } from "@mui/material";


export const MenuANDLogoContainer = styled(Box)(() => ({
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    columnGap: '1rem'
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

export const SearchContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row-reverse',
    flex: 3,
    alignItems: 'center',
    gap: '1rem',
}))

export const MicIconButton = styled(IconButton)(({ theme }) => ({
    width: 40,
    height: 40,
    backgroundColor: theme.palette.secondary.light,
    ":hover": {
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const MicIcon = styled(MicOutlinedIcon)(({ theme }) => ({
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
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const CameraIcon = styled(VideocamOutlinedIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const NotificationIconButton = styled(IconButton)(({ theme }) => ({
    ":hover": {
        width: 40,
        height: 40,
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
    color: theme.palette.primary.main,
}))

export const StyledAvatar = styled(Avatar)(({ src }) => ({
    src: `url(${src})`,
    width: '2rem',
    height: '2rem',
    cursor: 'pointer'
}))