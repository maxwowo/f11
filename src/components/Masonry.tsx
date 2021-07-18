import { Box, Image as ChakraImage, Link } from '@chakra-ui/react'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'

const GUTTER_SIZE = ['5px', '10px', '20px', '35px']

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
      columnGap: GUTTER_SIZE,
    }}
  >
    {images.map((image) => (
      // TODO: change image.filename to /api/images/${image.filename}
      <Link key={image.filename} isExternal href={image.filename}>
        <ChakraImage
          alt={image.description}
          cursor="pointer"
          display="inline-block"
          mb={GUTTER_SIZE}
          ml={0}
          mr={GUTTER_SIZE}
          mt={0}
          src={image.filename}
          // src={`/api/images/${image.filename}`}
          width="100%"
        />
      </Link>
    ))}
  </Box>
)

export default memo(Masonry)
