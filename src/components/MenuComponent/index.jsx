import { useUIContext } from '../../context/ui';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DownloadIcon from '@mui/icons-material/Download';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import { Box, Divider } from '@mui/material';
import { capitalizeFirstLetter } from '../../utility/Utilities';
import { StyledMenu, StyledListItemIcon, StyledMenuItem } from './styles';

export const MenuComponent = () => {
    const { anchorEl, setAnchorEl, open } = useUIContext()

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <StyledMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {menuItems.map((item, index) => (
                    <Box key={item.id}>
                        <StyledMenuItem onClick={handleClose}>
                            <StyledListItemIcon> {item.iconUrl} </StyledListItemIcon>
                            {capitalizeFirstLetter(item.text)}
                        </StyledMenuItem>
                        {index == 4 && <Divider />}
                    </Box>
                ))}
            </StyledMenu>
        </>
    );
}

const menuItems = [
    { id: '1', text: 'add to queque', iconUrl: < PlaylistPlayIcon /> },
    { id: '2', text: 'save to watch later', iconUrl: <QueryBuilderIcon /> },
    { id: '3', text: 'save to playlist', iconUrl: <PlaylistAddIcon /> },
    { id: '4', text: 'download', iconUrl: <DownloadIcon /> },
    { id: '5', text: 'share', iconUrl: <ShareOutlinedIcon /> },
    { id: '6', text: 'not interested', iconUrl: <BlockOutlinedIcon /> },
    { id: '7', text: 'dont recommend channel', iconUrl: <RemoveCircleOutlineOutlinedIcon /> },
    { id: '8', text: 'report', iconUrl: <OutlinedFlagIcon /> },
]