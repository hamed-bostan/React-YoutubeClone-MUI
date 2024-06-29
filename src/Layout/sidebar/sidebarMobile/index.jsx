import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import { useUIContext } from '../../../context/ui';
import { BoxContainer } from '../styles';
import { DrawerHeader } from '../../../styles';
import { DrawerList } from '../../../components/drawerList';
import { LogoComponent } from '../../../components/navbarList/logoComponent';

export const SidebarMobile = () => {
  const { isDrawerOpen } = useUIContext()



  return (
    <Box>

      <Drawer variant="permanent" open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }}>
        {/* <DrawerHeader /> */}

        <BoxContainer isDrawerOpen={isDrawerOpen}>

          <LogoComponent />
          <DrawerList />





        </BoxContainer>
      </Drawer >

    </Box >
  );
}




