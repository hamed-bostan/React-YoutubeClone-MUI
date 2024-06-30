import { SidebarDesktop } from './sidebarDesktop'
import { SidebarMobile } from './sidebarMobile'
import { useUIContext } from "../../context/ui"

export const Sidebar = () => {
  const { isDrawerOpen, isDesktopScreen, isMobileScreen } = useUIContext()

  return (
    <>
      {isDesktopScreen && <SidebarDesktop />}
      {isMobileScreen && isDrawerOpen && <SidebarMobile />}
    </>
  )
}
