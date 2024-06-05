import React from 'react'
import Navbar from './navbar/Navbar'
import { Sidebar } from './sidebar/Sidebar'
import { Box } from '@mui/material'

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
