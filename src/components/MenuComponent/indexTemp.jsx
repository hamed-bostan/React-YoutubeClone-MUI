import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';
import { useUIContext } from '../../context/ui';
import { capitalizeFirstLetter } from '../../utility/Utilities';

import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DownloadIcon from '@mui/icons-material/Download';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';

export const MenuComponent = () => {
    const { isMenuOpen, setIsMenuOpen } = useUIContext()

    const handleClose = () => {
        setIsMenuOpen(false)
    };

    return (
        <Box>
            <Menu
                id="account-menu"
                open={isMenuOpen}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                {menuItems.map((item, index) => (
                    <Box key={item.id}>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                {item.iconUrl}
                            </ListItemIcon>
                            {capitalizeFirstLetter(item.text)}
                        </MenuItem>
                        {index == 4 && <Divider />}
                    </Box>
                ))}
            </Menu>
        </Box>
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