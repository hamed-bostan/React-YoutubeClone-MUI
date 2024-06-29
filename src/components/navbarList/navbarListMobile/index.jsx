import { useState } from 'react';
import { Tooltip } from '@mui/material'
import { AutoComplete } from '../../autoComplete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconsContainer, SearchContainer, StyledAvatar, StyledIconsButton, AutoCompleteContainerMobile } from '../styles';
import { useUIContext } from '../../../context/ui';
import { SubmitSearchIcon } from './styles';
import { CameraComponent } from '../camera';
import { NotificationComponent } from '../notificationComponent';
import { LogoComponent } from '../logoComponent';
import { MicComponent } from '../micComponent';

export const NavbarListMobile = () => {
    const { isDrawerOpen, setIsDrawerOpen } = useUIContext()
    const [isFocus, setIsFocus] = useState(false)
    const { isMobileScreen } = useUIContext()

    const handleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleClick = () => {
        setIsFocus(true)
    }

    return (
        <>
            {!isFocus && (<LogoComponent />)}

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
                <MicComponent />
                {!isFocus && (<CameraComponent />)}
                {!isFocus && (<NotificationComponent />)}
                {!isFocus && <StyledAvatar src='./images/profileImages/caleb-curry.jpg' isMobileScreen={isMobileScreen} />}
            </IconsContainer >
        </>
    )
}
