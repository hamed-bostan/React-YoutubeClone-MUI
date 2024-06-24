import { Box, Grid } from '@mui/material'
import { videos } from '../../data/videos'
import { HomePageDetails } from '../../components/homePageDetails';

export const HomePage = () => {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: '1.5rem' }}>
            <Grid container spacing={2} rowGap={5}>
                {
                    videos.map(video => (
                        <HomePageDetails key={video.id} {...video} />
                    ))
                }
            </Grid>
        </Box>
    )
}
