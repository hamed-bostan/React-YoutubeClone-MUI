import { Avatar, Box, IconButton, Stack, Typography, styled } from "@mui/material";

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

export const StyledIconButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: '1.25rem',
    right: '0.875rem',
    color: '#fff',
    backgroundColor: isMouseOver && '#0f0f0f',
    display: !isVideoPlaying && 'none'
}))

export const StyledDuration = styled(Typography)(() => ({
    position: 'absolute',
    bottom: '1rem',
    right: '0.875rem',
    color: '#fff',
    backgroundColor: '#0f0f0f',
    borderRadius: '0.25rem',
    fontSize: '0.75rem',
    // px: 0.5,
    padding: '0 0.2rem'
}))

// Bottom of container
// Bottom of container
export const StackInformationContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    // columnGap={ 1},
    columnGap: '0.5rem',
    width: '100%'
}))

export const StyledAvatar = styled(Avatar)(() => ({
    width: '2.25rem',
    height: '2.25rem'
}))

export const BoxWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    // rowGap: 0.5,
    rowGap: '0.1rem',
    width: '100%'
}))

export const StackTitleContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between'
}))

export const StyledTitle = styled(Typography)(() => ({
    fontSize: '1rem',
    color: '#0f0f0f'
}))

export const StyledChannelName = styled(Typography)(() => ({
    fontSize: '0.875rem',
    color: '#606060',
    ":hover": {
        color: '#404040'
    }
}))

export const StackViewsContainer = styled(Stack)(() => ({
    flexDirection: 'row',
    color: '#606060',
    alignItems: 'center',
    // columnGap={ 2},
    columnGap: '1.5rem'
}))

export const StackViewsWrapper = styled(Stack)(() => ({
    flexDirection: 'row',
    columnGap: '0.2rem'
}))

export const StyledViews = styled(Typography)(() => ({
    fontSize: '0.875rem'
}))