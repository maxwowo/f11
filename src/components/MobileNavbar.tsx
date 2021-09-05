import { useDisclosure } from '@chakra-ui/hooks'
import { Fragment, FunctionComponent, memo } from 'react'

import HamburgerIcon from './HamburgerIcon'
import { NavbarItem } from './Navbar'

interface MobileNavbarProps {
  items: NavbarItem[]
}

const MobileNavbar: FunctionComponent<MobileNavbarProps> = () => {
  const { isOpen, onToggle: toggleOpen } = useDisclosure()

  return (
    <Fragment>
      <HamburgerIcon
        display={{ md: 'none' }}
        handleOpenToggle={toggleOpen}
        isOpen={isOpen}
      />
    </Fragment>
  )
}

export default memo(MobileNavbar)
