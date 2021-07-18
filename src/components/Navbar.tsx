import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/react'
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
    <Box>
      <Flex align="center" px="4vw" py="2.5vw">
        <Text fontFamily="Abel" fontSize="4xl" fontWeight="600">
          <Link as={NextLink} href="/">
            MAX WO
          </Link>
        </Text>
        <Spacer />
        {NAVBAR_ITEMS.map((item) => (
          <Text
            key={item.link}
            as={router.pathname === item.link ? 'u' : undefined}
            fontFamily="Source Code Pro"
            fontSize="md"
            ml="5vw"
          >
            <Link as={NextLink} href={item.link}>
              {item.name}
            </Link>
          </Text>
        ))}
      </Flex>
    </Box>
  )
}

export default memo(Navbar)
