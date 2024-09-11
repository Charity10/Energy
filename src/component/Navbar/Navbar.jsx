import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <DesktopNavigation />
      <MobileNavigation />

    </div>
  )
}

export default Navbar