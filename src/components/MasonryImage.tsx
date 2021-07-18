import { Image, ImageProps } from '@chakra-ui/react'
import { motion, useAnimation } from 'framer-motion'
import { FunctionComponent, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const MasonryImage: FunctionComponent<ImageProps> = ({ children, ...rest }) => {
  const animation = useAnimation()
  const [ref, isInView] = useInView()

  useEffect(() => {
    if (isInView) {
      animation.start('visible')
    }
  }, [animation, isInView])

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.4,
          },
        },
        hidden: {
          opacity: 0,
          y: 10,
        },
      }}
    >
      <Image {...rest} />
    </motion.div>
  )
}

export default MasonryImage
