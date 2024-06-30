import { AutoComplete } from '../../autoComplete';
import { IconsContainer, SearchContainer, StyledAvatar, AutoCompleteContainerDesktop, AutoCompleteContainer } from '../styles';
import { NotificationComponent } from '../notificationComponent';
import { LogoComponent } from '../logoComponent';
import { MicComponent } from '../micComponent';
import { useUIContext } from '../../../context/ui';
import { CameraComponent } from '../cameraComponent';
import { SearchComponent } from '../searchComponent';

export const NavbarListDesktop = () => {
    const { isDesktopScreen, isSearchBarFocused } = useUIContext()

    return (
        <>
            <LogoComponent />

            {/* <SearchContainer>
                <MicComponent isDesktopScreen={isDesktopScreen} />
                <AutoCompleteContainer isSearchBarFocused={isSearchBarFocused}>
                    <AutoComplete />
                </AutoCompleteContainer>
            </SearchContainer> */}

            <SearchComponent />

            <IconsContainer>
                <CameraComponent />
                <NotificationComponent />
                <StyledAvatar src='./images/profileImages/caleb-curry.jpg' />
            </IconsContainer>
        </>
    )
}
