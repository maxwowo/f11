import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Link, Skeleton, useBoolean } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'

export interface MasonryImageProps {
  data: Image
  width: number
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({
  data: image,
  width,
}) => {
  const [isLoaded, setIsLoaded] = useBoolean()

  return (
    <Skeleton
      height={(width * image.thumbnail.height) / image.thumbnail.width}
      isLoaded={isLoaded}
      width={width}
    >
      <Box
        _hover={{ opacity: '0.7' }}
        cursor="pointer"
        transition="opacity 0.2s ease"
      >
        <Link as={NextLink} href={`/images/${image.filename}`}>
          <ChakraImage
            borderRadius="2px"
            src={`/api/images/${image.filename}.thumbnail.webp`}
            onLoad={setIsLoaded.on}
          />
        </Link>
      </Box>
    </Skeleton>
  )
}
export default memo(MasonryImage)
