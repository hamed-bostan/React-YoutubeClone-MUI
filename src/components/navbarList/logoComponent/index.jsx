import { useUIContext } from "../../../context/ui";
import { LogoIconButton, MenuANDLogoContainer, MenuIconButton, YoutubeIcon, YoutubeText } from "../styles";
import MenuIcon from '@mui/icons-material/Menu';

export const LogoComponent = () => {
    const { isDrawerOpen, setIsDrawerOpen, isMobileScreen } = useUIContext()

    const handleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <MenuANDLogoContainer isDrawerOpen={isDrawerOpen} isMobileScreen={isMobileScreen}>
            <MenuIconButton aria-label="open drawer" disableTouchRipple onClick={handleDrawer}>
                <MenuIcon />
            </MenuIconButton>
            <LogoIconButton disableRipple>
                <YoutubeIcon />
                <YoutubeText>YouTube</YoutubeText>
            </LogoIconButton>
        </MenuANDLogoContainer>
    )
}
