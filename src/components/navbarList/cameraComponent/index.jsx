import { Tooltip } from "@mui/material";
import { CameraIcon, StyledIconsButton } from "../styles";

import React from 'react'

export const CameraComponent = () => {
    return (
        <Tooltip title='Create'>
            <StyledIconsButton disableRipple>
                <CameraIcon />
            </StyledIconsButton>
        </Tooltip>
    )
}
