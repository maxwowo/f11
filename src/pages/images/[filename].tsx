import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Error from 'next/error'
import { NextSeo } from 'next-seo'
import { Fragment, memo } from 'react'

import images from '../../images'

const Image: NextPage = () => {
  const router = useRouter()
  const { filename } = router.query

  const imageIndex = images.findIndex((image) => image.filename === filename)

  // Image with corresponding filename not found
  if (imageIndex === -1) {
    return <Error statusCode={404} />
  }

  return (
    <Fragment>
      <NextSeo title="f/11" />
    </Fragment>
  )
}

export default memo(Image)
