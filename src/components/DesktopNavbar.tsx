import { HStack, Link, Text } from '@chakra-ui/layout'
import { Icon } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link'
import { FunctionComponent, memo } from 'react'
import { FaInstagram } from 'react-icons/fa'

import { NavbarItem } from './Navbar'

interface DesktopNavbarProps {
  items: NavbarItem[]
}

const DesktopNavbar: FunctionComponent<DesktopNavbarProps> = ({ items }) => {
  const router = useRouter()

  return (
    <HStack display={['none', 'none', 'flex']} spacing="5vw">
      {items.map((item) => (
        <Text
          key={item.link}
          backgroundImage="linear-gradient(to right, currentColor 100%, currentColor 0)"
          backgroundPosition="0 calc(100% - 0.1em)"
          backgroundRepeat="repeat-x"
          backgroundSize={router.pathname === item.link ? '1px 1px' : '0 0'}
          fontFamily="Source Code Pro"
          fontSize="md"
          padding="0.2em 0"
        >
          <Link as={NextLink} href={item.link}>
            {item.name}
          </Link>
        </Text>
      ))}
      <a
        href="https://instagram.com/maxwowowowo"
        rel="noreferrer"
        target="_blank"
      >
        <Icon as={FaInstagram} height="20px" width="20px" />
      </a>
    </HStack>
  )
}

export default memo(DesktopNavbar)
