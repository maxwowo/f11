import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'

export interface MasonryImageProps {
  data: {
    image: Image
    handleImageSelect: (image: Image | null) => void
  }
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({ data }) => (
  <Box
    _hover={{ opacity: '0.8' }}
    cursor="pointer"
    transition="opacity 0.2s ease"
    onClick={() => data.handleImageSelect(data.image)}
  >
    <ChakraImage src={`/api/images/${data.image.filename}.thumbnail.webp`} />
  </Box>
)

export default memo(MasonryImage)
