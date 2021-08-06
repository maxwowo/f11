import { Box, Image as ChakraImage, Spinner } from '@chakra-ui/react'
import { Fragment, FunctionComponent, memo, useEffect, useState } from 'react'

import { Image } from '../images'

const MINIMUM_LOADING_TIME = 300

interface SelectedImageProps {
  selectedImage: Image | null
}

const SelectedImage: FunctionComponent<SelectedImageProps> = ({
  selectedImage,
}) => {
  const [loading, setLoading] = useState(true)
  const [waiting, setWaiting] = useState(true)
  const visible = !loading && !waiting

  useEffect(() => {
    const timer = setTimeout(() => {
      setWaiting(false)
    }, MINIMUM_LOADING_TIME)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  const handleImageLoad = () => {
    setLoading(false)
  }

  return (
    <Fragment>
      {!visible && (
        <Box padding={[25, 50]}>
          <Spinner size="lg" />
        </Box>
      )}
      <ChakraImage
        alt={selectedImage?.description}
        display={visible ? undefined : 'none'}
        maxHeight="85vh"
        src={selectedImage?.filename}
        onError={handleImageLoad}
        onLoad={handleImageLoad}
      />
    </Fragment>
  )
}

export default memo(SelectedImage)
