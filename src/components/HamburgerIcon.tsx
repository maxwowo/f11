import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/layout'
import { FunctionComponent, memo } from 'react'

const HAMBURGER_LAYER_STYLES: BoxProps = {
  backgroundColor: 'black',
  position: 'absolute',
  display: 'block',
  inset: 0,
  margin: 'auto',
  width: '100%',
  height: '1px',
  transition:
    'transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1), width 250ms cubic-bezier(0.2, 0.6, 0.3, 1)',
  willChange: 'transform, width',
}

const HamburgerIcon: FunctionComponent<FlexProps> = ({ ...rest }) => (
  <Flex
    {...rest}
    align="center"
    height="35px"
    justify="center"
    position="relative"
    width="35px"
  >
    <Box cursor="pointer" height="100%" width="100%">
      <Box {...HAMBURGER_LAYER_STYLES} transform="translatey(-5.5px)" />
      <Box {...HAMBURGER_LAYER_STYLES} transform="scale(0)" />
      <Box {...HAMBURGER_LAYER_STYLES} transform="translatey(5.5px)" />
    </Box>
  </Flex>
)

export default memo(HamburgerIcon)
