import { Avatar, Box, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';

export default function HomePageDetails({ thumbnailUrl, channel, title }) {
    const [isTurnOn, setIsTurnOn] = useState({
        volume: false,
        filled: true,
    })

    const [isMouseOver, setIsMouseOver] = useState(false)

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

    return (
        <Grid item lg={3} md={4}
            sx={{
                width: '21rem', height: '20.625rem', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 1.5, cursor: 'pointer'
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <img src={thumbnailUrl} width='100%' style={{ borderRadius: '0.875rem' }} />
                <IconButton onClick={handleClickVolume} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}
                    disableRipple
                    sx={{
                        position: 'absolute', top: '1.25rem', right: '0.875rem', color: '#fff', bgcolor: isMouseOver && '#0f0f0f'
                    }}>
                    {isTurnOn.volume ? <VolumeUpOutlinedIcon /> : <VolumeOffIcon />}
                </IconButton>
                <IconButton onClick={handleClickFilled} onMouseOver={() => setIsMouseOver(true)} onMouseLeave={() => setIsMouseOver(false)}
                    disableRipple
                    sx={{
                        position: 'absolute', top: '4.25rem', right: '0.875rem', color: '#fff', bgcolor: isMouseOver && '#0f0f0f'
                    }}>
                    {isTurnOn.filled ? <SubtitlesIcon /> : <SubtitlesOutlinedIcon />}
                </IconButton>
            </Box>
            <Stack flexDirection='row' columnGap={1} width='100%'>
                <Avatar src={channel.profileUrl} />
                <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5, width: '100%' }}>
                    <Stack flexDirection='row' justifyContent='space-between'>
                        <Typography fontSize='1rem' color='#0f0f0f'>{title}</Typography>
                        <MoreVertIcon />
                    </Stack>
                    <Box>
                        <Typography fontSize='0.875rem' color={'#606060'} sx={{ ":hover": { color: '#404040' } }}>
                            {channel.name}
                        </Typography>
                        <Stack flexDirection='row' columnGap={2} color={'#606060'}>
                            <Typography fontSize='0.875rem'>252K views</Typography>
                            <Typography fontSize='0.875rem'>1 year ago</Typography>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Grid>
    )
}
