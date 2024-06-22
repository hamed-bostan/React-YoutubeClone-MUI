import { Box } from '@mui/material'
import { Navbar } from './navbar'
import { Sidebar } from './sidebar'
import { Outlet } from 'react-router-dom'
import { CategoryPills } from '../components/categoryPills'
// import PositionedMenu from '../components/MenuComponent/positionedMenu'

export const Layout = () => {

    return (
        <>
            <Navbar />
            {/* <CategoryPills /> */}
            {/* <PositionedMenu /> */}
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Outlet />
            </Box>
        </>
    )
}

