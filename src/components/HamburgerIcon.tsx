import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/layout'
import { FunctionComponent, memo } from 'react'

const HAMBURGER_LAYER_STYLES: BoxProps = {
  backgroundColor: 'black',
  position: 'absolute',
  inset: 0,
  margin: 'auto',
  height: '1px',
  transition:
    'transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1), width 250ms cubic-bezier(0.2, 0.6, 0.3, 1)',
}

interface HamburgerIconProps {
  isOpen: boolean
  handleOpenToggle: () => void
}

const HamburgerIcon: FunctionComponent<HamburgerIconProps & FlexProps> = ({
  isOpen,
  handleOpenToggle,
  ...rest
}) => (
  <Flex {...rest} height="35px" position="relative" width="35px">
    <Box cursor="pointer" height="100%" width="100%" onClick={handleOpenToggle}>
      <Box
        {...HAMBURGER_LAYER_STYLES}
        transform={isOpen ? 'rotate(-135deg)' : 'translatey(-5.5px)'}
      />
      <Box {...HAMBURGER_LAYER_STYLES} transform="scale(0)" />
      <Box
        {...HAMBURGER_LAYER_STYLES}
        transform={isOpen ? 'rotate(135deg)' : 'translatey(5.5px)'}
      />
    </Box>
  </Flex>
)

export default memo(HamburgerIcon)
