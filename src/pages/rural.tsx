import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'
import Navbar from '../components/Navbar'
import images, { Tag } from '../images'

const Rural: NextPage = () => (
  <Fragment>
    <NextSeo canonical="https://f11.maxwowo.com/rural" title="f/11" />
    <Navbar />
    <Masonry images={images.filter((image) => Tag.RURAL in image.tags)} />
  </Fragment>
)

export default Rural
