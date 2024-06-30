import { Tooltip } from "@mui/material"
import { NotificationIcon, StyledBadge, StyledIconsButton } from "../styles"

export const NotificationComponent = () => {
    return (
        <Tooltip title='Notifications'>
            <StyledIconsButton disableRipple>
                <StyledBadge badgeContent={"9+"} color='error' >
                    <NotificationIcon />
                </StyledBadge>
            </StyledIconsButton>
        </Tooltip>
    )
}
