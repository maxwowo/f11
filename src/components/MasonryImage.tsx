import { Box } from '@chakra-ui/layout'
import { motion, useAnimation } from 'framer-motion'
import NextImage from 'next/image'
import { FunctionComponent, memo, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { Image } from '../images'
import { GUTTER_SIZE } from './Masonry'

export interface MasonryImageProps {
  image: Image
}

const MasonryImage: FunctionComponent<MasonryImageProps> = ({ image }) => {
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
        duration: 0.4,
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
      }}
    >
      <Box
        // TODO: remove this hack that neutralizes the extra whitespace added by NextImage's `display: inline` once a
        // better fix is found
        fontSize={0}
        mb={GUTTER_SIZE.map((size) => `${size}px`)}
      >
        <NextImage
          alt={image.description}
          height={image.height}
          // src={`/api/images/${image.filename}`}
          src={image.filename}
          width={image.width}
        />
      </Box>
    </motion.div>
  )
}

export default memo(MasonryImage)
