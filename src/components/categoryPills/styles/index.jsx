import { Box, Button, styled } from "@mui/material";


export const BoxContainer = styled(Box)(() => ({
    display: 'flex',
    columnGap: '0.75rem'
}))

export const StyledButton = styled(Button,
    { shouldForwardProp: (prop) => prop !== 'selectedCategory' && prop !== 'categoryTitle' })
    (({ selectedCategory, categoryTitle, theme }) => ({
        // backgroundColor: selectedCategory === categoryTitle ? '#0f0f0f' : 'rgba(0,0,0,0.05)',
        // color: selectedCategory === categoryTitle ? '#fff' : '#0f0f0f',
        backgroundColor: selectedCategory === categoryTitle ? theme.palette.primary.main : theme.palette.secondary.light,
        color: selectedCategory === categoryTitle ? theme.palette.primary.light : theme.palette.primary.main,
        // padding: 0,
        // py: '0.125rem',
        // px: '0.75rem',
        padding: '0.125rem 0.75rem',
        fontSize: '0.87rem',
        minHeight: 0,
        minWidth: 0,
        whiteSpace: 'nowrap',
        fontWeight: 500,
        borderRadius: '0.5rem',
        ":hover": {
            // backgroundColor: "rgba(0,0,0,0.1)",
            backgroundColor: theme.palette.secondary.main
        },
    }))