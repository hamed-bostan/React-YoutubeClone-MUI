import { useState } from 'react';
import { AutoComplete } from '../../autoComplete';
import { IconsContainer, SearchContainer, StyledAvatar, AutoCompleteContainerDesktop } from '../styles';
import { NotificationComponent } from '../notificationComponent';
import { LogoComponent } from '../logoComponent';
import { MicComponent } from '../micComponent';
import { useUIContext } from '../../../context/ui';
import { CameraComponent } from '../cameraComponent';

export const NavbarListDesktop = () => {
    const { isDesktopScreen, isSearchBarFocused } = useUIContext()

    return (
        <>
            <LogoComponent />

            <SearchContainer>
                <MicComponent isDesktopScreen={isDesktopScreen} />
                <AutoCompleteContainerDesktop isSearchBarFocused={isSearchBarFocused}>
                    <AutoComplete />
                </AutoCompleteContainerDesktop>
            </SearchContainer>

            <IconsContainer>
                <CameraComponent />
                <NotificationComponent />
                <StyledAvatar src='./images/profileImages/caleb-curry.jpg' />
            </IconsContainer>
        </>
    )
}
