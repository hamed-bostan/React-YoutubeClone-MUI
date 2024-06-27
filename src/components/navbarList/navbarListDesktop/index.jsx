import { useState } from 'react';
import { Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AutoComplete } from '../../autoComplete';
import { MenuANDLogoContainer, AutoCompleteContainer, CameraIcon, CameraIconButton, IconsContainer, LogoIconButton, MenuIconButton, MicIcon, MicIconButton, NotificationIcon, NotificationIconButton, SearchContainer, StyledAvatar, StyledBadge, YoutubeIcon, YoutubeText } from '../styles';
import { useUIContext } from '../../../context/ui';

export const NavbarListDesktop = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useUIContext()
    const [isFocus, setIsFocus] = useState(false)

    const handleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

    return (
        <>
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
        </>
    )
}