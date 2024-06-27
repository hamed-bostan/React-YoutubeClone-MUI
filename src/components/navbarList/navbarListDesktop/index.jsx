import { useState } from 'react';
import { Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AutoComplete } from '../../autoComplete';
import { MenuANDLogoContainer, CameraIcon, IconsContainer, LogoIconButton, MenuIconButton, MicIcon, MicIconButton, NotificationIcon, SearchContainer, StyledAvatar, StyledBadge, YoutubeIcon, YoutubeText, StyledIconsButton, AutoCompleteContainerDesktop } from '../styles';
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

                <AutoCompleteContainerDesktop isFocus={isFocus}>
                    <AutoComplete isFocus={isFocus} setIsFocus={setIsFocus} />
                </AutoCompleteContainerDesktop>
            </SearchContainer>


            <IconsContainer>
                <Tooltip title='Create'>
                    <StyledIconsButton disableRipple>
                        <CameraIcon />
                    </StyledIconsButton>
                </Tooltip>

                <Tooltip title='Notifications'>
                    <StyledIconsButton disableRipple>
                        <StyledBadge badgeContent={"9+"} color='error' >
                            <NotificationIcon />
                        </StyledBadge>
                    </StyledIconsButton>
                </Tooltip>

                <StyledAvatar src='./images/profileImages/caleb-curry.jpg' />
            </IconsContainer>
        </>
    )
}
