import { Tooltip } from '@mui/material'
import { MicIcon, MicIconButton } from '../styles'
import { useUIContext } from '../../../context/ui'

export const MicComponent = () => {
    const { isDesktopScreen } = useUIContext()
    return (
        <Tooltip title='Search with your voice'>
            <MicIconButton disableRipple isDesktopScreen={isDesktopScreen}>
                <MicIcon />
            </MicIconButton>
        </Tooltip>
    )
}
