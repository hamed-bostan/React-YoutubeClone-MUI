import { useState } from 'react';
import { AutoComplete } from '../../autoComplete';
import { IconsContainer, SearchContainer, StyledAvatar, AutoCompleteContainerDesktop } from '../styles';
import { NotificationComponent } from '../notificationComponent';
import { LogoComponent } from '../logoComponent';
import { MicComponent } from '../micComponent';
import { useUIContext } from '../../../context/ui';
import { CameraComponent } from '../cameraComponent';

export const NavbarListDesktop = () => {
    const [isFocus, setIsFocus] = useState(false)
    const { isDesktopScreen } = useUIContext()

    return (
        <>
            <LogoComponent />

            <SearchContainer>
                <MicComponent isDesktopScreen={isDesktopScreen} />
                <AutoCompleteContainerDesktop isFocus={isFocus}>
                    <AutoComplete isFocus={isFocus} setIsFocus={setIsFocus} />
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
