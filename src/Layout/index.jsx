import { Box } from '@mui/material'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { Outlet } from 'react-router-dom'
import { CategoryItem } from '../components/CategoryItem'

export const Layout = () => {

    return (
        <>
            <Navbar />
            {/* <CategoryItem /> */}
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Outlet />
            </Box>
        </>
    )
}

