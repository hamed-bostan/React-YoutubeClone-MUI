import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import { DrawerHeader } from '../../Layout/sidebar'
import { videos } from '../../data/videos'
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const HomePage = () => {
    // const { id, title, channel, views, postedAt, duration, thumbnailUrl, videoUrl } = video

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {
                videos.map(video => (
                    <Box key={video.id}
                        sx={{
                            width: '21rem', height: '20.625rem', display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 1.5,
                        }}
                    >
                        <img src={video.thumbnailUrl} width='100%' style={{ borderRadius: '0.875rem' }} />
                        <Stack flexDirection='row' columnGap={1} width='100%'>
                            <Avatar src={video.channel.profileUrl} />
                            <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5, width: '100%' }}>
                                <Stack flexDirection='row' justifyContent='space-between'>
                                    <Typography fontSize='1rem' color='#0f0f0f'>{video.title}</Typography>
                                    <MoreVertIcon />
                                </Stack>
                                <Box>
                                    <Typography fontSize='0.875rem' color={'#606060'} sx={{ ":hover": { color: '#404040' } }}>
                                        {video.channel.name}
                                    </Typography>
                                    <Stack flexDirection='row' columnGap={2} color={'#606060'}>
                                        <Typography fontSize='0.875rem'>252K views</Typography>
                                        <Typography fontSize='0.875rem'>1 year ago</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                ))
            }
        </Box>
    )
}
