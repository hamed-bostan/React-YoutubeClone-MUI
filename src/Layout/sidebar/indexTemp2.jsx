import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import { Avatar, IconButton, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utility/Utilities';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),

    "& ::-webkit-scrollbar": {
      width: "8px",
      minWidth: "unset"
    },
    "& ::-webkit-scrollbar-track": {
      background: "#fff",
    },
    "& ::-webkit-scrollbar-thumb": {
      background: "#CCCCCC",
      borderRadius: "1px",
    },
    "& ::-webkit-scrollbar-thumb:hover": {
      background: "#C1C1C1",
    },
  }),
);


export const Sidebar = () => {
  const { isDrawerOpen } = useUIContext()
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Box>
      <CssBaseline />
      <Drawer variant="permanent" open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }} >
        <DrawerHeader />

        <Box sx={{ px: isDrawerOpen && '0.725rem' }}>


          <List>
            {HeadingIcons.map((item => (
              <ListItem key={item.id} disablePadding
                onClick={() => navigate(item.path)}
              >
                <ListItemButton
                  disableRipple
                  sx={{
                    backgroundColor: location.pathname == item.path && isDrawerOpen && 'rgba(0,0,0,0.05)',
                    borderRadius: location.pathname == item.path && '0.875rem',
                    flexDirection: isDrawerOpen ? 'row' : 'column',
                    columnGap: '1.725rem',
                    padding: 0,
                    px: isDrawerOpen && '0.5rem',
                    py: isDrawerOpen ? '0.25rem' : '1rem',
                    ":hover": { borderRadius: '0.875rem', backgroundColor: location.pathname == item.path && isDrawerOpen ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.05)' },
                  }}>
                  <ListItemIcon sx={{ justifyContent: !isDrawerOpen && 'center', color: '#0f0f0f', minWidth: 0 }}>
                    {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                  </ListItemIcon>
                  <ListItemText primary={capitalizeFirstLetter(item.textTitle)}
                    sx={{ color: '#0f0f0f' }}
                    primaryTypographyProps={{
                      fontSize: isDrawerOpen ? '0.875rem' : '0.625rem',
                    }} />
                </ListItemButton>
              </ListItem>
            )))}
          </List>



          {isDrawerOpen && <Divider />}

          {isDrawerOpen && (
            <List>
              <IconButton disableTouchRipple sx={{ color: '#0f0f0f', width: '100%', borderRadius: 3, justifyContent: 'start', alignItems: 'center' }}  >
                <Typography variant='h6' fontWeight={600} fontSize={'16px'}>you</Typography>
                <ChevronRightIcon />
              </IconButton>




              {YouIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <ListItemButton
                    disableRipple
                    sx={{
                      backgroundColor: location.pathname == item.path && isDrawerOpen && 'rgba(0,0,0,0.05)',
                      borderRadius: location.pathname == item.path && '0.875rem',
                      flexDirection: isDrawerOpen ? 'row' : 'column',
                      columnGap: '1.725rem',
                      padding: 0,
                      px: isDrawerOpen && '0.5rem',
                      py: isDrawerOpen ? '0.25rem' : '1rem',
                      ":hover": { borderRadius: '0.875rem', backgroundColor: location.pathname == item.path && isDrawerOpen ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.05)' },
                    }}>
                    <ListItemIcon sx={{ justifyContent: !isDrawerOpen && 'center', color: '#0f0f0f', minWidth: 0 }}>
                      {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                    </ListItemIcon>
                    <ListItemText primary={capitalizeFirstLetter(item.textTitle)}
                      sx={{ color: '#0f0f0f' }}
                      primaryTypographyProps={{
                        fontSize: isDrawerOpen ? '0.875rem' : '0.625rem',
                      }} />
                  </ListItemButton>
                </ListItem>
              )))}

            </List>
          )}
          {isDrawerOpen && <Divider />}

          {isDrawerOpen && (
            <List>
              <Typography variant='body1' fontWeight={500}>subscriptions</Typography>


              {/* {SubscriptionIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  sx={{
                    bgcolor: location.pathname == item.path && isDrawerOpen && '#f4f4f4',
                  }}
                  onClick={() => navigate(item.path)}
                >
                  <ListItemButton
                    disableRipple
                    sx={{ minHeight: 50, columnGap: 3 }}>
                    <Avatar src={item.avater} sx={{ width: 28, height: 28 }} />
                    <ListItemText primary={item.textTitle} />
                  </ListItemButton>
                </ListItem>
              )))} */}

              {/* goes here */}

              {SubscriptionIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  onClick={() => navigate(item.path)}
                >
                  <ListItemButton
                    disableRipple
                    sx={{
                      columnGap: '1.725rem',
                      backgroundColor: location.pathname == item.path && isDrawerOpen && 'rgba(0,0,0,0.05)',
                      borderRadius: location.pathname == item.path && '0.875rem',
                      flexDirection: isDrawerOpen ? 'row' : 'column',
                      padding: 0,
                      px: isDrawerOpen && '0.5rem',
                      py: isDrawerOpen ? '0.25rem' : '1rem',
                      ":hover": { borderRadius: '0.875rem', backgroundColor: location.pathname == item.path && isDrawerOpen ? 'rgba(0,0,0,0.1)' : 'rgba(0,0,0,0.05)' },
                    }}>
                    {/* <ListItemIcon sx={{ justifyContent: !isDrawerOpen && 'center', color: '#0f0f0f' }}>
                      {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                    </ListItemIcon> */}
                    <Avatar src={item.avater} sx={{ width: 28, height: 28 }} />
                    <ListItemText primary={capitalizeFirstLetter(item.textTitle)}
                      sx={{ color: '#0f0f0f' }}
                      primaryTypographyProps={{
                        fontSize: isDrawerOpen ? '0.875rem' : '0.625rem',
                      }} />
                  </ListItemButton>
                </ListItem>
              )))}

              {/* goes here */}

            </List>
          )}
          {isDrawerOpen && <Divider />}

          {isDrawerOpen && (
            <List>
              <Typography variant='body1' fontWeight={500}>explore</Typography>
              {ExploreIcons.map((item => (
                <ListItem key={item.id} disablePadding
                  sx={{
                    bgcolor: location.pathname == item.path && isDrawerOpen && '#f4f4f4',
                  }}
                  onClick={() => navigate(item.path)}
                >
                  <ListItemButton
                    disableRipple
                    sx={{ minHeight: 50 }}>
                    <ListItemIcon>
                      {location.pathname == item.path ? item.iconImageFilled : item.iconImageOutlined}
                    </ListItemIcon>
                    <ListItemText primary={item.textTitle} />
                  </ListItemButton>
                </ListItem>
              )))}
            </List>
          )}

        </Box>
      </Drawer >

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