import { Box } from '@mui/material'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { Outlet } from 'react-router-dom'
import { CategoryPills } from '../components/categoryPills'

export const Layout = () => {

    return (
        <>
            <Navbar />
            {/* <CategoryPills /> */}
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Outlet />
            </Box>
        </>
    )
}

