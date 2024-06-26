import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';


import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';


import WhatshotIcon from '@mui/icons-material/Whatshot';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';


import { useUIContext } from '../../context/ui';
import { useLocation, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utility/Utilities';

import {
  StyledListItemButton, StyledListItemIcon, StyledListItemText, TextContainer, StyledTypography,
  StyledAvatar, DrawerHeader, StyledDrawer, BoxContainer
} from './styles';



export const Sidebar = () => {
  const { isDrawerOpen } = useUIContext()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box>
      <CssBaseline />
      <StyledDrawer variant="permanent" open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }} >
        <DrawerHeader />

        <BoxContainer isDrawerOpen={isDrawerOpen} >

          <List>

            {HeadingIcons.map((item => (
              <ListItem key={item.id} disablePadding onClick={() => navigate(item.path)}>
                <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                  <StyledListItemIcon isDrawerOpen={isDrawerOpen}>
                    {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                  </StyledListItemIcon>
                  <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                    primaryTypographyProps={{ fontSize: isDrawerOpen ? '0.875rem' : '0.625rem' }} />
                </StyledListItemButton>
              </ListItem>
            )))}

          </List>

          {isDrawerOpen && <Divider />}


          {isDrawerOpen && (
            <List>
              <TextContainer>
                <StyledTypography variant='h6'>You</StyledTypography>
                <ChevronRightIcon />
              </TextContainer>




              {YouIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                    <StyledListItemIcon isDrawerOpen={isDrawerOpen}>
                      {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                    </StyledListItemIcon>
                    <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                      primaryTypographyProps={{
                        fontSize: isDrawerOpen ? '0.875rem' : '0.625rem',
                      }}
                    />
                  </StyledListItemButton>
                </ListItem>
              )))}

            </List>
          )}
          {isDrawerOpen && <Divider />}

          {isDrawerOpen && (
            <List>
              <TextContainer>
                <StyledTypography variant='h6'>Subscriptions</StyledTypography>
              </TextContainer>

              {SubscriptionIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                    <StyledAvatar src={item.avater} />
                    <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                      primaryTypographyProps={{
                        fontSize: isDrawerOpen ? '0.875rem' : '0.625rem',
                      }}
                    />
                  </StyledListItemButton>
                </ListItem>
              )))}
            </List>
          )}
          {isDrawerOpen && <Divider />}

          {isDrawerOpen && (
            <List>
              <TextContainer>
                <StyledTypography variant='h6'>Explore</StyledTypography>
              </TextContainer>



              {ExploreIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <StyledListItemButton pathname={location.pathname} path={item.path} isDrawerOpen={isDrawerOpen} disableRipple>
                    <StyledListItemIcon isDrawerOpen={isDrawerOpen}>
                      {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                    </StyledListItemIcon>
                    <StyledListItemText primary={capitalizeFirstLetter(item.textTitle)}
                      primaryTypographyProps={{
                        fontSize: isDrawerOpen ? '0.875rem' : '0.625rem',
                      }}
                    />
                  </StyledListItemButton>
                </ListItem>
              )))}

            </List>
          )}

        </BoxContainer>
      </StyledDrawer >

    </Box >
  );
}


const HeadingIcons = [
  { id: "1", textTitle: "home", iconImageOutlined: <HomeOutlinedIcon />, iconImageFilled: <HomeIcon />, path: '/' },
  { id: "2", textTitle: "shorts", iconImageOutlined: <AddToDriveIcon />, iconImageFilled: <AddToDriveOutlinedIcon />, path: '/shorts' },
  { id: "3", textTitle: "subscription", iconImageOutlined: <SubscriptionsOutlinedIcon />, iconImageFilled: <SubscriptionsIcon />, path: '/subscription' },
]

const YouIcons = [
  { id: "1", textTitle: "your channel", iconImageOutlined: <AccountBoxOutlinedIcon />, iconImageFilled: <AccountBoxIcon />, path: '/your-channel' },
  { id: "2", textTitle: "history", iconImageOutlined: <RestoreOutlinedIcon />, iconImageFilled: <RestoreIcon />, path: '/history' },
  { id: "3", textTitle: "play lists", iconImageOutlined: <PlaylistPlayOutlinedIcon />, iconImageFilled: <PlaylistPlayIcon />, path: '/play-lists' },
  { id: "4", textTitle: "your videos", iconImageOutlined: <SlideshowOutlinedIcon />, iconImageFilled: <SlideshowIcon />, path: '/your-videos' },
  { id: "5", textTitle: "watch later", iconImageOutlined: <QueryBuilderOutlinedIcon />, iconImageFilled: <QueryBuilderIcon />, path: '/watch-later' },
  { id: "6", textTitle: "liked videos", iconImageOutlined: <ThumbUpAltOutlinedIcon />, iconImageFilled: <ThumbUpAltIcon />, path: '/liked-videos' },
]

const SubscriptionIcons = [
  { id: "1", textTitle: "fireship", avater: './images/profileImages/fireship.jpg', path: '/fireship' },
  { id: "2", textTitle: "traversy media", avater: './images/profileImages/traversy-media.jpg', path: '/traversy-media' },
  { id: "3", textTitle: "kevin powell", avater: './images/profileImages/kevin-powell.jpg', path: '/kevin-powell' },
  { id: "4", textTitle: "web dev simplified", avater: './images/profileImages/webdevsimplified.jpg', path: '/web-dev-simplified' },
  { id: "5", textTitle: "caleb curry", avater: './images/profileImages/caleb-curry.jpg', path: '/caleb-curry' },
  { id: "6", textTitle: "sonny sangha", avater: './images/profileImages/sonny-sangha.jpg', path: '/sonny-sangha' },
]

const ExploreIcons = [
  { id: "1", textTitle: "trending", iconImageOutlined: < WhatshotOutlinedIcon />, iconImageFilled: <WhatshotIcon />, path: '/trending' },
  { id: "2", textTitle: "music", iconImageOutlined: < MusicNoteOutlinedIcon />, iconImageFilled: <MusicNoteIcon />, path: '/music' },
  { id: "3", textTitle: "movies & Tv", iconImageOutlined: < MovieFilterOutlinedIcon />, iconImageFilled: <MovieFilterIcon />, path: '/movies-Tv' },
  { id: "4", textTitle: "live", iconImageOutlined: < OnlinePredictionOutlinedIcon />, iconImageFilled: <OnlinePredictionIcon />, path: '/live' },
  { id: "5", textTitle: "gaming", iconImageOutlined: < VideogameAssetOutlinedIcon />, iconImageFilled: <VideogameAssetIcon />, path: '/gaming' },
  { id: "6", textTitle: "news", iconImageOutlined: < NewspaperOutlinedIcon />, iconImageFilled: <NewspaperIcon />, path: '/news' },
  { id: "7", textTitle: "sports", iconImageOutlined: < MilitaryTechOutlinedIcon />, iconImageFilled: <MilitaryTechIcon />, path: '/sports' },
  { id: "8", textTitle: "learning", iconImageOutlined: < LightbulbOutlinedIcon />, iconImageFilled: <LightbulbIcon />, path: '/learning' },
  { id: "9", textTitle: "podcasts", iconImageOutlined: < PodcastsOutlinedIcon />, iconImageFilled: <PodcastsIcon />, path: '/podcasts' },
]