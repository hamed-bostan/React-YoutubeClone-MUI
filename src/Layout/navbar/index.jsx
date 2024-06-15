import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar, Badge, Box, styled, Stack } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import { useUIContext } from '../../context/ui';
import { useState } from 'react';
import { AutoCompleteComponent } from './AutoCompleteComponent';

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


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    top: 5,
    border: '2px solid white',
    padding: '0 5px',
  },
}));


export const Navbar = () => {
  const { open, setOpen } = useUIContext()
  const [isFocus, setIsFocus] = useState(false)

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
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


            {/* latest AutoComplete try */}
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', flex: 3, alignItems: 'center' }} gap={2}>
              <IconButton
                disableRipple
                sx={{
                  width: 40, height: 40, bgcolor: 'rgba(0,0,0,0.05)',
                  ":hover": { bgcolor: 'rgba(0,0,0,0.1)' }
                }}>
                <MicOutlinedIcon sx={{ color: "#0f0f0f" }} />
              </IconButton>
              <Box sx={{
                display: 'flex', alignItems: 'center', width: isFocus ? '85%' : '80%', justifyContent: 'end',
                border: '1px solid rgba(0,0,0,0.05)', borderRadius: 40, minHeight: '2.5rem',
                boxShadow: 'inset 1px 1px 1px 0.05px #eee',
              }}>
                <AutoCompleteComponent isFocus={isFocus} setIsFocus={setIsFocus} />
                {/* Submit icon */}
                {/* <Box sx={{
                  bgcolor: '#f8f8f8',
                  px: 2, borderTopRightRadius: 40, borderBottomRightRadius: 40, minHeight: '2.5rem', display: 'flex', alignItems: 'center',
                  ":hover": { bgcolor: 'rgba(0,0,0,0.1)' },
                  borderLeft: '1px solid rgba(0,0,0,0.05)',
                  cursor: 'pointer'
                }}>
                  <SearchIcon sx={{
                    color: "#0f0f0f",
                  }} />
                </Box> */}
                {/* Submit icon */}
              </Box>
            </Box>
            {/* latest AutoComplete try */}


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

    </>
  )
}
