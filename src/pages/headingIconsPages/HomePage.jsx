import { Box, Grid } from '@mui/material'
import { videos } from '../../data/videos'
import { HomePageDetails } from '../../components/homePageDetails';

export const HomePage = () => {

    return (
        <Box sx={{
            // p: '1.5rem',
            // p: '1rem',
        }}>
            <Grid container rowGap='1.25rem' columnGap='1rem' justifyContent='center'>
                {
                    videos.map(video => (
                        <HomePageDetails key={video.id} {...video} />
                    ))
                }
            </Grid>
        </Box>
    )
}
