import { Avatar, Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import { formatDuration } from '../utility/formatDuration';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function HomePageDetails({ thumbnailUrl, channel, title, videoUrl, duration, views }) {
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
            <Box sx={{ position: 'relative', width: '100%' }}
                onMouseEnter={() => setIsVideoPlaying(true)} onMouseLeave={() => setIsVideoPlaying(false)}
            >
                <img src={thumbnailUrl} width='100%'
                    style={{ borderRadius: !isVideoPlaying && '0.875rem' }}
                />
                <video ref={videoRef} muted playsInline src={videoUrl}
                    style={{
                        position: 'absolute', inset: '0', opacity: isVideoPlaying ? '100%' : '0%', width: '100%',
                        // display: 'block'
                    }} />
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
                <Typography
                    sx={{
                        position: 'absolute', bottom: '1rem', right: '0.875rem', color: '#fff',
                        bgcolor: '#0f0f0f', borderRadius: '0.25rem', fontSize: '0.75rem', px: 0.5
                    }}>{formatDuration(duration)}
                </Typography>
            </Box>
            <Stack flexDirection='row' columnGap={1} width='100%'>
                <Avatar src={channel.profileUrl} sx={{ width: '2.25rem', height: '2.25rem' }} />
                <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5, width: '100%' }}>
                    <Stack flexDirection='row' justifyContent='space-between'>
                        <Typography fontSize='1rem' color='#0f0f0f'>{title}</Typography>
                        <MoreVertIcon />
                    </Stack>
                    <Box>
                        <Typography fontSize='0.875rem' color={'#606060'} sx={{ ":hover": { color: '#404040' } }}>
                            {channel.name}
                        </Typography>
                        <Stack flexDirection='row' color={'#606060'} alignItems='center' columnGap={2}>
                            <Stack flexDirection='row' columnGap='0.2rem'>
                                <Typography fontSize='0.875rem'>{VIEW_FORMATTER.format(views)}views</Typography>
                                <FiberManualRecordIcon sx={{
                                    height: '100%',
                                    width: '0.3rem',
                                    mt: '0.4rem',
                                }} />
                            </Stack>
                            <Typography fontSize='0.875rem'>1 year ago</Typography>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Grid>
    )
}
