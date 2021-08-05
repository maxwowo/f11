import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'

const GUTTER_SIZE = [5, 10, 20, 35]

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
      <Box
        key={image.filename}
        // TODO: remove this hack that neutralizes the extra whitespace added by NextImage's `display: inline` once a
        // better fix is found
        fontSize={0}
        mb={GUTTER_SIZE.map((size) => `${size}px`)}
      >
        {/* TODO: change image.filename to /api/images/${image.filename} */}
        <NextImage
          alt={image.description}
          height={image.height}
          // src={`/api/images/${image.filename}`}
          src={image.filename}
          width={image.width}
        />
      </Box>
    ))}
  </Box>
)

export default memo(Masonry)
