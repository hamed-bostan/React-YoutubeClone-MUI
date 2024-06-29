import { Tooltip } from '@mui/material'
import { MicIcon, MicIconButton } from '../styles'

export const MicComponent = ({ isDesktopScreen }) => {
    return (
        <Tooltip title='Search with your voice'>
            <MicIconButton disableRipple isDesktopScreen={isDesktopScreen}>
                <MicIcon />
            </MicIconButton>
        </Tooltip>
    )
}
