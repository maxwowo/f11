import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Link, Skeleton } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FunctionComponent, memo, useState } from 'react'

import { Image } from '../images'

export interface MasonryImageProps {
  data: Image
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({
  data: image,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Skeleton isLoaded={isLoaded}>
      <Box
        _hover={{ opacity: '0.8' }}
        cursor="pointer"
        transition="opacity 0.2s ease"
        onClick={() => console.log(`${image.filename} clicked`)}
      >
        <Link as={NextLink} href={`/images/${image.filename}`}>
          <ChakraImage
            src={`/api/images/${image.filename}.thumbnail.webp`}
            onLoad={() => setIsLoaded(true)}
          />
        </Link>
      </Box>
    </Skeleton>
  )
}
export default memo(MasonryImage)
