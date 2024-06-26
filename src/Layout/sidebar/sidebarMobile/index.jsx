import Box from '@mui/material/Box';
import { Drawer } from '@mui/material';
import { useUIContext } from '../../../context/ui';
import { BoxContainer } from './styles';
import { DrawerHeader } from '../../../styles';
import { DrawerList } from '../../../components/draweList';

export const SidebarMobile = ({ mobile }) => {
  const { isDrawerOpen, setIsDrawerOpen } = useUIContext()



  return (
    <Box>

      <Drawer variant="permanent" open={isDrawerOpen} PaperProps={{ style: { border: 'none', minWidth: !isDrawerOpen && '4.65rem' } }}
        onClose={() => setIsDrawerOpen(false)}
      >
        <DrawerHeader />

        <BoxContainer isDrawerOpen={isDrawerOpen} >


          <DrawerList mobile={mobile} />





        </BoxContainer>
      </Drawer >

    </Box >
  );
}



