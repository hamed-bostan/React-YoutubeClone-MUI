import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function HomePageDetails({ thumbnailUrl, channel, title }) {
    return (
        <Box
            sx={{
                width: '21rem', height: '20.625rem', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 1.5,
            }}
        >
            <img src={thumbnailUrl} width='100%' style={{ borderRadius: '0.875rem' }} />
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
        </Box>
    )
}
