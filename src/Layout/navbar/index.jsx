import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar, Badge, Box, InputBase, styled, Icon, ListItemButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useUIContext } from '../../context/ui';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Search = styled("div")(({ theme }) => ({
  width: "90%",
  borderRadius: 20,
  height: 40,
  border: "1px solid rgba(0,0,0,0.05)",
  display: 'flex',
  alignItems: "center",
  boxShadow: 'inset 1px 1px 3px 0.05px #eee'
}))


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 5,
    border: '2px solid white',
    padding: '0 5px',
  },
}));


export const Navbar = () => {
  const { open, setOpen } = useUIContext()

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="fixed" open={open} elevation={0}>
      <Toolbar sx={{ bgcolor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} >
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{ color: '#0f0f0f', ":hover": { bgcolor: 'rgba(0,0,0,0.1)' } }}
            disableTouchRipple
          >
            <MenuIcon />
          </IconButton>
          <img src='./images/logo.jpg' alt='Youtube logo' width={"115px"} />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', width: "40%" }} gap={2}>
          <Search >
            <InputBase placeholder="Search" sx={{ ml: 2, width: "95%" }} />
          </Search>
          <Box sx={{
            bgcolor: 'rgba(0,0,0,0.05)', borderRadius: "50%", width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center',
            ":hover": {
              bgcolor: 'rgba(0,0,0,0.1)'
            }
          }}>
            <MicOutlinedIcon sx={{ color: "#0f0f0f", cursor: 'pointer' }} />
          </Box>
        </Box>

        <Box sx={{
          display: 'flex', alignItems: 'center'
        }} gap={3}>
          <ListItemButton
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 40,
              height: 40,
              borderRadius: '50%',
              ":hover": {
                borderRadius: '50%',
                bgcolor: 'rgba(0,0,0,0.1)'
              }
            }}>
            <VideocamOutlinedIcon sx={{ color: "#0f0f0f" }} />
          </ListItemButton>

          <ListItemButton
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 40,
              height: 40,
              borderRadius: '50%',
              ":hover": {
                borderRadius: '50%',
                bgcolor: 'rgba(0,0,0,0.1)'
              }
            }}
          >
            <StyledBadge badgeContent={"9+"} color='error' >
              <NotificationsNoneOutlinedIcon sx={{ color: "#0f0f0f" }} />
            </StyledBadge>
          </ListItemButton>
          <Avatar src='./images/profileImages/caleb-curry.jpg' sx={{ width: 35, height: 35, cursor: 'pointer' }} />
        </Box>

      </Toolbar>
    </AppBar>
  )
}
