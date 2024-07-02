import { Box, Grid } from '@mui/material'
import { videos } from '../../data/videos'
import { HomePageDetails } from '../../components/homePageDetails';

const HomePage = () => {

    return (
        <Box >
            <Grid container rowGap='1.25rem' columnGap='1rem' justifyContent='center'>
                {videos.map(video => (<HomePageDetails key={video.id} {...video} />))}
            </Grid>
        </Box>
    )
}

export default HomePage