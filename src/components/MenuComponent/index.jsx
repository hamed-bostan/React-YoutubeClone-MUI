import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useUIContext } from '../../context/ui';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DownloadIcon from '@mui/icons-material/Download';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import { Box, Divider, ListItemIcon, Paper } from '@mui/material';
import { capitalizeFirstLetter } from '../../utility/Utilities';

export const MenuComponent = () => {
    const { anchorEl, setAnchorEl, open } = useUIContext()

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    '.MuiMenu-paper': {
                        boxShadow: '0px 0px 0.7px rgba(0,0,0,0.1)',
                        borderRadius: '0.725rem'
                    }
                }}
            // elevation={0}
            >
                {menuItems.map((item, index) => (
                    <Box key={item.id}>
                        <MenuItem onClick={handleClose}
                            sx={{
                                color: '#0f0f0f',
                                ":hover": {
                                    backgroundColor: "rgba(0,0,0,0.1)"
                                }
                            }}>
                            <ListItemIcon sx={{ color: '#0f0f0f' }}>
                                {item.iconUrl}
                            </ListItemIcon>
                            {capitalizeFirstLetter(item.text)}
                        </MenuItem>
                        {index == 4 && <Divider />}
                    </Box>
                ))}
            </Menu>
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