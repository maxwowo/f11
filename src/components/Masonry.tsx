import { Box, useMediaQuery } from '@chakra-ui/react'
import { Masonry as MasonicMasonry } from 'masonic'
import { Fragment, FunctionComponent, memo } from 'react'

import { Image } from '../images'
import MasonryImage from './MasonryImage'

export const GUTTER_SIZE = [5, 10, 20, 35]

export interface MasonryProps {
  images: Image[]
}

const Masonry: FunctionComponent<MasonryProps> = ({ images }) => {
  const [isSmallerThanSm, isSmallerThanMd, isSmallerThanLg] = useMediaQuery([
    '(max-width: 30em)',
    '(max-width: 48em)',
    '(max-width: 62em)',
  ])

  return (
    <Fragment>
      {/* <Modal isCentered isOpen={isOpen} onClose={() => selectImage(null)}>
        <ModalOverlay background="rgba(255, 255, 255, 0.9)" />
        <ModalContent maxWidth="unset" width="unset">
          <ChakraImage
            maxHeight="85vh"
            maxWidth="92vw"
            src={`/api/images/${selectedImage?.filename}.webp`}
          />
        </ModalContent>
      </Modal> */}
      <Box mx="auto" p="4vw">
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
          items={images}
          overscanBy={4}
          render={MasonryImage}
        />
      </Box>
    </Fragment>
  )
}

export default memo(Masonry)
