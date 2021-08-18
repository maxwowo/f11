import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { Fragment } from 'react'

import Masonry from '../components/Masonry'
import Navbar from '../components/Navbar'
import images, { Tag } from '../images'

const Landscape: NextPage = () => (
  <Fragment>
    <NextSeo canonical="https://f11.maxwowo.com/landscape" title="f/11" />
    <Navbar />
    <Masonry
      images={images.filter((image) => image.tags.includes(Tag.LANDSCAPE))}
    />
  </Fragment>
)

export default Landscape
