import { useMediaQuery, useTheme } from "@mui/material"
import { SidebarDesktop } from './sidebarDesktop'
import { SidebarMobile } from './sidebarMobile'
import { useUIContext } from "../../context/ui"

export const Sidebar = () => {
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('md'))
  const mobile = useMediaQuery(theme.breakpoints.down('md'))


  const { isDrawerOpen } = useUIContext()





  return (
    <>
      {desktop && <SidebarDesktop />}
      {mobile && isDrawerOpen && <SidebarMobile mobile={mobile} />}
    </>
  )
}
