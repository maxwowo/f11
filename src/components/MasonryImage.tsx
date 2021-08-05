import { motion, useAnimation } from 'framer-motion'
import NextImage from 'next/image'
import { FunctionComponent, memo, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { Image } from '../images'

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
      <NextImage
        alt={image.description}
        height={image.height}
        // src={`/api/images/${image.filename}`}
        src={image.filename}
        width={image.width}
      />
    </motion.div>
  )
}

export default memo(MasonryImage)
