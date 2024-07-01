import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useUIContext } from '../../../context/ui';
import { BoxContainer, StyledDrawerDesktop } from '../styles';
import { DrawerHeader } from '../../../styles';
import { SidebarList } from '../../../components/sidebarList';

export const SidebarDesktop = () => {
  const { isDrawerOpen } = useUIContext()

  return (
    <Box>
      <CssBaseline />
      <StyledDrawerDesktop variant="permanent" open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }} >
        <DrawerHeader />
        <BoxContainer isDrawerOpen={isDrawerOpen} >
          <SidebarList />
        </BoxContainer>
      </StyledDrawerDesktop >
    </Box >
  );
}
