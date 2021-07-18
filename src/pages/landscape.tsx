import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'
import Navbar from '../components/Navbar'
import images, { Tag } from '../images'

const Landscape: NextPage = () => (
  <Fragment>
    <NextSeo canonical="https://studio.maxwowo.com/landscape" title="TT" />
    <Navbar />
    <Masonry images={images.filter((image) => Tag.LANDSCAPE in image.tags)} />
  </Fragment>
)

export default Landscape
