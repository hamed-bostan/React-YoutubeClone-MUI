import { Box } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { formatDuration } from '../../utility/formatDuration';
import {
    ImageContainer, ThumbnailImage, StyledVideo, StyledVolumeIconButton, StyledDuration, StackInformationContainer, StyledAvatar, BoxWrapper,
    StackTitleContainer, StyledTitle, StyledChannelName, StackViewsContainer, StackViewsWrapper, StyledViews, StyledBulletPoint, StyledReactTimeAgo, StyledSubtitleIconButton, StyledGrid, StyledSubtitleIcon, StyledVolumeOffIcon, StyledVolumeOnIcon, StyledSubtitleOutlinedIcon, MoreIconContainer
} from './styles';
import { useUIContext } from '../../context/ui';
import { MenuComponent } from '../MenuComponent';


export const HomePageDetails = ({ thumbnailUrl, channel, title, videoUrl, duration, views, postedAt }) => {
    const { setAnchorEl } = useUIContext()

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


    const handleOpenMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    return (
        <>
            <StyledGrid item xs={10} sm={10.3} md={5.5} lg={3.6} xl={2.8}>
                <ImageContainer onMouseEnter={() => setIsVideoPlaying(true)} onMouseLeave={() => setIsVideoPlaying(false)}>
                    <ThumbnailImage src={thumbnailUrl} isVideoPlaying={isVideoPlaying} />
                    <StyledVideo ref={videoRef} playsInline src={videoUrl} isVideoPlaying={isVideoPlaying} muted={!isTurnOn.volume} />
                    <StyledVolumeIconButton isMouseOver={isMouseOver} isVideoPlaying={isVideoPlaying}
                        disableRipple
                        onClick={handleClickVolume} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}>
                        {isTurnOn.volume ? <StyledVolumeOnIcon /> : <StyledVolumeOffIcon />}
                    </StyledVolumeIconButton>
                    <StyledSubtitleIconButton isMouseOver={isMouseOver} isVideoPlaying={isVideoPlaying} disableRipple
                        onClick={handleClickFilled} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)} >
                        {isTurnOn.filled ? <StyledSubtitleIcon /> : <StyledSubtitleOutlinedIcon />}
                    </StyledSubtitleIconButton>
                    <StyledDuration>{formatDuration(duration)}</StyledDuration>
                </ImageContainer>

                <StackInformationContainer>
                    <StyledAvatar src={channel.profileUrl} />
                    <BoxWrapper>
                        <StackTitleContainer>
                            <StyledTitle>{title}</StyledTitle>
                            <MoreIconContainer onClick={handleOpenMenu}>
                                <MoreVertIcon />
                            </MoreIconContainer>
                        </StackTitleContainer>
                        <Box>
                            <StyledChannelName>{channel.name}</StyledChannelName>
                            <StackViewsContainer>
                                <StackViewsWrapper>
                                    <StyledViews>{VIEW_FORMATTER.format(views)} views</StyledViews>
                                    <StyledBulletPoint />
                                </StackViewsWrapper>
                                <StyledReactTimeAgo date={postedAt} locale="en-US" />
                            </StackViewsContainer>
                        </Box>
                    </BoxWrapper>
                </StackInformationContainer>
            </StyledGrid>
            <MenuComponent />
        </>
    )
}
