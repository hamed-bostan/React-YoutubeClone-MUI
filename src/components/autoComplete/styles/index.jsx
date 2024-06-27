import { Box, Button, IconButton, InputAdornment, Stack, TextField, Tooltip, Typography, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const StackContainer = styled(Stack)(() => ({
    width: '100%'
}))

export const RenderOptionContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    ":hover": {
        backgroundColor: theme.palette.secondary.main,
    }
}))

export const InformationContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    columnGap: '0.5rem'
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

export const RenderInputContainer = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
}))

export const StyledTextField = styled(TextField)(({ isFocus }) => ({
    width: '100%',
    '.MuiInputBase-input': {
        padding: '0',
        marginLeft: !isFocus && '0.5rem',
    },
}))

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
    cursor: 'default'
}))

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: '#f8f8f8',
    borderRadius: 0,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingRight: '1rem',
    paddingLeft: '1rem',
    borderLeft: `1px solid ${theme.palette.secondary.light}`,
    ":hover": {
        backgroundColor: theme.palette.secondary.main
    },
}))

export const SubmitSearchIcon = styled(SearchIcon)(({ theme }) => ({
    color: theme.palette.primary.main,
}))

export const StyledInputAdornment = styled(InputAdornment, {
    shouldForwardProp: (prop => prop !== 'isFocus')
})(({ isFocus }) => ({
    paddingLeft: isFocus && '1rem',
}))

