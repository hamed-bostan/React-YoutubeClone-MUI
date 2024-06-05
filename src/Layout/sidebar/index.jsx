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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddToDriveOutlinedIcon from '@mui/icons-material/AddToDriveOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { useUIContext } from '../../context/ui';

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

  const HeadingIcons = [
    { id: "1", textTitle: "home", iconImage: <HomeOutlinedIcon /> },
    { id: "2", textTitle: "shorts", iconImage: <AddToDriveOutlinedIcon /> },
    { id: "3", textTitle: "Subscription", iconImage: < SubscriptionsOutlinedIcon /> },
  ]

  return (
    <Box>
      <CssBaseline />

      <Drawer variant="permanent" open={open} PaperProps={{ style: { border: 'none' } }}  >

        <DrawerHeader />

        <List>
          {HeadingIcons.map((item => (
            <ListItem key={item.id} disablePadding >
              <ListItemButton sx={{ minHeight: 50 }}>
                <ListItemIcon>{item.iconImage}</ListItemIcon>
                {open && <ListItemText primary={item.textTitle} />}
              </ListItemButton>
            </ListItem>
          )))}
        </List>

        <Divider />
      </Drawer>

    </Box>
  );
}
