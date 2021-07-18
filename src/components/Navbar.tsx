import { Box, Flex, Icon, Link, Spacer, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FunctionComponent } from 'react'
import { FaInstagram } from 'react-icons/fa'

const Navbar: FunctionComponent = () => (
  <Box>
    <Flex align="center" px="4vw" py="2.5vw">
      <Text fontFamily="Abel" fontSize="4xl" fontWeight="600">
        <Link as={NextLink} href="/">
          MAX WO
        </Link>
      </Text>
      <Spacer />
      <Link isExternal href="https://www.instagram.com/maxwowowowo">
        <Icon as={FaInstagram} />
      </Link>
    </Flex>
  </Box>
)

export default Navbar
