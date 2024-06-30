import { IconsContainer, StyledAvatar } from '../styles';
import { NotificationComponent } from '../notificationComponent';
import { LogoComponent } from '../logoComponent';
import { CameraComponent } from '../cameraComponent';
import { SearchComponent } from '../searchComponent';

export const NavbarListDesktop = () => {

    return (
        <>
            <LogoComponent />
            <SearchComponent />
            <IconsContainer>
                <CameraComponent />
                <NotificationComponent />
                <StyledAvatar src='./images/profileImages/caleb-curry.jpg' />
            </IconsContainer>
        </>
    )
}
