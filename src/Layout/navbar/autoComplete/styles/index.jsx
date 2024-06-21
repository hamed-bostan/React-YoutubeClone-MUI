import { Box, Button, IconButton, Stack, TextField, Typography, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const StackContainer = styled(Stack)(() => ({
    width: '100%'
}))

export const RenderOptionContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // px: 1,
    padding: '0 0.1rem',
    ":hover": {
        backgroundColor: 'rgba(0,0,0,0.1)'
    }
}))

export const InformationContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    // columnGap: 1,
    columnGap: '0.2rem'
}))

export const StyledInformation = styled(Typography)(() => ({
    cursor: 'default'
}))

export const StyledButton = styled(Button)(() => ({
    textTransform: 'none',
    "&.MuiButtonBase-root:hover": {
        backgroundColor: "transparent"
    }
}))

// render input section
// render input section

export const RenderInputContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}))

export const StyledTextField = styled(TextField)(({ isFocus }) => ({
    width: '100%',
    '.MuiInputBase-input': {
        // padding: 0,
        padding: '0',
        // ml: !isFocus && 1,
        marginLeft: !isFocus && '0.1rem',
    },
}))



export const StyledSearchIcon = styled(SearchIcon)(() => ({
    color: '#0f0f0f',
    cursor: 'default'
}))


export const StyledIconButton = styled(IconButton)(() => ({
    backgroundColor: '#f8f8f8',
    borderRadius: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    // px: 2,
    padding: '0 0.3rem',
    borderLeft: '1px solid rgba(0,0,0,0.05)',
    ":hover": {
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
}))


export const SubmitSearchIcon = styled(SearchIcon)(() => ({
    color: "#0f0f0f"
}))