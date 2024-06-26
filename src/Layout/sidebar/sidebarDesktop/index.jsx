import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';



import { useUIContext } from '../../../context/ui';

import { StyledDrawer, BoxContainer } from '../styles';
import { DrawerHeader } from '../../../styles';
import { DrawerList } from '../../../components/drawerList';



export const SidebarDesktop = () => {
  const { isDrawerOpen } = useUIContext()


  return (
    <Box>
      <CssBaseline />
      <StyledDrawer variant="permanent" open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }} >
        <DrawerHeader />

        <BoxContainer isDrawerOpen={isDrawerOpen} >


          <DrawerList />





        </BoxContainer>
      </StyledDrawer >

    </Box >
  );
}


