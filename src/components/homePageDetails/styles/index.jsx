import { Avatar, Box, Grid, IconButton, Stack, Typography, styled } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ReactTimeAgo from 'react-time-ago'
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';

export const StyledGrid = styled(Grid)(() => ({
    width: '21rem',
    height: '20.625rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    // rowGap: 1.5,
    rowGap: '0.75rem',
}))


export const ImageContainer = styled(Box)(() => ({
    position: 'relative',
    width: '100%'
}))

export const ThumbnailImage = styled('img')(({ src, isVideoPlaying }) => ({
    src: `url(${src})`,
    width: '100%',
    borderRadius: !isVideoPlaying && '0.875rem'
}))

export const StyledVideo = styled('video')(({ src, isVideoPlaying }) => ({
    src: `url(${src})`,
    width: '100%',
    position: 'absolute',
    inset: '0',
    opacity: isVideoPlaying ? '100%' : '0%',
}))


// IconButton 
export const VolumeIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '1.25rem',
    right: '0.875rem',
    // color: '#fff',
    color: theme.palette.primary.light,

}));

export const StyledVolumeIconButton = styled(VolumeIconButton, {
    shouldForwardProp: (prop) => {
        return prop !== "isMouseOver" && prop !== "isVideoPlaying"
    }
})(({ isMouseOver, isVideoPlaying ,theme}) => ({
    // backgroundColor: isMouseOver && '#0f0f0f',
    backgroundColor: isMouseOver && theme.palette.primary.main,
    display: !isVideoPlaying && 'none'

}))

export const SubtitleIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '4.25rem',
    right: '0.875rem',
    // color: '#fff',
    color: theme.palette.primary.light,
}));

export const StyledSubtitleIconButton = styled(SubtitleIconButton,
    {
        shouldForwardProp: (prop) => {
            return prop !== "isMouseOver" && prop !== "isVideoPlaying"
        }
    })
    (({ isMouseOver, isVideoPlaying ,theme}) => ({
        // backgroundColor: isMouseOver && '#0f0f0f',
        backgroundColor: isMouseOver && theme.palette.primary.main,
        display: !isVideoPlaying && 'none'

    }))

export const StyledVolumeOnIcon = styled(VolumeUpOutlinedIcon)(() => ({
    fontSize: 'large'
}));

export const StyledVolumeOffIcon = styled(VolumeOffIcon)(() => ({
    fontSize: 'large'
}));

export const StyledSubtitleIcon = styled(SubtitlesIcon)(() => ({
    fontSize: 'large'
}));

export const StyledSubtitleOutlinedIcon = styled(SubtitlesOutlinedIcon)(() => ({
    fontSize: 'large'
}));
// IconButton 


export const StyledDuration = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    bottom: '1rem',
    right: '0.875rem',
    color: '#fff',
    // backgroundColor: '#0f0f0f',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
    // px: 0.5,
    paddingRight: '0.25rem',
    paddingLeft: '0.25rem'
}))

// Bottom of container
// Bottom of container
export const StackInformationContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    // columnGap={ 1},
    columnGap: '0.5rem',
    width: '100%'
}))

export const StyledAvatar = styled(Avatar)(({ src }) => ({
    src: `url(${src})`,
    width: '2.25rem',
    height: '2.25rem'
}))

export const BoxWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    // rowGap: 0.5,
    rowGap: '0.25rem',
    width: '100%'
}))

export const StackTitleContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between'
}))

export const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    // color: '#0f0f0f',
    color: theme.palette.primary.main,
    marginTop: '0.3rem'
}))


export const MoreIconContainer = styled(IconButton)(() => ({
    width: 40,
    height: 40,
    ":hover": { backgroundColor: 'transparent' }
}))



export const StyledChannelName = styled(Typography)(() => ({
    fontSize: '0.875rem',
    color: '#606060',
    ":hover": {
        color: '#404040',
    }
}))

export const StackViewsContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    color: '#606060',
    alignItems: 'center',
    // columnGap={ 2},
    columnGap: '1rem'
}))

export const StackViewsWrapper = styled(Stack)(() => ({
    flexDirection: 'row',
    columnGap: '0.2rem'
}))

export const StyledViews = styled(Typography)(() => ({
    fontSize: '0.875rem'
}))

export const StyledBulletPoint = styled(FiberManualRecordIcon)(() => ({
    height: '100%',
    width: '0.3rem',
    // mt: '0.4rem',
    marginTop: '0.4rem'
}))

export const StyledReactTimeAgo = styled(ReactTimeAgo)(() => ({
    fontSize: '0.875rem'
}))
