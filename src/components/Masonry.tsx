import { Box } from '@chakra-ui/react'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'
import MasonryImage from './MasonryImage'

export const GUTTER_SIZE = [5, 10, 20, 35]

export interface MasonryProps {
  images: Image[]
}

const Masonry: FunctionComponent<MasonryProps> = ({ images, ...rest }) => (
  <Box
    {...rest}
    mx="auto"
    p="4vw"
    sx={{
      columnCount: [2, 2, 3, 4],
      columnGap: GUTTER_SIZE.map((size) => `${size}px`),
    }}
  >
    {images.map((image) => (
      <MasonryImage key={image.filename} image={image} />
    ))}
  </Box>
)

export default memo(Masonry)
