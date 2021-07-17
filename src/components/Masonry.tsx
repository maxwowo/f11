import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'
import { FunctionComponent, memo } from 'react'

export interface MasonryProps {
  images: {
    filename: string
    description: string
  }[]
}

const Masonry: FunctionComponent<MasonryProps & BoxProps> = ({
  images,
  ...rest
}) => (
  <Box
    {...rest}
    sx={{
      columnCount: [1, 2, 3, 4],
      columnGap: 20,
    }}
  >
    {images.map((image) => (
      <Box
        key={image.filename}
        display="inline-block"
        marginBottom={20}
        marginLeft={0}
        marginRight={20}
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
