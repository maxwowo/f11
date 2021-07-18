import { Box } from '@chakra-ui/react'
import { FunctionComponent, memo } from 'react'

import MasonryImage from './MasonryImage'

const GUTTER_SIZE = ['5px', '10px', '20px', '35px']

export interface MasonryProps {
  images: {
    filename: string
    description: string
  }[]
}

const Masonry: FunctionComponent<MasonryProps> = ({ images, ...rest }) => (
  <Box
    {...rest}
    mx="auto"
    p="4vw"
    sx={{
      columnCount: [2, 2, 3, 4],
      columnGap: GUTTER_SIZE,
    }}
  >
    {images.map((image) => (
      <MasonryImage
        key={image.filename}
        alt={image.description}
        cursor="pointer"
        display="inline-block"
        loading="lazy"
        mb={GUTTER_SIZE}
        ml={0}
        mr={GUTTER_SIZE}
        mt={0}
        src={image.filename}
        // src={`/api/images/${image.filename}`}
        width="100%"
      />
    ))}
  </Box>
)

export default memo(Masonry)
