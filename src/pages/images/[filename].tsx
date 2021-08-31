import { Image as ChakraImage } from '@chakra-ui/image'
import { Center } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Error from 'next/error'
import { NextSeo } from 'next-seo'
import { Fragment, useState } from 'react'

import Navbar from '../../components/Navbar'
import useWindowSize from '../../hooks/useWindowSize'
import images from '../../images'

const Image: NextPage = () => {
  const router = useRouter()
  const { filename } = router.query

  const imageIndex = images.findIndex((image) => image.filename === filename)

  const windowSize = useWindowSize()

  const [navbarHeight, setNavbarHeight] = useState<number>()

  // Image with corresponding filename not found
  if (imageIndex === -1) {
    return <Error statusCode={404} />
  }

  return (
    <Fragment>
      <NextSeo title="f/11" />
      <Navbar setNavbarHeight={setNavbarHeight} />
      <Center
        height={
          windowSize.height && navbarHeight
            ? windowSize.height - navbarHeight
            : undefined
        }
        px="4.5vw"
      >
        <ChakraImage
          borderRadius="2px"
          maxHeight="100%"
          mb="2.5vw"
          src={`/api/images/${filename}.webp`}
        />
      </Center>
    </Fragment>
  )
}

export default Image
