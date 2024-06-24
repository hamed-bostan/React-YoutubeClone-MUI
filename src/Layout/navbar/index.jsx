import MenuIcon from '@mui/icons-material/Menu';
import { useUIContext } from '../../context/ui';
import { useState } from 'react';
import { AutoComplete } from './autoComplete';


import { MenuANDLogoContainer, MenuIconButton, CameraIcon, CameraIconButton, MicIcon, AutoCompleteContainer, IconsContainer, LogoIconButton, MicIconButton, NotificationIcon, NotificationIconButton, SearchContainer, StyledAvatar, YoutubeIcon, YoutubeText, StackContainer, StyledToolbar, StyledAppBar, StyledBadge, StyledTooltip }
  from './styles';
import { Tooltip } from '@mui/material';


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
              <StyledTooltip title='Search with your voice'>
                <MicIconButton disableRipple>
                  <MicIcon />
                </MicIconButton>
              </StyledTooltip>

              <AutoCompleteContainer isFocus={isFocus}>
                <AutoComplete isFocus={isFocus} setIsFocus={setIsFocus} />
              </AutoCompleteContainer>
            </SearchContainer>


            <IconsContainer>
              <StyledTooltip title='Create'>
                <CameraIconButton disableRipple>
                  <CameraIcon />
                </CameraIconButton>
              </StyledTooltip>

              <StyledTooltip title='Notifications'>
                <NotificationIconButton disableRipple>
                  <StyledBadge badgeContent={"9+"} color='error' >
                    <NotificationIcon />
                  </StyledBadge>
                </NotificationIconButton>
              </StyledTooltip>

              <StyledAvatar src='./images/profileImages/caleb-curry.jpg' />
            </IconsContainer>

          </StackContainer>
        </StyledToolbar>
      </StyledAppBar >

    </>
  )
}
