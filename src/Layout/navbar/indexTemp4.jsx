import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar, Badge, Box, InputBase, styled, ListItemButton, Stack, Button } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useUIContext } from '../../context/ui';
import { SearchComponent } from './SearchComponent';

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
  boxShadow: 'inset 1px 1px 1px 0.05px #eee',
  display: 'flex',
  alignItems: "center",
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
    <AppBar position="fixed" open={open} elevation={0} >
      <Toolbar sx={{ bgcolor: '#fff', }} style={{ padding: 0 }} >
        <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', px: 3 }}>
          <Box sx={{ display: 'flex', flex: 2, alignItems: 'center' }} >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawer}
              edge="start"
              sx={{
                color: '#0f0f0f',
                ":hover": { width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.1)' }
              }}
              disableTouchRipple
            >
              <MenuIcon />
            </IconButton>
            <img src='./images/logo.jpg' alt='Youtube logo' width={"115px"} style={{ cursor: 'pointer' }} />
          </Box>

          {/* <Box sx={{ display: 'flex', alignItems: 'center', width: "40%" }} gap={2}>
            <Search >
              <InputBase placeholder="Search" sx={{ ml: 2, width: "95%", color: '#0f0f0f' }} />
            </Search>
            <IconButton
              disableRipple
              sx={{
                width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.05)',
                ":hover": { bgcolor: 'rgba(0,0,0,0.1)' }
              }}>
              <MicOutlinedIcon sx={{ color: "#0f0f0f" }} />
            </IconButton>
          </Box> */}

          {/* search goes here */}
          <Box sx={{ display: 'flex', flex: 3, justifyContent: 'end', alignItems: 'center', bgcolor: 'red' }} gap={2}>
            <Box sx={{  }}>
              <SearchComponent />
            </Box>
            <IconButton
              disableRipple
              sx={{
                width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.05)',
                ":hover": { bgcolor: 'rgba(0,0,0,0.1)' }
              }}>
              <MicOutlinedIcon sx={{ color: "#0f0f0f" }} />
            </IconButton>
          </Box>

          {/* search goes here */}



          <Box
            gap={3}
            sx={{ display: 'flex', flex: 2, alignItems: 'center', justifyContent: 'end' }} >
            <IconButton
              disableRipple
              sx={{
                ":hover": { width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.1)' }
              }}>
              <VideocamOutlinedIcon sx={{ color: "#0f0f0f" }} />
            </IconButton>

            <IconButton
              disableRipple
              sx={{
                ":hover": { width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.1)' }
              }}
            >
              <StyledBadge badgeContent={"9+"} color='error' >
                <NotificationsNoneOutlinedIcon sx={{ color: "#0f0f0f" }} />
              </StyledBadge>
            </IconButton>
            <Avatar src='./images/profileImages/caleb-curry.jpg' sx={{ width: 35, height: 35, cursor: 'pointer' }} />
          </Box>

        </Stack>
      </Toolbar>
    </AppBar >
  )
}
