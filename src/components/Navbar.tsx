import { HStack, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FunctionComponent, memo } from 'react'

import DesktopNavbar from './DesktopNavbar'
import HamburgerIcon from './HamburgerIcon'

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

const Navbar: FunctionComponent = () => (
  <HStack justify="space-between" px="4vw" py="2.5vw">
    <Text fontFamily="Abel" fontSize="4xl" fontWeight="600">
      <Link as={NextLink} href="/">
        MAX WO
      </Link>
    </Text>
    <DesktopNavbar items={NAVBAR_ITEMS} />
    <HamburgerIcon display={{ md: 'none' }} />
  </HStack>
)

export default memo(Navbar)
