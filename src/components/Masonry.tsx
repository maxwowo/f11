import {
  Box,
  Image as ChakraImage,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react'
import { Masonry as MasonicMasonry } from 'masonic'
import { Fragment, FunctionComponent, memo, useEffect, useState } from 'react'

import { Image } from '../images'
import MasonryImage from './MasonryImage'

export const GUTTER_SIZE = [5, 10, 20, 35]

interface MasonryProps {
  images: Image[]
}

const Masonry: FunctionComponent<MasonryProps> = ({ images }) => {
  const [isSmallerThanSm, isSmallerThanMd, isSmallerThanLg] = useMediaQuery([
    '(max-width: 30em)',
    '(max-width: 48em)',
    '(max-width: 62em)',
  ])

  const {
    isOpen: modalIsOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<Image>()

  useEffect(() => {
    if (selectedImage) {
      onModalOpen()
    }
  }, [selectedImage, onModalOpen])

  useEffect(() => {
    if (!modalIsOpen) {
      setSelectedImage(undefined)
    }
  }, [modalIsOpen])

  const handleImageSelect = (image: Image) => {
    setSelectedImage(image)
  }

  return (
    <Fragment>
      <Modal
        blockScrollOnMount
        isCentered
        isOpen={modalIsOpen}
        returnFocusOnClose={false}
        onClose={onModalClose}
      >
        <ModalOverlay background="rgba(255, 255, 255, 0.9)" />
        <ModalContent background="transparent" maxWidth="unset" width="unset">
          <ChakraImage
            maxHeight="85vh"
            maxWidth="92vw"
            src={`/api/images/${selectedImage?.filename}.webp`}
          />
        </ModalContent>
      </Modal>
      <Box _focus={{ tabIndex: 'none' }} mx="auto" outline="none" p="4vw">
        <MasonicMasonry
          columnCount={
            isSmallerThanSm ? 2 : isSmallerThanMd ? 2 : isSmallerThanLg ? 3 : 4
          }
          columnGutter={
            isSmallerThanSm
              ? 5
              : isSmallerThanMd
              ? 10
              : isSmallerThanLg
              ? 20
              : 35
          }
          items={images.map((image) => ({
            image: image,
            handleImageSelect,
          }))}
          overscanBy={4}
          render={MasonryImage}
          style={{
            outline: 'none',
          }}
        />
      </Box>
    </Fragment>
  )
}

export default memo(Masonry)
