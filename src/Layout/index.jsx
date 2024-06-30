import { Box } from '@mui/material'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { Outlet } from 'react-router-dom'
import { CategoryPills } from '../components/categoryPills'
import { DrawerHeader } from '../styles'

export const Layout = () => {

    return (
        <>
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <DrawerHeader />
                    {/* <CategoryPills /> */}
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

