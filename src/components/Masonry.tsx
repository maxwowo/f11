import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { Fragment, FunctionComponent, memo, useEffect, useState } from 'react'

import { Image } from '../images'
import MasonryImage from './MasonryImage'
import SelectedImage from './SelectedImage'

export const GUTTER_SIZE = [5, 10, 20, 35]

export interface MasonryProps {
  images: Image[]
}

const Masonry: FunctionComponent<MasonryProps> = ({ images, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  useEffect(() => {
    if (selectedImage === null) {
      onClose()
    } else {
      onOpen()
    }
  }, [selectedImage, onOpen, onClose])

  const selectImage = (image: Image | null) => {
    setSelectedImage(image)
  }

  return (
    <Fragment>
      <Modal isCentered isOpen={isOpen} onClose={() => selectImage(null)}>
        <ModalOverlay background="rgba(255, 255, 255, 0.9)" />
        <ModalContent
          borderRadius={0}
          margin={0}
          maxWidth="unset"
          width="unset"
        >
          <SelectedImage selectedImage={selectedImage} />
        </ModalContent>
      </Modal>
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
          <MasonryImage
            key={image.filename}
            handleImageSelect={selectImage}
            image={image}
          />
        ))}
      </Box>
    </Fragment>
  )
}

export default memo(Masonry)
