import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import PlaylistPlayOutlinedIcon from '@mui/icons-material/PlaylistPlayOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import { useUIContext } from '../../context/ui';
import { Avatar } from '@mui/material';
import { useLocation } from 'react-router-dom';

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
  }),
);

export const Sidebar = () => {
  const theme = useTheme();
  const { open } = useUIContext()

  return (
    <Box>
      <CssBaseline />

      <Drawer variant="permanent" open={open} PaperProps={{ style: { border: 'none' } }}  >
        <DrawerHeader />

        <List>
          {HeadingIcons.map((item => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton sx={{ minHeight: 50, flexDirection: open ? 'row' : 'column' }}  >
                <ListItemIcon sx={{ justifyContent: !open && 'center' }}>{item.iconImage}</ListItemIcon>
                <ListItemText primary={item.textTitle}
                  primaryTypographyProps={{
                    fontSize: !open && 12,
                  }} />
              </ListItemButton>
            </ListItem>
          )))}
        </List>

        {open && <Divider />}

        {open && (
          <List>
            {YouIcons.map((item => (
              <ListItem key={item.id} disablePadding >
                <ListItemButton sx={{ minHeight: 50 }}>
                  <ListItemIcon>{item.iconImage}</ListItemIcon>
                  <ListItemText primary={item.textTitle} />
                </ListItemButton>
              </ListItem>
            )))}
          </List>
        )}
        {open && <Divider />}

        {open && (
          <List>
            {SubscriptionIcons.map((item => (
              <ListItem key={item.id} disablePadding >
                <ListItemButton sx={{ minHeight: 50, columnGap: 3 }}>
                  <Avatar src={item.iconImage} sx={{ width: 28, height: 28 }} />
                  <ListItemText primary={item.textTitle} />
                </ListItemButton>
              </ListItem>
            )))}
          </List>
        )}
        {open && <Divider />}

        {open && (
          <List>
            {ExploreIcons.map((item => (
              <ListItem key={item.id} disablePadding >
                <ListItemButton sx={{ minHeight: 50 }}>
                  <ListItemIcon>{item.iconImage}</ListItemIcon>
                  <ListItemText primary={item.textTitle} />
                </ListItemButton>
              </ListItem>
            )))}
          </List>
        )}

      </Drawer>

    </Box>
  );
}


const HeadingIcons = [
  { id: "1", textTitle: "home", iconImage: <HomeOutlinedIcon />, path: '/' },
  { id: "2", textTitle: "shorts", iconImage: <AddToDriveOutlinedIcon />, path: '/shorts' },
  { id: "3", textTitle: "subscription", iconImage: < SubscriptionsOutlinedIcon />, path: '/subscription' },
]

const YouIcons = [
  { id: "1", textTitle: "your channel", iconImage: <AccountBoxOutlinedIcon /> },
  { id: "2", textTitle: "history", iconImage: <RestoreOutlinedIcon /> },
  { id: "3", textTitle: "play lists", iconImage: <PlaylistPlayOutlinedIcon /> },
  { id: "4", textTitle: "your videos", iconImage: <SlideshowOutlinedIcon /> },
  { id: "5", textTitle: "watch later", iconImage: <QueryBuilderOutlinedIcon /> },
  { id: "6", textTitle: "liked videos", iconImage: <ThumbUpAltOutlinedIcon /> },
]

const SubscriptionIcons = [
  { id: "1", textTitle: "fireship", iconImage: './images/profileImages/fireship.jpg' },
  { id: "2", textTitle: "traversy media", iconImage: './images/profileImages/traversy-media.jpg' },
  { id: "3", textTitle: "kevin powell", iconImage: './images/profileImages/kevin-powell.jpg' },
  { id: "4", textTitle: "web dev simplified", iconImage: './images/profileImages/webdevsimplified.jpg' },
  { id: "5", textTitle: "caleb curry", iconImage: './images/profileImages/caleb-curry.jpg' },
  { id: "6", textTitle: "sonny sangha", iconImage: './images/profileImages/sonny-sangha.jpg' },
]

const ExploreIcons = [
  { id: "1", textTitle: "trending", iconImage: < WhatshotOutlinedIcon /> },
  { id: "2", textTitle: "music", iconImage: < MusicNoteOutlinedIcon /> },
  { id: "3", textTitle: "movies & Tv", iconImage: < MovieFilterOutlinedIcon /> },
  { id: "4", textTitle: "live", iconImage: < OnlinePredictionOutlinedIcon /> },
  { id: "5", textTitle: "gaming", iconImage: < VideogameAssetOutlinedIcon /> },
  { id: "6", textTitle: "news", iconImage: < NewspaperOutlinedIcon /> },
  { id: "7", textTitle: "sports", iconImage: < MilitaryTechOutlinedIcon /> },
  { id: "8", textTitle: "learning", iconImage: < LightbulbOutlinedIcon /> },
  { id: "9", textTitle: "podcasts", iconImage: < PodcastsOutlinedIcon /> },
]