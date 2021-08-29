import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { motion, useAnimation } from 'framer-motion'
import { FunctionComponent, memo, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { Image } from '../images'

export interface MasonryImageProps {
  data: {
    image: Image
    handleImageSelect: (image: Image | null) => void
  }
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({ data }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 0.5,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <Box
        _hover={{ opacity: '0.8' }}
        cursor="pointer"
        transition="opacity 0.2s ease"
        onClick={() => data.handleImageSelect(data.image)}
      >
        <ChakraImage
          src={`/api/images/${data.image.filename}.thumbnail.webp`}
        />
      </Box>
    </motion.div>
  )
}

export default memo(MasonryImage)
