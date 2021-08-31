import { Image as ChakraImage } from '@chakra-ui/image'
import { Center, Spinner } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'
import { Fragment, useEffect, useState } from 'react'

import Navbar from '../../components/Navbar'
import useWindowSize from '../../hooks/useWindowSize'

const Image: NextPage = () => {
  const router = useRouter()
  const { filename } = router.query

  const windowSize = useWindowSize()

  const [navbarHeight, setNavbarHeight] = useState<number>()
  const [imageUrl, setImageUrl] = useState<string>()

  useEffect(() => {
    if (filename) {
      let disposed = false

      ;(async () => {
        const fetched = await fetch(`/api/images/${filename}.webp`)

        if (disposed) {
          return
        }

        setImageUrl(URL.createObjectURL(await fetched.blob()))
      })()

      return () => {
        disposed = true
      }
    }
  }, [filename])

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
        {imageUrl ? (
          <ChakraImage maxHeight="90%" src={imageUrl} />
        ) : (
          <Spinner size="lg" />
        )}
      </Center>
    </Fragment>
  )
}

export default Image
