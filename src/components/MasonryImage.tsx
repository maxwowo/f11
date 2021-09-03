import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Skeleton, useBoolean } from '@chakra-ui/react'
import { FunctionComponent, memo } from 'react'

import { Image } from '../images'

interface MasonryImageProps {
  data: {
    image: Image
    handleImageSelect: (image: Image) => void
  }
  width: number
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({
  data: { image, handleImageSelect },
  width,
}) => {
  const [isLoaded, setIsLoaded] = useBoolean()

  return (
    <Skeleton
      borderRadius="0px"
      height={(width * image.thumbnail.height) / image.thumbnail.width}
      isLoaded={isLoaded}
      width={width}
    >
      <Box
        _hover={{ opacity: '0.7' }}
        cursor="pointer"
        transition="opacity 0.2s ease"
      >
        <ChakraImage
          src={`/api/images/${image.filename}.thumbnail.webp`}
          onClick={() => handleImageSelect(image)}
          onLoad={setIsLoaded.on}
        />
      </Box>
    </Skeleton>
  )
}
export default memo(MasonryImage)
