import { Box, Grid } from '@mui/material'
import { videos } from '../../data/videos'
import { HomePageDetails } from '../../components/homePageDetails';

export const HomePage = () => {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: '1.5rem' }}>
            <Grid container sx={{  }}>
                {
                    videos.map(video => (
                        <HomePageDetails key={video.id} {...video} />
                    ))
                }
            </Grid>
        </Box >
    )
}
