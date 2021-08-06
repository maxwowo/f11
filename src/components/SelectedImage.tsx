import { Box, Image as ChakraImage, Spinner } from '@chakra-ui/react'
import { Fragment, FunctionComponent, memo, useState } from 'react'

import { Image } from '../images'

interface SelectedImageProps {
  selectedImage: Image | null
}

const SelectedImage: FunctionComponent<SelectedImageProps> = ({
  selectedImage,
}) => {
  const [loading, setLoading] = useState(true)

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <Fragment>
      {loading && (
        <Box padding={[25, 50]}>
          <Spinner size="lg" />
        </Box>
      )}
      <ChakraImage
        alt={selectedImage?.description}
        display={loading ? 'none' : undefined}
        maxHeight="85vh"
        src={selectedImage?.filename}
        onError={handleImageLoad}
        onLoad={handleImageLoad}
      />
    </Fragment>
  )
}

export default memo(SelectedImage)
