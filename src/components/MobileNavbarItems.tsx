import { Link, Text, VStack } from '@chakra-ui/layout'
import NextLink from 'next/link'
import { FunctionComponent, memo } from 'react'

import { NavbarItem } from './Navbar'

interface MobileNavbarItemsProps {
  items: NavbarItem[]
}

const MobileNavbarItems: FunctionComponent<MobileNavbarItemsProps> = ({
  items,
}) => (
  <VStack
    display={{ md: 'none' }}
    fontFamily="Source Code Pro"
    fontSize="lg"
    pb="2.5vw"
    px="4.5vw"
  >
    {items.map((item) => (
      <Text key={item.link}>
        <Link as={NextLink} href={item.link}>
          {item.name}
        </Link>
      </Text>
    ))}
  </VStack>
)

export default memo(MobileNavbarItems)
