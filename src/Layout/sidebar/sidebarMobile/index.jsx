import Box from '@mui/material/Box';
import { useUIContext } from '../../../context/ui';
import { BoxContainer, StyledDrawerMobile } from '../styles';
import { LogoComponent } from '../../../components/navbarList/logoComponent';
import { SidebarList } from '../../../components/sidebarList';

export const SidebarMobile = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useUIContext()

  const handleClose = () => {
    setIsDrawerOpen(false)
  }

  return (
    <Box>
      <StyledDrawerMobile variant="temporary" onClose={handleClose}
        open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }}>
        <LogoComponent />
        <BoxContainer isDrawerOpen={isDrawerOpen}>
          <SidebarList />
        </BoxContainer>
      </StyledDrawerMobile >
    </Box >
  );
}
