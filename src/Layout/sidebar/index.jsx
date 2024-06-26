import { useMediaQuery, useTheme } from "@mui/material"
import { SidebarDesktop } from './sidebarDesktop'
import { SidebarMobile } from './sidebarMobile'
import { useUIContext } from "../../context/ui"

export const Sidebar = () => {
  const theme = useTheme()
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('md'))
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))


  const { isDrawerOpen } = useUIContext()





  return (
    <>
      {isDesktopScreen && <SidebarDesktop />}
      {isMobileScreen && isDrawerOpen && <SidebarMobile isMobileScreen={isMobileScreen} />}
    </>
  )
}
