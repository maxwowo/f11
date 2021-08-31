import { Image as ChakraImage } from '@chakra-ui/image'
import { Center } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Error from 'next/error'
import { NextSeo } from 'next-seo'
import { Fragment, useEffect, useRef, useState } from 'react'

import Navbar from '../../components/Navbar'
import useWindowSize from '../../hooks/useWindowSize'
import images from '../../images'

const Image: NextPage = () => {
  const router = useRouter()
  const { filename } = router.query

  const imageIndex = images.findIndex((image) => image.filename === filename)

  const windowSize = useWindowSize()

  const navbarRef = useRef<HTMLDivElement>(null)

  const [navbarHeight, setNavbarHeight] = useState<number>()

  useEffect(() => {
    setNavbarHeight(navbarRef.current?.clientHeight)
  }, [])

  // Image with corresponding filename not found
  if (imageIndex === -1) {
    return <Error statusCode={404} />
  }

  return (
    <Fragment>
      <NextSeo title="f/11" />
      <Navbar ref={navbarRef} />
      <Center
        height={
          windowSize.height && navbarHeight
            ? windowSize.height - navbarHeight
            : undefined
        }
      >
        <ChakraImage
          borderRadius="2px"
          maxHeight="100%"
          pb="2.5vw"
          px="4.5vw"
          src={`/api/images/${filename}.webp`}
        />
      </Center>
    </Fragment>
  )
}

export default Image
