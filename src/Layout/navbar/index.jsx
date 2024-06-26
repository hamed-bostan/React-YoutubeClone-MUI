import MenuIcon from '@mui/icons-material/Menu';
import { useUIContext } from '../../context/ui';
import { useState } from 'react';
import { AutoComplete } from './autoComplete';
import { Tooltip } from '@mui/material';


import { MenuANDLogoContainer, MenuIconButton, CameraIcon, CameraIconButton, MicIcon, AutoCompleteContainer, IconsContainer, LogoIconButton, MicIconButton, NotificationIcon, NotificationIconButton, SearchContainer, StyledAvatar, YoutubeIcon, YoutubeText, StackContainer, StyledToolbar, StyledAppBar, StyledBadge }
  from './styles';


export const Navbar = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useUIContext()
  const [isFocus, setIsFocus] = useState(false)

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <StyledAppBar open={isDrawerOpen} elevation={0} >
        <StyledToolbar disableGutters>
          <StackContainer>

            <MenuANDLogoContainer>
              <MenuIconButton aria-label="open drawer" disableTouchRipple onClick={handleDrawer}>
                <MenuIcon />
              </MenuIconButton>
              <LogoIconButton disableRipple>
                <YoutubeIcon />
                <YoutubeText>YouTube</YoutubeText>
              </LogoIconButton>
            </MenuANDLogoContainer>


            <SearchContainer>
              <Tooltip title='Search with your voice'>
                <MicIconButton disableRipple>
                  <MicIcon />
                </MicIconButton>
              </Tooltip>

              <AutoCompleteContainer isFocus={isFocus}>
                <AutoComplete isFocus={isFocus} setIsFocus={setIsFocus} />
              </AutoCompleteContainer>
            </SearchContainer>


            <IconsContainer>
              <Tooltip title='Create'>
                <CameraIconButton disableRipple>
                  <CameraIcon />
                </CameraIconButton>
              </Tooltip>

              <Tooltip title='Notifications'>
                <NotificationIconButton disableRipple>
                  <StyledBadge badgeContent={"9+"} color='error' >
                    <NotificationIcon />
                  </StyledBadge>
                </NotificationIconButton>
              </Tooltip>

              <StyledAvatar src='./images/profileImages/caleb-curry.jpg' />
            </IconsContainer>

          </StackContainer>
        </StyledToolbar>
      </StyledAppBar >

    </>
  )
}
