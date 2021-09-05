import { Collapse, HStack, Link, Text, useDisclosure } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Fragment, FunctionComponent, memo } from 'react'

import DesktopNavbarItems from './DesktopNavbarItems'
import HamburgerIcon from './HamburgerIcon'
import MobileNavbarItems from './MobileNavbarItems'

export interface NavbarItem {
  name: string
  link: string
}

const NAVBAR_ITEMS: NavbarItem[] = [
  {
    name: 'Landscape',
    link: '/landscape',
  },
  {
    name: 'Urban',
    link: '/urban',
  },
  {
    name: 'Rural',
    link: '/rural',
  },
  {
    name: 'Portrait',
    link: '/portrait',
  },
]

const Navbar: FunctionComponent = () => {
  const { isOpen, onToggle: toggleOpen } = useDisclosure()

  return (
    <Fragment>
      <HStack justify="space-between" px="4vw" py="2.5vw">
        <Text fontFamily="Abel" fontSize="4xl" fontWeight="600">
          <Link as={NextLink} href="/">
            MAX WO
          </Link>
        </Text>
        <DesktopNavbarItems items={NAVBAR_ITEMS} />
        <HamburgerIcon
          display={{ md: 'none' }}
          handleOpenToggle={toggleOpen}
          isOpen={isOpen}
        />
      </HStack>
      <Collapse animateOpacity in={isOpen}>
        <MobileNavbarItems items={NAVBAR_ITEMS} />
      </Collapse>
    </Fragment>
  )
}

export default memo(Navbar)
