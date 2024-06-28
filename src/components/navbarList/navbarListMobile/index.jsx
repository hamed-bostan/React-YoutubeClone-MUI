import { useRef, useState } from 'react';
import { Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AutoComplete } from '../../autoComplete';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MenuANDLogoContainer, CameraIcon, IconsContainer, LogoIconButton, MenuIconButton, MicIcon, MicIconButton, NotificationIcon, SearchContainer, StyledAvatar, StyledBadge, YoutubeIcon, YoutubeText, StyledIconsButton, AutoCompleteContainerMobile } from '../styles';
import { useUIContext } from '../../../context/ui';
import { SubmitSearchIcon } from './styles';

export const NavbarListMobile = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useUIContext()
    const [isFocus, setIsFocus] = useState(false)
    const { isMobileScreen, isDesktopScreen } = useUIContext()

    const handleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleClick = () => {
        setIsFocus(true)
    }

    return (
        <>
            {!isFocus && (
                <MenuANDLogoContainer>
                    <MenuIconButton aria-label="open drawer" disableTouchRipple onClick={handleDrawer}>
                        <MenuIcon />
                    </MenuIconButton>
                    <LogoIconButton disableRipple>
                        <YoutubeIcon />
                        <YoutubeText>YouTube</YoutubeText>
                    </LogoIconButton>
                </MenuANDLogoContainer>
            )}


            {isFocus && (
                <Tooltip title='back'>
                    <StyledIconsButton disableRipple onClick={() => setIsFocus(false)}>
                        <ArrowBackIcon />
                    </StyledIconsButton>
                </Tooltip>
            )}

            {isFocus && (
                <SearchContainer>
                    <AutoCompleteContainerMobile>
                        <AutoComplete isFocus={isFocus} setIsFocus={setIsFocus} />
                    </AutoCompleteContainerMobile>
                </SearchContainer>
            )}






            <IconsContainer isMobileScreen={isMobileScreen} isFocus={isFocus}>


                {!isFocus && (
                    <Tooltip title='Search'>
                        <StyledIconsButton disableRipple onClick={handleClick}>
                            <SubmitSearchIcon />
                        </StyledIconsButton>
                    </Tooltip>
                )}


                <Tooltip title='Search with your voice'>
                    <StyledIconsButton disableRipple>
                        <MicIcon />
                    </StyledIconsButton>
                </Tooltip>

                {!isFocus && (
                    <Tooltip title='Create'>
                        <StyledIconsButton disableRipple>
                            <CameraIcon />
                        </StyledIconsButton>
                    </Tooltip>
                )}

                {!isFocus && (
                    <Tooltip title='Notifications'>
                        <StyledIconsButton disableRipple>
                            <StyledBadge badgeContent={"9+"} color='error' >
                                <NotificationIcon />
                            </StyledBadge>
                        </StyledIconsButton>
                    </Tooltip>
                )}

                {!isFocus && <StyledAvatar src='./images/profileImages/caleb-curry.jpg' isMobileScreen={isMobileScreen} />}

            </IconsContainer >
        </>
    )
}
