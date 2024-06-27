import { useUIContext } from '../../context/ui';
import { StackContainer, StyledToolbar, StyledAppBar } from './styles';
import { NavbarListDesktop } from '../../components/navbarList/navbarListDesktop'
import { NavbarListMobile } from '../../components/navbarList/navbarListMobile'

export const Navbar = () => {
  const { isDrawerOpen, isDesktopScreen, isMobileScreen } = useUIContext()

  return (
    <>
      <StyledAppBar open={isDrawerOpen} elevation={0} >
        <StyledToolbar disableGutters>
          <StackContainer>
            {isDesktopScreen && <NavbarListDesktop />}
            {isMobileScreen && <NavbarListMobile />}
          </StackContainer>
        </StyledToolbar>
      </StyledAppBar >

    </>
  )
}
