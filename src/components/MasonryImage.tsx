import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'

export interface MasonryImageProps {
  data: Image
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({
  data: image,
}) => (
  <Box
    _hover={{ opacity: '0.8' }}
    cursor="pointer"
    transition="opacity 0.2s ease"
    onClick={() => console.log(`${image.filename} clicked`)}
  >
    <ChakraImage src={`/api/images/${image.filename}.thumbnail.webp`} />
  </Box>
)

export default memo(MasonryImage)
