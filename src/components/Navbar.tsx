import { HStack, Link, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import NextLink from 'next/link'
import { FunctionComponent, memo } from 'react'

const NAVBAR_ITEMS: {
  name: string
  link: string
}[] = [
  {
    name: 'Landscape',
    link: '/landscape',
  },
  {
    name: 'Astro',
    link: '/astro',
  },
  {
    name: 'Street',
    link: '/street',
  },
  {
    name: 'Portrait',
    link: '/portrait',
  },
]

const Navbar: FunctionComponent = () => {
  const router = useRouter()

  return (
    <HStack justify="space-between" px="4vw" py="2.5vw">
      <Text fontFamily="Abel" fontSize="4xl" fontWeight="600">
        <Link as={NextLink} href="/">
          MAX WO
        </Link>
      </Text>
      <HStack spacing="5vw">
        {NAVBAR_ITEMS.map((item) => (
          <Text
            key={item.link}
            as={router.pathname === item.link ? 'u' : undefined}
            fontFamily="Source Code Pro"
            fontSize="md"
          >
            <Link as={NextLink} href={item.link}>
              {item.name}
            </Link>
          </Text>
        ))}
      </HStack>
    </HStack>
  )
}

export default memo(Navbar)
