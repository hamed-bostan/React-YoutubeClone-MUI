import { useUIContext } from '../../context/ui';
import { StackContainer, StyledToolbar, StyledAppBar } from './styles';
import { NavbarList } from '../../components/navbarList';

export const Navbar = () => {
  const { isDrawerOpen } = useUIContext()

  return (
    <>
      <StyledAppBar open={isDrawerOpen} elevation={0} >
        <StyledToolbar disableGutters>
          <StackContainer>

            <NavbarList />

          </StackContainer>
        </StyledToolbar>
      </StyledAppBar >

    </>
  )
}
