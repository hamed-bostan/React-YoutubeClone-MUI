import { Box, Grid, IconButton } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import { formatDuration } from '../../utility/formatDuration';
import {
    ImageContainer, ThumbnailImage, StyledVideo, StyledIconButton, StyledDuration, StackInformationContainer, StyledAvatar, BoxWrapper,
    StackTitleContainer, StyledTitle, StyledChannelName, StackViewsContainer, StackViewsWrapper, StyledViews, StyledBulletPoint, StyledReactTimeAgo
} from './styles';


export const HomePageDetails = ({ thumbnailUrl, channel, title, videoUrl, duration, views, postedAt }) => {
    const [isTurnOn, setIsTurnOn] = useState({
        volume: false,
        filled: true,
    })

    const [isMouseOver, setIsMouseOver] = useState(false)

    const [isVideoPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current == null) return

        if (isVideoPlaying) {
            videoRef.current.currentTime = 0
            videoRef.current.play()
        }
        else {
            videoRef.current.pause()
        }

    }, [isVideoPlaying])

    const handleClickVolume = () => {
        setIsTurnOn(previousState => {
            return { ...previousState, volume: !isTurnOn.volume }
        });
    }

    const handleClickFilled = () => {
        setIsTurnOn(previousState => {
            return { ...previousState, filled: !isTurnOn.filled }
        });
    }

    const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })


    return (
        <Grid item lg={3} md={4}
            sx={{
                width: '21rem', height: '20.625rem', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 1.5, cursor: 'pointer'
            }}
        >
            <ImageContainer onMouseEnter={() => setIsVideoPlaying(true)} onMouseLeave={() => setIsVideoPlaying(false)}>
                <ThumbnailImage src={thumbnailUrl} isVideoPlaying={isVideoPlaying} />
                <StyledVideo ref={videoRef} muted playsInline src={videoUrl} isVideoPlaying={isVideoPlaying} />
                <IconButton onClick={handleClickVolume} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}
                    disableRipple
                    sx={{
                        position: 'absolute', top: '1.25rem', right: '0.875rem', color: '#fff', bgcolor: isMouseOver && '#0f0f0f',
                        display: !isVideoPlaying && 'none'
                    }}>
                    {isTurnOn.volume ? <VolumeUpOutlinedIcon fontSize='small' /> : <VolumeOffIcon fontSize='small' />}
                </IconButton>
                <IconButton onClick={handleClickFilled} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}
                    disableRipple
                    sx={{
                        position: 'absolute', top: '4.25rem', right: '0.875rem', color: '#fff', bgcolor: isMouseOver && '#0f0f0f',
                        display: !isVideoPlaying && 'none'
                    }}>
                    {isTurnOn.filled ? <SubtitlesIcon fontSize='small' /> : <SubtitlesOutlinedIcon fontSize='small' />}
                </IconButton>
                <StyledDuration>{formatDuration(duration)}</StyledDuration>
            </ImageContainer>

            {/* Bottom of container */}
            {/* Bottom of container */}
            <StackInformationContainer>
                <StyledAvatar src={channel.profileUrl} />
                <BoxWrapper>
                    <StackTitleContainer>
                        <StyledTitle>{title}</StyledTitle>
                        <MoreVertIcon />
                    </StackTitleContainer>
                    <Box>
                        <StyledChannelName>{channel.name}</StyledChannelName>
                        <StackViewsContainer>
                            <StackViewsWrapper>
                                <StyledViews>{VIEW_FORMATTER.format(views)}views</StyledViews>
                                <StyledBulletPoint />
                            </StackViewsWrapper>
                            <StyledReactTimeAgo date={postedAt} locale="en-US" />
                        </StackViewsContainer>
                    </Box>
                </BoxWrapper>
            </StackInformationContainer>
        </Grid>
    )
}
