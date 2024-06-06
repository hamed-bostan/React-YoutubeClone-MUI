import React from 'react'
import { Box } from '@mui/material'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'


export const Layout = ({ children }) => {

    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box>
                    {children}
                </Box>
            </Box>
        </>
    )
}


