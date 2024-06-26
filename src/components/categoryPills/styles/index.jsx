import { Box, Button, styled } from "@mui/material";


export const BoxWrapper = styled(Box)(() => ({
    overflow: 'hidden',
}))

export const BoxContainer = styled(Box)(() => ({
    display: 'flex',
    columnGap: '0.75rem',
    paddingLeft: '1.5rem',
}))

export const StyledButton = styled(Button,
    { shouldForwardProp: (prop) => prop !== 'selectedCategory' && prop !== 'categoryTitle' })
    (({ selectedCategory, categoryTitle, theme }) => ({
        backgroundColor: selectedCategory === categoryTitle ? theme.palette.primary.main : theme.palette.secondary.light,
        color: selectedCategory === categoryTitle ? theme.palette.primary.light : theme.palette.primary.main,
        textTransform: 'none',
        padding: '0.3rem 0.75rem',
        fontSize: '0.87rem',
        minHeight: 0,
        minWidth: 0,
        whiteSpace: 'nowrap',
        fontWeight: 500,
        borderRadius: '0.5rem',
        ":hover": {
            backgroundColor: selectedCategory !== categoryTitle && theme.palette.secondary.main
        },
    }))