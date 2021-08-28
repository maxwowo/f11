import { Image as ChakraImage } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { motion, useAnimation } from 'framer-motion'
import { FunctionComponent, memo, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { Image } from '../images'
import { GUTTER_SIZE } from './Masonry'

export interface MasonryImageProps {
  image: Image
  handleImageSelect: (image: Image | null) => void
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({
  image,
  handleImageSelect,
}) => {
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
        cursor="zoom-in"
        // TODO: remove this hack that neutralizes the extra whitespace added by NextImage's `display: inline` once a
        // better fix is found
        fontSize={0}
        mb={GUTTER_SIZE.map((size) => `${size}px`)}
        onClick={() => handleImageSelect(image)}
      >
        <ChakraImage src={`/api/images/${image.filename}_thumbnail.webp`} />
      </Box>
    </motion.div>
  )
}

export default memo(MasonryImage)
