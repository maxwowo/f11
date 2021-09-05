import { FunctionComponent, memo } from 'react'

import HamburgerIcon from './HamburgerIcon'
import { NavbarItem } from './Navbar'

interface MobileNavbarProps {
  items: NavbarItem[]
}

const MobileNavbar: FunctionComponent<MobileNavbarProps> = () => {
  return <HamburgerIcon display={{ md: 'none' }} />
}

export default memo(MobileNavbar)
