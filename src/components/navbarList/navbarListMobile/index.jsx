import { useState } from 'react';
import { Tooltip } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconsContainer, StyledAvatar, StyledIconsButton, SubmitSearchIconMobile } from '../styles';
import { useUIContext } from '../../../context/ui';
import { NotificationComponent } from '../notificationComponent';
import { LogoComponent } from '../logoComponent';
import { MicComponent } from '../micComponent';
import { CameraComponent } from '../cameraComponent';
import { SearchComponent } from '../searchComponent';

export const NavbarListMobile = () => {
    const [isSearchBarFocused, setIsSearchBarFocused,] = useState(false)
    const { isMobileScreen } = useUIContext()

    const handleClick = () => {
        setIsSearchBarFocused(true)
    }

    return (
        <>
            {!isSearchBarFocused && (<LogoComponent />)}

            {isSearchBarFocused && (
                <Tooltip title='back'>
                    <StyledIconsButton disableRipple onClick={() => setIsSearchBarFocused(false)}>
                        <ArrowBackIcon />
                    </StyledIconsButton>
                </Tooltip>
            )}

            {isSearchBarFocused && (
                // <SearchContainer>
                //     <AutoCompleteContainer>
                //         <AutoComplete />
                //     </AutoCompleteContainer>
                // </SearchContainer>
                <SearchComponent />
            )}

            <IconsContainer isMobileScreen={isMobileScreen}>
                {!isSearchBarFocused && (
                    <Tooltip title='Search'>
                        <StyledIconsButton disableRipple onClick={handleClick}>
                            <SubmitSearchIconMobile />
                        </StyledIconsButton>
                    </Tooltip>
                )}
                <MicComponent />
                {!isSearchBarFocused && (<CameraComponent />)}
                {!isSearchBarFocused && (<NotificationComponent />)}
                {!isSearchBarFocused && <StyledAvatar src='./images/profileImages/caleb-curry.jpg' isMobileScreen={isMobileScreen} />}
            </IconsContainer >
        </>
    )
}
