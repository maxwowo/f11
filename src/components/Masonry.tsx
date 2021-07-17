import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { FunctionComponent, memo } from 'react'

const GUTTER_SIZE = [5, 10, 20, 35]

export interface MasonryProps {
  images: {
    filename: string
    description: string
  }[]
}

const Masonry: FunctionComponent<MasonryProps> = ({ images, ...rest }) => (
  <Box
    {...rest}
    maxWidth={1750}
    mx="auto"
    sx={{
      columnCount: [2, 3, 4],
      columnGap: GUTTER_SIZE,
    }}
  >
    {images.map((image) => (
      <Box
        key={image.filename}
        display="inline-block"
        marginBottom={GUTTER_SIZE}
        marginLeft={0}
        marginRight={GUTTER_SIZE}
        marginTop={0}
        width="100%"
      >
        <Image
          alt={image.description}
          layout="fill"
          src={`/api/images/${image.filename}`}
        />
      </Box>
    ))}
  </Box>
)

export default memo(Masonry)
